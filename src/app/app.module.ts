import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import { BannerComponent } from './components/home/banner/banner.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { PopularComponent } from './components/home/popular/popular.component';
import { TestimonyComponent } from './components/home/testimony/testimony.component';
import {ServicesComponent} from "./components/home/services/services.component";
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent,
    BannerComponent,
    ContactUsComponent,
    PopularComponent,
    TestimonyComponent,
    ServicesComponent,
    CoursesComponent,
    CourseDetailComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
