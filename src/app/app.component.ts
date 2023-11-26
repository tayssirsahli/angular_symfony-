import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { NgIfContext } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cosmetique';
loginLink: TemplateRef<NgIfContext<Boolean>> | null | undefined;
  constructor (public authService: AuthService,
                private router:Router) {}


  ngOnInit() {
    let isloggedin: string = localStorage.getItem('isloggedIn') || '';
    let loggedUser: string = localStorage.getItem('loggedUser') || '';

    if (isloggedin !== 'true' || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  }
                
                  
  onLogout()
  {
    this.authService.logout();
  }
}
