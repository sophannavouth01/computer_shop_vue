<template>
	<div class="bg-white">
		<div class="container mx-auto">
			<div class="md:flex no-wrap md:-mx-2">
				<!-- Left Side: Image Preview -->
				<div class="w-full md:w-6/12 md:mx-2">
					<div v-for="p  in this.Product" :key="p.id" class="bg-white">
						<img class="h-[450px] w-full"
						v-if="p.image" :src="getImageUrl(p.image)" alt="Product Image">
					</div>
				</div>
				<!-- Right Side: Form for Editing Product -->
				<div class="w-full md:w-6/12 mx-2">
					<div class="bg-white shadow-sm rounded-sm">
						<h1 class="text-center py-5 text-lg font-semibold">Edit Product</h1>
						<hr class="mx-[100px]">
						<div class="mt-5">
							<!-- Barcode Input -->
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="text"
										class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2"
										placeholder="Barcode" v-model="Product.bcode" />
								</div>
								<!-- Product Name Input -->
								<div class="flex flex-col">
									<input type="text"
										class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2"
										placeholder="Product Name" v-model="Product.pname" />
								</div>
							</div>
							<!-- Brand Name Select -->
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<select class="w-64 p-3 border-b-2" v-model="Product.brandname">
										<option value="" disabled>Select Brand</option>
										<option value="Apple">Apple</option>
										<option value="Asus">Asus</option>
										<option value="MSI">MSI</option>
										<option value="Dell">Dell</option>
									</select>
								</div>
								<!-- Quantity Input -->
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="number"
										class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2"
										placeholder="Quantity" v-model.number="Product.qty" />
								</div>
							</div>
							<!-- Price Input -->
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="number"
										class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2"
										placeholder="Price" v-model.number="Product.price" />
								</div>
								<!-- Color Input -->
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="text"
										class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2"
										placeholder="Color" v-model="Product.color" />
								</div>
							</div>
							<!-- Category Select -->
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col md:mt-0 mt-8">
									<select class="w-64 p-3 border-b-2" v-model="Product.category">
										<option value="" disabled>Select Category</option>
										<option value="Laptop">Laptop</option>
										<option value="Desktop">Desktop</option>
										<option value="Accessory">Accessory</option>
									</select>
								</div>
								<!-- Description Input -->
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="text"
										class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2"
										placeholder="Description" v-model="Product.description" />
								</div>
							</div>
							<!-- Image Upload Input -->
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col md:mt-0">
									<input type="file" @change="handleImageUpload"
										class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2" />
								</div>
							</div>
						</div>
						<!-- Form Buttons -->
						<div class="pb-5 flex items-center justify-center">
							<button role="button"
								class="py-2 px-3 bg-red-600 text-white rounded-md hover:bg-blue-600 focus:outline-none">
								Cancel
							</button>
							<button @click="editProduct()"
								class="ml-10 py-2 px-3 bg-[#343787] text-white rounded-md hover:bg-blue-600 focus:outline-none">
								Submit
							</button>
						</div>
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
		const id = this.$route.params.id;
		return {
			id,
			 
			Product: {
				pname: "",
				image: "",
				bcode: "",
				color: "",
				brandname: "",
				price: "",
				qty: "",
				category: "",
				description: ""
			},
			selectfile: null
		};
	},
	mounted() {
		this.getProductByID();
	},
	methods: {
		getProductByID() {
			axios.get(`http://127.0.0.1:8000/api/auth/products/${this.id}`)
				.then((res) => {
					// Populate the form fields with the fetched data
					Object.assign(this.Product, res.data);
				})
				.catch((error) => {
					console.error(error);
				});
		},
		getImageUrl(relativePath) {
			// Correct base URL for images
			const baseUrl = 'http://127.0.0.1:8000/storage/';
			return baseUrl + relativePath;
		},
		editProduct() {
			const formData = new FormData();
			// Append product details to formData
			Object.entries(this.Product).forEach(([key, value]) => {
				if (key !== 'image') {
					formData.append(key, value);
				}
			});
			// Append the image file if selected
			if (this.selectfile) {
				formData.append('image', this.selectfile);
			}
			// Send the PUT request to update the product
			axios.post(`http://127.0.0.1:8000/api/auth/products/${this.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
				.then((res) => {
					console.log(res.data);
					this.$router.push({ name: 'product-list' });

					// Handle success, e.g., redirect or show a success message
				})
				.catch((error) => {
					console.error(error);
					// Handle error, e.g., show an error message
				});
		},
		handleImageUpload(event) {
			this.selectfile = event.target.files[0];
		}
	}
};
</script>

<style scoped>.checkbox:checked+.check-icon {
	display: flex;
}</style> 
  