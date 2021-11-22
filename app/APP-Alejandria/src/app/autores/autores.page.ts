import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.page.html',
  styleUrls: ['./autores.page.scss'],
})
export class AutoresPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listAutores:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  nombre:string = "";
  autores:any = [];
  trash: boolean = true;
  confirmar: boolean = false;

  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  refreshAutores(){
    this.service.getAutores().subscribe(data=>{
      this.listAutores = data;
      this.autores = data;
    });
  }

  addClick(){
    this.data={
      idAutor: null,
      idEditorial: null,
      nombre: "",
      apellido: ""
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshAutores();
  }

  deleteClick(val:any){
    this.service.deleteAutor(val).subscribe(res=>{
      alert(res.toString());
    this.refreshAutores();
    this.trash = true;
    this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.nombre;
    this.listAutores = this.autores.filter(function (el){
      return el.nombre.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }
  ngOnInit() {
    this.refreshAutores();
  }

}
