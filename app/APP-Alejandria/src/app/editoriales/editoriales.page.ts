import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.page.html',
  styleUrls: ['./editoriales.page.scss'],
})
export class EditorialesPage implements OnInit {

  constructor(private router:Router, private service:SharedService) { }

  listEditoriales:any=[];
  ActivateAddEditComp:boolean=false;
  data:any;
  nombre:string = "";
  editoriales:any = [];
  trash: boolean = true;
  confirmar: boolean = false;


  back(){
    this.router.navigateByUrl('/tabs/tab2');
  }

  refreshEditoriales(){
    this.service.getEditoriales().subscribe(data=>{
      this.listEditoriales = data;
      this.editoriales = data;
    });
  }

  addClick(){
    this.data={
      idEditorial: null,
      nombre: "",
      telefono: "",
      idEstado: null,
      idMunicipio: null,
      colonia: "",
      calle: "",
      numero: null
    }
    this.ActivateAddEditComp=true;
  }

  editClick(item){
    this.data=item;
    this.ActivateAddEditComp=true;
  }

  closeClick(){
    this.ActivateAddEditComp=false;
    this.refreshEditoriales();
  }

  deleteClick(val:any){
    this.service.deleteEditorial(val).subscribe(res=>{
      alert(res.toString());
      this.refreshEditoriales();
      this.trash = true;
      this.confirmar = false;
    });
  }

  filter(){
    var filtro = this.nombre;
    this.listEditoriales = this.editoriales.filter(function (el){
      return el.nombre.toString().toLowerCase().includes(
        filtro.toString().trim().toLowerCase()
      )
    });
  }

  ngOnInit() {
    this.refreshEditoriales();
  }

}
