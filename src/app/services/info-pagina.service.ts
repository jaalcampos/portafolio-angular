import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';
import { InfoEquipo } from '../interfaces/info-equipo.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  infoEquipo: InfoEquipo [] = [];
  cargada: boolean = false;

  constructor(private http:HttpClient) { 

    //Leer Archivo JSON

    this.cargaInfo();
    this.cargaEquipo();

  }

  private cargaInfo(){

    this.http.get('assets/data/data-pagina.json').subscribe((resp: InfoPagina) => {

      this.cargada = true;
      this.info    = resp;
      
    });

  }

  private cargaEquipo(){

    this.http.get('https://angular-html-82eb9.firebaseio.com/equipo.json').subscribe((resp: InfoEquipo[]) =>{

      this.infoEquipo = resp;
      //console.log(resp);

    });

  }

}
