import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  register() {
    this.authService.register(this.user).subscribe(
      next => {
        console.log('registered');
      }
      , error => {
        console.log(error);
      }
    );
  }

  cancel() {
    console.log('cancelled');
  }

}
