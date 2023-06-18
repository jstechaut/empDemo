import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';

@Component({
  selector: 'app-emp-tasks',
  templateUrl: './emp-tasks.component.html',
  styleUrls: ['./emp-tasks.component.scss']
})
export class EmpTasksComponent implements OnInit {
  id: string;
  dataSource : any;
  allData: any = [];
  displayedColumns: string[] = ['id', 'title', 'completed'];
  filters = [
    { label: 'Completed' , value: 0},
    {label: 'Not Completed' , value: 1} ]

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getUserTasks(id)
  }

  filter(filter: any) {
    this.dataSource.filter = filter;
  }

  getUserTasks(id:string){
    this.userService.getUserTasks(id).subscribe(res =>{
         console.log('res',res)
         this.dataSource = res;
         this.allData = res;
    },
    err =>{

    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskComponent,{
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(`Dialog result:`, result);
      if(result && result.title){
         this.allData.push(result)
         this.dataSource.push(result)
         console.log(this.dataSource)
      }
    });
  }


  filterStatus(event:any){
console.log(event)
if(event.value === '1'){
  console.log(this.dataSource)
  this.dataSource = this.allData.filter((res:any) => res.completed === true);
} else if(event.value === '2'){
  this.dataSource = this.allData.filter((res:any) => res.completed === false);
} else{
  this.dataSource = this.allData;
}
  }

  create(){

  }

}
