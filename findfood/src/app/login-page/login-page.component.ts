import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private router: Router,
  ) { 
    
  }

  ngOnInit(): void {
  }

  entrarComGoogle() {
    this._authService.entrarComGoogle()
    .then(() => this.router.navigateByUrl('home'));
  }
  
}
