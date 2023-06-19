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
import { UserComponent } from './user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
const userRoutes: Routes = [
  { path: '', component: UserComponent ,
  children:[
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tasks/:id', component: EmpTasksComponent }
  ]
}
];

@NgModule({
  declarations: [DashboardComponent, EmpTasksComponent, CreateTaskComponent, UserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserModule { }
