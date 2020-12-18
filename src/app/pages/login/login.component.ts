import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private auth: AuthService,
    private router: Router
    ) { }

  usuario = new UsuarioModel();

  ngOnInit() {
  }

  logint( form: NgForm ) {
    if ( form.invalid ) { return; }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espera por Favor...'
    });
    Swal.showLoading();



    console.log('Imprimir si el form es válido');
    this.auth.login( this.usuario ).subscribe
    (
      resp => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/home');

      }, (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'error al ingresar',
          text: err.error.error.message,
        });
      }
    );

  }

}
