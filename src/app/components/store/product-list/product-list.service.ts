import { Injectable } from '@angular/core';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }

  getAllProducts(){
    return PRODUCTS
  }

  getById(id: string): Product{
    return PRODUCTS.find((productIterator: Product) => productIterator.id === id)!
  }

  search(input:string){
    let filteredProducts = PRODUCTS.filter((product: Product) => product.name.toLocaleLowerCase().indexOf(input.toLocaleLowerCase()) > -1)
    return filteredProducts
  }

  filterPrice(valueMin: string, valueMax: string){
    let filteredProductsByPrice = PRODUCTS.filter((product: Product) => +product.price > +valueMin && +product.price < +valueMax)
    return filteredProductsByPrice
  }

  buy(id:string, qty: number){
    let buyProduct = PRODUCTS.find((productIterator: Product) => productIterator?.id === id)
    buyProduct!.quantity -= qty
  }
}

var PRODUCTS = [
  {
    id: 'PR-001',
    name: 'Produto 01',
    price: '25.99',
    quantity: 268,
    category: 'Nome da Categoria',
    img: 'URL IMAGEM'
},
{
  id: 'PR-002',
  name: 'Produto 02',
  price: '59.99',
  quantity: 57,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-003',
  name: 'Produto 03',
  price: '299.99',
  quantity: 25,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-009',
  name: 'Produto 09',
  price: '1.99',
  quantity: 500,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-145',
  name: 'Produto 145',
  price: '98.99',
  quantity: 28,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-145',
  name: 'Produto 145',
  price: '98.99',
  quantity: 28,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-145',
  name: 'Produto 145',
  price: '98.99',
  quantity: 28,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-145',
  name: 'Produto 145',
  price: '98.99',
  quantity: 28,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-145',
  name: 'Produto 145',
  price: '98.99',
  quantity: 28,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},
{
  id: 'PR-145',
  name: 'Produto 145',
  price: '98.99',
  quantity: 28,
  category: 'Nome da Categoria',
  img: 'URL IMAGEM'
},]
