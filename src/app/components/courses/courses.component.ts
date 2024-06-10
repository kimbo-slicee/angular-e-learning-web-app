import {Component, inject, OnInit} from '@angular/core';
import {Course} from "../../models/course";
import {CourseService} from "../../services/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit{
  coursesService = inject(CourseService);
  AllCourses: Course[] = [];
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  searchString!:string | null;
  ngOnInit() {
    //this.searchString=this.activatedRoute.snapshot.queryParams['search']//deprecated
    this.searchString=this.activatedRoute.snapshot.paramMap.get('search');
    this.searchString===undefined || this.searchString==='' || this.searchString===null
      ?this.AllCourses=this.coursesService.courses
      :this.AllCourses=this.coursesService.courses.filter(course=>course.title.toLowerCase().includes(this.searchString!.toLowerCase()));
  }

}
