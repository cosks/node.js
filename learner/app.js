//testing for Node to work
//an anonymous function:

var printMsg = function(){
	console.log("trial message!!");
};

//where we pass a function to a function
setTimeout(printMsg, 5000);

//*******************

function placeOrder(orderNumber){
	console.log("customer order: ",orderNumber)

	deliver(function (){
		console.log("Delivery made! Order: ",orderNumber);
	});

}
//simulate a 3 seconds operation
function deliver(callback){
	setTimeout(callback,3000);
}
//simulate users web request
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);