<template>
  <div class="grid justify-items-end  pr-5  mb-3">
    <div class=" ">
      <router-link to="add-user"><i class="fa-solid fa-square-plus text-[25px]"></i></router-link>
    </div>

  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
             ID
            </th>
            <th scope="col" class="px-6 py-3">
              User Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Roles
            </th>
           
            <th scope="col" class="px-6 py-3">
              Update
            </th>
            <th scope="col" class="px-6 py-3">
              Delete
            </th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="b in this.ProductData" :key="b"
        class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-blue-400">
            <!-- <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img v-if="b.image" :src="getImageUrl(b.image)" alt="Brand Image"  class=" w-[60px] h-[60px]  rounded-full   object-cover" />
            </td> -->
            <td class="px-6 py-4">
              {{ b.id}}
            </td>
            <td class="px-6 py-4">
              {{ b.name }}
            </td>
            <td class="px-6 py-4">
              {{ b.email}}
            </td>
            <td class="px-6 py-4">
              <!-- {{ b.roles_as }} -->
              <span :style="{ color: b.role === 'admin' ? 'green' : 'blue' }">{{ b.role }}</span>


            </td>
            

            <td class="px-6 py-4">
              <!-- <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> -->
              <button @click="this.$router.push(`edit-user/${b.id}`)" >
                 <i  class="fa-solid fa-pen-to-square text-blue-600  hover:text-blue-600"></i>
              </button>
            </td>
            <td class="px-6 py-4">
              <button @click="deleteBrand(b.id)" type="button"><i class="fa-solid fa-trash text-red-500"></i></button>
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
      ProductData: [],
    }
  },
  mounted() {
    this.fetchDataFromApi()
  },
  methods: {
    fetchDataFromApi() {
            const apiUrl = 'http://127.0.0.1:8000/api/auth/users';
            const token = localStorage.getItem('token'); // Retrieve stored token

            axios.get(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}` // Include the token in the header
                }
            })
            .then((response) => {
                console.log(response.data);
                this.ProductData = response.data; // Store the fetched data
            })
            .catch((error) => {
                console.error('Error fetching data from API:', error);
            });
        },
       
    // deleteBrand(Id) {
    //   axios.delete(`http://127.0.0.1:8000/api/brands/${Id}`)
    //     .then((response) => {
    //       if (response.status === 200) {
    //         console.log('Product deleted successfully:', response.data.data);
    //         this.fetchDataFromApi();
    //       } else {
    //         console.error('Error deleting product. Status:', response.status);
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error deleting product:', error);
    //     });
    //   console.log(Id);
    // },

  },
}
</script>

<style></style>
