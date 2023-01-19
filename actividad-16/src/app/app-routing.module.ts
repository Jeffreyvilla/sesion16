import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './chile/chile.component';
import { PeruComponent } from './peru/peru.component';
import { UruguayComponent } from './uruguay/uruguay.component';

const routes: Routes = [
  { path: 'peru', component: PeruComponent},
  { path: 'chile', component: ChileComponent},
  { path: 'uruguay', component: UruguayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
