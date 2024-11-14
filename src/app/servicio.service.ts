import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/modelo/producto';
import { Usuario } from 'src/modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
 public url= "https://albertox3.duckdns.org/ws"

  constructor(private httpClient:HttpClient) { }


getlogin(username: string, password: string):Observable<any> {
  const body = {
    username: username,
    password: password
  };

  return this.httpClient.get<any>(this.url + "/user/"+ username);
}

updateUser( id: number, nombre: string, apellido: string, correo: string): Observable<any> {
  const body = {
    id: id,
    correo: correo,
    nombre: nombre,
    apellido: apellido,
  };
  return this.httpClient.post<any>(this.url + "/user/alt", body);
}


postuser(correo:string, username:string, nombre:string, apellido:string, contrasena:string):Observable<any>{
  const body ={
    correo: correo,
    username: username,
    nombre: nombre,
    apellido: apellido,
    contrasena: contrasena
  };
return this.httpClient.post<any>(this.url + "/user", body)
 }

 getProducto():Observable<Producto>{
  return this.httpClient.get<any>(this.url + "/juego");
 }

 getProductoConsola():Observable<Producto>{
  return this.httpClient.get<any>(this.url + "/consola");
 }

 getProductoMovil():Observable<Producto>{
  return this.httpClient.get<any>(this.url + "/movil");
 }

 venta(id:number, fecha: string, precio:number |undefined):Observable<Producto>
{
  const body ={
    usuario: id,
    fecha: fecha,
    precio: precio,
  };
  return this.httpClient.post<any>(this.url + "/venta/add",body);
 }

 alquiler(id:number, fecha_inicio: string, fecha_fin: string, precio:number |undefined):Observable<Producto>
 {
   const body ={
     usuario: id,
     fecha_inicio: fecha_inicio,
     fecha_fin: fecha_fin,
     precio: precio,
   };
   return this.httpClient.post<any>(this.url + "/alq/add",body);
  }

  reparacion(id:number, fecha: string, descripcion: string|undefined):Observable<Producto>
  {
    const body ={
      usuario: id,
      fecha: fecha,
      descripcion: descripcion,
    };
    return this.httpClient.post<any>(this.url + "/rep/add",body);
   }

   ticketVenta(producto: number|undefined, venta:number ):Observable<Producto>{
    const body ={
      producto: producto,
      venta: venta,
    };
    return this.httpClient.post<any>(this.url + "/ticketVenta",body);
   }

   ticketAlq(producto: number|undefined, alquiler:number ):Observable<Producto>{
    const body ={
      producto: producto,
      alquiler: alquiler,
    };
    return this.httpClient.post<any>(this.url + "/ticketAlq",body);
   }

   ticketRep(producto: number|undefined, reparacion:number ):Observable<Producto>{
    const body ={
      producto: producto,
      reparacion: reparacion,
    };
    return this.httpClient.post<any>(this.url + "/ticketRep",body);
   }
}
