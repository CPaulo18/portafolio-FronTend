import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent {
  expName: string = "";
  expDesc: string = "";

  constructor(private sExperience: SExperienceService, private router: Router){}

  onCreate(): void{
      const expe = new Experience(this.expName, this.expDesc)
      this.sExperience.save(expe).subscribe(
        data =>{
          alert("Added expeice")
          this.router.navigate([""])
      }, err =>{
          alert("Fail")
          this.router.navigate([""])
          console.log(err);
      })
    }

}
