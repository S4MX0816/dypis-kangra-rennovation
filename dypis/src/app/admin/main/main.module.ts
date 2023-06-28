import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { MainComponent } from './main.component';
import { AsideComponent } from './aside/aside.component';
import { environment } from 'src/environments/environment';

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
  imports: [
    RouterModule.forChild(routes),
    FontAwesomeModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
  ],
})
export class MainModule {}
