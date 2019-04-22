import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_core/auth.guard'

import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './_routes/redirect/redirect.component';
import { UnityComponent } from './_routes/unity/unity.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { CommandsComponent } from './dashboard/commands/commands.component';
import { AccountComponent } from './dashboard/account/account.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { GameComponent } from './dashboard/game/game.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'c/redirect', component: RedirectComponent },
  { path: 'c/unity', component: UnityComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashComponent },
      { path: 'commands', component: CommandsComponent },
      { path: 'game/:id', component: GameComponent },
      { path: 'account', component: AccountComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
