//set extra memory,storage and delivery cost
function setExtraPrice(costId, setCost) {
    const initialPrice = document.getElementById(costId);
    initialPrice.innerText = setCost;
    const getCostText = parseFloat(initialPrice.innerText);
    const total = totalPrice();

}
//get innerText
function getInnerText(price) {
    const innerPrice = document.getElementById(price);
    const innerPriceText = innerPrice.innerText;
    return innerPriceText;
}
//total price
function totalPrice() {
    const bestPriceText = getInnerText('best-price');
    const memoryCostText = getInnerText('memory-cost');
    const storageCostText = getInnerText('storage-cost');
    const deliveryCostText = getInnerText('delivery-cost');

    const previousTotalPrice = document.getElementById('total-price');
    const finalTotalPrice = parseFloat(bestPriceText) + parseFloat(memoryCostText) + parseFloat(storageCostText) + parseFloat(deliveryCostText);
    const bottomTotal = document.getElementById('bottom-total');
    previousTotalPrice.innerText = finalTotalPrice;
    bottomTotal.innerText = finalTotalPrice;
    return finalTotalPrice;
}
//get promo-code
function getPromoCode() {
    const promoCode = document.getElementById('promo-code');
    const promoCodeValue = promoCode.value;
    if (promoCodeValue == 'stevekaku') {
        let bottomPrice = totalPrice();
        bottomPrice = bottomPrice - bottomPrice * .2;
        document.getElementById('bottom-total').innerText = bottomPrice;
        promoCode.value = '';
    }
}

//8GB memory price
document.getElementById('eight-gb').addEventListener('click', function () {
    setExtraPrice('memory-cost', 0);
});
//16GB memory price
document.getElementById('sixteen-gb').addEventListener('click', function () {
    setExtraPrice('memory-cost', 180);
});

//256GB Storage cost
document.getElementById('256GB').addEventListener('click', function () {
    setExtraPrice('storage-cost', 0);
});
//512GB Storage cost
document.getElementById('512GB').addEventListener('click', function () {
    setExtraPrice('storage-cost', 100);
});
//1TB Storage cost
document.getElementById('1TB').addEventListener('click', function () {
    setExtraPrice('storage-cost', 180);
});
//free delivery
document.getElementById('free').addEventListener('click', function () {
    setExtraPrice('delivery-cost', 0);
});
//charged delivery
document.getElementById('charged').addEventListener('click', function () {
    setExtraPrice('delivery-cost', 20);
});
//apply for promo code
document.getElementById('apply-button').addEventListener('click', function () {
    getPromoCode();

});

