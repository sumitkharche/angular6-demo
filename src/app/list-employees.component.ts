import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employeeList: any;
  departments: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.departments = this.dataService.getDepartments();
    this.employeeList = this.dataService.getEmployees();

  }

}
