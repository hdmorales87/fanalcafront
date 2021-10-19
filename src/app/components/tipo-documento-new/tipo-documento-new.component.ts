import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-new',
  templateUrl: './tipo-documento-new.component.html',
  styleUrls: ['./tipo-documento-new.component.css']
})
export class TipoDocumentoNewComponent implements OnInit {

  public page_title:string;
  public tipoDocumento: TipoDocumento;
  public status: string;
  public is_edit:boolean; 

  constructor(
    private _route: ActivatedRoute,
  	private _router: Router,
  	private _tipoDocumentoService: TipoDocumentoService,  	
  ) { 
    this.page_title = "Crear nuevo tipo de documento";
    this.status = "";
    this.tipoDocumento = new TipoDocumento(1,'');
    this.is_edit = false;
  }

  ngOnInit(): void {
  }

  onSubmit(form:any){  		
    this._tipoDocumentoService.create(this.tipoDocumento).subscribe(
        response => {
            if(response.status != 'error'){
                this.tipoDocumento = response.category;
                this.status = 'success';
                this._router.navigate(['/tipos-documento']);
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
