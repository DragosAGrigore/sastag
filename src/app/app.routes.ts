import { Routes } from '@angular/router';
import { adminGuard } from "./admin/guards/admin.guard";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component'),
    canMatch: [adminGuard],
  }
];
