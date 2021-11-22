import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.page.html',
  styleUrls: ['./libros.page.scss'],
})
export class LibrosPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listLibros:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  titulo:string = "";
  libros:any = [];
  trash: boolean = true;
  confirmar: boolean = false;

  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  refreshlibros(){
    this.service.getLibros().subscribe(data=>{
      this.listLibros = data;
      this.libros = data;
    });
  }

  addClick(){
    this.data={
      isbn: null,
      titulo: "",
      genero: "",
      stock: null,
      idAutor: null,
      idEditorial: null
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshlibros();
  }

  deleteClick(val:any){
    this.service.deleteLibro(val).subscribe(res=>{
      alert(res.toString());
    this.refreshlibros();
    this.trash = true;
    this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.titulo;
    this.listLibros = this.libros.filter(function (el){
      return el.titulo.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  ngOnInit() {
    this.refreshlibros();
  }

}
