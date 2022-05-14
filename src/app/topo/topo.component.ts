import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;
  public ofertas2!: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      // distict faz pesq distintas, verifica se o termo anterior
      // é identico a novo requisição, se sim, não faz a requisição.
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('requisição http para api');

        if(termo.trim() === '') {
          // retornar um observable de array fazio
          return of<Oferta[]>([])
        }
        return this.ofertasService.presquisaOfertas(termo)
      }))
      catchError((err: any) => {
        console.log(err)
        return of<Oferta[]>([]);
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => {
        this.ofertas2 = ofertas
      })
    }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter: ', termoDaBusca);

    this.subjectPesquisa.next(termoDaBusca);
  }


}
