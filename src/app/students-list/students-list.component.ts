import { Component, ElementRef, OnInit, Renderer2  } from '@angular/core';
import { StudentInterface } from './student-interface';
import { StudentsService } from './students.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import * as xls from 'xlsx'
 

interface selectedClass {
  cl: number;

}

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent  {

  public clicked = false;

  data: StudentInterface[] = this.StudentsService.getStudents();
  displayAddEditModal = false;
  selectedStudent: any = null;

  constructor(private StudentsService: StudentsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,

  ) { }
  


  






  showAddModal() {
    this.displayAddEditModal = true;
    this.selectedStudent = null;

  }

  hideAddModel(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;

  }
  saveStudentToList(newData: any) {
    if (this.selectedStudent && newData.RollNo === this.selectedStudent.RollNo) {
      const studR = this.data.findIndex(data => data.RollNo === newData.RollNo);
      this.data[studR] = newData;
    } else {
      this.data.unshift(newData);
    }
  }
  showEditModal(student: StudentInterface) {
    this.displayAddEditModal = true;
    this.selectedStudent = student;
  }
  deleteStud(student: StudentInterface) {
    this.confirmationService.confirm({
      message: 'Are you sure want do delete this student record?',
      header: ' Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.data = this.data.filter(data => data.RollNo != student.RollNo)
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Record Deleted Successfully' });
      }
    });

  }
  exData: any
  readExcelFile(e: any) {

    const file = e.target.files[0];
    let fr = new FileReader();

    fr.readAsArrayBuffer(file);

    fr.onload = () => {

      let dataX = fr.result;
      let workbook = xls.read(dataX, { type: 'array' });

      const sheetname = workbook.SheetNames[0];

      const sheet1 = workbook.Sheets[sheetname]

      this.exData = xls.utils.sheet_to_json(sheet1, { raw: true });
      this.data = this.data.concat(this.exData)

      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });

      // console.log(this.rData)

    }



  }
  calculatePercentage(marks: number): number {
    const totalMarks = 400;
    const percentage = (marks / totalMarks) * 100;
    return Math.round(percentage);
  }



  selectedClass: number | null = null;

  get classOptions(): number[] {
    return Array.from(new Set(this.data.map(student => student.Class)));
  }

  calculateAverage(): number {
    if (this.selectedClass === null) {
      return 0;
    }

    const classStudents = this.data.filter(student => student.Class === this.selectedClass);
    const totalSubject1 = classStudents.reduce((total, student) => total + student.Maths, 0);
    const totalSubject2 = classStudents.reduce((total, student) => total + student.English, 0);
    const totalSubject3 = classStudents.reduce((total, student) => total + student.Science, 0);
    const totalSubject4 = classStudents.reduce((total, student) => total + student.Geography, 0);


    const totalMarks = totalSubject1 + totalSubject2 + totalSubject3 + totalSubject4;
    const totalStudents = classStudents.length;

    return totalStudents > 0 ? totalMarks / (totalStudents * 4) : 0;
  }

  findClassTopper(): any {
    if (this.selectedClass === null) {
      return null;
    }

    const classStudents = this.data.filter(student => student.Class === this.selectedClass);

    const classTopper = classStudents.reduce((topper : any, student) => {
      const studentTotalMarks = student.Maths + student.Science + student.English+student.Geography;
      return studentTotalMarks > topper.totalMarks ? { student, totalMarks: studentTotalMarks, } : topper;
    }, { student: null, totalMarks: 0, });

    return classTopper.student;
  }

  countStudentsAbove35(): number {
    if (this.selectedClass === null) {
      return 0;
    }

    const classStudents = this.data.filter(student => student.Class === this.selectedClass);
    return classStudents.filter(student => (student.Maths + student.Science + student.English+student.Geography) / 4 >= 35 && student.Maths>=35 &&  student.Geography>=35  && student.English >=35 &&  student.Science>=35).length;
  }
  countStudentsBelow35(): number {
    if (this.selectedClass === null) {
      return 0;
    }

    const classStudents = this.data.filter(student => student.Class === this.selectedClass);
    return classStudents.filter(student => (student.Maths + student.Science + student.English+student.Geography) / 4 < 35 || student.Maths<35 ||  student.Geography<35  || student.English <35 ||  student.Science<35 ).length;
  }



  visible: boolean = false;
  ClassReportVisible: boolean = false;
  // reportData: StudentInterface[]=[];
  showReportDialog() {



    // console.log(this.oData)
    this.visible = true;
    // (this.selectedStudent)
  }
  getColorClass(value: number): string {
    return value > 35 ? 'G' : 'R';
  }


  showClassReport() {
    this.ClassReportVisible = true;
  }


  
 
 
 

}



