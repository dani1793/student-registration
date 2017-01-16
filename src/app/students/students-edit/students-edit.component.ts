import {Component, OnInit, OnDestroy, OnChanges} from '@angular/core';
import { Student } from "../../core-module/student";
import {StudentFactoryService} from "../../core-module/student-factory.service";
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit, OnChanges,OnDestroy {

  student:Student;
  origStudent: Student;
  editsDone: Boolean;
  editStudent: Boolean;

  constructor(private studentFactory:StudentFactoryService, private route: ActivatedRoute, private router: Router) {
  this.student = new Student('','','','male','','','');
    console.log(JSON.stringify(this.student));
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        if(params['id'])
        {
          this.origStudent = this.studentFactory.getSelectedStudent();
          this.student = JSON.parse(JSON.stringify(this.origStudent));
          this.editStudent = true;
        }
        else
        {
          this.editStudent = false;
        }

      })
  }

  //TODO: not a basic requirement
  ngOnChanges(){
      if(typeof this.origStudent !== 'undefined' && JSON.stringify(this.origStudent) !== JSON.stringify(this.student))
        this.editsDone = true;
  }
  ngOnDestroy(){
    this.studentFactory.clearSelectedStudent();
  }

  isStudentSelected():Boolean{
    return typeof this.studentFactory.getSelectedStudent() !== 'undefined';
  }

  onSubmit(){
    if(!this.editStudent)
      this.studentFactory.addStudent(this.student).then(res =>{
        console.log('student added');
        this.router.navigate(['/students']);
      }, console.error);
    else
      this.studentFactory.patchStudent(this.student).then(res =>{
        console.log('student patched');
        this.router.navigate(['/students']);
      }, console.error);
  }

}
