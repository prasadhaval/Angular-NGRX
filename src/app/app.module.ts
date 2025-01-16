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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { isDevMode } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { appState } from './component/store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { SignUpEffects } from './component/registar/store/registar.effects';
import { LoaderComponent } from './component/dashbord/loader/loader.component';
import { LoginEffects } from './component/login/store/login.effects';
import { PostComponent } from './component/dashbord/home/post/post.component';
import { UpdateComponent } from './component/dashbord/home/update/update.component';
import { HomeEffects } from './component/dashbord/home/store/home.effects';

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
    RegistarComponent,
    LoaderComponent,
    PostComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(appState),
    EffectsModule.forRoot([SignUpEffects , LoginEffects , HomeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
