import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';
import { Oferta } from 'src/app/shared/oferta.model';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = '';
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
    ) { }

  ngOnInit(){
    this.ofertasService.getOndeFicaOfertaPorId(this.route.parent!.snapshot.params['id'])
    .then((descricao: string) => {
      console.log(descricao);
      this.ondeFica = descricao
    })
  }

}
