import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 readonly APIurl= "http://localhost:50758/api";

  constructor(private http: HttpClient) { }

  //Libros
  getLibros():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/libros')
  }

  addLibro(data:any){
    return this.http.post(this.APIurl+'/libros', data)
  }

  editLibro(data:any){
    return this.http.put(this.APIurl+'/libros', data)
  }

  deleteLibro(data:any){
    return this.http.delete(this.APIurl+'/libros/' + data)
  }

  //Autores
  getAutores():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/autores')
  }

  addLAutor(data:any){
    return this.http.post(this.APIurl+'/autores', data)
  }

  editAutor(data:any){
    return this.http.put(this.APIurl+'/autores', data)
  }

  deleteAutor(data:any){
    return this.http.delete(this.APIurl+'/autores/' + data)
  }

  //Editoriales
  getEditoriales():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/editoriales')
  }

  addEditorial(data:any){
    return this.http.post(this.APIurl+'/editoriales', data)
  }

  editEditorial(data:any){
    return this.http.put(this.APIurl+'/editoriales', data)
  }

  deleteEditorial(data:any){
    return this.http.delete(this.APIurl+'/editoriales/' + data)
  }

  //Clientes
  getClientes():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/clientes')
  }

  addCliente(data:any){
    return this.http.post(this.APIurl+'/clientes', data)
  }

  editCliente(data:any){
    return this.http.put(this.APIurl+'/clientes', data)
  }

  deleteCliente(data:any){
    return this.http.delete(this.APIurl+'/clientes/' + data)
  }

  //Rentas
  getRentas():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/rentas')
  }

  addRenta(data:any){
    return this.http.post(this.APIurl+'/rentas', data)
  }

  editRenta(data:any){
    return this.http.put(this.APIurl+'/rentas', data)
  }

  deleteRenta(data:any){
    return this.http.delete(this.APIurl+'/rentas/' + data)
  }

  //Detalles Rentas
  getDetalles():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/detalles')
  }

  addDetalle(data:any){
    return this.http.post(this.APIurl+'/detalles', data)
  }

  editDetalle(data:any){
    return this.http.put(this.APIurl+'/detalles', data)
  }

  deleteDetalle(data:any){
    return this.http.delete(this.APIurl+'/detalles/' + data)
  }

  //Empleados
  getEmpleados():Observable<any[]>{
    return this.http.get<any>(this.APIurl+'/empleados')
  }

  addEmpleado(data:any){
    return this.http.post(this.APIurl+'/empleados', data)
  }

  editEmpleado(data:any){
    return this.http.put(this.APIurl+'/empleados', data)
  }

  deleteEmpleado(data:any){
    return this.http.delete(this.APIurl+'/empleados/' + data)
  }
}
