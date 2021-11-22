import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.page.html',
  styleUrls: ['./renta.page.scss'],
})
export class RentaPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listRentas:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  idRenta:string = "";
  rentas:any = [];
  trash: boolean = true;
  confirmar: boolean = false;

  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  detalles(){
    this.router.navigateByUrl('/detalles');
  }

  refreshRentas(){
    this.service.getRentas().subscribe(data=>{
      this.listRentas = data;
      this.rentas = data;
    });
  }

  addClick(){
    this.data={
      idRenta: null,
      idCliente: null,
      idEmpleado: null,
      entrega: "",
      devolucion: null,
      multa: null,
      pagoTotal: null
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshRentas();
  }

  deleteClick(val:any){
    this.service.deleteRenta(val).subscribe(res=>{
      alert(res.toString());
    this.refreshRentas();
    this.trash = true;
    this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.idRenta;
    this.listRentas = this.rentas.filter(function (el){
      return el.idRenta.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  ngOnInit() {
    this.refreshRentas();
  }

}
