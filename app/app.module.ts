import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component"
import { EmployeesListComponent } from "./employee/components/employees-list.component"
import { EmployeeDetailsComponent } from "./employee/components/employees-details.component"

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [AppComponent, EmployeesListComponent, EmployeeDetailsComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { //export keyword is used so that it can register itself for main use

}