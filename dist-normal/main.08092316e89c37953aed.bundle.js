webpackJsonp([1,4],{153:function(t,e,n){"use strict";var r=n(2),o=n(553);n.d(e,"a",function(){return s});var i=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t){var e=this;this.httpRest=t,this.getStudentListFromServer().subscribe(function(t){return e.studentList=t},console.error)}return t.prototype.getStudentForRegistrationNo=function(t){return this.httpRest.get(this.httpRest.getBaseUrl()+"students/"+t)},t.prototype.setSelectedStudent=function(t){this.selectedStudent=t},t.prototype.getSelectedStudent=function(){return this.selectedStudent},t.prototype.clearSelectedStudent=function(){delete this.selectedStudent},t.prototype.setStudentList=function(t){this.studentList=t},t.prototype.getStudentList=function(){return this.studentList},t.prototype.getStudentListFromServer=function(){return this.httpRest.get(this.httpRest.getBaseUrl()+"students")},t.prototype.addStudent=function(t){var e=this;return new Promise(function(n,r){e.httpRest.post(t,e.httpRest.getBaseUrl()+"students").subscribe(function(t){console.log(t),e.studentList.push(t),n(!0)},function(t){return r(t)})})},t.prototype.patchStudent=function(t){var e=this;return new Promise(function(n,r){e.httpRest.put(t,e.httpRest.getBaseUrl()+"students/"+t.registerationNo).subscribe(function(r){e.studentList[e.studentList.indexOf(t)]=r,n(!0)},function(t){return r(t)})})},t.prototype.deleteStudent=function(t){var e=this;return new Promise(function(n,r){e.httpRest.delete({},e.httpRest.getBaseUrl()+"students/"+t.registerationNo).subscribe(function(r){e.studentList.splice(e.studentList.indexOf(t),1),n(e.studentList)},function(t){return r(t)})})},t=i([n.i(r.A)(),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object])],t);var e}()},245:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(314),o=(n.n(r),n(307)),i=(n.n(o),n(303)),a=(n.n(i),n(309)),s=(n.n(a),n(308)),c=(n.n(s),n(306)),d=(n.n(c),n(305)),l=(n.n(d),n(313)),u=(n.n(l),n(302)),f=(n.n(u),n(301)),p=(n.n(f),n(311)),h=(n.n(p),n(304)),g=(n.n(h),n(312)),b=(n.n(g),n(310)),v=(n.n(b),n(315)),y=(n.n(v),n(465));n.n(y)},552:function(t,e,n){"use strict";var r=n(2);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){this.title="app works!"}return t=o([n.i(r._4)({selector:"app-root",template:n(719),styles:[n(712)]}),i("design:paramtypes",[])],t)}()},553:function(t,e,n){"use strict";var r=n(2),o=n(727),i=(n.n(o),n(529));n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t}return t.prototype.get=function(t){return this.http.get(t).map(this.extractData).catch(this.handleError)},t.prototype.post=function(t,e){return this.http.post(e,t).map(this.extractData).catch(this.handleError)},t.prototype.put=function(t,e){return this.http.put(e,t).map(this.extractData).catch(this.handleError)},t.prototype.delete=function(t,e){return this.http.delete(e,t).map(this.extractData).catch(this.handleError)},t.prototype.extractData=function(t){console.log(t);var e=t.json();return console.log(e),e||{}},t.prototype.handleError=function(t){var e;if(t instanceof i.b){var n=t.json()||"",r=n.error||JSON.stringify(n);e=t.status+" - "+(t.statusText||"")+" "+r}else e=t.message?t.message:t.toString();return console.error(e),o.Observable.throw(e)},t.prototype.getBaseUrl=function(){return"http://localhost:3000/"},t=a([n.i(r.A)(),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.c&&i.c)&&e||Object])],t);var e}()},554:function(t,e,n){"use strict";var r=n(2),o=n(704),i=n(153),a=n(127);n.d(e,"a",function(){return d});var s=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e,n){this.studentFactory=t,this.route=e,this.router=n,this.student=new o.a("","","","male","","",""),console.log(JSON.stringify(this.student))}return t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){e.id?(t.origStudent=t.studentFactory.getSelectedStudent(),t.student=JSON.parse(JSON.stringify(t.origStudent)),t.editStudent=!0):t.editStudent=!1})},t.prototype.ngOnChanges=function(){"undefined"!=typeof this.origStudent&&JSON.stringify(this.origStudent)!==JSON.stringify(this.student)&&(this.editsDone=!0)},t.prototype.ngOnDestroy=function(){this.studentFactory.clearSelectedStudent()},t.prototype.isStudentSelected=function(){return"undefined"!=typeof this.studentFactory.getSelectedStudent()},t.prototype.onSubmit=function(){var t=this;this.editStudent?this.studentFactory.patchStudent(this.student).then(function(e){console.log("student patched"),t.router.navigate(["/students"])},console.error):this.studentFactory.addStudent(this.student).then(function(e){console.log("student added"),t.router.navigate(["/students"])},console.error)},t=s([n.i(r._4)({selector:"app-students-edit",template:n(723),styles:[n(716)]}),c("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object,"function"==typeof(d="undefined"!=typeof a.b&&a.b)&&d||Object,"function"==typeof(l="undefined"!=typeof a.c&&a.c)&&l||Object])],t);var e,d,l}()},555:function(t,e,n){"use strict";var r=n(2),o=n(127),i=n(153);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){var n=this;this.router=t,this.studentFactory=e,this.studentFactory.getStudentListFromServer().subscribe(function(t){return n.studentList=t})}return t.prototype.onEdit=function(t){console.log("inside on Edit of student "+t.registerationNo),this.studentFactory.setSelectedStudent(t),this.router.navigate(["/students",t.registerationNo])},t.prototype.onDelete=function(t){var e=this;this.studentFactory.deleteStudent(t).then(function(t){return e.studentList=t},function(t){return console.error(t)})},t.prototype.ngOnInit=function(){},t=a([n.i(r._4)({selector:"app-students-list",template:n(724),styles:[n(717)]}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.c&&o.c)&&e||Object,"function"==typeof(c="undefined"!=typeof i.a&&i.a)&&c||Object])],t);var e,c}()},556:function(t,e,n){"use strict";var r=n(2);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){console.log("inside student main component")}return t.prototype.ngOnInit=function(){},t=o([n.i(r._4)({selector:"app-students-main",template:n(725),styles:[n(718)]}),i("design:paramtypes",[])],t)}()},584:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=584},585:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(245),n(670)),o=n(2),i=n(711),a=n(705);i.a.production&&n.i(o.a)(),n.i(r.a)().bootstrapModule(a.a)},700:function(t,e,n){"use strict";var r=n(233),o=n(2),i=n(280),a=n(529),s=n(127),c=n(701),d=n(552),l=n(703),u=n(710);n.d(e,"a",function(){return h});var f=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},p=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},h=function(){function t(){}return t=f([n.i(o.b)({declarations:[d.a],imports:[r.a,i.a,a.a,l.a,u.a,s.a.forRoot(c.a)],providers:[],bootstrap:[d.a]}),p("design:paramtypes",[])],t)}()},701:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=[{path:"",redirectTo:"/students",pathMatch:"full"},{path:"**",redirectTo:"/",pathMatch:"full"}]},702:function(t,e,n){"use strict";var r=n(2);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([n.i(r._4)({selector:"app-core-module",template:n(720),styles:[n(713)]}),i("design:paramtypes",[])],t)}()},703:function(t,e,n){"use strict";var r=n(2),o=n(92),i=n(702),a=n(553),s=n(153);n.d(e,"a",function(){return l});var c=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=c([n.i(r.b)({imports:[o.g],providers:[a.a,s.a],declarations:[i.a]}),d("design:paramtypes",[])],t)}()},704:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(t,e,n,r,o,i,a){this.registerationNo=t,this.firstName=e,this.lastName=n,this.gender=r,this.contactNo=o,this.address=i,this.email=a}return t}()},705:function(t,e,n){"use strict";var r=(n(552),n(700));n.d(e,"a",function(){return r.a})},706:function(t,e,n){"use strict";var r=n(2),o=n(153),i=n(127);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e){var n=this;this.studentFactory=t,this.router=e,this.router.events.subscribe(function(t){return n.showEdit="undefined"!=typeof JSON.stringify(n.studentFactory.getSelectedStudent())})}return t.prototype.ngOnInit=function(){},t=a([n.i(r._4)({selector:"app-header",template:n(721),styles:[n(714)]}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.a&&o.a)&&e||Object,"function"==typeof(c="undefined"!=typeof i.c&&i.c)&&c||Object])],t);var e,c}()},707:function(t,e,n){"use strict";var r=n(2),o=n(280),i=n(153);n.d(e,"a",function(){return c});var a=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.studentFac=t,this.valFn=o.b.nullValidator}return t.prototype.ngOnChanges=function(t){var e=this;return new Promise(function(t,n){e.studentFac.getStudentForRegistrationNo(e.regNo).subscribe(function(n){console.log("{}"===JSON.stringify(n)),e.valFn="{}"===JSON.stringify(n)?o.b.nullValidator:function(t){return{registertaionNo:!0}},t(e.valFn)},function(t){return n(t)})})},t.prototype.validate=function(t){return this.valFn(t)},a([n.i(r.F)(),s("design:type",String)],t.prototype,"regNo",void 0),t=a([n.i(r.E)({selector:"[appRegNoValidate]",providers:[{provide:o.c,useExisting:t,multi:!0}]}),s("design:paramtypes",["function"==typeof(e="undefined"!=typeof i.a&&i.a)&&e||Object])],t);var e}()},708:function(t,e,n){"use strict";var r=n(2);n.d(e,"a",function(){return a});var o=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t=o([n.i(r._4)({selector:"app-students-detail",template:n(722),styles:[n(715)]}),i("design:paramtypes",[])],t)}()},709:function(t,e,n){"use strict";var r=n(2),o=n(92),i=n(127),a=n(555),s=n(554),c=n(556);n.d(e,"a",function(){return f});var d=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=[{path:"students-main",component:c.a},{path:"students-add",component:s.a},{path:"students/:id",component:s.a},{path:"students",component:a.a}],f=function(){function t(){}return t=d([n.i(r.b)({imports:[o.g,i.a.forChild(u)],exports:[i.a],declarations:[]}),l("design:paramtypes",[])],t)}()},710:function(t,e,n){"use strict";var r=n(2),o=n(92),i=n(555),a=n(708),s=n(554),c=n(706),d=n(127),l=n(556),u=n(709),f=n(280),p=n(707);n.d(e,"a",function(){return b});var h=this&&this.__decorate||function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},g=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},b=function(){function t(){}return t=h([n.i(r.b)({imports:[o.g,d.a,u.a,f.a],exports:[c.a,l.a,i.a,s.a],declarations:[i.a,a.a,s.a,c.a,l.a,p.a]}),g("design:paramtypes",[])],t)}()},711:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},712:function(t,e){t.exports=""},713:function(t,e){t.exports=""},714:function(t,e){t.exports=""},715:function(t,e){t.exports=""},716:function(t,e){t.exports=".lbl-top-buffer{margin-top:1%}.left-margin{margin-left:.1%}.ng-valid.required,.ng-valid[required]{border-left:5px solid #42a948}"},717:function(t,e){t.exports=""},718:function(t,e){t.exports=""},719:function(t,e){t.exports="<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n\r\n\r\n"},720:function(t,e){t.exports="<p>\r\n  core-module works!\r\n</p>\r\n"},721:function(t,e){t.exports='<nav class="navbar navbar-default">\r\n  <div class="container-fluid">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class="navbar-header">\r\n      <a class="navbar-brand" [routerLink]="[\'/students-main\']">Student Registration Panel</a>\r\n    </div>\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\r\n      <ul class="nav navbar-nav">\r\n        <li role="separator" class="divider"></li>\r\n        <li  [ngClass]="{\'active\': !showEdit}" routerLinkActive="active"><a [routerLink]="[\'/students\']">List</a></li>\r\n        <li *ngIf="!showEdit" routerLinkActive="active"><a [routerLink]="[\'/students-add\']">Add</a></li>\r\n        <li *ngIf="showEdit" [ngClass]="[\'active\']"><a >Edit</a></li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>\r\n'},722:function(t,e){t.exports="<p>\r\n  students-detail works!\r\n</p>\r\n"},723:function(t,e){t.exports='<!--<div class="container">-->\r\n<!--<div class="row">-->\r\n<!--<div class="col-xs-10">-->\r\n<!--<h2>Add Venue</h2>-->\r\n\r\n<!--</div>-->\r\n\r\n<!--</div>-->\r\n<!--<hr>-->\r\n<!--</div>-->\r\n\r\n<div class="container">\r\n\r\n  <form id="student-registration" name="student-registration" (ngSubmit)="onSubmit()" #studentRegistrationForm="ngForm">\r\n\r\n    <div class="row">\r\n      <div class="col-md-6">\r\n        <div class="form-group row">\r\n          <label for="reg-no" class="col-xs-2 col-form-label lbl-top-buffer">Reg No</label>\r\n          <div class="col-xs-5">\r\n            <input class="form-control" type="text" [(ngModel)]="student.registerationNo" name="reg-no" id="reg-no"\r\n                   #regNo="ngModel" [disabled]="isStudentSelected()"  required>\r\n            <div [hidden]="regNo.valid || regNo.pristine"\r\n                 class="alert alert-danger">\r\n              Registration No is required\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class="form-group row">\r\n          <label for="first-name" class="col-xs-2 col-form-label lbl-top-buffer">First Name</label>\r\n          <div class="col-xs-5">\r\n            <input class="form-control" type="text" [(ngModel)]="student.firstName" id="first-name" name="first-name"\r\n                   #firstName="ngModel" required>\r\n            <div [hidden]="firstName.valid || firstName.pristine"\r\n                 class="alert alert-danger">\r\n              First Name is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class="form-group row">\r\n          <label for="last-name" class="col-xs-2 col-form-label lbl-top-buffer">Last Name</label>\r\n          <div class="col-xs-5">\r\n            <input class="form-control" type="text" [(ngModel)]="student.lastName" id="last-name" name="last-name"\r\n                   #lastName="ngModel" required>\r\n            <div [hidden]="lastName.valid || lastName.pristine"\r\n                 class="alert alert-danger">\r\n              Last Name is required\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class="form-group row">\r\n          <label class="col-xs-2 col-form-label lbl-top-buffer">Gender</label>\r\n          <div class="col-xs-2">\r\n            <label class="lbl-top-buffer">\r\n              <input type="radio" [(ngModel)]="student.gender" id="male" name="gender"\r\n                     [value]="\'male\'">\r\n              Male\r\n            </label>\r\n          </div>\r\n\r\n          <div class="col-xs-2">\r\n            <label class="lbl-top-buffer">\r\n              <input type="radio" [(ngModel)]="student.gender" id="female" name="gender"\r\n                     [value]="\'female\'">\r\n              Female\r\n            </label>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class="form-group row">\r\n          <label for="contactNo" class="col-xs-2 col-form-label lbl-top-buffer">Phone</label>\r\n          <div class="col-xs-5">\r\n            <input class="form-control" type="text" [(ngModel)]="student.contactNo" id="contactNo" name="contactNo"\r\n                   #contactNo="ngModel" required>\r\n            <div [hidden]="contactNo.valid || contactNo.pristine"\r\n                 class="alert alert-danger">\r\n              Contact No is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class="form-group row">\r\n          <label for="email" class="col-xs-2 col-form-label lbl-top-buffer">Email</label>\r\n          <div class="col-xs-5">\r\n            <input class="form-control" type="text" [(ngModel)]="student.email"\r\n                   id="email"\r\n                   name="email"\r\n                   #email="ngModel"\r\n                   pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$"\r\n                   required>\r\n            <div [hidden]="email.valid || email.pristine"\r\n                 class="alert alert-danger">\r\n              Email is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class="form-group row">\r\n          <label for="address" class="col-xs-2 col-form-label lbl-top-buffer">Address</label>\r\n          <div class="col-xs-5">\r\n            <input class="form-control" type="text" [(ngModel)]="student.address" id="address" name="address"\r\n                   #address="ngModel" required>\r\n            <div [hidden]="address.valid || address.pristine"\r\n                 class="alert alert-danger">\r\n              Address is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <div class=" row form-inline left-margin">\r\n      <!--<button confirm-dialog ng-confirm-message="Are you sure you want to save the changes?" ng-confirm="addVenue();"-->\r\n      <!--type="Save" class="btn btn-primary btn-md" ng-show="mapExsist && allVenues">Save-->\r\n      <!--</button>-->\r\n      <button type="submit" *ngIf="!isStudentSelected()" class="btn btn-primary btn-md"\r\n              [disabled]="!studentRegistrationForm.form.valid">Add\r\n      </button>\r\n\r\n      <button *ngIf="isStudentSelected()" type="submit" class="btn btn-primary btn-md"\r\n              [disabled]="!studentRegistrationForm.form.valid">Edit\r\n      </button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n</div>\r\n'},724:function(t,e){t.exports='<div class="container">\r\n  <!--<div class="row">-->\r\n    <!--<div class="col-xs-6">-->\r\n        <!--<input type="text" class="form-control" [(ngModel)]="searchedStudent" placeholder="Search Student"/>-->\r\n        <!--&lt;!&ndash;<div class="input-group-addon"><i class="material-icons md-60">search</i></div>&ndash;&gt;-->\r\n    <!--</div>-->\r\n    <!--&lt;!&ndash;<button type="submit" class="btn btn-default btn-lg" ng-disabled="selectedVenueList.length !== 1" ng-click="goToVenueDetails();">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;Edit&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</button>&ndash;&gt;-->\r\n  <!--</div>-->\r\n\r\n\r\n  <br/>\r\n  <div class="row" style="margin-left:0px; width:100%;">\r\n    <table class="table table-bordered table-striped">\r\n      <thead>\r\n      <tr style="background-color: #cccccc" >\r\n        <td>\r\n          <b>\r\n            Reg No.\r\n          </b>\r\n        </td>\r\n        <td>\r\n          <b>\r\n           Name\r\n          </b>\r\n        </td>\r\n        <td>\r\n          <b>\r\n            Edit\r\n          </b>\r\n        </td>\r\n        <td>\r\n          <b>\r\n            Delete\r\n          </b>\r\n        </td>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr  *ngFor="let student of studentList" >\r\n        <td>\r\n          {{student.registerationNo}}\r\n        </td>\r\n        <td>\r\n          {{student.firstName +\' \'+ student.lastName}}\r\n        </td>\r\n        <td>\r\n          <button id="edit-button" class="btn btn-default btn-sm" (click)="onEdit(student)" >Edit</button>\r\n        </td>\r\n        <td>\r\n          <button id="delete-button" class="btn btn-danger btn-sm" (click)="onDelete(student)">Delete</button>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n\r\n'},725:function(t,e){t.exports='<div class="container">\r\n  <div class="jumbotron">\r\n    <h1>Welcome to Student Panel</h1>\r\n    <p>You can : </p>\r\n    <ul>\r\n      <li>\r\n        View List of Students\r\n      </li>\r\n      <li>\r\n        Edit Specific student details\r\n      </li>\r\n      <li>\r\n        Add new students to the system\r\n      </li>\r\n      <li>\r\n        Delete existing students from the system\r\n      </li>\r\n    </ul>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n'},991:function(t,e,n){t.exports=n(585)}},[991]);