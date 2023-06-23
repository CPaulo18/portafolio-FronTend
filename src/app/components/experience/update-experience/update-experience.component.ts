import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';

@Component({
  selector: 'app-update-experience',
  templateUrl: './update-experience.component.html',
  styleUrls: ['./update-experience.component.css']
})
export class UpdateExperienceComponent implements OnInit{
  expLab: Experience = null
  constructor(private sExperience: SExperienceService, private router: Router,
    private activedRouter: ActivatedRoute){}


    ngOnInit(){
     
      const id = this.activedRouter.snapshot.params["id"];
      this.sExperience.detail(id).subscribe(data=>{
        this.expLab = data
      }, err=>{
        alert("error to update the experice")
        this.router.navigate([""])
      })
    }


  onUpdate(): void{
    const id = this.activedRouter.snapshot.params["id"];
    this.sExperience.update(id, this.expLab).subscribe(
      data=>{
        this.router.navigate([""]);
      },err=>{
        alert("error to update experience")
        this.router.navigate([""]);
      }
    )
  }

}
