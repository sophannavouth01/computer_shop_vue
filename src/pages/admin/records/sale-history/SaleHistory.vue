<template>
 
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
              Order ID 
            </th> 
            <th scope="col" class="px-6 py-3">
              Customer  Name
            </th>
            
            <th scope="col" class="px-6 py-3">
              Total
            </th>
            <th scope="col" class="px-6 py-3">
              Payment Method
            </th>
           
           
            <th scope="col" class="px-6 py-3">
                 Address
            </th>

            <th scope="col" class="px-6 py-3  ">
              Phone Number
            </th>
            <th scope="col" class="px-6 py-3">
              Cashier ID     
            </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="product in ProductData" :key="product.id"
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-blue-400">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{product.order_id }}

            </th>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{product.customer_name }}
            </th>
            
            <td class="px-6 py-4">
              <span class=" text-red-500">{{ product.amount }} <span class=" px-1  text-blue-600">$</span></span>
            </td>
            <td class="px-6 py-4"> 
              {{ product.payment_method }}
            </td>
           
           
            <td class="px-6 py-4">
              {{ product.address}}
            </td>
            <td class="px-6 py-4">
              {{product.phone_number }}
            </td>
            <td class="px-6 py-4">
              {{ product.user_id }}
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
     
  }, 
  methods: {
    fetchDataFromApi() {
      const apiUrl = 'http://127.0.0.1:8000/api/auth/payments'
      axios.get(apiUrl)
        .then((response) => {
          this.ProductData = response.data 
          console.log(response.data)
        })
        .catch((error) => {
          console.error('Error fetching data from API:', error)
        })
    },
   
    

  },
}
</script>

<style>
 .out-of-stock {
    color: red;
  }
</style>
