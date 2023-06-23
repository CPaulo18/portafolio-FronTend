import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { SUserService } from 'src/app/service/s-user.service';

@Component({
  selector: 'app-update-about-me',
  templateUrl: './update-about-me.component.html',
  styleUrls: ['./update-about-me.component.css']
})
export class UpdateAboutMeComponent implements OnInit{
  user: User = null

constructor(private userService: SUserService, private router: Router,
  private activedRouter: ActivatedRoute){}

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.params["id"]
      this.userService.detail(id).subscribe((data)=>{
          this.user = data;
      }, err=>{
        alert("error to modified");
        this.router.navigate(["/"]);
      });
  }

  onUpdate(): void{
    const id = this.activedRouter.snapshot.params["id"]
    this.userService.update(id, this.user).subscribe(data=>{
      this.router.navigate([""]) 
    },err=>{
      alert("error to update user")
      this.router.navigate([""])
    })
  }


}