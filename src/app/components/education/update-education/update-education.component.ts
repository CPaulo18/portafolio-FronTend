import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/service/s-education.service';

@Component({
  selector: 'app-update-education',
  templateUrl: './update-education.component.html',
  styleUrls: ['./update-education.component.css']
})
export class UpdateEducationComponent implements OnInit{
  education: Education = null
  constructor(private sEducation: SEducationService, private router: Router,
    private activedRouter: ActivatedRoute){}


    ngOnInit(){
     
      const id = this.activedRouter.snapshot.params["id"];
      this.sEducation.detail(id).subscribe(data=>{
        this.education = data
      }, err=>{
        alert("error to update the experice")
        this.router.navigate([""])
      })
    }


  onUpdate(): void{
    const id = this.activedRouter.snapshot.params["id"];
    this.sEducation.update(id, this.education).subscribe(
      data=>{
        this.router.navigate([""]);
      },err=>{
        alert("error to update experience")
        this.router.navigate([""]);
      }
    )
  }
}
