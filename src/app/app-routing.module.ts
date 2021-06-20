import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PopularComponent } from './popular/popular.component';

const routes: Routes = [
  {
    path: '',
    component: PopularComponent,
  },
  {
    path:'contact',
    component:ContactsComponent
  },
  {
    path:'popular',
    component:PopularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
