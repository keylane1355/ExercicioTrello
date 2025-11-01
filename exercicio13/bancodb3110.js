// use("Exercicio01");
// db.autor.insertMany([
//     {nome: "Machado de Assis",Nacionalidade:"Brasileiro" },
//     {nome: "George Orwell",Nacionalidade:"Britânico" },
//     {nome: "Clarice Lispector",Nacionalidade:"Brasileira" },
//     {nome: "J.K Rowling",Nacionalidade:"Britânica" },
//     {nome: "Gabeiwl García Márquez",Nacionalidade:"Colombiano" }
    
// ])

//  db.livro.insertMany([
//      {titulo:"Dom Casmurro",autor:"Machado de Assis", ano:1899},
//      {titulo:"1984",autor:"George Orwell", ano:1949},
//      {titulo:"A Hora da Estrela",autor:"Clarice Lispector", ano:1977},
//      {titulo:"Harry Potter",autor:"J.K.Rowling", ano:1997},
//      {titulo:"Cem Anos de Solidão",autor:"Gabriel García Márquez", ano:1967}
//  ])
// use ("Execrcicio01")
// db.livro.updateOne(
//   { titulo: "Harry Potter" },      
//   { $set: { ano: 1998 } } 
// );

// use("Exercicio01")
//  db.livro.find(
//    { ano: { $lt: 1950 } }
//  );


//  use("Exercicio01")
//  db.autor.find(
//   { Nacionalidade: "Brasileiro" }
// );

// use("Exercicio01")
// db.livro.aggregate([
//    {
//     $lookup: {
//       from: "autor",
//       localField:"autor" ,
//       foreignField:"nome",
//       as: "infoautor"
//     } 
//    }
//  ]);

use("Exercicio02");
db.cliente.insertMany([
    {nome:"Ana",cidade:"São Paulo"},
    {nome:"Bruno",cidade:"Rio de janeiro"},
    {nome:"Carla",cidade:"Belo Horizonte"},
    {nome:"Daniel",cidade:"Curitiba"},
    {nome:"Elisa",cidade:"Porto Alegr"}
])

use("Exercicio02");
db.pedido.insertMany([
    {cliente:"ana",produto:"Notebook",valor:3500}
])