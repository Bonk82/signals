import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'json',
    loadComponent:()=>import('./probando/login/login.component'),
    children:[
      {
        path:'hijo',
        loadComponent:()=>import('./probando/login/hijo/hijo.component'),
      }
    ]
  },
  {
    path:'',
    redirectTo:'/json',
    pathMatch:'full'
  }
];
