//cijene soba u danom formatu
let pricelist = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },

    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },

    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },

    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
  ]
  
  
  function logPricelist(cijene) {
    let a = logPricelist3(cijene)
    datumiprikaz(a)
  }
  
   function logPricelist2(cijene) {
    let a = {}
    cijene.forEach((priceData) => {
       a[priceData.price] = a[priceData.price] || []

       a[priceData.price].push([priceData.from, priceData.to])
     })
    return a
   }
  
   //reduce funkcija
  function logPricelist3(cijene) {
    return cijene.reduce((b, priceData) => {
       b[priceData.price] = b[priceData.price] || []

       b[priceData.price].push([priceData.from, priceData.to])
       return b
     }, {})
   }
  
  function datumiprikaz(a) {
    Object.getOwnPropertyNames(a).sort().forEach((price) => {      
      let datumiprikaz = a[price].map((from_to) => from_to.join(" do ")).join(" , ")


      console.log(price, " : ", datumiprikaz)
    })
  }
  
  logPricelist(pricelist)
