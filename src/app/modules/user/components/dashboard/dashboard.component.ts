import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
export interface IEmp {
  name: string;
  phone: number;
  email: string;
}

const ELEMENT_DATA: IEmp[] = [
  { name: 'Hydrogen', phone: 1.0079, email: 'H'},
  {name: 'Helium', phone: 4.0026, email: 'He'},
  { name: 'Lithium', phone: 6.941, email: 'Li'},
  { name: 'Beryllium', phone: 9.0122, email: 'Be'},
  {name: 'Boron', phone: 10.811, email: 'B'},
  { name: 'Carbon', phone: 12.0107, email: 'C'},
  {name: 'Nitrogen', phone: 14.0067, email: 'N'},
  {name: 'Oxygen', phone: 15.9994, email: 'O'},
  {name: 'Fluorine', phone: 18.9984, email: 'F'},
  {name: 'Neon', phone: 20.1797, email: 'Ne'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone', 'email'];
  // dataSource = ELEMENT_DATA;
  dataSource : any;
  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getUsersList()
  }

  getUsersList(){
    this.userService.getUsers().subscribe(res =>{
         this.dataSource = res;
    },
    err =>{

    })
  }

  getRecord(element:any){
    this.router.navigate(['/emp/tasks', element.id])
  }

}
