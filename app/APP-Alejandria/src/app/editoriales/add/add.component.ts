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
  idEditorial: number;
  nombre: string;
  telefono: string;
  idEstado: number;
  idMunicipio: number;
  colonia: string;
  calle: string;
  numero: number;
  agregar:boolean;
  editar:boolean;
  successA:boolean = false;
  successE:boolean = false;
  failA: boolean = false;
  failE:boolean = false;

  add(){
    var val = {
      idEditorial: this.idEditorial,
      nombre: this.nombre,
      telefono: this.telefono,
      idEstado: this.idEstado,
      idMunicipio: this.idMunicipio,
      colonia: this.colonia,
      calle: this.calle,
      numero: this.numero,
    };
    this.service.addEditorial(val).subscribe(res=>{
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
      idEditorial: this.idEditorial,
      nombre: this.nombre,
      telefono: this.telefono,
      idEstado: this.idEstado,
      idMunicipio: this.idMunicipio,
      colonia: this.colonia,
      calle: this.calle,
      numero: this.numero,
    };
    console.log(val);
    this.service.editEditorial(val).subscribe(res=>{
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
    this.idEditorial = this.data.idEditorial,
    this.nombre = this.data.nombre,
    this.telefono = this.data.telefono,
    this.idEstado = this.data.idEstado,
    this.idMunicipio = this.data.idMunicipio,
    this.colonia = this.data.colonia,
    this.calle = this.data.calle,
    this.numero = this.data.numero
    if(this.idEditorial != null){
      this.agregar = false;
      this.editar = true;
    }
    else{
      this.agregar = true;
      this.editar = false;
    }
  }

}
