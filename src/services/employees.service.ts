import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { Employees } from 'src/app/models/employee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.baseApiUrl + '/api/Employee');
  }
  addEmployee(addEmployeeRequest: Employees): Observable<Employees> {
    addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Employees>(
      this.baseApiUrl + '/api/employee',
      addEmployeeRequest
    );
  }
  getEmployee(id: string): Observable<Employees> {
    return this.http.get<Employees>(this.baseApiUrl + '/api/employee/' + id);
  }

  updateEmployee(
    id: string,
    updateEmployeeRequest: Employees
  ): Observable<Employees> {
    return this.http.put<Employees>(
      this.baseApiUrl + '/api/employee/' + id,
      updateEmployeeRequest
    );
  }
  deleteEmployee(
    id: string ): Observable<Employees> {
    return this.http.delete<Employees>(
      this.baseApiUrl + '/api/employee/' + id );
  }
}
