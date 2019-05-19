import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopHeadlinesComponent } from './top-headlines/top-headlines.component';

const routes: Routes = [
  { path: '**', redirectTo: '/top-headlines', pathMatch: 'full' },
  { path: 'top-headlines', component: TopHeadlinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
