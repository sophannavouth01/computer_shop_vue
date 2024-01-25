<template>
	<div class="contaner w-full">
		<!-- Apple  -->
		<div class=" flex mt-10 ">
			<div class=" bg-[#343787] w-[20px] h-[40px] rounded-md"> </div>
			<div class=" px-[16px]   font-bold  ">
				<p class=" text-3xl text-[rgb(52,55,135)]">Apple Macbook</p>
			</div>
		</div>
		<div class="2xl:container 2xl:mx-auto border-b-2  pt-5 pb-16  w-full">
			<div>
				<div
					class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-5 mt-5 ">
					<div v-for="item in filteredProductsApple" :key="item.id">
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="w-full h-[200px]  object-cover" v-if="item.image" :src="getImageUrl(item.image)"
								alt="A girl posing and wearing white suit" />
							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button @click="this.$router.push(`detail/${item.id}`)"
									class="bg-transparent font-medium text-base leading-3 border-2 border-white py-3 w-full mt-2 text-white">View</button>
							</div>
						</div>

						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">{{ item.pname }} </p>
						<p class=" text-lg  font-serif text-gray-800  py-2">
							<!-- <span class=" text-red-500">$1200</span> -->
							<span class="px-2 text-slate-400">${{ item.price }}</span>
						</p>
						<div class=" flex gap-2">
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<p class=" text-slate-300 font-semibold">(88)</p>

						</div>
					</div>

				</div>

			</div>
		</div>
		<div class=" flex mt-10 ">
			<div class=" bg-[#343787] w-[20px] h-[40px] rounded-md"> </div>
			<div class=" px-[16px]   font-bold  ">
				<p class=" text-3xl text-[rgb(52,55,135)]">Asus</p>
			</div>
		</div>

		<!-- Asus  -->
		<div class="2xl:container 2xl:mx-auto border-b-2  pt-5 pb-16  w-full">
			<div>
				<div
					class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-5 mt-5 ">
					<div v-for="item in filteredProductsAsus" :key="item.id">
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="  h-[200px] w-full   object-cover " v-if="item.image" :src="getImageUrl(item.image)"
								alt="">

							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button @click="this.$router.push(`detail/${item.id}`)"
									class="bg-transparent font-medium text-base leading-3 border-2 border-white py-3 w-full mt-2 text-white">View</button>

							</div>
						</div>

						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">{{ item.pname }}</p>
						<p class=" text-lg  font-serif text-gray-800  py-2">
							<span class="px-2 text-slate-400">${{ item.price }}</span>
						</p>
						<div class=" flex gap-2">
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<p class=" text-slate-300 font-semibold">(88)</p>

						</div>
					</div>


				</div>

			</div>
		</div>

		<!-- Dell  -->
		<div class=" flex mt-10 ">
			<div class=" bg-[#343787] w-[20px] h-[40px] rounded-md"> </div>
			<div class=" px-[16px]   font-bold  ">
				<p class=" text-3xl text-[rgb(52,55,135)]">Dell</p>
			</div>
		</div>
		<div class="2xl:container 2xl:mx-auto border-b-2  pt-5 pb-16  w-full">
			<div>
				<div
					class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-5 mt-5 ">
					<div v-for="item in  filteredProductsDell" :key="item.id">
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="  h-[200px] w-full   object-cover " v-if="item.image" :src="getImageUrl(item.image)"
								alt="">

							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button @click="this.$router.push(`detail/${item.id}`)"
									class="bg-transparent font-medium text-base leading-3 border-2 border-white py-3 w-full mt-2 text-white">View</button>

							</div>
						</div>

						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">{{ item.pname }}</p>
						<p class=" text-lg  font-serif text-gray-800  py-2">
							<span class="px-2 text-slate-400">${{ item.price }}</span>
						</p>
						<div class=" flex gap-2">
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<p class=" text-slate-300 font-semibold">(88)</p>

						</div>
					</div>

				</div>

			</div>
		</div>


		<!-- MSI -->
		<div class=" flex mt-10 ">
			<div class=" bg-[#343787] w-[20px] h-[40px] rounded-md"> </div>
			<div class=" px-[16px]   font-bold  ">
				<p class=" text-3xl text-[rgb(52,55,135)]">Asus</p>
			</div>
		</div>
		<div class="2xl:container 2xl:mx-auto border-b-2  pt-5 pb-16  w-full">
			<div>
				<div
					class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-5 mt-5 ">
					<div v-for="item in  filteredProductsMSI" :key="item.id">
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="  h-[200px] w-full   object-cover " v-if="item.image" :src="getImageUrl(item.image)"
								alt="">

							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button @click="this.$router.push(`detail/${item.id}`)"
									class="bg-transparent font-medium text-base leading-3 border-2 border-white py-3 w-full mt-2 text-white">View</button>

							</div>
						</div>

						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">{{ item.pname }}</p>
						<p class=" text-lg  font-serif text-gray-800  py-2">
							<span class="px-2 text-slate-400">${{ item.price }}</span>
						</p>
						<div class=" flex gap-2">
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<p class=" text-slate-300 font-semibold">(88)</p>

						</div>
					</div>

				</div>

			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

export default {
	data() {
		return {
			products: [],
		}
	},
	computed: {
		//Laptop
		filteredProductsApple() {
			// Adjust the filter criteria as needed
			return this.products.filter(item => item.brandname === 'Apple' && item.category === 'Laptop' && item.qty > 0);
		},
		filteredProductsAsus() {
			// Adjust the filter criteria as needed
			return this.products.filter(item => item.brandname === 'Asus' && item.category === 'Laptop' && item.qty > 0);
		},
		filteredProductsMSI() {
			// Adjust the filter criteria as needed
			return this.products.filter(item => item.brandname === 'MSI' && item.category === 'Laptop' && item.qty > 0);
		},
		filteredProductsDell() {
			return this.products.filter(item => item.brandname === 'Dell' && item.category === 'Laptop' && item.qty > 0);
		},

	},
	mounted() {
		this.fetchDataFromApi();
	},
	methods: {
		fetchDataFromApi() {
			const apiUrl = 'http://127.0.0.1:8000/api/auth/products';
			axios.get(apiUrl)
				.then((response) => {
					this.products = response.data;
				})
				.catch((error) => {
					console.error('Error fetching data from API:', error);
				});
		},
		getImageUrl(relativePath) {
			const baseUrl = 'http://127.0.0.1:8000/storage/';
			return baseUrl + relativePath;
		},
	},
}
</script>
 
<style>/* Your styles go here */</style>