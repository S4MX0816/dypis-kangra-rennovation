import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AsideComponent } from './aside/aside.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

const routes: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'documents',
        loadChildren: () =>
          import('./modules/documents/documents.module').then(
            (m) => m.DocumentsModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [MainComponent, AsideComponent],
  imports: [RouterModule.forChild(routes), FontAwesomeModule, CommonModule],
})
export class MainModule {}
