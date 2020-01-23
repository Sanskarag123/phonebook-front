import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { EntercontactComponent } from './entercontact/entercontact.component';
import{GroupComponent} from './group/group.component'
import {EditComponent} from './edit/edit.component'
import { GroupshowComponent } from './groupshow/groupshow.component';
const routes: Routes = [{path:'contacts',component:ContactsComponent},{path:'create',component:EntercontactComponent},{path:'group',component:GroupComponent},{path:'edit',component:EditComponent},{path:'groupshow',component:GroupshowComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
