import { Oferta } from './shared/oferta.model';

export class OfertasService {
  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: 'restaurante',
      titulo: 'Super Burger',
      descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
      anunciante: 'Original Burger',
      valor: 29.9,
      destaque: true,
      imagens: [
          '/assets/ofertas/1/img1.jpg',
          '/assets/ofertas/1/img2.jpg',
          '/assets/ofertas/1/img3.jpg',
          '/assets/ofertas/1/img4.jpg',
      ],
    },

    {
      id: 2,
      categoria: 'restaurante',
      titulo: 'Cozinha Mexicana',
      descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
      anunciante: 'Mexicana',
      valor: 32.9,
      destaque: true,
      imagens: [
       '/assets/ofertas/2/img1.jpg',
       '/assets/ofertas/2/img2.jpg',
       '/assets/ofertas/2/img3.jpg',
       '/assets/ofertas/2/img4.jpg',
      ],
    },
    {
      id: 3,
      categoria: 'diversao',
      titulo: 'Estância das águas',
      descricao_oferta:
        'Diversão garantida com piscinas, trilhas e muito mais.',
      anunciante: 'Estância das águas',
      valor: 31.9,
      destaque: true,
      imagens: [
        '/assets/ofertas/3/img1.jpg',
        '/assets/ofertas/3/img2.jpg',
        '/assets/ofertas/3/img3.jpg',
        '/assets/ofertas/3/img4.jpg',
        '/assets/ofertas/3/img5.jpg',
        '/assets/ofertas/3/img6.jpg',
      ],
    },
  ];

  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }
  public getOfertas2(): Promise<Oferta[]> {
    return new Promise((resolve, reject) => {
      console.log('passou aqui!');
      let deuCerto = false;
      if(deuCerto) {
        resolve(this.ofertas)
      }
      else {
        reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado!'})
      }
    })
  }
}
