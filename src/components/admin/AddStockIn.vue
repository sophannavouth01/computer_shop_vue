<template>
	<div class=" bg-white">
		<div class="container mx-auto  ">
			<div class="md:flex no-wrap md:-mx-2 ">
				<!-- Left Side -->
				<div class="w-full md:w-6/12 md:mx-2">
					<div class="bg-white ">
						<img src="https://static.vecteezy.com/system/resources/previews/012/494/550/original/inventory-control-system-concept-professional-manager-and-worker-are-checking-goods-and-stock-supply-inventory-management-with-goods-demand-vector.jpg"
							alt="">
					</div>
				</div>
				<!-- Right Side -->
				<div class="w-full md:w-6/12 mx-2 ">
					<!-- Experience and education -->
					<div class="bg-white  shadow-sm rounded-sm">
						<h1 class=" text-center py-5 text-lg  font-semibold">Stock Entry</h1>
						<hr class=" mx-[100px]">
						<div class="  mt-5">
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Barcode" v-model="StockIN.barcode"/>
								</div>
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Product Name" v-model="StockIN.pname" />
								</div>

							</div>
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Brand"  v-model="StockIN.brand"/>
								</div>
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Category" v-model="StockIN.category"/>
								</div>

							</div>
              <div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Quantity"  v-model="StockIN.qty"/>
								</div>
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Price" v-model="StockIN.price"/>
								</div>

							</div>
              <div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Stock IN By"  v-model="StockIN.stockby"/>
								</div>
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Date (yy/m/d)" v-model="StockIN.datein"/>
								</div>

							</div>
              <div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Color"  v-model="StockIN.color"/>
								</div>
                <div class="flex flex-col">
									<input type="text"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Description"  v-model="StockIN.description"/>
								</div>

							</div>

						</div>

						<div class=" pb-5 flex  items-center  justify-center">
							<button role="button"
								class="flex items-center justify-center py-2 px-3 focus:outline-none  bg-red-600 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
								<span class="text-sm font-medium text-center capitalize">Cancell</span>
								<i class="fa-regular fa-rectangle-xmark ml-2"></i> </button>
							<button @click="AddStockIN()"
								class="flex items-center justify-center  ml-10 py-2 px-3 focus:outline-none  bg-[#343787] text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
								<span class="text-sm font-medium text-center capitalize">Submit</span>
								<i class="fa-regular fa-square-check ml-2"></i>
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
    return {
      StockIN: {
        barcode: "",
        pname: "",
        brand: "",
        category: "",
        qty: "",
        price: "",
        stockby: "",
        datein: "",
        color: "",
        description: "",
      },
    };
  },
  methods: {
    AddStockIN() {
      axios
        .post('http://127.0.0.1:8000/api/stockin', {
          barcode: this.StockIN.barcode,
          pname: this.StockIN.pname,
          qty: this.StockIN.qty,
          color: this.StockIN.color,
          brand: this.StockIN.brand,
          price: this.StockIN.price,
          category: this.StockIN.category,
          datein: this.StockIN.datein,
          stockby: this.StockIN.stockby,
          description: this.StockIN.description,
        })
        .then(() => {
          this.$router.push('stock-entry');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
