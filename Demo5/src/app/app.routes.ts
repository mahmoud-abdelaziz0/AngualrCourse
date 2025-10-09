import { Routes } from '@angular/router';
import { Home } from './Components/Day3/Components Interaction/home/home';
import { About } from './Components/Day5/TestRouting/about/about';
import { Profile } from './Components/Day5/TestRouting/profile/profile';
import { Usres } from './Components/Day5/TestRouting/usres/usres';
import { UserDetails } from './Components/Day5/TestRouting/user-details/user-details';
import { NotFound } from './Components/Day5/TestRouting/not-found/not-found';
import { Tech } from './Components/Day5/TestRouting/tech/tech';
import { Web } from './Components/Day5/TestRouting/web/web';
import { Mobile } from './Components/Day5/TestRouting/mobile/mobile';

export const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full',  title:'Home'},
  {path:'home', component: Home, title:'Home'},
  // {path:'about', component: About, title:'About'},
  {path:'about', loadComponent: ()=> import('./Components/Day5/TestRouting/about/about').then((c)=> c.About), title:'About'},
  // {path:'profile', component: Profile, title:'Profile'},
  {path:'profile', loadComponent: ()=> import('./Components/Day5/TestRouting/profile/profile').then((p)=> p.Profile), title:'Profile'},
  {path:'tech', component: Tech, title:'Tech', children:[
    {path:'', redirectTo:'mobile', pathMatch:'prefix'},
    {path:'web', component: Web},
    {path:'mobile', component: Mobile},
  ]},
  {path:'users', component: Usres, title:'Usres'},
  {path:'users/:id', component: UserDetails,  title:'UserDetails'},
  {path:'**', component: NotFound, title:'NotFound'},
];
