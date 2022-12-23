// *for mobile menu

const openMobileMenu = document.querySelector('.open-mobile-menu');
const closeMobileMenu = document.querySelector('.close-mobile-menu');
const open = document.querySelector('.mobile-menu');
let backdrop = document.querySelector('.backdrop');

openMobileMenu.addEventListener('click', () => {
    open.classList.add('open');
    backdrop.classList.add('show-backdrop');
});
closeMobileMenu.addEventListener('click', () => {
    open.classList.remove('open');
    backdrop.classList.remove('show-backdrop');
});

// *for cart

const openCart = document.querySelector('.cart-logo');
openCart.addEventListener('click', () => {
    const cart = document.querySelector('.cart');
    cart.classList.toggle('open-cart');
})

// *add product to the cart

const addToCartProducts = document.querySelector('.add-to-cart-products');


const addToCart = document.querySelector('#add');

addToCart.addEventListener('click', (minus, plus, previous, next) => {

    if(numberOfItems.innerText == 0){
        const redAlert = document.querySelector('.how-many-items')
        redAlert.style.outline = '2px solid red';

        setTimeout(() => redAlert.style.outline = 'unset', 3000);
        return;
    }

    const divContainer = document.createElement('div');
    divContainer.classList = 'product-container';
    addToCartProducts.appendChild(divContainer);

    const divCartProductInfo = document.createElement('div');
    divCartProductInfo.classList = 'cart-product-info';
    divContainer.appendChild(divCartProductInfo);

    const cartProductPicture = document.createElement('img');
    cartProductPicture.classList = 'cart-product-picture';
    cartProductPicture.src = 'images/image-product-1.jpg';
    divCartProductInfo.appendChild(cartProductPicture);

    const div = document.createElement('div');
    cartProductPicture.insertAdjacentElement('afterend', div);

    const pNameOfProduct = document.createElement('p');
    pNameOfProduct.innerHTML = 'Fall Limited Edition Sneaker';
    pNameOfProduct.style.fontSize = '15px';
    div.appendChild(pNameOfProduct);


    // *this is for calculation of price in the cart

    const productPrice = document.querySelector('.product-price');

    const pPrice = document.createElement('p');
    let totalPrice = 125 * parseInt(numberOfItems.innerText);
    pPrice.innerHTML = `${productPrice.innerHTML} x ${numberOfItems.innerText } <b>$${totalPrice}.00</b>`;
    pPrice.style.fontSize = '16px';
    div.appendChild(pPrice);

    // *this code is for deleting add to cart product

    const deleteButton = document.createElement('img');
    deleteButton.src = 'images/icon-delete.svg';
    deleteButton.className = 'delete pointer hover';

    div.insertAdjacentElement('afterend', deleteButton);

    let cartProductCount = document.querySelector('.cart-product-count');
    let cartItemsCount = addToCartProducts.childElementCount;
    

    // *when cart have items 
    if(cartItemsCount > 0){
        document.querySelector('.no-item-message').style.display = 'none';
        document.querySelector('#cart-button').style.display = 'block';
        cartProductCount.style.display = 'block';
        cartProductCount.innerText++;
    }
    
    deleteButton.addEventListener('click', () => {
        deleteButton.parentElement.remove();

        let cartCount = parseInt(cartProductCount.innerText);
        

        // *when there are no items in the cart
        if(cartCount === 1){
            cartProductCount.style.display = 'none';
            document.querySelector('#cart-button').style.display = 'none';
            document.querySelector('.no-item-message').style.display = 'block';
        }
        cartProductCount.innerText--;

    });


});

// *for images carousel for mobile

let previous = document.querySelector('.previous');
const images = document.querySelectorAll('.product-images-mobile img');
let previousItem = document.querySelector('.previous-item');
const next = document.querySelector('.next');

let count = 0;

const prev = document.querySelector('.product-images-mobile');

previous.addEventListener('click', () =>{
    
    count--;

    prev.style.transform = 'translateX(' + (-100  * count) +'%)';
    prev.style.transition = 'all .3s ease';

    if(count < 0){
            prev.style.transform = 'translateX(' + (-100  * 3) +'%)';
            count = 3;
    }    
})

const nextSlide = document.querySelector('.product-images-mobile');

next.addEventListener('click', () =>{

    count++;

    nextSlide.style.transform = 'translateX(' + (-100  * count) +'%)';
    nextSlide.style.transition = 'all .3s ease';

     if (count === 4) {
        nextSlide.style.transform = 'translateX(' + (-100  * 0) +'%)';
            count = 0;
    }
    
});


// *this is for how many products you want to buy

    let minus = document.querySelector('.minus');
    let plus = document.querySelector('.plus');
    let numberOfItems = document.querySelector('.number-of-items');
    
minus.addEventListener('click', () =>{
    if(numberOfItems.innerText == 0){
        return;
    }
    else{
        numberOfItems.innerText = parseInt(numberOfItems.innerText) - 1;
    }
});

plus.addEventListener('click', () =>{
    numberOfItems.innerText = parseInt(numberOfItems.innerText) + 1;
});

// *tablet and desktop images slideshow

const pictureThumbnails = document.querySelectorAll('.picture-thumbnail');
const currentImage = document.querySelector('#one')
pictureThumbnails.forEach(pictureThumbnail => pictureThumbnail.addEventListener('click', () => {

    if(pictureThumbnail.id == 'thumb1'){
        currentImage.src = 'images/image-product-1.jpg';
    }
    else if(pictureThumbnail.id == 'thumb2'){
        currentImage.src = 'images/image-product-2.jpg';
    }
    else if(pictureThumbnail.id == 'thumb3'){
        currentImage.src = 'images/image-product-3.jpg';
    }
    else{
        currentImage.src = 'images/image-product-4.jpg';
    }
}));

//********************lightbox*******************************

const lightBoxClose = document.querySelector('.lightbox-close');
const lightbox = document.querySelector('.lightbox');

//open the lightbox
currentImage.addEventListener('click', () => {
    if(window.innerWidth < 1024)return;
    else{
    lightbox.style.display = "block";
    }
});

// close the lightbox
lightBoxClose.addEventListener('click', () => {
    lightbox.style.display = "none";
});

// lightbox carousel

let lightboxPrevious = document.querySelector('.lightbox-previous');
const lightboxNext = document.querySelector('.lightbox-next');

let counter = 0;

const lightboxPrev = document.querySelector('.lightbox-product-images-mobile');

lightboxPrevious.addEventListener('click', () =>{
    counter--;
    
    lightboxPrev.style.transform = 'translateX(' + (-420  * counter) +'px)';
    lightboxPrev.style.transition = 'transform .3s ease';

    if(counter < 0){
        lightboxPrev.style.transform = 'translateX(' + (-420  * 3) +'px)';
            counter = 3;
    }    
})

const lightboxNextSlide = document.querySelector('.lightbox-product-images-mobile');

lightboxNext.addEventListener('click', () =>{
    counter++;

    console.log(lightboxNextSlide.style.transform = 'translateX(' + (-420 * counter) +'px)');
    lightboxNextSlide.style.transition = 'transform .3s ease';

     if (counter === 4) {
        lightboxNextSlide.style.transform = 'translateX(' + (-420  * 0) +'px)';
            counter = 0;
    }
    
});
const lightboxImages = document.querySelector('.lightbox-product-images-mobile');
const lightboxPictureThumbnails = document.querySelectorAll('.lightbox-picture-thumbnail');
lightboxPictureThumbnails.forEach(lightboxPictureThumbnail => lightboxPictureThumbnail.addEventListener('click', () => {

    lightboxImages.style.transition = 'transform .3s ease';
    if(lightboxPictureThumbnail.id == 'thumb1'){
        lightboxImages.style.transform = 'translateX(' + (-420 * 0) +'px)';
    }
    else if(lightboxPictureThumbnail.id == 'thumb2'){
        lightboxImages.style.transform = 'translateX(' + (-420 * 1) +'px)';
    }
    else if(lightboxPictureThumbnail.id == 'thumb3'){
        lightboxImages.style.transform = 'translateX(' + (-420 * 2) +'px)';
    }
    else{
        lightboxImages.style.transform = 'translateX(' + (-420 * 3) +'px)';
    }
}));
