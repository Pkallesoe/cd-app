import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAllCDsComponent } from './components/cd/display-all-cds/display-all-cds.component';
import { DisplayOneCDComponent } from './components/cd/display-one-cd/display-one-cd.component';
import { AddCDComponent } from './components/cd/add-cd/add-cd.component';
import { EditCDComponent } from './components/cd/edit-cd/edit-cd.component';

const routes: Routes = [
  { path: 'all', component: DisplayAllCDsComponent },
  { path: 'cd/:id', component: DisplayOneCDComponent },
  { path: 'add', component: AddCDComponent },
  { path: 'edit/:id', component: EditCDComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
