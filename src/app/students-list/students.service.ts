import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  sData = [
    {
      "RollNo": 101,
      "Name": "Raunak",
      "Gender": "Male",
      "Class": 8,
      "DOB": "05-16-2020",
      "Pincode": 4332,
      "Maths": 45,
      "Science": 37,
      "English": 40,
      "Geography": 45,
    },
    {
      "RollNo": 102,
      "Name": "Manisha",
      "Gender": "Female",
      "Class": 8,
      "DOB": "07-02-2021",
      "Pincode": 2862,
      "Maths": 41,
      "Science": 72,
      "English": 98,
      "Geography": 10,
    },
    {
      "RollNo": 103,
      "Name": "Jyoti",
      "Gender": "Female",
      "Class": 7,
      "DOB": "06-08-2021",
      "Pincode": 8974,
      "Maths": 40,
      "Science": 79,
      "English": 90,
      "Geography": 90,
    }
  ]

  getStudents() {
    // console.log( this.sData)
    return this.sData

  }


}
