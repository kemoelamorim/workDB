import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    WrapperComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class WrapperModule { }
