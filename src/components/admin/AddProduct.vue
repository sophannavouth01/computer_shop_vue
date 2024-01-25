<template>
	<div class="bg-white">
	  <div class="container mx-auto">
		<div class="md:flex no-wrap md:-mx-2">
		  <!-- Left Side -->
		  <div class="w-full md:w-6/12 md:mx-2">
			<div class="bg-white">
			  <img class="h-[450px] w-full" src="../../../public/images/apple-1868496_1280.jpg" alt="Product Image">
			</div>
		  </div>
		  <!-- Right Side -->
		  <div class="w-full md:w-6/12 mx-2">
			<!-- Form for Adding a Product -->
			<div class="bg-white shadow-sm rounded-sm">
			  <h1 class="text-center py-5 text-lg font-semibold">Add Product</h1>
			  <hr class="mx-[100px]">
			  <form @submit.prevent="AddProduct" class="mt-5">
				<!-- Form Fields -->
				<div class="flex flex-wrap -mx-3 mb-6">
				  <div class="w-full px-3 mb-6 md:mb-0">
					<input type="text" class="w-full p-3 border-b-2" placeholder="Barcode" v-model="Product.bcode">
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<input type="text" class="w-full p-3 border-b-2" placeholder="Product Name" v-model="Product.pname">
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<select class="w-full p-3 border-b-2" v-model="Product.brandname">
					  <option value="" disabled>Select Brand</option>
					  <option value="Apple">Apple</option>
					  <option value="Asus">Asus</option>
					  <option value="MSI">MSI</option>
					  <option value="Dell">Dell</option>
					</select> 
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<input type="number" class="w-full p-3 border-b-2" placeholder="Quantity" v-model.number="Product.qty">
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<input type="number" class="w-full p-3 border-b-2" placeholder="Price" v-model.number="Product.price">
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<input type="text" class="w-full p-3 border-b-2" placeholder="Color" v-model="Product.color">
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<select class="w-full p-3 border-b-2" v-model="Product.category">
					  <option value="" disabled>Select Category</option>
					  <option value="Laptop">Laptop</option>
					  <option value="Desktop">Desktop</option>
					  <option value="Accessory">Accessory</option>
					</select>
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<input type="text" class="w-full p-3 border-b-2" placeholder="Description" v-model="Product.description">
				  </div>
				  <div class="w-full px-3 mb-6 md:mb-0">
					<input type="file" @change="handleImageUpload" class="w-full p-3 border-b-2">
				  </div>
				</div>
				<!-- Form Buttons -->
				<div class="flex items-center justify-center pb-5">
				  <button type="button" class="py-2 px-3 bg-red-600 text-white rounded-md hover:bg-blue-600 focus:outline-none">
					Cancel
				  </button>
				  <button type="submit" class="ml-10 py-2 px-3 bg-[#343787] text-white rounded-md hover:bg-blue-600 focus:outline-none">
					Submit
				  </button>
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
	data() {
	  return {
		Product: {
		  pname: '',
		  bcode: '',
		  color: '',
		  brandname: '',
		  price: '',
		  qty: '',
		  category: '',
		  description: ''
		},
		selectfile: null
	  };
	},
	methods: {
	  AddProduct() {
		const formData = new FormData();
		formData.append('image', this.selectfile);
		formData.append('pname', this.Product.pname);
		formData.append('bcode', this.Product.bcode);
		formData.append('color', this.Product.color);
		formData.append('brandname', this.Product.brandname);
		formData.append('qty', this.Product.qty);
		formData.append('price', this.Product.price);
		formData.append('category', this.Product.category);
		formData.append('description', this.Product.description);
  
		axios.post('http://127.0.0.1:8000/api/auth/products', formData)
		  .then(response => {
			this.$router.push({ name: 'product-list' });
			console.log(response.data);
		  })
		  .catch(error => {
			console.error('Error:', error);
		  });
	  },
	  handleImageUpload(event) {
		this.selectfile = event.target.files[0];
	  }
	}
  };
  </script>
  
  <style scoped>
  </style>
  