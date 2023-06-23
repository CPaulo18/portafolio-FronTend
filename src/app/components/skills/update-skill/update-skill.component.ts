import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-update-skill',
  templateUrl: './update-skill.component.html',
  styleUrls: ['./update-skill.component.css']
})
export class UpdateSkillComponent implements OnInit{
  skill: Skill = null
  constructor(private sSkill: SSkillService, private router: Router,
    private activedRouter: ActivatedRoute){}


    ngOnInit(){
     
      const id = this.activedRouter.snapshot.params["id"];
      this.sSkill.detail(id).subscribe(data=>{
        this.skill = data
      }, err=>{
        alert("error to update the experice")
        this.router.navigate([""])
      })
    }


  onUpdate(): void{
    const id = this.activedRouter.snapshot.params["id"];
    this.sSkill.update(id, this.skill).subscribe(
      data=>{
        this.router.navigate([""]);
      },err=>{
        alert("error to update experience")
        this.router.navigate([""]);
      }
    )
  }

}
