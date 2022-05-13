import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class OfertasService {

  constructor(private httpCliente: HttpClient){}

  public getOfertas(): Promise<any> {
     return lastValueFrom(this.httpCliente.get('http://localhost:3000/ofertas?destaque=true'))
     .then((resposta) => {
     return resposta
     })
  }
}
