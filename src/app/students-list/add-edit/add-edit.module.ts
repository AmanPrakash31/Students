import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditComponent } from './add-edit.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';

import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AddEditComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    RadioButtonModule,
    FormsModule,
    CalendarModule,
    DatePipe,
    
  ],
  exports:[AddEditComponent]
})
export class AddEditModule { }
