document.addEventListener('DOMContentLoaded',()=>{
    const productList = document.getElementById('product-list')
    const cartItems = document.getElementById('cart-items')
    const emptyCartMsg = document.getElementById('empty-cart')
    const cartTotal = document.getElementById('cart-total')
    const totalPrice = document.getElementById('total-price')
    const checkoutBtn = document.getElementById('checkout-btn')
    let price = 0

    const cart = [];

    let productArr = [
        {id: 1, name: 'Product 1', price: 19.99, quantity: 0},
        {id: 2, name: 'Product 2', price: 29.99, quantity: 0},
        {id: 3, name: 'Product 3', price: 89.99, quantity: 0},
        {id: 4, name: 'Product 4', price: 44.99, quantity: 0}
    ]

    productArr.forEach(product => {
        let div = document.createElement('div')
        div.classList.add('product')
        div.innerHTML = `<p>${product.name} - $${product.price.toFixed(2)}</p>
                         <button data-id="${product.id}">Add to Cart</button>`
        productList.appendChild(div)
    })

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName === 'BUTTON'){
            emptyCartMsg.classList.add('hidden')
            cartTotal.classList.remove('hidden')
            const productID = parseInt(e.target.getAttribute("data-id"))
            const product = productArr.find(p => p.id === productID)
            price += product.price
            product.quantity++
            if(!cart.find(p => p.id === productID)){
                cart.push(product);
            }
            
            cartItems.innerHTML = `<p id="empty-cart" class="hidden">Your cart is empty.</p>`
            cart.forEach(product => {
                let p = document.createElement('p')
                p.innerText = `${product.name} (${product.quantity}) - $${product.price}`
                cartItems.appendChild(p)
            })

            totalPrice.innerText = `$${price.toFixed(2)}`
        }
    })

    checkoutBtn.addEventListener('click', (e)=>{
        alert('Checkout Successful!')
        location.reload()
    })

    function saveTask(){
        localStorage.setItem('cart', JSON.stringify(cart))
    }
})