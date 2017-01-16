import {Component, OnInit, OnChanges} from '@angular/core';
import {StudentFactoryService} from "../../core-module/student-factory.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  private showEdit: Boolean;
  constructor(private studentFactory: StudentFactoryService, private router: Router) {
    this.router.events.subscribe(val =>
      this.showEdit = typeof JSON.stringify(this.studentFactory.getSelectedStudent()) !== 'undefined')

  }

  ngOnInit() {
  }


}
