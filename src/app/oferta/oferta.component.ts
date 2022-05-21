import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import {CarrinhoService} from '../carrinho.service';

import { Pedido } from '../shared/pedido.model';
@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertasPorId(parametros['id'])
      .then((oferta: any) => {
        this.oferta = oferta;
      })

    })
  }

  ngOnDestroy() {

  }

  adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(oferta)
  }

}
