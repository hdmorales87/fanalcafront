import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';

@Component({
  selector: 'app-area-new',
  templateUrl: './area-new.component.html',
  styleUrls: ['./area-new.component.css']  
})
export class AreaNewComponent implements OnInit {

  public page_title:string;
  public area: Area;
  public status: string;
  public is_edit:boolean; 

  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
  	private _areaService: AreaService,  	
  ) { 
    this.page_title = "Crear nueva Area";
    this.status = "";
    this.area = new Area(1,'');
    this.is_edit = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){  		
    this._areaService.create(this.area).subscribe(
        response => {
            if(response.status != 'error'){
                this.area = response.category;
                this.status = 'success';
                this._router.navigate(['/areas']);
            }
            else{
                this.status = 'error';
            }
        },
        error => {
            this.status = 'error';
            console.log(<any>error);
        }
    );
  }

}
