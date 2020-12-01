import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  usuario = new UsuarioModel();

  ngOnInit() {
  }

  logint( form: NgForm ) {
    if ( form.invalid ) { return; }
    console.log('Imprimir si el form es válido');

  }

}
