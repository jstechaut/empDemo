import { Component, OnInit, ViewChild } from '@angular/core';
import { MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
// import { MatSidenavContainer, MatNavList, MatNavItem } from '@angular/material';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.sidenav.open();
  }

  logout(){
    localStorage.removeItem('empToken');
    this.router.navigate(['/']);
  }

  home(){
    this.router.navigate(['/emp/dashboard']);
  }

}
