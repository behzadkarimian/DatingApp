import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.login(this.user)
      .subscribe(next => {
        this.alertify.success('login was successful');
      }, error => {
        this.alertify.error(error);
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
