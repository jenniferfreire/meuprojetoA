import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'alerts',
    loadComponent: () => import('./alerts/alerts.page').then( m => m.AlertsPage)
  },
  {
    path: 'lists',
    loadComponent: () => import('./lists/lists.page').then( m => m.ListsPage)
  },
  {
    path: 'toast',
    loadComponent: () => import('./toast/toast.page').then( m => m.ToastPage)
  },
  {
    path: 'lanches',
    loadComponent: () => import('./lanches/lanches.page').then( m => m.LanchesPage)
  },
  {
    path: 'lanches',
    loadComponent: () => import('./lanches/lanches.page').then( m => m.LanchesPage)
  },
  {
    path: 'pratos-entrada',
    loadComponent: () => import('./pratos-entrada/pratos-entrada.page').then( m => m.PratosEntradaPage)
  },
  {
    path: 'pratos-refeicao',
    loadComponent: () => import('./pratos-refeicao/pratos-refeicao.page').then( m => m.PratosRefeicaoPage)
  },
  {
    path: 'sobremesas',
    loadComponent: () => import('./sobremesas/sobremesas.page').then( m => m.SobremesasPage)
  },
  {
    path: 'bebidas',
    loadComponent: () => import('./bebidas/bebidas.page').then( m => m.BebidasPage)
  },
  {
    path: 'oferta',
    loadComponent: () => import('./oferta/oferta.page').then( m => m.OfertaPage)
  },
];
