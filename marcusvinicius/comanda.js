const comanda = [
  {pedido: "Torresmo", preco: 40.50, quantidade: 1},
  {pedido: "Bebida", preco: 7.50, quantidade: 5},
  {pedido: "Batata Frita", preco: 38.00, quantidade: 1},
  {pedido: "Chopp", preco: 12.00, quantidade: 2},
];

let valortotal = 0;

for (const item of comanda) {
  valortotal += item.preco * item.quantidade;
}

const valorcomacrescimo = valortotal * 1.10;

console.log("Total consumido: R$", valortotal.toFixed(2));
console.log("Total com 10%: R$", valorcomacrescimo.toFixed(2));
