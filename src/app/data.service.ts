import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees: any = [];
  constructor() {
    this.employees.push(
      {
        fullName: 'Emp1',
        email: 'emp1@emp.com'
      },
      {
        fullName: 'Emp2',
        email: 'emp2@emp.com'
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

}
