class ItemCarrinho {
  constructor(
    public id: number,
    public img: string,
    public titulo: string,
    public descricao_oferta: string,
    public valor: number,
    public quatidade: number,
  ) {}
}

export default ItemCarrinho;
