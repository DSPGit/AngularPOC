import {Component} from '@angular/core'

@Component({
    selector:'my-app',
    templateUrl:'app.component.html'
})
export class AppComponent{ //export keyword is used so that it can register itself for module use
    title:string="Welcome to Synechron Pvt. Ltd.!"
    subTitle:string="Core development center of Pune Division!"    
    changeMyTitle():void{
        this.title="Welcome to Pune Synechron!!";
    }
}