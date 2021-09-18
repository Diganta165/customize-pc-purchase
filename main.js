//Cost Handle
function allProductCostHandle(productId, productPrice){
    const productCost = document.getElementById(productId + '-cost');
    let productCostValue = productCost.innerText;
 
    //initializing product price
        if(productPrice == 180){
            productCostValue = 180;
        }
        else if(productPrice == 100){
            productCostValue = 100;
        }
        else if(productPrice == 20){
            productCostValue = 20;
        }
        else if(productPrice == 0){
            productCostValue = 0;
        }

    productCost.innerText = productCostValue;
    totalCost();
}

//Total Cost

function totalCost(){
    let totalCost = document.getElementById('total-price');
    let totalCostBottom = document.getElementById('total-price-bottom');

    const bestPrice = document.getElementById('best-price');
    const bestPriceValue = bestPrice.innerText;

    const memoryCost = document.getElementById('memory-cost');
    const memoryCostValue = memoryCost.innerText;

    const storageCost = document.getElementById('storage-cost');
    const storageCostValue = storageCost.innerText;

    const deliveryCost = document.getElementById('delivery-cost');
    const deliveryCostValue = deliveryCost.innerText;

    //Total Cost
    totalCost.innerText = parseInt(bestPriceValue) + parseInt(memoryCostValue) + parseInt(storageCostValue) + parseInt(deliveryCostValue);

    //Setting total Cost at Bottom Section
    totalCostBottom.innerText = totalCost.innerText;
    
}



//Memory Cost Event Handler
document.getElementById('8GB-memory').addEventListener('click',function(){

    allProductCostHandle('memory', 0);
});
document.getElementById('16GB-memory').addEventListener('click',function(){

    allProductCostHandle('memory', 180);
});


//Storage Cost Event Handler
document.getElementById('256GB-SSD').addEventListener('click',function(){

    allProductCostHandle("storage", 0);
});
document.getElementById('512GB-SSD').addEventListener('click',function(){

    allProductCostHandle("storage", 100);
});
document.getElementById('1TB-SSD').addEventListener('click',function(){

    allProductCostHandle("storage", 180);
});


//Shipment Cost Event Handler
document.getElementById('free-cost').addEventListener('click',function(){

    allProductCostHandle('delivery', 0)
});
document.getElementById('notFree-cost').addEventListener('click',function(){

    allProductCostHandle('delivery', 20)
});


//Promo Code Event Handler
document.getElementById('promoCode-button').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    
    //Check Promo Code
    if(inputField.value == 'stevekaku'){
        const totalCostBottom = document.getElementById('total-price-bottom');
        const totalCostBottomValue = totalCostBottom.innerText;

        let totalCost = document.getElementById('total-price');
        let totalCostValue = totalCost.innerText;

        const afterDiscount = parseInt(totalCostValue) - (parseInt(totalCostValue) * 0.2);
        totalCostBottom.innerText = afterDiscount;

        //Clear Promo Code Input Field
        inputField.value = '';
    }
    
})