import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {

  constructor(private service: SharedService) { }
  @Input() data:any;
  idAutor: number;
  idEditorial: number;
  nombre: string;
  apellido: string;
  agregar:boolean;
  editar:boolean;
  successA:boolean = false;
  successE:boolean = false;
  failA: boolean = false;
  failE:boolean = false;

  add(){
    var val = {
      idAutor: this.idAutor,
      idEditorial: this.idEditorial,
      nombre: this.nombre,
      apellido: this.apellido,
    };
    this.service.addLAutor(val).subscribe(res=>{
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
      idAutor: this.idAutor,
      idEditorial: this.idEditorial,
      nombre: this.nombre,
      apellido: this.apellido
    };
    console.log(val);
    this.service.editAutor(val).subscribe(res=>{
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
    this.idAutor = this.data.idAutor;
    this.idEditorial = this.data.idEditorial;
    this.nombre = this.data.nombre;
    this.apellido = this.data.apellido;
    if(this.idAutor != null){
      this.agregar = false;
      this.editar = true;
    }
    else{
      this.agregar = true;
      this.editar = false;
    }
  }

}
