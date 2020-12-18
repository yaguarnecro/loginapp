import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';

  private apiKey = 'AIzaSyB0KHP8_Z21SnnDPpwGYnty9UnVEflLWI8';

  userToken: string;

  // crear new user
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // verificación
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]


  constructor( private http: HttpClient ) {
    this.leerToken();
  }

    logout() {
      localStorage.removeItem('token');
    }

    login( usuario: UsuarioModel) {
      const authData = {
        ...usuario,
        returnSecureToken: true
      };
      return this.http.post(
        `${ this.url }signInWithPassword?key=${ this.apiKey }`,
        authData
        ).pipe(
          map( resp => {
            console.log('Entro en el mapa del rxjs');
            // tslint:disable-next-line: no-string-literal
            this.guardarIdToken( resp['idToken'] );
            return resp;
          })
        );
    }

    nuevoUsuario( usuario: UsuarioModel) {
      const authData = {
        // usando Operador express
        ...usuario,
        // email: usuario.email,
        // password: usuario.password,
        returnSecureToken: true
      };

      // llamar servicio httpPost

      return this.http.post(
      `${ this.url }signUp?key=${ this.apiKey }`,
      authData
      ).pipe(
        map( resp => {
          console.log('Entro en el mapa del rxjs');
          // tslint:disable-next-line: no-string-literal
          this.guardarIdToken( resp['idToken'] );
          return resp;
        } )
      );
    }
      // la petición post regresa un observable, ahi luego de la subscripción se puede ejecutar una función

    private guardarIdToken( idToken: string ) {
      // guardar id en user token en local storage
      this.userToken = idToken;
      localStorage.setItem('token', idToken);

      let hoy = new Date();
      hoy.setSeconds( 3600 );

      localStorage.setItem('expira', hoy.getTime().toString());
    }

    leerToken() {
      // verificar si hay info en localstrorage
      if (localStorage.getItem('token') ) {
        this.userToken = localStorage.getItem('token');
      } else {
        this.userToken = '';
      }
    }

    estaAutenticado(): boolean {

      if ( this.userToken.length < 2 ) {
        return false;
      }
      const expira = Number(localStorage.getItem('expira'));
      const expiraDate = new Date();
      expiraDate.setTime(expira);

      if ( expiraDate > new Date() ) {
        return true;
      } else {
        return false;
      }

      return this.userToken.length > 2;

    }
}

