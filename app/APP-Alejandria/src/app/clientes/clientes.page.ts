import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listClientes:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  nombre:string = "";
  clientes:any = [];
  trash: boolean = true;
  confirmar: boolean = false;


  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  refreshClientes(){
    this.service.getClientes().subscribe(data=>{
      this.listClientes = data;
      this.clientes = data;
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
      numero: null
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshClientes();
  }

  deleteClick(val:any){
    this.service.deleteCliente(val).subscribe(res=>{
      alert(res.toString());
      this.refreshClientes();
      this.trash = true;
      this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.nombre;
    this.listClientes = this.clientes.filter(function (el){
      return el.nombre.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  ngOnInit() {
    this.refreshClientes();
  }

}
