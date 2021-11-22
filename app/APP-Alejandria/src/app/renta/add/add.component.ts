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
  idCliente: number;
  idEmpleado: number;
  entrega: string;
  devolucion: string;
  multa: number;
  pagoTotal: number;
  agregar:boolean;
  editar:boolean;
  successA:boolean = false;
  successE:boolean = false;
  failA: boolean = false;
  failE:boolean = false;
  pendiente:boolean = true;

  add(){
    var val = {
      idRenta: this.idRenta,
      idCliente: this.idCliente,
      idEmpleado: this.idEmpleado,
      entrega: this.entrega,
      devolucion: this.devolucion,
      multa: this.multa,
      pagoTotal: this.pagoTotal
    };
    this.service.addRenta(val).subscribe(res=>{
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
      idCliente: this.idCliente,
      idEmpleado: this.idEmpleado,
      entrega: this.entrega,
      devolucion: this.devolucion,
      multa: this.multa,
      pagoTotal: this.pagoTotal
    };
    console.log(val);
    this.service.editRenta(val).subscribe(res=>{
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

  block(){
    this.devolucion = this.entrega;
    this.pendiente=false;
  }

  ngOnInit() {
    this.idRenta = this.data.idRenta;
    this.idCliente = this.data.idCliente;
    this.idEmpleado = this.data.idEmpleado;
    this.entrega = this.data.entrega;
    this.devolucion = this.data.devolucion;
    this.multa = this.data.multa;
    this.pagoTotal = this.data.pagoTotal;
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
