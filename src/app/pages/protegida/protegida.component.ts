import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {

profile: any;

  constructor( private Auth: AuthService) { }

  ngOnInit() {
     
    if (this.Auth.userProfile) {
      this.profile = this.Auth.userProfile;
      console.log (this.profile);    

    } else {
      this.Auth.getProfile((err, profile) => {
        this.profile = profile;
        console.log (this.profile);    

      });
    }
       
 
  }

}
