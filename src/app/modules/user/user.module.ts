import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { EmpTasksComponent } from './components/emp-tasks/emp-tasks.component';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
const userRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tasks/:id', component: EmpTasksComponent }
];

@NgModule({
  declarations: [DashboardComponent, EmpTasksComponent, CreateTaskComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserModule { }
