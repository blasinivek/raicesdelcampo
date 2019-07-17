import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { Productocomponent } from './pages/producto/producto.component';
import { ProtegidaComponent } from './pages/protegida/protegida.component';
import {ContactoComponent} from './pages/contacto/contacto.component';

import {AuthGuardService} from  "./services/auth-Guard.Service";

const app_routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'producto', component:  Productocomponent},
    { path: 'protegida', 
    component:  ProtegidaComponent,
    canActivate:[ AuthGuardService ]
    },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






