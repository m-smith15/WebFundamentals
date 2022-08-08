//cart alert
function cartClicked(){
    alert('Your cart is empty!');
}
//hover events - mouse over / mouse out
function changeImage(element){
    element.src="/images/assets/succulents-2.jpg"
}
function changeImageOriginal(element){
    element.src="/images/assets/succulents-1.jpg"
}
//dismiss the cookies notification
function cookieDismiss(){
    document.querySelector('.footer').remove();
}