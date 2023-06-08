import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./sign-in/sign-in.module').then((m) => m.SignInModule),
      },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent],
  imports: [RouterModule.forChild(routes)],
})
export class AdminModule {}
