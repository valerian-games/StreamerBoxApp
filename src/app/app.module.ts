import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_core/auth.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './_routes/redirect/redirect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { CommandsComponent } from './dashboard/commands/commands.component';
import { AccountComponent } from './dashboard/account/account.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { GameComponent } from './dashboard/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectComponent,
    DashboardComponent,
    DashComponent,
    CommandsComponent,
    AccountComponent,
    SettingsComponent,
    GameComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
