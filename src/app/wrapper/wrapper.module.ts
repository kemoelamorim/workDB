import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    WrapperComponent,
    FormComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class WrapperModule { }
