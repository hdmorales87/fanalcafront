import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoDocumento } from 'src/app/models/tipo-documento';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';

@Component({
  selector: 'app-tipo-documento-list',
  templateUrl: './tipo-documento-list.component.html',
  styleUrls: ['./tipo-documento-list.component.css']
})
export class TipoDocumentoListComponent implements OnInit {

  public tipos: any; 

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _tipoDocumentoService: TipoDocumentoService
  ) {}

  ngOnInit(): void {
    this.getTiposDocumento();
  }

  getTiposDocumento() {
    //peticion ajax para sacar los datos de la categoría
    this._tipoDocumentoService.getTiposDocumento().subscribe(
      response => {
        this.tipos = response;
      },
      error => {
        console.log(<any>error);
        this._router.navigate(['inicio']);
      }
    );
  }

  deleteTipoDocumento(id:any){
    var opcion = window.confirm("¿Está seguro de eliminar el tipo de documento?");
    if (opcion === true) {
      this._tipoDocumentoService.deleteTipoDocumento(id).subscribe(	
        response => {
            this.getTiposDocumento();
        },
        error => {
            console.log(<any>error);
        }
      );
    } 
  }

}
