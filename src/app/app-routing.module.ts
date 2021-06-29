import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';


const routes: Routes = [
  {path:'student', component:StudentListComponent},
  {path:'create',component:CreateStudentComponent},
  {path:'',redirectTo:'student',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
