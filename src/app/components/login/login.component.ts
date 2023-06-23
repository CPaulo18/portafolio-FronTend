import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/person.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 creds: Credentials = {
  email: "",
  password: "",
 };

 constructor(
  private apiService: UserService,
  private router: Router
 ){
  }

  Login(form: NgForm){
    console.log("Form value :", form.value);
    this.apiService.Login(this.creds)
      .subscribe(()=>this.router.navigate(["/"]))
  }

}
