import { Component } from '@angular/core';

import { Employee } from '../models/employee';

@Component({
    selector: 'employee-list',
    templateUrl: '../views/employees-list.component.html'
})

export class EmployeesListComponent {
    constructor() { }
    title: string = "Synechron Employees List!"
    subTitle: string = "Core developers...!"
    selectedEmployee: Employee;

    onEmployeeSelection(emp: Employee): void {
        this.selectedEmployee = emp;
        console.log(this.selectedEmployee);
    }
    // employee1: Employee = new Employee(1, "Datta", "Jadhavwadi", "Pune", "datta@gmail.com", "8326598741", "images/noimage.png");

    synechronEmployees: Employee[] = [
        {
            employeeId: 2,
            employeeName: "Amol",
            address: "Wakad",
            city: "Pune",
            email: "amol@synechron.com",
            phone: "123456789",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 3,
            employeeName: "Urmi",
            address: "Wakad",
            city: "Pune",
            email: "Urmi@synechron.com",
            phone: "123456789",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 4,
            employeeName: "Madhura",
            address: "Wakad",
            city: "Pune",
            email: "Madhura@synechron.com",
            phone: "123456789",
            avatar: "images/noimage.png"
        },
        {
            employeeId: 5,
            employeeName: "Anubhav",
            address: "Wakad",
            city: "Pune",
            email: "Anubhav@synechron.com",
            phone: "123456789",
            avatar: "images/noimage.png"
        }
    ];
}