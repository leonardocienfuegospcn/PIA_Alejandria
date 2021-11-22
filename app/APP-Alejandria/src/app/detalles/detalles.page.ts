import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listDetalles:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  idRenta:string = "";
  detalles:any = [];
  trash: boolean = true;
  confirmar: boolean = false;

  back(){
    this.router.navigateByUrl('/renta');
  }

  refreshDetalles(){
    this.service.getDetalles().subscribe(data=>{
      this.listDetalles = data;
      this.detalles = data;
    });
  }

  addClick(){
    this.data={
      idRenta: null,
      isbn: null,
      cantidad: null,
      costo: null,
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshDetalles();
  }

  deleteClick(val:any){
    this.service.deleteDetalle(val).subscribe(res=>{
      alert(res.toString());
    this.refreshDetalles();
    this.trash = true;
    this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.idRenta;
    this.listDetalles = this.detalles.filter(function (el){
      return el.idRenta.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  ngOnInit() {
    this.refreshDetalles();
  }

}
