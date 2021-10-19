import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.model';
import { AreaService } from 'src/app/services/area.service';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { SubAreaService } from 'src/app/services/sub-area.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-empleados-new',
  templateUrl: './empleados-new.component.html',
  styleUrls: ['./empleados-new.component.css']
})
export class EmpleadosNewComponent implements OnInit {

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
    this.page_title = "Crear un nuevo empleado";
    this.status = "";
    this.empleado = new Empleado(1,1,'','',1,null,null,null);
    this.is_edit = false;
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
  }

  onSubmit(form:any){  		
    this._empleadoService.create(this.empleado).subscribe(
        response => {
            if(response.status != 'error'){
                this.empleado = response.category;
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
