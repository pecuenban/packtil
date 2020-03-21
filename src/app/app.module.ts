import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { InicioComponent } from './inicio/inicio.component';
import { NuevoJuegoComponent } from './nuevo-juego/nuevo-juego.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TusJuegosComponent } from './tus-juegos/tus-juegos.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

@NgModule({
   imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: InicioComponent },
      { path: 'newGame', component: NuevoJuegoComponent },
      { path: 'find', component: BuscadorComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'yourGames', component: TusJuegosComponent },
      { path: 'config', component: ConfiguracionComponent },
      
    ])
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent, 
    LeftBarComponent, 
    InicioComponent, 
    NuevoJuegoComponent, BuscadorComponent, FavoritesComponent, TusJuegosComponent, ConfiguracionComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
