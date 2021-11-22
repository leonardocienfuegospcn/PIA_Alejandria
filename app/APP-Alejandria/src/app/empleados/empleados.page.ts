import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listEmpleados:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  nombre:string = "";
  empleados:any = [];
  trash: boolean = true;
  confirmar: boolean = false;

  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  refreshEmpleados(){
    this.service.getEmpleados().subscribe(data=>{
      this.listEmpleados = data;
      this.empleados = data;
    });
  }

  addClick(){
    this.data={
      idEmpleado: null,
      nombre: "",
      apPaterno: "",
      apMaterno: "",
      telefono: "",
      idEstado: null,
      idMunicipio: null,
      colonia: "",
      calle: "",
      numero: null,
      puesto: "",
      salario: null,
      faltas: null
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshEmpleados();
  }

  deleteClick(val:any){
    this.service.deleteEmpleado(val).subscribe(res=>{
      alert(res.toString());
      this.refreshEmpleados();
      this.trash = true;
      this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.nombre;
    this.listEmpleados = this.empleados.filter(function (el){
      return el.nombre.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  ngOnInit() {
    this.refreshEmpleados();
  }

}
