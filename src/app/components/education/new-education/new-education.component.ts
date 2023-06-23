import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/service/s-education.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent {

  eduName: string = "";
  eduDesc: string = "";

  constructor(private sEducation: SEducationService, private router: Router){}

  onCreate(): void{
      const edu = new Education(this.eduName, this.eduDesc)
      this.sEducation.save(edu).subscribe(
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
