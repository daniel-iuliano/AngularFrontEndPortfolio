import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FirstSectionComponent } from './component/first-section/first-section.component';
import { ExperienciaSectionComponent } from './component/experiencia-section/experiencia-section.component';
import { EducacionSectionComponent } from './component/educacion-section/educacion-section.component';
import { AcercaDeComponent } from './component/acerca-de/acerca-de.component';
import { portfolioService } from 'src/app/services/service.service';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstSectionComponent,
    ExperienciaSectionComponent,
    EducacionSectionComponent,
    AcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [portfolioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
