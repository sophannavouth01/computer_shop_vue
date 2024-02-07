<template>
  <div class="">
    <div class='grid grid-cols-2 gap-4'>
      <!-- left -->
      <div class='col-span-2'>
        <div class="2xl:mx-auto 2xl:container py-2   md:px-6 ">
          <div class="w-full flex flex-col  ">
            <div class="flex flex-row    justify-center items-center text-center ">
              <div class="relative w-80">
                <input type="text" placeholder="Search (Press  &quot;/&quot; to focus)"
                  class="bg-background-form border border-gray-500 rounded-full px-4 pl-10 py-2 outline-none focus:border-blue-500 w-80">
                <div class="absolute top-0 ml-3" style="top:10px">
                  <svg fill="currentColor" class="text-gray-500 h-5 w-5" viewBox="0 0 24 24" width="24" height="24">
                    <path class="heroicon-ui"
                      d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                    </path>
                  </svg>
                </div>

              </div>
              <router-link to="pos-order-payment">
                <button
                  class="text-base leading-none px-5 py-3   hover:bg-blue-600 hover:text-white  rounded-md   m-3 bg-blue-200 border-blue-100 border ml-[50px] text-black">
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

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
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
          Swal.fire({
            title: 'Success!',
            text: 'Add To  Cart successfully processed.!',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          console.log('Order added successfully:', response.data);

        })
        .catch(error => {
          console.error('Error adding order:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Payment could not be processed. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
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
