import {Component, OnInit} from '@angular/core';
import {Student} from "../../core-module/student";
import {Router} from "@angular/router";
import {StudentFactoryService} from "../../core-module/student-factory.service";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  private studentList: Student[];
  private searchedStudent: Student;

  constructor(private router: Router, private studentFactory: StudentFactoryService) {
    this.studentFactory.getStudentListFromServer().subscribe( studentList => this.studentList = studentList);

  }

  onEdit(student: Student) {
    console.log(`inside on Edit of student ${student.registerationNo}`);
    this.studentFactory.setSelectedStudent(student);
    this.router.navigate(['/students', student.registerationNo]);
  }

  onDelete(student: Student) {
    this.studentFactory.deleteStudent(student).then(res => this.studentList = res, err => console.error(err))
  }


  ngOnInit() {
  }

}
