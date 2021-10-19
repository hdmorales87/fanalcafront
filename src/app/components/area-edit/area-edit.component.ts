import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-edit',
  templateUrl: '../area-new/area-new.component.html',
  styleUrls: ['../area-new/area-new.component.css']
})
export class AreaEditComponent implements OnInit {

  public page_title:string;
  public status: string;
  public area: Area;
  public is_edit:boolean; 

  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
  	private _areaService: AreaService,  
  ) { 
    this.page_title = "Editar Area";
    this.status = "";
    this.is_edit = true; 
    this.area = new Area(1,'');  
  }

  ngOnInit(): void {
    this.getArea();        
  }

  getArea(){
      //sacar el id del post de la url
      this._route.params.subscribe(params => {
          let id = +params['id'];

          //peticion ajax para sacar los datos del post
          this._areaService.getArea(id).subscribe(
              response => {              
                this.area = response;                  
              },
              error => {
                  console.log(<any>error);
                  this._router.navigate(['areas']);
              }
          );              
      });           
  }   

  onSubmit(form:any){  		
    this._areaService.update(this.area, this.area.id).subscribe(
        response => {
          this.area = response;
          this.status = 'success';
          this._router.navigate(['/areas']);
          this.status = 'error';
        },
        error => {
            this.status = 'error';
            console.log(<any>error);
        }
    );
  }

}
