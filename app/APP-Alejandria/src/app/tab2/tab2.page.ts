import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router) {}

  libros(){
    this.router.navigateByUrl('/libros');
  }
  autores(){
    this.router.navigateByUrl('/autores');
  }
  clientes(){
    this.router.navigateByUrl('/clientes')
  }
  empleados(){
    this.router.navigateByUrl('/empleados');
  }
  editoriales(){
    this.router.navigateByUrl('/editoriales');
  }
  rentas(){
    this.router.navigateByUrl('/renta');
  }
}
