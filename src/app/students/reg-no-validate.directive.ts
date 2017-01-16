import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NG_VALIDATORS, Validators, AbstractControl} from "@angular/forms";
import {StudentFactoryService} from "../core-module/student-factory.service";

@Directive({
  selector: '[appRegNoValidate]',
  providers: [{provide: NG_VALIDATORS, useExisting: RegNoValidateDirective, multi: true}]
})
export class RegNoValidateDirective implements Validators, OnChanges {
  @Input() regNo: string;
  private valFn = Validators.nullValidator;

  constructor(private studentFac: StudentFactoryService) {
  }

  ngOnChanges(changes: SimpleChanges): Promise<any> {

    return new Promise((resolve, reject)=>{
      // if (changes['regNo'].currentValue === '')
      //   this.valFn =
      //     (control: AbstractControl): {[key: string]: any} => {
      //       return {'registertaionNo': true}
      //     }
      // else
      // this.valFn = Validators.nullValidator;
      this.studentFac.getStudentForRegistrationNo(this.regNo).subscribe(res =>{
          console.log(JSON.stringify(res) === '{}');
          this.valFn = JSON.stringify(res) === '{}' ? Validators.nullValidator
            : (control: AbstractControl): {[key: string]: any} => {
              return {'registertaionNo': true}
            }
          resolve(this.valFn);
        }
        , err => reject(err))
    })

  }

  validate(control: AbstractControl): {[key: string]: any} {
    return this.valFn(control);
  }

}
