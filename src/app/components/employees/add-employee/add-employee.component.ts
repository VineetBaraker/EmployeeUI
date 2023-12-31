import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employees } from 'src/app/models/employee';
import { EmployeesService } from 'src/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeRequest: Employees = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(
    private employeeService: EmployeesService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  addEmployee() {
    this.employeeService.addEmployee(this.addEmployeeRequest).subscribe({
      next: (employee) => {
        this.router.navigate(['employees']);
      },
    });
  }
}
