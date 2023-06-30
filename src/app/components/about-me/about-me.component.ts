import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { SUserService } from 'src/app/service/s-user.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  user: User = null;

  isLogged = false;

  constructor(private sUser: SUserService, private apiService: UserService) {}

  ngOnInit(): void {
    this.loadPerson();
    if (this.apiService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadPerson(): void {
    this.sUser.detail(1).subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }
}
