data.forEach((e, i) => {
    document.getElementById("product").innerHTML +=`
    <div class="div" id="${e.id}">
      <div class="img-prd" onclick="add(${e.id})"><img src="${e.picture}" height="150px"></div>
      <div class="product_name">${e.product_name}</div>
      <div class="priceStyle">${e.price}</div>
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
  
  document.getElementById("chart").innerHTML =''
  chart.forEach((e, i) => {
    document.getElementById("chart").innerHTML += `
    <div class="cart-item" id="${e.id}">
      <div class="img-cart" onclick="add(${e.id})"><img src="${e.picture}" height="100px"></div>
      <div class="desc">
        <div class="product_name-cart">${e.product_name}</div>
        <div class="quantity">
          <button class="min" onclick="min(${e.id})">-</button>
          <div class="qty">${e.qty}</div>
          <button class="plus" onclick="add(${e.id})">+</button>
          <div class="price">${e.price * e.qty}</div>
        </div>
      </div>
    </div>`
  })
  if (chart.length > 0){
    let total=0
    chart.forEach ((e)=>{
        total += e.price * e.qty
        document.getElementById("total").innerHTML = `
        <div class="position-fixed bottom-0">
            <div class="row ms-2">
                <div class="col-6 fw-bold price"> Total</div>
                <div class="col-6 d-flex justify-content-end fw-bold pe-3 price">${total}</div>
                <p class="fw-normal fs-15 mb-2 mt-1">*Belum Termasuk ppn</p>
            </div>
            <div class="d-flex flex-column checkout ms-2">
                <button onclick="" class="mb-3 p-2 blue "data-bs-toggle="modal" data-bs-target="#exampleModal">CheckOut</button>
                <button onclick="selected()" class="p-2 mb-3 pink">Cancel</button>
            </div>
            
        </div>`
    })
}else {
    document.getElementById("total").innerHTML = `
        <div class="d-flex mt-4 flex-column align-items-center">
        <img src="./photo/food-and-restaurant.png" width="150px" height="auto" >
        <h1 class="TittleEmpty fw-normal mt-2 mb-0">Your Cart is Empty</h1>
        <p class="Textempty"> Please add some items from the menu</p>
    </div>`
}; 
  
}


const selected = () =>{
  total = 0
  chart = []
 getTocart()
 
}
const decrement = (id) =>{
 
    same = chart.findIndex((dec => dec.id === id))
    if (chart[same].qty <= 1) {
      chart.splice([same],1)
    }else{
      chart[same].qty  -= 1
    }
  }
  const min = (id) =>{
    decrement(id)
    getTocart()
    total()
}

// const getEmpty = () =>{
 
//     document.getElementById('cartEmpty').innerHTML =`
//     <img class="empty-img" src="./photo/food-and-restaurant.png" alt="">
//           <h4 class="empty-text">Your cart is empty</h4>
//           <p class="empty-text1">Please add some items from the menu</p>`
    

// }
// getEmpty()