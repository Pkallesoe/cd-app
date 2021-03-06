import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayAllCDsComponent } from './components/cd/display-all-cds/display-all-cds.component';
import { DisplayOneCDComponent } from './components/cd/display-one-cd/display-one-cd.component';
import { EditCDComponent } from './components/cd/edit-cd/edit-cd.component';
import { DeleteCDComponent } from './components/cd/delete-cd/delete-cd.component';
import { SearchCDsComponent } from './components/cd/search-cds/search-cds.component';
import { AddCDComponent } from './components/cd/add-cd/add-cd.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCDDBService }  from './in-memory-cd-db.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DisplayAllCDsComponent,
    DisplayOneCDComponent,
    EditCDComponent,
    DeleteCDComponent,
    SearchCDsComponent,
    AddCDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryCDDBService),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
