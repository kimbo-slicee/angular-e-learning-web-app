import {Component, inject} from '@angular/core';
import {Course} from "../../../models/course";
import {CourseService} from "../../../services/course.service";

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {
  courseService = inject(CourseService)
  popularCourses: Course[] = [];
  ngOnInit(){
    this.popularCourses = this.courseService.courses.filter(c => c.rating >= 5);
  }

}
