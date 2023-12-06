import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { StudentsListComponent } from './students-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddEditModule } from './add-edit/add-edit.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SortEvent } from 'primeng/api';
import { FilterService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';

import { ConfirmationService, ConfirmEventType } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';


@NgModule({
    declarations: [
        StudentsListComponent
    ],
    exports: [
        StudentsListComponent
    ],
    providers: [MessageService, ConfirmationService,FilterService],
    imports: [
        CommonModule,
        HttpClientModule,
        TableModule,
        ButtonModule,
        DialogModule,
        AddEditModule,
        ToastModule,
        ConfirmDialogModule,
        FileUploadModule,
        NgbModule,
        InputTextModule,
        FormsModule,
        ReactiveFormsModule,
        ChartModule,
        DropdownModule,
        FormsModule
        
        

    ]
})
export class StudentsListModule { }
