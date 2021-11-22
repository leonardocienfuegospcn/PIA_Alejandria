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
  idRenta: number;
  isbn: number;
  cantidad: number;
  costo: number;
  agregar:boolean;
  editar:boolean;
  successA:boolean = false;
  successE:boolean = false;
  failA: boolean = false;
  failE:boolean = false;

  add(){
    var val = {
      idRenta: this.idRenta,
      isbn: this.isbn,
      cantidad: this.cantidad,
      costo: this.costo,
    };
    this.service.addDetalle(val).subscribe(res=>{
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
      idRenta: this.idRenta,
      isbn: this.isbn,
      cantidad: this.cantidad,
      costo: this.costo,
    };
    console.log(val);
    this.service.editDetalle(val).subscribe(res=>{
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
    this.idRenta = this.data.idRenta;
    this.isbn = this.data.isbn;
    this.cantidad = this.data.cantidad;
    this.costo = this.data.costo;
    if(this.idRenta != null){
      this.agregar = false;
      this.editar = true;
    }
    else{
      this.agregar = true;
      this.editar = false;
    }
  }

}
