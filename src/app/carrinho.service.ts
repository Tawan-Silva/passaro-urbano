import { Injectable } from "@angular/core";
import ItemCarrinho from "src/item-carrinho.model";
import { Oferta } from "./shared/oferta.model";

@Injectable()
class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )
    // Verifica se o item em questão não existe dentro de this.itens
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)
    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quatidade += 1;
    }
    else {
      this.itens.push(itemCarrinho);
    }
  }
  public totalCarrinhoCompras(): number {
    let total: number = 0;
    this.itens.map((item: ItemCarrinho) => {
      total = total + (item.valor * item.quatidade)
    })
    return total
  }

  public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {

    // incrementar quatidade no item do carrinho
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quatidade += 1;
    }
  }

  public diminirQuantidade(itemCarrinho: ItemCarrinho): void {

    // decrementar quatidade no item do carrinho
    let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id == itemCarrinho.id)

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quatidade -= 1;

      if (itemCarrinhoEncontrado.quatidade === 0) {
        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado, 1))
      }
    }
  }
  public limparCarrino(): void {
    this.itens = [];
  }
}

export { CarrinhoService };
