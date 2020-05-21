import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';

const routes: Routes = [{
  path: '',
  component: FirstComponent,
  data: { animation: 'Home' }
}, {
  path: 'another',
  component: FirstComponent,
  data: { animation: 'Another' }
}, {
  path: 'third',
  component: FirstComponent,
  data: { animation: 'Third' }
}, {
  path: 'fourth',
  component: FirstComponent,
  data: { animation: 'Fourth' }
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
