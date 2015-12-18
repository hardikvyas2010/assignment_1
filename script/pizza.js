
function calculatecost () 		
	{	
	var psu = document.getElementById("pizza"); 
	var totalcostofpizza = 0; 
	var psize = "";
	var toppingcost = 0;
	var cheesepreference = "";
	var methodpayment = "";
	var deliverymode = "";
	var crust = "";
	

/* Calculation of total cost wrt pizza size */
	if (document.getElementById("sm").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("sm").value);
			psize = " Small $5.00";
	} 
	
	if (document.getElementById("me").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("me").value);
			psize = " Medium $8.00";
	} 
	
	if (document.getElementById("la").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("la").value);
			psize = " Large $10.00";
	} 
	
	if (document.getElementById("el").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("el").value);
			psize = " Extra Large $12.00";
	} 
	




/* Calculation of total cost wrt pizza crust */

	if (document.getElementById("handtossedpizza").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("handtossedpizza").value);
			crust = "Hand Tossed Pizza $1.00"
	}


	if (document.getElementById("panpizza").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("panpizza").value);
			crust = "Pan Pizza $1.00"
	}


	if (document.getElementById("thinncrispy").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("thinncrispy").value);
			crust = "Thin n Crispy $1.00"
	}





/* Calculation of total cost wrt cheese preference */

	if (document.getElementById("L").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("L").value);
			cheesepreference = "Light Cheese $0.50"
	}


	if (document.getElementById("M").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("M").value);
			cheesepreference = "Medium Cheese $0.50"
	}


	if (document.getElementById("E").checked)
	{
			totalcostofpizza = totalcostofpizza + parseFloat(document.getElementById("E").value);
			cheesepreference = "Extra Cheese $0.50"
	}





/* Calculation of total cost wrt pizza toppings */		
	for (var i = 0; i < psu.topping.length; i++) {
	if (psu.topping[i].checked) {

	toppingcost += parseFloat(psu.topping[i].value);
	totalcostofpizza += parseFloat(psu.topping[i].value)

	}

	}


/* Code fragment for Method of payment */
	if (document.getElementById("Cash").checked)
	{
	methodpayment = "Cash";		
	} 

	if (document.getElementById("Card").checked)
	{
	methodpayment = "Card";		
	} 


/* Code fragment for Pizza Delivery Mode */	
	if (document.getElementById("dine-in").checked)
	{
			deliverymode = "Dine-In";
	} 
	if (document.getElementById("delivery").checked)
	{
			deliverymode = "Delivery";
	}
	if (document.getElementById("pick-up").checked)
	{
			deliverymode = "Pick-up";
	}
	



/* Alert Message for displaying all customer and pizza order details */
	
alert ("Customer Information:" + "\n" + "Name: " + psu.cfirstname.value + " " + psu.clastname.value + "\nAddress: " + psu.caddress.value  + ", " + psu.ccity.value + " - " + psu.czip.value +  "\nContact Number: " + psu.cphone.value + "\nEmail: " + psu.cemail.value  + "\nComments : " + psu.message.value  + "\n" + "\nPizza Order Details"  + "\nPizza Size: " + psize +  "\nPizza Crust: " + crust +  "\nCost of toppings: $" + toppingcost  + "\nCheese Preference: " + cheesepreference  + "\nTotal price: $" + totalcostofpizza +  + "\nMethod of Payment: " + methodpayment + "\nDelivery Option: " + deliverymode);
return (true);
	}