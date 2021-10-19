import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubAreaService } from 'src/app/services/sub-area.service';

@Component({
  selector: 'app-sub-area-list',
  templateUrl: './sub-area-list.component.html',
  styleUrls: ['./sub-area-list.component.css']
})
export class SubAreaListComponent implements OnInit {

  public subareas: any; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _subAreaService: SubAreaService
  ) {}

  ngOnInit(): void {
    this.getSubAreas();
  }

  getSubAreas() {
    //peticion ajax para sacar los datos de la subarea
    this._subAreaService.getSubAreas().subscribe(
      response => {
        this.subareas = response;
      },
      error => {
        console.log(<any>error);
        this._router.navigate(['inicio']);
      }
    );
  }

  deleteSubArea(id:any){
    var opcion = window.confirm("¿Está seguro de eliminar la subarea?");
    if (opcion === true) {
      this._subAreaService.deleteSubArea(id).subscribe(	
        response => {
            this.getSubAreas();
        },
        error => {
            console.log(<any>error);
        }
      );
    } 
  }

}
