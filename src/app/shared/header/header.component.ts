import { Component,  } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public _servicio: InfoPaginaService,
              private router: Router,
              private auth:AuthService) { 
              auth.handleAuthentication();
              }
  
  

    login (){
      this.auth.login();
    }
    
    salir (){
      this.auth.logout();
    }

  buscarProducto (termino: string ) {

   if(termino.length < 1) {
      return;
    }


    
    this.router.navigate(['/search' , termino]);
    

  }

}
