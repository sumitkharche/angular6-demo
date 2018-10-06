import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees: any = [];
  departmentList = [
    'HR',
    'Dev',
    'Testing',
    'Management'
  ];
  constructor() {
    this.employees.push(
      {
        fullName: 'Emp1',
        email: 'emp1@emp.com',
        department: 'HR'
      },
      {
        fullName: 'Emp2',
        email: 'emp2@emp.com',
        department: 'Dev'
      }
    );
  }

  getEmployees() {
    return this.employees;
  }

  addEmployees(emp) {
    if (emp.fullName !== null && emp.email !== null) {
      this.employees.push(emp);
      return true;
    } else {
      return false;
    }
  }

  getDepartments() {
    return this.departmentList;
  }

  getEmployeeCountByDept() {

    return [
      {
        name: this.departmentList[0],
        value: this.getEmpCount(this.departmentList[0])
      },
      {
        name: this.departmentList[1],
        value: this.getEmpCount(this.departmentList[1])
      },
      {
        name: this.departmentList[2],
        value: this.getEmpCount(this.departmentList[2])
      },
      {
        name: this.departmentList[3],
        value: this.getEmpCount(this.departmentList[3])
      }
    ];
  }

  getEmpCount(dept) {
    let countArray = [];
    countArray = this.employees.filter(function (e) { return e.department === dept; }).length;
    return countArray;
  }
}
