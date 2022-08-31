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
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    WrapperComponent,
    FormComponent,
    HeaderComponent,
    FooterComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    WrapperRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ]
})
export class WrapperModule { }
