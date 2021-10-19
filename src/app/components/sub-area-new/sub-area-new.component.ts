import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubArea } from 'src/app/models/sub-area';
import { AreaService } from 'src/app/services/area.service';
import { SubAreaService } from 'src/app/services/sub-area.service';

@Component({
  selector: 'app-sub-area-new',
  templateUrl: './sub-area-new.component.html',
  styleUrls: ['./sub-area-new.component.css']
})
export class SubAreaNewComponent implements OnInit {

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
    this.page_title = "Crear nueva Sub-area";
    this.status = "";
    this.subarea = new SubArea(1,null,'');
    this.is_edit = false;
  }

  ngOnInit(): void {
    this._areaService.getAreas().subscribe(resp => {
      this.areas = resp;
    },
      error => { console.error(error) }
    );
  }

  onSubmit(form:any){  		
    this._subAreaService.create(this.subarea).subscribe(
        response => {
            if(response.status != 'error'){
                this.subarea = response.category;
                this.status = 'success';
                this._router.navigate(['/sub-areas']);
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
