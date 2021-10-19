import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/models/area.model';
import { SubArea } from 'src/app/models/sub-area';
import { AreaService } from 'src/app/services/area.service';
import { SubAreaService } from 'src/app/services/sub-area.service';

@Component({
  selector: 'app-sub-area-edit',
  templateUrl: '../sub-area-new/sub-area-new.component.html',
  styleUrls: ['../sub-area-new/sub-area-new.component.css']
})
export class SubAreaEditComponent implements OnInit {

  public page_title:string;
  public subarea: SubArea;
  public status: string;
  public is_edit:boolean; 
  public areas: any;

  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
    private _subAreaService: SubAreaService, 
  	private _areaService: AreaService,  
  ) { 
    this.page_title = "Editar Area";
    this.status = "";
    this.is_edit = true; 
    this.subarea = new SubArea(1,null,'');  
  }

  ngOnInit(): void {
    this._areaService.getAreas().subscribe(resp => {
      this.areas = resp;
    },
      error => { console.error(error) }
    );
    this.getSubArea();        
  }

  getSubArea(){
      //sacar el id del post de la url
      this._route.params.subscribe(params => {
          let id = +params['id'];

          //peticion ajax para sacar los datos del post
          this._subAreaService.getSubArea(id).subscribe(
              response => {              
                this.subarea = response;                  
              },
              error => {
                  console.log(<any>error);
                  this._router.navigate(['/sub-areas']);
              }
          );              
      });           
  }   

  onSubmit(form:any){  		
    this._subAreaService.update(this.subarea, this.subarea.id).subscribe(
        response => {
          this.subarea = response;
          this.status = 'success';
          this._router.navigate(['/sub-areas']);
          this.status = 'error';
        },
        error => {
            this.status = 'error';
            console.log(<any>error);
        }
    );
  }

}
