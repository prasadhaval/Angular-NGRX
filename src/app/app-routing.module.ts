import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { HomeComponent } from './component/dashbord/home/home.component';
import { AboutComponent } from './component/dashbord/about/about.component';
import { ServiceComponent } from './component/dashbord/service/service.component';
import { ContactComponent } from './component/dashbord/contact/contact.component';
import { RegistarComponent } from './component/registar/registar.component';

const routes: Routes = [
  {
    path :'', redirectTo :'login', pathMatch :'full'
  },
  {
    path :'login', component : LoginComponent
  },
  {
    path :'regi', component : RegistarComponent
  },
  {
    path :'', component : DashbordComponent , children :[
      {
        path :'home', component : HomeComponent
      },
      {
        path :'about', component : AboutComponent
      },
      {
        path :'service', component : ServiceComponent
      },
      {
        path :'contact', component : ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
