import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
      },
      {
        path: 'algorithms',
        loadChildren: './algorithms/algorithms.module#AlgorithmsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
