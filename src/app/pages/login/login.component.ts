import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService ) { }

  usuario = new UsuarioModel();

  ngOnInit() {
  }

  logint( form: NgForm ) {
    if ( form.invalid ) { return; }
    console.log('Imprimir si el form es válido');
    this.auth.login( this.usuario ).subscribe
    (
      resp => {
        console.log(resp);
      }, (err) => { console.log(err.error.error.message);
      }
    );

  }

}
