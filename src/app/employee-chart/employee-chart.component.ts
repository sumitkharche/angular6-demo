import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-chart',
  templateUrl: './employee-chart.component.html',
  styleUrls: ['./employee-chart.component.css']
})
export class EmployeeChartComponent implements OnInit {

  constructor(private dataService: DataService) { }
  barChart = [];
  data;

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Departments';
  showYAxisLabel = true;
  yAxisLabel = 'Employees';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit() {
    // this.single = [
    //   {
    //     name: 'HR',
    //     value: 5
    //   },
    //   {
    //     name: 'Dev',
    //     value: 50
    //   },
    //   {
    //     name: 'Testing',
    //     value: 2
    //   }
    // ];
    this.single = this.dataService.getEmployeeCountByDept();
  }
  onSelect(event) {
    console.log(event);
  }

}
