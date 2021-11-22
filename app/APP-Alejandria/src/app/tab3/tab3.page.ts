import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  listEmpleados:any = [];
  empleado:any = [];
  idEmpleado: number;
  correo: string;
  password: string;
  data:any;

  constructor(private service:SharedService, private auth: AuthService, private router: Router) {}

  refreshID(){
    this.service.getEmpleados().subscribe(data=>{
      this.listEmpleados = data;
      this.empleado = data;
    });
  }

  register(){
    var filtro = this.idEmpleado;
    this.listEmpleados = this.empleado.filter(function (el){
      return el.idEmpleado.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
    console.log(this.listEmpleados)
    if(this.listEmpleados.length != 0){
      this.auth.register(this.correo, this.password);
      alert("Registro realizado con Éxito!!");
      this.idEmpleado = null;
      this.correo = "";
      this.password = "";
      this.router.navigate(['/tabs/tab1']);
    }
    else{
      alert("El Id ingresado no existe.");
    }
  }

  ngOnInit() {
    this.refreshID();
  }

}
