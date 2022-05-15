import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject , of } from 'rxjs';

import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      // distict faz pesq distintas, verifica se o termo anterior
      // é identico a novo requisição, se sim, não faz a requisição.
      distinctUntilChanged(),
      switchMap((termo: string) => {
        
        if(termo.trim() === '') {
          // retornar um observable de array fazio
          return of([])

        }
        return this.ofertasService.presquisaOfertas(termo)
      }))
      catchError((err: any) => {
        return of<Oferta[]>([]);
      })
    }

    public pesquisa(termoDaPesquisa : string) : void {
      this.subjectPesquisa.next(termoDaPesquisa);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}
