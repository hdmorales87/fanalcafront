import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { AreaService } from 'src/app/services/area.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { SubAreaService } from 'src/app/services/sub-area.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-empleados-edit',
  templateUrl: '../empleados-new/empleados-new.component.html',
  styleUrls: ['../empleados-new/empleados-new.component.css']
})
export class EmpleadosEditComponent implements OnInit {

  public page_title:string;
  public empleado: Empleado;
  public status: string;
  public is_edit:boolean; 
  public areas: any;
  public subareas: any;
  public tiposdocumento: any;

  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
  	private _empleadoService: EmpleadoService,  
    private _subAreaService: SubAreaService,
    private _areaService: AreaService, 
    private _tipoDocumentoService: TipoDocumentoService,
  ) { 
    this.page_title = "Editar empleado";
    this.status = "";
    this.empleado = new Empleado(1,1,'','',1,null,null,null);
    this.is_edit = true;
  }

  ngOnInit(): void {
    this._areaService.getAreas().subscribe(resp => {
      this.areas = resp;
    },
      error => { console.error(error) }
    );

    this._subAreaService.getSubAreas().subscribe(resp => {
      this.subareas = resp;
    },
      error => { console.error(error) }
    );

    this._tipoDocumentoService.getTiposDocumento().subscribe(resp => {
      this.tiposdocumento = resp;
    },
      error => { console.error(error) }
    );
    this.getEmpleado();        
  }

  getEmpleado(){
      //sacar el id del post de la url
      this._route.params.subscribe(params => {
          let id = +params['id'];

          //peticion ajax para sacar los datos del post
          this._empleadoService.getEmpleado(id).subscribe(
              response => {              
                this.empleado = response;                  
              },
              error => {
                  console.log(<any>error);
                  this._router.navigate(['/empleados']);
              }
          );              
      });           
  }   

  onSubmit(form:any){  		
    this._empleadoService.update(this.empleado, this.empleado.id).subscribe(
        response => {
          this.empleado = response;
          this.status = 'success';
          this._router.navigate(['/empleados']);
          this.status = 'error';
        },
        error => {
            this.status = 'error';
            console.log(<any>error);
        }
    );
  }

}
