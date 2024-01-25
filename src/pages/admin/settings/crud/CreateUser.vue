<template>
  <body>
    <div class="grid grid-cols-2  bg-white mx-3 gap-4">
      <!-- left -->
      <div>
        <div class="w-full bg-white px-3">
          <div class="md:flex items-center border-b pb-2 border-gray-200">
            <div class="flex items-center md:mt-0 ">
              <p class="text-base ml-3 font-medium leading-4 pt-4  text-gray-800">
                Please input Information About Imformatio User
              </p>
            </div>
          </div>
          <div class="mt-8 md:flex items-center">
            <div class="flex flex-col">
              <input type="name" tabindex="0" aria-label="Enter first name"
                class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2" placeholder="Name"
                v-model="register.name" />
            </div>
            <div class="flex flex-col md:ml-3 md:mt-0 mt-8">
              <input type="name" tabindex="0" aria-label="Enter first name"
                class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2" placeholder="Email"
                v-model="register.email" />
            </div>

          </div>
          <div class="mt-12 md:flex items-center">
            <div class="flex flex-col">
              <input type="name" tabindex="0" aria-label="Enter first name"
                class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2" placeholder="Password"
                v-model="register.password" />
            </div>
            <div class="flex flex-col ml-3">
              <input type="name" tabindex="0" aria-label="Enter first name"
                class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
                placeholder="password confirmation" v-model="register.password_confirmation" />
            </div>
          </div>
          <div class=" mx-[100px]">
            <div class=" pb-5 flex ">
              <button role="button" @click="clearForm()"
                class="flex items-center justify-center py-2 px-3 focus:outline-none  bg-red-600 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
                <span class="text-sm font-medium text-center capitalize">Clear</span>
                <i class="fa-regular fa-rectangle-xmark ml-2"></i> </button>
              <button @click="AddProduct()"
                class="flex items-center justify-center  ml-10 py-2 px-3 focus:outline-none  bg-indigo-800 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
                <span class="text-sm font-medium text-center capitalize">Register</span>
                <i class="fa-regular fa-square-check ml-2"></i>
              </button>

            </div>
          </div>

        </div>

      </div>
      <!-- right -->
      <div class=" ">
        <img
          src="https://www.mednefits.com/wp-content/uploads/2021/10/Which-one-better-scaled.jpg"
          alt="">
      </div>
    </div>
  </body>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    }
  },
  methods: {
    AddProduct() {
      axios.post("http://127.0.0.1:8000/api/auth/register", {
        name: this.register.name,
        email: this.register.email,
        password: this.register.password,
        password_confirmation: this.register.password_confirmation
      })
        .then(() => {
            this.register.name = "",
            this.register.email = "",
            this.register.password = ""
            this.register.password_confirmation = ""
          // this.$router.push('/admin/all')
        })

    },
    clearForm() {
      this.register.name = "";
      this.register.email = "";
      this.register.password = "";
      this.register.password_confirmation = "";
    }
  }

}
</script>
<style scoped>
.checkbox:checked+.check-icon {
  display: flex;
}
</style>
  