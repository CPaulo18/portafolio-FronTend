import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SSkillService } from 'src/app/service/s-skill.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent {
  skillName: string;
  porcent: number;

  constructor(private sSkill: SSkillService, private router: Router){}

  onCreate(): void{
      const skill = new Skill(this.skillName, this.porcent);
      this.sSkill.save(skill).subscribe(
        data =>{
          alert("Added skill")
          this.router.navigate([""])
      }, err =>{
          alert("Fail")
          this.router.navigate([""])
          console.log(err);
      })
    }
}
