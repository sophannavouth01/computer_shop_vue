<template>
  <div class="">
    <div class='grid grid-cols-2 gap-4'>
      <!-- left -->
      <div class='col-span-2'>
        <div class="2xl:mx-auto 2xl:container py-2   md:px-6 ">
          <div class="w-full flex flex-col  ">
            <div class="flex flex-row    justify-center items-center text-center ">
              <div class=" w-[500px] border-spacing-1 rounded-xl h-10 bg-gray-200">
                <p class=" pt-2">Search Product<i class="fa-solid fa-magnifying-glass px-4 pt-1 text-slate-400"></i></p>
              </div>
              <router-link to="pos-order-payment">
                <button  class="text-base leading-none px-5 py-3   hover:bg-blue-600 hover:text-white  rounded-md   m-3 bg-blue-200 border-blue-100 border ml-[50px] text-black">
                   Payment <i class="fa-solid fa-bag-shopping px-3   text-green-500  text-xl "></i>
                </button>
              
              </router-link>
              <button @click="logout" class="   px-2 bg-blue-700 text-white  py-2 rounded-sm  ml-[100px]">logout</button>
            </div>
            <!-- item cart -->
            <div class="flex flex-wrap">
              <div class="w-full">
                <ul class="flex mb-0 list-none mx-5 my-3 flex-wrap pt-3 pb-4 flex-row">
                  <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                      v-on:click="toggleTabs(1)"
                      v-bind:class="{ 'text-blue-600 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1 }">
                      All
                    </a>
                  </li>
                  <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                      v-on:click="toggleTabs(2)"
                      v-bind:class="{ 'text-blue-600 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2 }">
                      laptop
                    </a>
                  </li>
                  <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                      v-on:click="toggleTabs(3)"
                      v-bind:class="{ 'text-blue-600 bg-white': openTab !== 3, 'text-white bg-blue-600': openTab === 3 }">
                      Desktop
                    </a>
                  </li>
                  <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
                      v-on:click="toggleTabs(4)"
                      v-bind:class="{ 'text-blue-600 bg-white': openTab !== 4, 'text-white bg-blue-600': openTab === 4 }">
                      Accessory
                    </a>
                  </li>
                </ul>
                <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 ">
                  <div class="px-4 py-5 flex-auto">
                    <div class="tab-content tab-space">
                      <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
                        <!-- laptop -->
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Apple</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsApple" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="  h-[200px] w-full object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Brand Asus</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAsus" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto  ">
                              <img class="  h-[200px] w-full   object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Brand MSI </p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsMSI" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto ">
                              <img class=" w-full h-[200px]  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Brand Dell</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsDell" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto  ">
                              <img class=" h-[200px] w-full    object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <!-- desktop -->
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p> Apple</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAppleDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto pt-2">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>ASUS</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAsusDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>MSI</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsMSIDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Dell</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsDellDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="  h-[200px] w-full   object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>

                        <!-- Accessory -->
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p> Apple</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAppleAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>ASUS</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAsusAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>MSI</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsMSIAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Dell</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsDellAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>

                      </div>
                      <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Apple</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsApple" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="  h-[200px] w-full object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Brand Asus</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAsus" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto  ">
                              <img class="  h-[200px] w-full   object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Brand Asus</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsMSI" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto ">
                              <img class=" w-full h-[200px]  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Brand Dell</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsDell" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto  ">
                              <img class=" h-[200px] w-full    object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p> Apple</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAppleDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto pt-2">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>ASUS</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAsusDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>MSI</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsMSIDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Dell</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsDellDesktop" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="  h-[200px] w-full   object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                      <div v-bind:class="{ 'hidden': openTab !== 4, 'block': openTab === 4 }">
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p> Apple</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAppleAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>ASUS</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsAsusAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class="h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>MSI</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsMSIAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class=" shadow-lg rounded bg-white my-3 text-black font-semibold py-3 px-3 mx-3">
                          <p>Dell</p>
                        </div>
                        <div
                          class="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-4  justify-items-around gap-x-2 gap-y-1 xl:gap-y-0 xl:gap-x-2 ">
                          <!-- item1 -->
                          <div v-for="item in filteredProductsDellAccessory" :key="item.id"
                            class="flex items-start flex-col shadow-lg rounded bg-white m-2">
                            <div class="relative flex  m-auto">
                              <img class=" h-[200px] w-full  object-cover " v-if="item.image"
                                :src="getImageUrl(item.image)" alt="">
                              <button @click="addToCart(item)"
                                class="absolute top-4 right-4 flex justify-center items-center p-3  bg-blue-300  rounded-full">
                                <i class="fa-solid fa-cart-plus text-white"></i>
                              </button>
                            </div>
                            <div class="flex flex-col  mt-2   pl-8 pb-3 space-y-3">
                              <div>
                                <p class="text-md font-medium leading-4  text-blue-700  ">{{ item.pname }}</p>
                              </div>
                              <div>
                                <p class="text-lg leading-4  pb-3   text-red-600">${{ item.price }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
      <!-- right -->
      <!-- <div class=" ">
        <div class="bg-gray-100 ">
          <div class="w-full h-full  bg-opacity-90 top-0  fixed sticky-0">
            <div class="  mt-2   w-[250px] h-[50px] ">
              <div>
                <div class="relative   align-middle w-full flex    ">
                  
                    <button @click="logout" class=" px-2 bg-blue-700 text-white  py-2 rounded-sm ">logout</button>
                 
                </div>
              </div>       
            </div>
           <div  class="w-full  z-10 right-0 h-full overflow-x-hidden ">
              <div class="flex items-end lg:flex-row flex-col justify-end">

                <div class="  w-full   md:pt-3 pt-4   ">
                 
                  <p   class="lg:text-2xl text-2xl  font-extralight leading-10 bg-blue-500 text-white py-1.5 px-1.5 rounded"> ORDER </p>
                  <div class="alert alert-success alert-dismissible fade show" role="alert">
                  </div>
                  <div v-for="order in filteredOrdersCart" :key="order.id">
                    <div v-for="detail in order.order_details" :key="detail.id"
                      class="md:flex items-strech pt-5 md:pt-5  pb-5 lg:pt-5 border-t border-gray-50">
                      <div class="  2xl:w-1/4 w-[100px] mr-3 ml-2  ">
                        <img :src="getImageUrl(detail.product.image)" alt="Product Image"
                          class="h-[100px] w-[100px] object-center object-cover md:block hidden " />
                      </div>
                      <div class="flex flex-col ">
                        <div class="flex items-center  w-full   ">
                          <p class="text-base w-[200px]  font-black leading-none  text-gray-800"></p>
                          <button @click="removeItemOneOrder(order.id, detail.product_id)"
                            class="px-2 py-1 mx-3 bg-rose-600  text-white">-</button>
                          x {{ detail.qty }}
                          <button @click="addToCartMore(detail)" class=" px-2 mx-3 py-1 bg-blue-600 text-white">+</button>
                        </div>
                        <p class="text-xs  text-gray-600 ">Type: {{ detail.product.category }}</p>
                        <p class="text-xs leading-3 text-gray-600 py-1">Color: {{ detail.product.color }} </p>
                        <div class=" flex ">
                          <button @click="removeItemFromOrder(order.id, detail.product_id)"
                            class="text-xs leading-3 underline text-red-500  cursor-pointer">Remove</button>
                          <p class="text-base  pl-[170px] font-black leading-none text-blue-800">$ {{ detail.total_price
                          }}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="w-[400px]">
                    <div class="flex pb-6 lg:pt-5 pt-20">
                      <div>
                        <div v-for="order in filteredOrders" :key="order.id">
                         <h1>Grand Total:<span class="text-blue-700 px-3"> ${{ order.total_amount }}</span></h1>
                        </div>
                        <router-link to="pos-order-payment">
                          <button class="text-base leading-none px-5 py-4 mt-6 bg-blue-600 border-blue-100 border ml-[200px] text-white">
                             Go To Payment
                          </button>
                        </router-link>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "POS",
  data() {
    return {
      openTab: 1,
      products: [],
      cart: [],
      orders: [],
      dropdownPopoverShow: false,
    }
  },
  mounted() {
    this.fetchDataFromApi();
    this.fetchItemsFromAPI();
  },
  methods: {
    toggleTabs(tabNumber) {
      this.openTab = tabNumber;
    },
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
    fetchItemsFromAPI() {
      const apiUrl = 'http://127.0.0.1:8000/api/auth/orders';
      axios.get(apiUrl)
        .then((response) => {
          if (response.data.data && response.data.data.length > 0) {
            this.orders = response.data.data;
          } else {
            console.log('No orders found');
            this.emptyCart();
          }
        })
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });
    },
    emptyCart() {
      this.cart = [];
    },
    addToCart(item) {

      const orderItem = {
        product_id: item.id,
        qty: 1,
        price: item.price
      };

      console.log('Order item being added:', orderItem);
      const authToken = localStorage.getItem('user_id');
      const userId = Number(authToken);
      const apiUrl = 'http://127.0.0.1:8000/api/auth/orders';
      const orderData = {
        user_id: userId, // Adjust this as necessary
        order_details: [orderItem]
      };

      axios.post(apiUrl, orderData)
        .then(response => {
          console.log('Order added successfully:', response.data);
        })
        .catch(error => {
          console.error('Error adding order:', error);
        });
    },
    addToCartMore(detail) {
      detail.qty += 1;
      detail.total_price = detail.qty * detail.price;
      // Optionally update the server
      this.updateOrderDetailOnServer(detail);
    },
    updateOrderDetailOnServer(detail) {
      const orderdetail = {
        product_id: detail.product_id, // Changed from detail.id to detail.product_id
        qty: 1,
        price: detail.price
      };

      console.log('Order item being added:', orderdetail);
      const authToken = localStorage.getItem('user_id');
      const userId = Number(authToken);
      const apiUrl = 'http://127.0.0.1:8000/api/auth/orders';
      const orderData = {
        user_id: userId,
        order_details: [orderdetail]
      };

      axios.post(apiUrl, orderData)
        .then(response => {
          console.log('Order added successfully:', response.data);
        })
        .catch(error => {
          console.error('Error adding order:', error);
        });
    },
    removeItemOneOrder(orderId, productId) {
      const userId = localStorage.getItem('user_id'); // Retrieve user_id from localStorage
      axios.post('http://127.0.0.1:8000/api/auth/order/remove-item', {
        user_id: userId,
        order_id: orderId,
        product_id: productId
      })
        .then(response => {
          console.log('Item removed successfully:', response.data);
          // Update your local 'orders' data to reflect the change
          this.fetchItemsFromAPI(); // Reload the orders data
        })
        .catch(error => {
          console.error('Error removing item from order:', error);
        });
    },
    removeItemFromOrder(orderId, productId) {
      const userId = localStorage.getItem('user_id');
      if (!userId) {
        console.error('User ID not found in localStorage');
        return;
      }
      // Define the data to be sent
      const requestData = {
        user_id: userId,
        order_id: orderId,
        product_id: productId
      };
      // Send request to the backend to remove the item for a specific user
      axios.delete('http://127.0.0.1:8000/api/auth/remove-product-from-order', { data: requestData })
        .then(response => {
          console.log('Item removed successfully:', response.data);
          // Update your local 'orders' data to reflect the change
          this.fetchItemsFromAPI(); // Reload the orders data
        })
        .catch(error => {
          console.error('Error removing item from order:', error);
        });
    },
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login'); // Redirect to login page
    },
  },
  computed: {
    filteredOrders() {
      // Convert the user_id from localStorage to a number
      const currentUserID = parseInt(localStorage.getItem('user_id'), 10);

      // Filter orders by status and user_id
      return this.orders.filter(order =>
        order.status === 'pending' && parseInt(order.user_id, 10) === currentUserID);
    },
    filteredOrdersCart() {
      // Convert the user_id from localStorage to a number
      const currentUserID = parseInt(localStorage.getItem('user_id'), 10);

      // Filter orders by status and user_id
      return this.orders.filter(order =>
        order.status === 'pending' && parseInt(order.user_id, 10) === currentUserID);
    },
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
    //Desktop
    filteredProductsAppleDesktop() {
      return this.products.filter(item => item.brandname === 'Apple' && item.category === 'Desktop' && item.qty > 0);
    },
    filteredProductsAsusDesktop() {
      return this.products.filter(item => item.brandname === 'Asus' && item.category === 'Desktop' && item.qty > 0);
    },
    filteredProductsMSIDesktop() {
      return this.products.filter(item => item.brandname === 'MSI' && item.category === 'Desktop' && item.qty > 0);
    },
    filteredProductsDellDesktop() {
      return this.products.filter(item => item.brandname === 'Dell' && item.category === 'Desktop' && item.qty > 0);
    },
    //Accessory
    filteredProductsAppleAccessory() {
      return this.products.filter(item => item.brandname === 'Apple' && item.category === 'Accessory' && item.qty > 0);
    },
    filteredProductsAsusAccessory() {
      return this.products.filter(item => item.brandname === 'Asus' && item.category === 'Accessory' && item.qty > 0);
    },
    filteredProductsMSIAccessory() {
      return this.products.filter(item => item.brandname === 'MSI' && item.category === 'Accessory' && item.qty > 0);
    },
    filteredProductsDellAccessory() {
      return this.products.filter(item => item.brandname === 'Dell' && item.category === 'Accessory' && item.qty > 0);
    },
  },


};
</script>

<style></style>
