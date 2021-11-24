import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.page.html',
  styleUrls: ['./ubicaciones.page.scss'],
})
export class UbicacionesPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listEstados:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  idEstado:string = "";
  estados:any = [];
  trash: boolean = true;
  confirmar: boolean = false;

  listMunicipios:any=[];
  ActivateAddEditComp2:boolean=false;
  data2:any;
  idMunicipio:string = "";
  municipios:any = [];
  trash2: boolean = true;
  confirmar2: boolean = false;

  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  refreshEstados(){
    this.service.getEstados().subscribe(data=>{
      this.listEstados = data;
      this.estados = data;
    });
  }

  addClick(){
    this.data={
      idEstado: null,
      nombre: ""
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshEstados();
  }

  deleteClick(val:any){
    this.service.deleteEstado(val).subscribe(res=>{
      alert(res.toString());
    this.refreshEstados();
    this.trash = true;
    this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.idEstado;
    this.listEstados = this.estados.filter(function (el){
      return el.idEstado.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  refreshMunicipios(){
    this.service.getMunicipios().subscribe(data=>{
      this.listMunicipios = data;
      this.municipios = data;
    });
  }

  addClick2(){
    this.data2={
      idEstado: null,
      nombre: ""
    }
    this.ActivateAddEditComp2=true;
  }

  editClick2(item){
    this.data2=item;
    this.ActivateAddEditComp2=true;
  }

  closeClick2(){
    this.ActivateAddEditComp2=false;
    this.refreshMunicipios();
  }

  deleteClick2(val:any){
    this.service.deleteMunicipio(val).subscribe(res=>{
      alert(res.toString());
    this.refreshMunicipios();
    this.trash2 = true;
    this.confirmar2 = false;
    });
  }

  filter2(){
    var filtro = this.idMunicipio;
    this.listMunicipios = this.municipios.filter(function (el){
      return el.idMunicipio.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  ngOnInit() {
    this.refreshEstados();
    this.refreshMunicipios();
  }

}
