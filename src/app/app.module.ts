import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import{FormsModule} from '@angular/forms'

import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { ContactsComponent } from './contacts/contacts.component';
import { EntercontactComponent } from './entercontact/entercontact.component';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { GroupComponent } from './group/group.component';
import { EditComponent } from './edit/edit.component';
import { GroupshowComponent } from './groupshow/groupshow.component';





@NgModule({
  declarations: [
    AppComponent,
    
    NavComponent,
    
    ContactsComponent,
    
    EntercontactComponent,
    
    GroupComponent,
    
    EditComponent,
    
    GroupshowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
