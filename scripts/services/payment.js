

var options = {
    "key": "rzp_test_AJMOyeCp1sgNXl",
    "amount": "50000", // Ensure 'amountValue' is a valid number
    "currency": "INR",
    "name": "Ichiba",
    "description": "Ichiba Transaction",
    "image": "https://example.com/your_logo",
    "handler": function (response){
        alert("Payment Done")
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": {
        "name": "Customer Name",
        "email": "Example@example.com", 
        "contact": "Your Number"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#255c5d"
    }
};

var rzp1 = new Razorpay(options);
rzp1.on('payment.failed', function (response){
        alert("Payment Fail")
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
});
document.getElementById('rzp-button1').onclick = function(e){
    // Dynamically importing calculateTotal function here
    import("../controller/productController.js").then(({ calculateTotal }) => {
        // Call calculateTotal function to get the total amount
        let amount = calculateTotal();
        console.log(amount);
        
        // Convert the amount to a string and assign it to the "amount" key in the options object
        options.amount = amount.toString();
        
        // Create a new instance of Razorpay with the updated options
        var rzp1 = new Razorpay(options);
        
        // Open the Razorpay payment modal
        rzp1.open();
    }).catch(error => {
        console.error("Error importing calculateTotal:", error);
    });
    e.preventDefault();
}
