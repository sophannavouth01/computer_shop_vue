<template>
	<div v-if="product" class=" container">
		<div  class="grid grid-col-2 grid-flow-col gap-4">
			<div class="  ">
				<img class="h-[350px] m-auto"	v-if="product.image" :src="getImageUrl(product.image)"  alt="Product Image">
				<div class=" mx-4">
					<h1 class=" text-3xl">{{ product.pname }}</h1>
					<div class=" flex gap-1 mt-2 ">
						<p class=" text-emerald-500">{{ product.category }} | </p>
						<i class="fa-solid fa-star text-amber-400 text-[12px] pt-1 pl-2"></i>
						<i class="fa-solid fa-star text-amber-400 text-[12px] pt-1"></i>
						<i class="fa-solid fa-star text-amber-400 text-[12px] pt-1"></i>
						<i class="fa-solid fa-star text-amber-400 text-[12px] pt-1"></i>
						<p class=" px-3 pt-[2px]">8.9 (2130 reviews)</p>

					</div>
					<p class=" font-semibold text-lg pt-3">Brand: <span class=" px-5">{{ product.brandname }}</span></p>
					<p class=" font-semibold text-lg pt-3">Prodcut  Code: <span class=" px-5">{{ product.bcode }}</span></p>
					<h1 class=" pt-5 font-semibold  text-red-600 text-4xl">$ {{ product.price }}</h1>

				</div>
			</div>
			<div class=" mt-[70px] ">
				<h1 class=" py-5 font-semibold">Description:</h1>
				<div class="w-[500px] ">		
					<p class="leading-8   py-3">{{ product.description }}</p>
				</div>
			</div>
		</div>
		<div class=" flex mt-10">
			<div class=" bg-[#343787] w-[20px] h-[40px] rounded-md"> </div>
			<div class=" px-[16px]   font-bold pt-3">
				<p>This Month</p>
			</div>
		</div>
		<p class=" text-[#343787] text-[36px] font-light py-5">Best Selling Products</p>
		<div class="2xl:container 2xl:mx-auto   pb-16">
			<div>
				<div
					class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-5 mt-5">
					<div class="relative">
						<div class="absolute top-0 left-0 py-2 px-4 bg-white bg-opacity-50">
							<p class="text-xs leading-3 text-gray-800">New</p>
						</div>
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="w-full h-[250px] object-cover "
								src="../../../../public/images/macbook/apple_macbook_air_13_core_i5_8th_gen_128gb_silver_mvfh2_.jpg"
								alt="A girl Posing Image" />
							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button	class="bg-transparent font-medium text-base leading-3 border-2 border-white py-3 w-full mt-2 text-white">	View</button>
							</div>
						</div>
						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">Asus 14" Core I3 4GB 256GB </p>
						<p class=" text-lg  font-serif text-gray-800  py-2"><span class=" text-red-500">$1200</span>
							<span class="px-2 text-slate-400">$1600</span>
						</p>
						<div class=" flex gap-2">
							<i class="fa-solid fa-star  text-amber-400 "></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star "></i>
							<p class=" text-slate-300 font-semibold">(88)</p>

						</div>
					</div>
					<div class="relative">
						<div class="bg-white bg-opacity-50 absolute top-0 right-0 px-2 py-1">
							<p class="text-white fonr-normal text-base leading-4">XS , S , M , L</p>
						</div>
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="w-full h-[250px] object-cover"
								src="https://i.ebayimg.com/images/g/6tkAAOSwDJ1jdDnP/s-l1600.jpg"
								alt="A girl wearing white suit and googgles" />
							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button	class="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
									View</button>
							</div>
						</div>
						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">MacBook Air | iOne </p>
						<p class=" text-lg  font-serif text-gray-800  py-2"><span class=" text-red-500">$1200</span>
							<span class="px-2 text-slate-400">$1600</span>
						</p>
						<div class=" flex gap-2">
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star  text-amber-400"></i>
							<i class="fa-solid fa-star"></i>
							<p class=" text-slate-300 font-semibold">(88)</p>

						</div>
					</div>
					<div>
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="w-full h-[250px] object-cover"
								src="../../../../public/images/macbook/MacBook_Pro_16-in_Space_Gray_PDP_Image_Position-1__MXLA.jpeg"
								alt="A girl wearing dark blue suit and posing" />
							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button
									class="bg-transparent font-medium text-base leading-3 border-2 border-white py-3 w-full mt-2 text-white">
									View</button>
							</div>
						</div>
						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">Dell Latitude & 2-in-1 PCs </p>
						<p class=" text-lg  font-serif text-gray-800  py-2"><span class=" text-red-500">$1430</span>
							<span class="px-2 text-slate-400">$1600</span>
						</p>
						<div class=" flex gap-2">
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star text-amber-400"></i>
							<i class="fa-solid fa-star  text-amber-400"></i>
							<p class=" text-slate-300 font-semibold">(88)</p>

						</div>
					</div>
					<div>
						<div class="relative group">
							<div
								class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full">
							</div>
							<img class="w-full h-[250px] object-cover"
								src="https://tshop.r10s.jp/geo-mobile/cabinet/3873/8593873-01.jpg?fitin=720%3A720"
								alt="A girl posing and wearing white suit" />
							<div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
								
								<button
									class="bg-transparent font-medium text-base leading-3 border-2 border-white py-3 w-full mt-2 text-white">
									View</button>
							</div>
						</div>

						<p class=" font-medium  text-xl  text-[#343787] md:mt-6 mt-4">Asus 14" Core I3 4GB 256GB </p>
						<p class=" text-lg  font-serif text-gray-800  py-2"><span class=" text-red-500">$1200</span>
			 				<span class="px-2 text-slate-400">$1600</span>
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
import axios from 'axios';

export default {
	data() {
		
		return {
			id: this.$route.params.id,
            product: null,
		};
	},
	mounted() {
		this.getProductByID();
	},
	methods: {
		getProductByID() {
            axios.get(`http://127.0.0.1:8000/api/auth/products/${this.id}`)
                .then((res) => {
                    this.product = res.data;
                    console.log(this.product);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        getImageUrl(relativePath) {
            const baseUrl = 'http://127.0.0.1:8000/storage/';
            return baseUrl + relativePath;
        },
		
	}
};
</script>
