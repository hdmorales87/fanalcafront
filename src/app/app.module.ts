import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaListComponent } from './components/area-list/area-list.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AreaNewComponent } from './components/area-new/area-new.component';
import { AreaEditComponent } from './components/area-edit/area-edit.component';
import { TipoDocumentoListComponent } from './components/tipo-documento-list/tipo-documento-list.component';
import { TipoDocumentoNewComponent } from './components/tipo-documento-new/tipo-documento-new.component';
import { TipoDocumentoEditComponent } from './components/tipo-documento-edit/tipo-documento-edit.component';
import { SubAreaListComponent } from './components/sub-area-list/sub-area-list.component';
import { SubAreaNewComponent } from './components/sub-area-new/sub-area-new.component';
import { SubAreaEditComponent } from './components/sub-area-edit/sub-area-edit.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadosNewComponent } from './components/empleados-new/empleados-new.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';

@NgModule({
  declarations: [
    AppComponent,    
    AreaListComponent,    
    InicioComponent,
    AreaNewComponent,
    AreaEditComponent,
    TipoDocumentoListComponent,
    TipoDocumentoNewComponent,
    TipoDocumentoEditComponent,
    SubAreaListComponent,
    SubAreaNewComponent,
    SubAreaEditComponent,
    EmpleadosListComponent,
    EmpleadosNewComponent,
    EmpleadosEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
