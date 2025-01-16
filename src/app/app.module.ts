import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { HomeComponent } from './component/dashbord/home/home.component';
import { AboutComponent } from './component/dashbord/about/about.component';
import { ContactComponent } from './component/dashbord/contact/contact.component';
import { ServiceComponent } from './component/dashbord/service/service.component';
import { HeaderComponent } from './component/dashbord/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { RegistarComponent } from './component/registar/registar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServiceComponent,
    HeaderComponent,
    LoginComponent,
    RegistarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
