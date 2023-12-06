import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../students.service';
import { MessageService } from 'primeng/api';

interface Gender {
  value: string;
  
}

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css'],
  
})
export class AddEditComponent implements OnChanges,OnInit{
  @Input() displayAddEditModal:boolean=true;
  @Input() selectedStudent: any =null;
  @Output() clickClose:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType="Add Student Details";

  DOB: Date | undefined;

  addForm=this.fb.group({
    RollNo:["",Validators.required],
    Name:["",Validators.required],
    Gender:["",Validators.required],
    Class:["",Validators.required],
    DOB:["",Validators.required],
    Pincode:["",Validators.required],
    Maths:["",Validators.required],
    Science:["",Validators.required],
    English:["",Validators.required],
    Geography:["",Validators.required],
  })
  constructor(private fb:FormBuilder, private studentService:StudentsService,private messageService: MessageService, ){}
  ngOnChanges(): void {
    if(this.selectedStudent){
      this.addForm.patchValue(this.selectedStudent)
      this.modalType="Edit Student Details";
    }
    else{
      this.addForm.reset();
      this.modalType="New Student Details";
    }
  
}
  closeModal(){
    this.addForm.reset();
    this.clickClose.emit(true);

  }

  addEditStud(){
    console.log(this.addForm.value)
    this.clickAddEdit.emit(this.addForm.value);
    this.closeModal();
    const msg = this.modalType === "New Student Details" ? 'New Student Added' : 'Student updated';

    this.messageService.add({ severity: 'success', summary: 'Success', detail:msg });

  }
  gen: Gender[] | undefined;

  selectedGen: Gender | undefined;

  ngOnInit() {
      this.gen = [
          { value: 'Male'},
          { value: 'Female' },
         
      ];
  }
  // getFormattedDate() {
  //   return this.datePipe.transform(this.DOB, 'yyyy-MM-dd');
  // }
  RollNo: number | undefined

  isInputReadOnly() {
    return this.RollNo !== null;
  }
}
