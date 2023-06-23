import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged = false;
  constructor(
    public router: Router,
    private apiService: UserService
    ){}

    ngOnInit(): void{
      if(this.apiService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged=false;
      }
    }

  Login(){
    this.router.navigate(["/login"])
  }

  LogOut(){
    this.apiService.LogOut()
    location.reload()
  }

  

}
