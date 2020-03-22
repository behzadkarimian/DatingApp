import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.user).subscribe(
      next => {
        this.alertify.success('registered');
      },
      error => {
        this.alertify.error(error);
      }
    );
  }

  onCancel() {
    this.alertify.confirm('confirmation', 'Are you sure?', () => {
      this.router.navigate(['/home']);
    }, () => {});
  }
}
