import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { AreaListComponent } from './components/area-list/area-list.component';
import { AreaNewComponent } from './components/area-new/area-new.component';
import { AreaEditComponent } from './components/area-edit/area-edit.component';
import { TipoDocumentoListComponent } from './components/tipo-documento-list/tipo-documento-list.component';
import { TipoDocumentoNewComponent } from './components/tipo-documento-new/tipo-documento-new.component';
import { TipoDocumentoEditComponent } from './components/tipo-documento-edit/tipo-documento-edit.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SubAreaListComponent } from './components/sub-area-list/sub-area-list.component';
import { SubAreaNewComponent } from './components/sub-area-new/sub-area-new.component';
import { SubAreaEditComponent } from './components/sub-area-edit/sub-area-edit.component';
import { EmpleadosNewComponent } from './components/empleados-new/empleados-new.component';
import { EmpleadosEditComponent } from './components/empleados-edit/empleados-edit.component';


const routes: Routes = [
  { path: 'empleados', component: EmpleadosListComponent },
  { path: 'crear-empleado', component: EmpleadosNewComponent },
  { path: 'editar-empleado/:id', component: EmpleadosEditComponent },
  { path: 'areas', component: AreaListComponent },
  { path: 'sub-areas', component: SubAreaListComponent },
  { path: 'crear-sub-area', component: SubAreaNewComponent },
  { path: 'editar-sub-area/:id', component: SubAreaEditComponent },
  { path: 'tipos-documento', component: TipoDocumentoListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'crear-area', component: AreaNewComponent },
  { path: 'editar-area/:id', component: AreaEditComponent },
  { path: 'crear-tipo-documento', component: TipoDocumentoNewComponent },
  { path: 'editar-tipo-documento/:id', component: TipoDocumentoEditComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
