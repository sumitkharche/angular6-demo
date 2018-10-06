import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employeeList: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.employeeList = this.dataService.getEmployees();
  }

}
