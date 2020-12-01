import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 usuario: UsuarioModel;
 // aqui esta como nulo
 // se inicializa en ngOnInit

  constructor( private auth: AuthService ) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
    // this.usuario.email = 'yaguarnecro@gmail.com';

  }

  onSubmit( form: NgForm ){

    if ( form.invalid ) { return; }
    // console.log('formulario enviado');
    // console.log(this.usuario);
    // console.log('formulario =>');
    // console.log( form );
    this.auth.nuevoUsuario( this.usuario).
    subscribe( resp => {
      console.log(resp);
    }, (err) =>{
      console.log(err.error.error.message);
    });
  }


}
