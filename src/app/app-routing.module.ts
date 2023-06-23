import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateAboutMeComponent } from './components/about-me/update-about-me/update-about-me.component';
import { NewEducationComponent } from './components/education/new-education/new-education.component';
import { UpdateEducationComponent } from './components/education/update-education/update-education.component';
import { NewExperienceComponent } from './components/experience/new-experience/new-experience.component';
import { UpdateExperienceComponent } from './components/experience/update-experience/update-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewSkillComponent } from './components/skills/new-skill/new-skill.component';
import { UpdateSkillComponent } from './components/skills/update-skill/update-skill.component';
// import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path: "newexp", component: NewExperienceComponent},
  {path: "expupdate/:id", component: UpdateExperienceComponent},
  {path: "newedu", component: NewEducationComponent},
  {path: "eduupdate/:id", component: UpdateEducationComponent},
  {path: "newskill", component: NewSkillComponent},
  {path: "skillupdate/:id", component: UpdateSkillComponent},
  {path: "userupdate/:id", component: UpdateAboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
