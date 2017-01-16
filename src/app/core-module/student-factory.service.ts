import {Injectable} from '@angular/core';
import {Student} from './student';
import {HttpRestService} from "./http-rest.service";
import {Observable} from "rxjs";

@Injectable()
export class StudentFactoryService {

  private selectedStudent: Student;
  private studentList: Student[];

  constructor(private httpRest: HttpRestService) {
    this.getStudentListFromServer()
      .subscribe(
        response => this.studentList = response,
        console.error
      );
  }

  public getStudentForRegistrationNo(regNo: string) {
    return this.httpRest.get(`${this.httpRest.getBaseUrl()}students/${regNo}`)
  }

  public setSelectedStudent(student: Student) {
    this.selectedStudent = student;
  }

  public getSelectedStudent(): Student {
    return this.selectedStudent;
  }

  public clearSelectedStudent() {
    delete this.selectedStudent;
  }

  public setStudentList(studentList: Student[]) {
    this.studentList = studentList;
  }

  public getStudentList(): Student[] {
    return this.studentList;
  }

  public getStudentListFromServer(): Observable<Student[]> {
    return this.httpRest.get(`${this.httpRest.getBaseUrl()}students`)
  }



  public addStudent(student: Student): Promise<Student> {
    return new Promise((resolve, reject) => {
      this.httpRest.post(student, `${this.httpRest.getBaseUrl()}students`)
        .subscribe(
          response => {
            //TODO:  have to navigate to the list screen when the user is added to the server;
            console.log(response);
            this.studentList.push(response);
            resolve(true);
          }, err => reject(err)
        );
    })
  }

  public patchStudent(student: Student): Promise<Student> {
    return new Promise((resolve, reject) => {
      this.httpRest.put(student, `${this.httpRest.getBaseUrl()}students/${student.registerationNo}`)
        .subscribe(response => {
            this.studentList[this.studentList.indexOf(student)] = response
            resolve(true);
          },
          err => reject(err)
        )
    })
  }

  public deleteStudent(student: Student): Promise<any> {
    return new Promise((resolve,reject)=>{
      this.httpRest.delete({}, `${this.httpRest.getBaseUrl()}students/${student.registerationNo}`).subscribe(
        response => {
        this.studentList.splice(this.studentList.indexOf(student), 1);
          resolve(this.studentList);
        }, err => reject(err)

      )
    })

  }


}
