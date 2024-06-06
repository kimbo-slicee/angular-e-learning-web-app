import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Course} from "../../../models/course";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../services/course.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit,OnDestroy{
selectedCourse!:Course;
courseId!:number;
activeRoute:ActivatedRoute=inject(ActivatedRoute);
courseService:CourseService=inject(CourseService);
subscriber!:Subscription;
ngOnInit(): void {
  // this.coursId=this.activeRoute.snapshot.params['id']; this is old methode
  // this.courseId=parseInt(this.activeRoute.snapshot.paramMap.get('id')!)
  /* important Note 📌:
   NgOnInit it will be called one time that's the value of the id will e the first value so we
   need to use an observable that we send use the new value of URL params
   */
  this.subscriber=this.activeRoute.paramMap.subscribe((data)=>{
    this.courseId=parseInt(data.get('id')!)
   this.selectedCourse=this.courseService.courses.find(e=>e.id===this.courseId)!
  })
}
  ngOnDestroy(): void {
  /*
   behind the science angular will unsubscribe to this
   observable but the best is to unsubscribe to this
   observable before the component has be destroyed
   */
  this.subscriber.unsubscribe();
  }

}
