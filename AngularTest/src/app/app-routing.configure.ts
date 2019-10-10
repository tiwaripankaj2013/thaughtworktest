import { Routes, RouterModule } from '@angular/router';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
import { StudentComponent } from './student/student.component';
import { HeaderComponent } from './header/header.component';


const APPROUTELIST: Routes = [
  {path: '',redirectTo:'student',pathMatch:'full'},
  {path: 'student',component:StudentComponent},
  {path: 'reactiveform',component:ReactiveformComponent},
];


export const  APPROUTE = RouterModule.forRoot(APPROUTELIST);
