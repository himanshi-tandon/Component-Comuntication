import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Communication between components';

  Public employesRecords: any = [
  {ename:'Himanshi' , ecity:'Noida', esalary: '1000000' },
  {ename:'Ashish' , ecity:'Meerut', esalary: '1200000' },
  {ename:'Silky' , ecity:'Amroha', esalary: '1600000' },
  {ename:'Tanu' , ecity:'Meerut', esalary: '12000' },
  {ename:'Anu' , ecity:'Moradabad', esalary: '16000000' }

  ]
  getRecord():void{
    document.write("hello");
  }
}


