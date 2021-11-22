import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() data:any;
  isbn: number;
  titulo: string;
  genero: string;
  stock: number;
  idAutor: number;
  idEditorial: number;
  agregar:boolean;
  editar:boolean;
  successA:boolean = false;
  successE:boolean = false;
  failA: boolean = false;
  failE:boolean = false;


  add(){
    var val = {
      isbn: this.isbn,
      titulo: this.titulo,
      genero: this.genero,
      stock: this.stock,
      idAutor: this.idAutor,
      idEditorial: this.idEditorial
    };
    this.service.addLibro(val).subscribe(res=>{
      if(res.toString() == "Registrado exitosamente"){
        this.successA = true;
        this.successE = false;
        this.failA = false;
        this.failE = false;
      }
      else{
        this.failA = true;
        this.failE = false;
        this.successA = false;
        this.successE = false;
      }
      alert(res.toString());
    });
  }

  edit(){
    var val = {
      isbn: this.isbn,
      titulo: this.titulo,
      genero: this.genero,
      stock: this.stock,
      idAutor: this.idAutor,
      idEditorial: this.idEditorial
    };
    console.log(val);
    this.service.editLibro(val).subscribe(res=>{
      console.log(res)
      if(res.toString() == "Actualizado exitosamente"){
        this.successE = true;
        this.successA = false;
        this.failA = false;
        this.failE = false;
      }
      else{
        this.failE = true;
        this.failA = false;
        this.successA = false;
        this.successE = false;
      }
      alert(res.toString());
    });
  }

  ngOnInit() {
    this.isbn = this.data.isbn;
    this.titulo = this.data.titulo;
    this.genero = this.data.genero;
    this.stock = this.data.stock;
    this.idAutor = this.data.idAutor;
    this.idEditorial = this.data.idEditorial;
    if(this.isbn != null){
      this.agregar = false;
      this.editar = true;
    }
    else{
      this.agregar = true;
      this.editar = false;
    }
  }

}
