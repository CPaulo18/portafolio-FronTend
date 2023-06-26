import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorService } from './helpers/auth-interceptor.service';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { UpdateExperienceComponent } from './components/experience/update-experience/update-experience.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { UpdateEducationComponent } from './components/education/update-education/update-education.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { UpdateSkillComponent } from './components/skills/update-skill/update-skill.component';
import { UpdateAboutMeComponent } from './components/about-me/update-about-me/update-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    PortfolioComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienceComponent,
    UpdateExperienceComponent,
    NewEducationComponent,
    UpdateEducationComponent,
    NewSkillComponent,
    UpdateSkillComponent,
    UpdateAboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
