<template>
	<body class="bg-gray-100 overflow-y-hidden" style="height: 700px">
		<div class="w-full h-full  bg-opacity-90  overflow-y-auto overflow-x-hidden " id="">
			<div class="w-full   h-full overflow-x-hidden ">
				<div class="flex items-end lg:flex-row flex-col justify-end" id="cart">
					
					<div class=" bg-white    h-full">

						<div class="flex flex-col lg:h-screen h-auto  md:px-5  py-2 justify-between ">
							<div>
						
								<div class="flex items-center justify-between ">
									<p class="text-base leading-none text-gray-400"> ID:</p>
									<input type="text" 	class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								<br class=" w-full  h-[2px]">

								<div class="flex items-center justify-between pt-2">
									<p class="text-md leading-none text-gray-800 ">Total Amount:</p>
									<input type="text" 
										class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								<div class="flex items-center justify-between pt-5">
									<p class="text-md leading-none text-gray-800">Order ID:</p>
									<input type="text" 
										class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								<div class="flex items-center justify-between pt-5 ">
									<p class="text-base leading-none text-gray-800">Payment Method</p>
									<input type="text" 
										class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								<div class="flex items-center justify-between pt-5">
									<p class="text-base leading-none text-gray-800">Transection ID:</p>
									<input  type="text"
										class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								<div class="flex items-center justify-between pt-5 ">
									<p class="text-base leading-none text-gray-800">Cunstomer Name:</p>
									<input  type="text"
										class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								<div class="flex items-center justify-between pt-5 ">
									<p class="text-base leading-none text-gray-800">Address:</p>
									<input  type="text"
										class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								<div class="flex items-center justify-between pt-5 ">
									<p class="text-base leading-none text-gray-800">Phone Number:</p>
									<input  type="text"
										class="border-b-2 border-cyan-500 bg-gray-100">
								</div>
								
							</div>
							<div>
								<button class="text-base leading-none w-full py-5   hover:bg-blue-600 bg-blue-500 border-white border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">Back</button>
							</div>
						</div>

						
					</div>
					<div class="lg:w-2/2 md:w-10/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white overflow-y-auto overflow-x-hidden lg:h-screen h-auto">
						<div >
							<div 	class="md:flex items-stretch  md:pt-2  border-b  border-gray-300">
								<div class="md:w-4/12 2xl:w-1/4 w-full">
									<!-- Product Image -->
									<img  src="http://127.0.0.1:8000/storage/products/jqOzeyIkMmLclAykF5pJkPmlRaPvHlz4kjdyoW8m.jpg" alt=""
										class="w-[120px] h-[120px] object-center object-cover md:block hidden" />
								</div>
								<div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
									<div class="flex items-center justify-between w-full ">
										<!-- Product Name -->
										<p class="text-base font-black leading-none text-gray-800">
										</p>
										<div class=" px-1 mr-6 focus:outline-none text-base font-black">
											<!-- Total Quantity -->
											Total Quantity: <span class="text-blue-600 pl-2">  pcs</span>
										</div>
									</div>
									<!-- Product Details -->
									<p class="text-xl leading-3 font-semibold text-gray-600 "> 
									</p>
									<p class="text-md leading-3 text-gray-600 py-4">Color: </p>
									<p class="text-md leading-3 text-gray-600 ">Price : $ </p>

									<div class="flex items-center justify-between pt-2">
										
										<!-- Total Price for the Product -->
										<p class="text-base font-black leading-none  pb-3 text-gray-800">Total Price
											<span class="text-green-500 px-4">$</span>
										</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</body>
</template>

<script>
import axios from 'axios';

export default {
	name: "Payment",
	data() {
		return {
			orderid: [],
			orders: [],
			paymentData: {
				user_id: '',
				order_id: '',
				amount: '',
				paymentMethod: '',
				transactionId: '',
				customerName: '',
				address: '',
				phoneNumber: ''
			}
		};
	},
	methods: {
		getImageUrl(relativePath) {
			const baseUrl = 'http://127.0.0.1:8000/storage/';
			return baseUrl + relativePath;
		},
		getOrderId() {
			const apiUrl = 'http://127.0.0.1:8000/api/auth/orders';
			axios.get(apiUrl)
				.then((response) => {
					this.orderid = response.data.data;
					console.log(this.orderid)
				})
				.catch((error) => {
					console.error('There has been a problem with your fetch operation:', error);
				});
		},
		fetchItemsFromAPI() {
			const apiUrl = 'http://127.0.0.1:8000/api/auth/orders';
			axios.get(apiUrl)
				.then((response) => {
					if (response.data.data && response.data.data.length > 0) {
						this.orders = response.data.data;
					} else {
						console.log('No orders found');
						this.emptyCart();
					}
				})
				.catch((error) => {
					console.error('There has been a problem with your fetch operation:', error);
				});
		},
		addToCartMore(detail) {
			detail.qty += 1;
			detail.total_price = detail.qty * detail.price;
			// Optionally update the server
			this.updateOrderDetailOnServer(detail);
		},

		updateOrderDetailOnServer(detail) {
			const orderdetail = {
				product_id: detail.product_id, // Changed from detail.id to detail.product_id
				qty: 1,
				price: detail.price
			};

			console.log('Order item being added:', orderdetail);
			const authToken = localStorage.getItem('user_id');
			const userId = Number(authToken);
			const apiUrl = 'http://127.0.0.1:8000/api/auth/orders';
			const orderData = {
				user_id: userId,
				order_details: [orderdetail]
			};

			axios.post(apiUrl, orderData)
				.then(response => {
					console.log('Order added successfully:', response.data);
				})
				.catch(error => {
					console.error('Error adding order:', error);
				});
		},
		removeItemOneOrder(orderId, productId) {
			const userId = localStorage.getItem('user_id'); // Retrieve user_id from localStorage
			axios.post('http://127.0.0.1:8000/api/auth/order/remove-item', {
				user_id: userId,
				order_id: orderId,
				product_id: productId
			})
				.then(response => {
					console.log('Item removed successfully:', response.data);
					// Update your local 'orders' data to reflect the change
					this.fetchItemsFromAPI(); // Reload the orders data
				})
				.catch(error => {
					console.error('Error removing item from order:', error);
				});
		},
		removeItemFromOrder(orderId, productId) {
			const userId = localStorage.getItem('user_id');
			if (!userId) {
				console.error('User ID not found in localStorage');
				return;
			}
			// Define the data to be sent
			const requestData = {
				user_id: userId,
				order_id: orderId,
				product_id: productId
			};
			// Send request to the backend to remove the item for a specific user
			axios.delete('http://127.0.0.1:8000/api/auth/remove-product-from-order', { data: requestData })
				.then(response => {
					console.log('Item removed successfully:', response.data);
					// Update your local 'orders' data to reflect the change
					this.fetchItemsFromAPI(); // Reload the orders data
				})
				.catch(error => {
					console.error('Error removing item from order:', error);
				});
		},
		processPayment() { 
	       if (!this.paymentData.user_id || !this.paymentData.order_id || !this.paymentData.amount) 
		    {
              console.error('Payment failed: user_id, order_id, and amount are required');
               return;
            }
			axios.post('http://127.0.0.1:8000/api/auth/payments', {
				user_id: this.paymentData.user_id,
				order_id: this.paymentData.order_id,
				amount: this.paymentData.amount,
				payment_method: this.paymentData.paymentMethod,
				transaction_id: this.paymentData.transactionId,
				customer_name: this.paymentData.customerName,
				address: this.paymentData.address,
				phone_number: this.paymentData.phoneNumber
			})
				.then(response => {
					console.log('Payment successful:', response.data);
					this.$router.push({ name: 'pos-order' });
					// Handle successful payment response
				})
				.catch(error => {
					console.error('Payment failed:', error);
					// Handle errors here
				});
		},
		
	},
	mounted() {
		this.fetchItemsFromAPI();
		this.getOrderId();
	},
	computed: {
		filteredOrders() {
			const currentUserID = parseInt(localStorage.getItem('user_id'), 10);
			// Filter orders by status and user_id
			return this.orders.filter(order =>
				order.status === 'pending' && parseInt(order.user_id, 10) === currentUserID);
		},
		filteredOrdersCart() {
			const currentUserID = parseInt(localStorage.getItem('user_id'), 10);
			// Filter orders by status and user_id
			return this.orders.filter(order =>
				order.status === 'pending' && parseInt(order.user_id, 10) === currentUserID);
		},

	},
};
</script>

<style>
button[disabled] {
  /* Style for disabled button */
  opacity: 0.5;
  cursor: not-allowed;
}
/* width */

#scroll::-webkit-scrollbar {
	width: 1px;
}

/* Track */

#scroll::-webkit-scrollbar-track {
	background: #f1f1f1;
}

/* Handle */

#scroll::-webkit-scrollbar-thumb {
	background: rgb(133, 132, 132);
}
</style>
