data.forEach((e, i) => {
    document.getElementById("product").innerHTML +=`
    <div class="div" id="${e.id}">
      <div class="img-prd" onclick="add(${e.id})"><img src="${e.picture}" height="150px"></div>
      <div class="product_name">${e.product_name}</div>
      <div class="priceStyle">${e.priceStyle}</div>
    </div>`
   
  });

const add = (id) => {
  const object = data.find((e) => {
    if(e.id === id){
      return e 
    }
  })
  if (chart.length >= 1) {
    same = chart.findIndex((cart => cart.id === object.id))
    if (same >= 0) {
      chart[same].qty  += 1
    }else{
      chart.push(object)
    }
  }else{
    chart.push(object)
  }
  document.getElementById("chart").innerHTML ='' 
  getTocart()
}
const getTocart = () => {
  chart.forEach((e, i) => {
    document.getElementById("chart").innerHTML += `
    <div class="cart-item" id="${e.id}">
      <div class="img-cart" onclick="add(${e.id})"><img src="${e.picture}" height="100px"></div>
      <div class="desc">
        <div class="product_name-cart">${e.product_name}</div>
        <div class="quantity">
          <button class="min" onclick="decrement(${e.id})">-</button>
          <div class="qty">${e.qty}</div>
          <button class="plus" onclick="add(${e.id})">+</button>
          <div class="price">${e.price * e.qty}</div>
        </div>
      </div>
    </div>`
  }); 
}
let chartobj = chart[length]

const selected = () =>{
  document.getElementById("chart").innerHTML =''
}
const decrement = (id) =>{
    const newcart = chart.map((e) =>{
        if (e.id === id) {
          return {
            id: e.id,
            name: e.product_name,
            price : e.price,
            qty: e.qty - 1
          }
        }else{
          return e
        }
        
    })
    chart = newcart
}