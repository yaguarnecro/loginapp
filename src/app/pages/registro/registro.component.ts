import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 usuario: UsuarioModel;
 //aqui esta como nulo
 //se inicializa en ngOnInit



  constructor() { }

  ngOnInit() { 
    this.usuario = new UsuarioModel();
    this.usuario.email = 'yaguarnecro@gmail.com';

  }

  onSubmit(){
    console.log('formulario enviado');
    console.log(this.usuario);
  }


}
