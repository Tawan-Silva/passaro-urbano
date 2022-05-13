import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class OfertasService {
  http: any;

  constructor(private httpCliente: HttpClient){}

  public getOfertas(): Promise<Oferta[]> {
     return lastValueFrom(this.httpCliente.get('http://localhost:3000/ofertas?destaque=true'))
     .then((resposta: any) => {
      console.log(resposta);

      return resposta;
     })
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return lastValueFrom(this.httpCliente.get(`http://localhost:3000/ofertas?categoria=${categoria}`))
    .then((resposta: any) => {
      console.log("Enviado de getOfertasPorCategoria");
      return resposta;
    })
    .catch((error: string) => {
      console.log(error);

    })
  }
}
