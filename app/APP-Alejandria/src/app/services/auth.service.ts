import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoged:boolean = false;

  constructor(private auth: AngularFireAuth) {
    auth.authState.subscribe(user=>{
      console.log(user);
    });
   }

  login(user:string, password:string){
    this.isLoged = true;
    return this.auth.signInWithEmailAndPassword(user, password);
  }

  logout(){
    this.isLoged = false;
    alert("Hasta la proxima!!")
    return this.auth.signOut();
  }

  register(user:string, password:string){
    return this.auth.createUserWithEmailAndPassword(user, password);
  }
}
