import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LostComponent } from './lost/lost.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'lost', component: LostComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
