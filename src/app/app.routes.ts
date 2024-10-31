import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';
import { LongTermComponent } from './pages/long-term/long-term.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
    {path:"login", component:LoginComponent, title:"Login"},
    {path:"",component:HomeComponent},
    {path:"blog", component:BlogComponent},
    {path:"about", component:AboutPageComponent},
    {path:'long-term-tutoring', component:LongTermComponent},
    {path:'contact-us', component:ContactComponent}
];
