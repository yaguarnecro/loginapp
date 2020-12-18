import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 usuario: UsuarioModel;
 recordarme: false;
 // aqui esta como nulo
 // se inicializa en ngOnInit

  constructor( private auth: AuthService,
               private router: Router
    ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    // this.usuario.email = 'yaguarnecro@gmail.com';

  }

  onSubmit( form: NgForm ) {

    if ( form.invalid ) { return; }
    // console.log('formulario enviado');
    // console.log(this.usuario);
    // console.log('formulario =>');
    // console.log( form );

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Espera por Favor...'
    });
    Swal.showLoading();


    this.auth.nuevoUsuario( this.usuario).
    subscribe( resp => {
      console.log(resp);
      Swal.close();
      if (this.recordarme) {
        localStorage.setItem('email', this.usuario.email);
      }

      this.router.navigateByUrl('/home');

    }, (err) => {
      console.log(err.error.error.message);
      Swal.fire({
        icon: 'error',
        title: 'error al autenticar',
        text: err.error.error.message
      });
    });
  }


}
