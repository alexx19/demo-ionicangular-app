import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Route) { }

  ngOnInit() {
  }

  logMeIng(){
    //Iniciar sersion
    this.router.navigate(['/home']);
  }

}
