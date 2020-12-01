import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url ='https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyB0KHP8_Z21SnnDPpwGYnty9UnVEflLWI8';

  // crear new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // verificación
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient ) { 

    logout () {

    }

    login ( usuario: UsuarioModel) {

    }

    nuevoUsuario( usuario: UsuarioModel){
      
    }
  }
}
