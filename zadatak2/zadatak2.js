
//cijene soba u danom formatu
var pricelist = [
    {from: "2020-01-01", to: "2020-02-01", price: 34.5},

    {from: "2020-02-02", to: "2020-03-01", price: 37.0},

    {from: "2020-03-02", to: "2020-05-15", price: 39.0},

    {from: "2020-05-16", to: "2020-06-15", price: 37.0},
   ];

function logPricelist(pricelist) {
    let a = {};
    pricelist.forEach(function(cijena) {
        a[cijena.price] ? a[cijena.price].push(` ${cijena.from} do ${cijena.to}`) : a[cijena.price] = [`${cijena.from} do ${cijena.to}`];
    })

    //sort
    Object.keys(a).sort()
      .forEach((sorted) =>{
          console.log(`${sorted}:`, a[sorted].toString());
       });
}

logPricelist(pricelist)
