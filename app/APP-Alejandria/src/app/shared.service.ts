import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
 //readonly APIurl= "http://localhost:(ingresar_localhost)/api";

  constructor(private http: HttpClient) { }

  table:any[]

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
}
