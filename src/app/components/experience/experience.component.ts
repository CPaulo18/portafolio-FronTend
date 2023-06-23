import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/service/s-experience.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  expe: Experience[] = [];

  constructor(
    private sExperience: SExperienceService,
    private apiToken: UserService
  ) {}

  isLogged = false;
  ngOnInit(): void {
    this.loadExperience();
    if (this.apiToken.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperience(): void {
    this.sExperience.list().subscribe((data) => {
      this.expe = data;
      console.log(this.expe);
    });
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.sExperience.delete(id).subscribe(
        (data) => {
          this.loadExperience();
        },
        (err) => {
          alert('error al eliminar');
        }
      );
    }
  }
}
