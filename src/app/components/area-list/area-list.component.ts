import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Area } from 'src/app/models/area.model';
import { AreaService } from 'src/app/services/area.service';
import { global } from '../../services/global';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {

  public areas: any; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _areaService: AreaService
  ) {}

  ngOnInit(): void {
    this.getAreas();
  }

  getAreas() {
    //peticion ajax para sacar los datos de la categoría
    this._areaService.getAreas().subscribe(
      response => {
        this.areas = response;
      },
      error => {
        console.log(<any>error);
        this._router.navigate(['inicio']);
      }
    );
  }

  deleteArea(id:any){
    var opcion = window.confirm("¿Está seguro de eliminar el area?");
    if (opcion === true) {
      this._areaService.deleteArea(id).subscribe(	
        response => {
            this.getAreas();
        },
        error => {
            console.log(<any>error);
        }
      );
    } 
  }
}
