var shopInfo = {
    shop_name : "Bench",
    shop_address : "SM Masinag, Antipolo City",
    shop_code : "SMA001",
    userInfo : [
        {
            firstname : "Roxanne",
            surname : "Mendoza",
            age : 24,
            birthday : "9/7/1998"
        },
        {
            firstname : "Alyssa",
            surname : "Santos",
            age : 27,
            birthday : "5/18/1996"
        }
        ],
    clothingItems : [
        {
            item_name : "Bench Blue Polo",
            category : "Shirt",
            price : 500,
            stock : 2
        },
        {
            item_name : "Penshoppe Pink Polo",
            category : "Shirt",
            price : 700,
            stock : 4
        },
        {
            item_name : "Addidas Yellow Shirt",
            category : "Shirt",
            price : 300,
            stock : 7
        }

    ]
};
function addUser(info){ // Add new user
        shopInfo.userInfo.push(info);
        console.log(info.firstname + " "+ info.surname + " has been added");
};

function findRestock(){//Finding items that need to restocked
    const itemRestock = shopInfo.clothingItems.filter((item) => item.stock < 3); //Finding stock in less than 3
    const selectItem = itemRestock.forEach((item) =>{//Accessing the itemRestock object to select the item_name and stock
        console.log(`The item need to restock is: ${item.item_name} with remaining stock of: ${item.stock}`);
    })
    return selectItem;
}

function addItems(itemName,quantity){ // Adding new stocks of selected low stocks
    const item = shopInfo.clothingItems.find((item) => item.item_name === itemName);
    item.stock += quantity;
    if (!item){
        console.log(`Item ${itemName} not found in our stocks`);
        return;
    }
    console.log(`You added ${quantity} ${itemName} to our inventory. New stock is: ${item.stock}`);
}

var isLoggedIn = false;
const userCart = [];
var cartCount = null;
function loggedIn(firstName, lastname, qty, addToCart){ // Function for User log in
    shopInfo.userInfo.forEach((element, index) => {
        if (element.firstname == firstName && element.surname == lastname){ //When the user info is logged. Item is added to the cart
            isLoggedIn = true;
            userID = index
            console.log(`Welcome ${element.firstname} ${element.surname}!`)
            cartCount += qty
            userCart.push(addToCart);
            console.log(`You added this item to the cart: ${qty} pcs of ${userCart} `);
        }
    });
    if(!isLoggedIn){
        console.log("Invalid Credentials!");
    }
}

let orderConfirmed = false;
function confirmOrder(yesNo){ // Function for order confirmation
    if (yesNo === "Yes"){
        orderConfirmed = true;
        console.log("Order confirmed!");
    }else if(yesNo === "No"){
        orderConfirmed = false;
        console.log("Order cancelled");
    }else{
        console.log("Invalid input. Please choose Yes or No for confirmation")
    }
}

function deductItems(){ //Function for total deduction to stocks
    const item = shopInfo.clothingItems.find((item) => item.stock);
    let stocks = item.stock - cartCount
    console.log(`You deducted ${cartCount} ${userCart} in our stocks. Your remaining stocks is ${stocks}`);
}


function printReceipt(cashPayment){ //Function for printing of receipt
    var qtyPrice = shopInfo.clothingItems.find((item) => item.price);
    var quantity = cartCount;
    const total = qtyPrice.price * quantity;
    const change = cashPayment - total;
    console.log(`----Receipt----`);
    console.log(`*************************`);
    console.log(`Item: ${userCart}`);
    console.log(`Qty: ${cartCount} x Price: ₱${qtyPrice.price.toFixed(2)}`);
    console.log(`Total Amount: ₱${total.toFixed(2)}`);
    console.log(`*************************`);
    console.log(`You pay ${cashPayment} cash`);
    if (change <= 0){
        console.log(`Your cash is not enough to pay ₱${total.toFixed(2)}`);
        console.log(`You are ₱${change.toFixed(2)} short`);
    }else{
        console.log(`Your change is ₱${change.toFixed(2)}`);
        console.log(`Happy Shopping! 😊`);
    }
    console.log(`*************************`);
}



//FUNCTION CALL TO ALL FUNCTION
addUser({ //Function call for adding new user object
    firstname : "Sarah",
    surname : "Rule",
    age : 25,
    birthday : "9/28/1997"
})
console.log("=============================");

findRestock();//Function call for Finding items that need to restocked
console.log("=============================");

addItems("Bench Blue Polo", 30); //Function call for Adding new stocks of selected low stocks
addItems("Penshoppe Pink Polo", 27); //Function call for Adding new stocks of selected low stocks
addItems("Addidas Yellow Shirt", 23); //Function call for Adding new stocks of selected low stocks
console.log("=============================");


loggedIn("Roxanne", "Mendoza", 2, "Bench Blue Polo"); //Function call for User log in
console.log("=============================");

confirmOrder("Yes"); //Function call for order confirmation
console.log("=============================");

deductItems();//Function call for total deduction to stocks
console.log("=============================");

printReceipt(1500);//Function call for printing of receipt