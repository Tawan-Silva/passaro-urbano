import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { lastValueFrom } from 'rxjs';
import { URL_API } from './app.api';
@Injectable()
export class OfertasService {

  constructor(private httpCliente: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    return lastValueFrom(
      this.httpCliente.get(`${URL_API}/ofertas?destaque=true`)
    ).then((resposta: any) => {
      console.log(resposta);

      return resposta;
    });
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return lastValueFrom(
      this.httpCliente.get(
        `${URL_API}/ofertas?categoria=${categoria}`)
        )
      .then((resposta: any) => {
        console.log('Enviado de getOfertasPorCategoria');
        return resposta;
      })
      .catch((error: string) => {
        console.log(error);
      });
  }

  public getOfertasPorId(id: number): Promise<Oferta[]> {
    return lastValueFrom(
    this.httpCliente.get(
      `${URL_API}/ofertas?id=${id}`)
      )
      .then((resposta: any) => {
        return resposta.shift();
      })
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return lastValueFrom(this.httpCliente.get(`${URL_API}/como-usar?id=${id}`))
    .then((descricao: any ) => {
      return descricao[0].descricao;
    })
  }
  
  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return lastValueFrom(this.httpCliente.get(`${URL_API}/onde-fica?id=${id}`))
    .then((descricao: any ) => {
      return descricao[0].descricao;
    })
  }
}
