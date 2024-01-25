<template>
 
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
              Photos
            </th> 
            <th scope="col" class="px-6 py-3">
              Barcode
            </th>
            <th scope="col" class="px-6 py-3">
              Product
            </th>
            <th scope="col" class="px-6 py-3">
              Brand
            </th>
            <th scope="col" class="px-6 py-3">
              Colors
            </th>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Quantity
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>

            <th scope="col" class="px-6 py-3  text-center">
              Description
            </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="product in filteredProducts" :key="product.id"
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-blue-400">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img v-if="product.image" :src="getImageUrl(product.image)" alt="Product Image"  class=" w-[60px] h-[60px]  object-cover" />

            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{product.bcode }}
            </th>
            <td class="px-6 py-4">
              {{ product.pname }}
            </td>
            <td class="px-6 py-4">
              {{ product.brandname }}
            </td>
            <td class="px-6 py-4"> 
              {{ product.color }}
            </td>
            <td class="px-6 py-4">
              {{ product.category }}
            </td>
            <td class="px-6 py-4">
              <span v-if="product.qty === 0" class="out-of-stock">Out of Stock</span>
              <span v-else>{{ product.qty }}</span>            
            </td>
            <td class="px-6 py-4">
              ${{ product.price }}
            </td>
            <td class="px-6 py-4">
              {{ product.description }}
            </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      ProductData: []
    }
  },
  mounted() {
    this.fetchDataFromApi()
  },
  computed: {
    filteredProducts() {
      return this.ProductData.filter(product => product.qty === 0);
    }
  }, 
  methods: {
    fetchDataFromApi() {
      const apiUrl = 'http://127.0.0.1:8000/api/auth/products'
      axios.get(apiUrl)
        .then((response) => {
          this.ProductData = response.data 
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data from API:', error)
        })
    },
    getImageUrl(relativePath) {
    // Correct base URL for images
    const baseUrl = 'http://127.0.0.1:8000/storage/';
    return baseUrl + relativePath;
  } ,
    deleteBrand(Id) {
      axios.delete(`http://127.0.0.1:8000/api/auth/products/${Id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log('Product deleted successfully:', response.data);
            this.fetchDataFromApi();
          } else {
            console.error('Error deleting product. Status:', response.status);
          }
        })
        .catch((error) => {
          console.error('Error deleting product:', error);
        });
      console.log(Id);
    },

  },
}
</script>

<style>
 .out-of-stock {
    color: red;
  }
</style>
