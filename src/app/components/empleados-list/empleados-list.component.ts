import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { SubAreaService } from 'src/app/services/sub-area.service';

@Component({
  selector: 'app-empleados-list',
  templateUrl: './empleados-list.component.html',
  styleUrls: ['./empleados-list.component.css']
})
export class EmpleadosListComponent implements OnInit {

  public empleados: any; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _empleadoService: EmpleadoService
  ) {}

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados() {
    //peticion ajax para sacar los datos de la subarea
    this._empleadoService.getEmpleados().subscribe(
      response => {
        this.empleados = response;
      },
      error => {
        console.log(<any>error);
        this._router.navigate(['inicio']);
      }
    );
  }

  deleteEmpleado(id:any){
    var opcion = window.confirm("¿Está seguro de eliminar el empleado?");
    if (opcion === true) {
      this._empleadoService.deleteEmpleado(id).subscribe(	
        response => {
            this.getEmpleados();
        },
        error => {
            console.log(<any>error);
        }
      );
    } 
  }

}
