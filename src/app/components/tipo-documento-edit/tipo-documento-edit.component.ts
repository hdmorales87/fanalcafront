import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-edit',
  templateUrl: '../tipo-documento-new/tipo-documento-new.component.html',
  styleUrls: ['../tipo-documento-new/tipo-documento-new.component.css']
})
export class TipoDocumentoEditComponent implements OnInit {

  public page_title:string;
  public status: string;
  public tipoDocumento: TipoDocumento;
  public is_edit:boolean; 

  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
  	private _tipoDocumentoService: TipoDocumentoService,  
  ) { 
    this.page_title = "Editar Tipo de Documento";
    this.status = "";
    this.is_edit = true; 
    this.tipoDocumento = new TipoDocumento(1,'');  
  }

  ngOnInit(): void {
    this.getTipoDocumento();        
  }

  getTipoDocumento(){
      //sacar el id del post de la url
      this._route.params.subscribe(params => {
          let id = +params['id'];

          //peticion ajax para sacar los datos del post
          this._tipoDocumentoService.getTipoDocumento(id).subscribe(
              response => {              
                this.tipoDocumento = response;                  
              },
              error => {
                  console.log(<any>error);
                  this._router.navigate(['tipos-documento']);
              }
          );              
      });           
  }   

  onSubmit(form:any){  		
    this._tipoDocumentoService.update(this.tipoDocumento, this.tipoDocumento.id).subscribe(
        response => {
          this.tipoDocumento = response;
          this.status = 'success';
          this._router.navigate(['tipos-documento']);
          this.status = 'error';
        },
        error => {
            this.status = 'error';
            console.log(<any>error);
        }
    );
  }

}
