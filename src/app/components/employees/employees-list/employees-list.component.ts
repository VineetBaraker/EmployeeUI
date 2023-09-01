import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employee';
import { EmployeesService } from 'src/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  employees: Employees[] = [];

  constructor(private employeesService: EmployeesService) {}
  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
