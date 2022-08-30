import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from './table/table.component';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';



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
    MatToolbarModule
  ]
})
export class WrapperModule { }
