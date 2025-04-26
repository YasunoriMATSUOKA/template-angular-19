import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'ホーム',
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./pages/privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent,
      ),
    title: 'プライバシーポリシー',
  },
  {
    path: 'terms-of-service',
    loadComponent: () =>
      import('./pages/terms-of-service/terms-of-service.component').then(
        (m) => m.TermsOfServiceComponent,
      ),
    title: '利用規約',
  },
  {
    path: 'legal',
    loadComponent: () =>
      import('./pages/legal/legal.component').then((m) => m.LegalComponent),
    title: '特定商取引法に関わる表示',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
