import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill: Skill[] = [];

  constructor(private sSkill: SSkillService, private apiToken: UserService){}

  isLogged = false
 ngOnInit(): void{
  this.loadExperience()
  if(this.apiToken.getToken()){
    this.isLogged = true;
  } else{
    this.isLogged = false;
  }
 }

 loadExperience(): void{
  this.sSkill.list().subscribe((data)=> {
    this.skill = data
  });
 }

 delete(id?: number): void{
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data =>{
          this.loadExperience();
        },err=>{
          alert("error al eliminar")
        }
      )
    }
 }

}
