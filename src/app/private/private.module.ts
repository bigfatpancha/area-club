import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivateRootComponent } from './components/private-root/private-root.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { HomeComponent } from './components/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PrivateRoutingModule } from './private-routing.module';


@NgModule({
  declarations: [
    PrivateRootComponent,
    ClientsListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
