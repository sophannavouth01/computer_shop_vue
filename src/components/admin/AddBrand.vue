<template>
  <div class=" bg-white">
    <div class="container mx-auto  ">
      <div class="md:flex no-wrap md:-mx-2 ">
        <!-- Left Side -->
        <div class="w-full md:w-6/12 md:mx-2">
          <div class="bg-white ">
            <img class=" h-[450px] w-full" src="../../../public/images/apple-1868496_1280.jpg" alt="">
          </div>
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-6/12 mx-2 ">
          <!-- Experience and education -->
          <div class="bg-white  shadow-sm rounded-sm">
            <h1 class=" text-center py-5 text-lg  font-semibold">Add Brand</h1>
            <hr class=" mx-[100px]">
            <div class="  mt-5">
              <div class="mt-8 md:flex items-center">
                <div class="flex flex-col">
                  <input type="name" class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
                    placeholder="Brand Name" v-model="brand.bname" />
                </div>
                <div class="flex flex-col">
                  <input type="name" class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
                    placeholder="Product From" v-model="brand.made" />
                </div>


              </div>
              <div class="mt-8 md:flex items-center">
                <div class="flex flex-col">
                  <input type="name" class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
                    placeholder="Description" v-model="brand.description" />
                </div>
                <div class="flex flex-col md:ml-3 md:mt-0 mt-8">
                  <input type="file" @change="handleImageUpload"
                    class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2" />
                </div>
              </div>

            </div>


            <div class=" pb-5 flex  items-center  justify-center">
              <button role="button"
                class="flex items-center justify-center py-2 px-3 focus:outline-none  bg-red-600 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
                <span class="text-sm font-medium text-center capitalize">Cancell</span>
                <i class="fa-regular fa-rectangle-xmark ml-2"></i> </button>
              <button @click="AddBrand()"
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
import axios from 'axios'
export default {
  data() {
    return {
      brand: {

        bname: "",
        image: "",
        made: "",
        description: ""

      },
      selectfile: {}

    }
  },
  methods: {

    AddBrand() {
      const fb = new FormData();
      fb.append("image", this.selectfile);
      fb.append("bname", this.brand.bname);
      fb.append("made", this.brand.made);
      fb.append("description", this.brand.description);

      axios.post('http://127.0.0.1:8000/api/brands', fb)
        .then(res => {
          this.$router.push('brand')
          console.log(res);
        })
    },

    handleImageUpload(event) {
      this.selectfile = event.target.files[0]
      console.log(event)
    },
  }

}
</script>
<style scoped></style>
