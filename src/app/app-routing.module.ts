import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {ServicesComponent} from "./components/home/services/services.component";
import {ContactComponent} from "./components/contact/contact.component";
import {CoursesComponent} from "./components/courses/courses.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {CourseDetailComponent} from "./components/courses/course-detail/course-detail.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'contact',component:ContactComponent},
  {path:'courses',component:CoursesComponent},
  {path:'courses/course/:id',component:CourseDetailComponent},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
