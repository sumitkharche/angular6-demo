import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './data.service';
import { ToasterModule, ToasterService } from 'angular2-toaster';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  departmentList = [];

  constructor(private dataService: DataService,
    private toasterService: ToasterService) { }

  ngOnInit() {
    this.departmentList = this.dataService.getDepartments();
    this.employeeForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      department: new FormControl()
    });

  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.dataService.addEmployees(this.employeeForm.value)) {
        this.employeeForm.reset();
        this.showSuccess();
      } else {
        this.showError();
      }
    } else {
      this.showError();
    }
  }
  showSuccess() {
    this.toasterService.pop('success', 'Success', 'Data Added Successfully !!');
  }
  showError() {
    this.toasterService.pop('error', 'Error', 'Data Can not empty');
  }
}
