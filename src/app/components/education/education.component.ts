import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { SEducationService } from 'src/app/service/s-education.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(
    private sEducation: SEducationService,
    private apiToken: UserService
  ) {}

  isLogged = false;
  ngOnInit(): void {
    this.loadEducation();
    if (this.apiToken.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEducation(): void {
    this.sEducation.list().subscribe((data) => {
      this.education = data;
      console.log(this.education);
    });
  }

  delete(id?: number): void {
    if (id != undefined) {
      this.sEducation.delete(id).subscribe(
        (data) => {
          this.loadEducation();
        },
        (err) => {
          alert('error al eliminar');
        }
      );
    }
  }
}
