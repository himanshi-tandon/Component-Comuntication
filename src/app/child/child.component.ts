import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

@Input() employeeName: string;
@Input() employeeCity: string;
@Input() employeeSalary: number;
@Output() sendRecord: EventEmitter<any> = new EventEmitter();
  
public selectRecord(){
this.sendRecord.emit();
}
}
