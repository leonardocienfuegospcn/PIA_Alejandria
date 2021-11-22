import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  email:string;
  password:string;

  constructor(public auth:AuthService, private router: Router) { }

  async login(user:string, pass:string){
    try{
      await this.auth.login(user, pass);
      alert("Bienvenido!!");
      this.email = "";
      this.password = "";
      this.router.navigate(['/tabs/tab2']);
    } catch (e: any){
      alert(e.message);
    }
  }

  async logout(){
    this.email = "";
    this.password = "";
    await this.auth.logout();
  }

}
