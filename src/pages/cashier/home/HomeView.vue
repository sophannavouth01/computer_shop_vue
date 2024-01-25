<template>
  <body class="overflow-y-hidden">
    <div class="2xl:mx-auto 2xl:container mx-4 py-4">
      <div class=" w-full  relative flex items-center justify-center">
        <div class="    w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
          <div class="">
            <div class="container mx-auto">
              <div role="article" class=" md:px-8">
                <div class="px-4 xl:px-0  ">
                </div>
                <div class="px-6 xl:px-0">
                  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
                    <div role="cell" class=" rounded-md opacity-80 ">
                      <div class="bg-white p-5 rounded-md relative h-full w-full">
                        <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                        <span><img class="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/27R6nk5/home-1.png"
                            alt="home-1" /></span>
                        <h1 class="pb-4 text-2xl font-semibold"><router-link  to="pos-order">Purchase Order</router-link></h1>
                        <div class="my-5">
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                              viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <h4 class="text-md text-gray-900 dark:text-gray-100">Select Product</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                              viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                            <h4 class="text-md text-gray-900 dark:text-gray-100">Product List</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100">Add To Cart</h4>
                          </div>
                          
                          
                        </div>
                        <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                          href="javascript:void(0)">
                          <p>Show All</p>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16"
                              viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <line x1="15" y1="16" x2="19" y2="12" />
                              <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div role="cell" class="bg-gray-100">
                      <div class="bg-white p-5 rounded-md relative h-full w-full">
                        <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                        <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                            src="https://i.ibb.co/bdGyLYk/pricetags-1.png" alt="pricetags-1" /></span>
                        <h1 class="pb-4 text-2xl font-semibold">Brand & Product Category</h1>
                        <div class="my-5">
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">New Brand</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">New Products</h4>
                          </div>


                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Product Details</h4>
                          </div>

                        </div>
                        <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                          href="javascript:void(0)">
                          <p>Show All</p>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16"
                              viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <line x1="15" y1="16" x2="19" y2="12" />
                              <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div role="cell" class="bg-gray-100">
                      <div class="bg-white p-5 rounded-md relative h-full w-full">
                        <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                        <span><img class="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/GT4KHvJ/card-1.png"
                            alt="home-1" /></span>
                        <h1 class="pb-4 text-2xl font-semibold">Payment Order</h1>
                        <div class="my-5">
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Cart</h4>
                          </div>


                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Payment Credite Card</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Payment QR</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Payment Case $</h4>
                          </div>
                        </div>
                        <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                          href="javascript:void(0)">
                          <p>Show All</p>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16"
                              viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <line x1="15" y1="16" x2="19" y2="12" />
                              <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div role="cell" class="bg-gray-100">
                      <div class="bg-white p-5 rounded-md h-full relative w-full">
                        <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                        <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                            src="https://i.ibb.co/rG4r6NJ/notifications-1.png" alt="home-1" /></span>
                        <h1 class="pb-4 text-2xl font-semibold">Promotion & Event</h1>
                        <div class="my-5">
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Festival</h4>
                          </div>

                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Discount 60% </h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Discount 10% </h4>
                          </div>

                        </div>
                        <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                          href="javascript:void(0)">
                          <p>Show All</p>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16"
                              viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <line x1="15" y1="16" x2="19" y2="12" />
                              <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div role="cell" class="bg-gray-100">
                      <div class="relative bg-white p-5 rounded-md relative h-full w-full">
                        <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                        <span><img class="bg-gray-200 p-2 mb-5 rounded-full" src="https://i.ibb.co/HFC1hqn/people-1.png"
                            alt="home-1" /></span>
                        <h1 class="pb-4 text-2xl font-semibold">Daily Sales</h1>
                        <div class="my-5">
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Sale History</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Trash remove from Cart</h4>
                          </div>

                        </div>
                        <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                          href="javascript:void(0)">
                          <p>Show All</p>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16"
                              viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <line x1="15" y1="16" x2="19" y2="12" />
                              <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div role="cell" class="bg-gray-100">
                      <div class="relative bg-white p-5 rounded-md relative h-full w-full">
                        <!-- class="absolute inset-0 object-center object-cover h-full w-full"  -->
                        <span><img class="bg-gray-200 p-2 mb-5 rounded-full"
                            src="https://i.ibb.co/QX80fYm/lock-closed-1.png" alt="home-1" /></span>
                        <h1 class="pb-4 text-2xl font-semibold">Account & Setting</h1>
                        <div class="my-5">
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Profile</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">Create Account</h4>
                          </div>
                          <div class="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="12.5" height="16" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                            <h4 class="text-md text-gray-900 dark:text-gray-100 pl-4">change Password</h4>
                          </div>


                        </div>
                        <a class="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
                          href="javascript:void(0)">
                          <p>Show All</p>
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg"
                              class="icon icon-tabler icon-tabler-arrow-narrow-right" width="16" height="16"
                              viewBox="0 0 24 24" stroke-width="1.5" stroke="#4338CA" fill="none" stroke-linecap="round"
                              stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <line x1="15" y1="16" x2="19" y2="12" />
                              <line x1="15" y1="8" x2="19" y2="12" />
                            </svg>
                          </div>
                        </a>
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
  </body>
</template>

<script>
export default {
  name: "component",
  data() {
    return {};
  },
};
</script>

<style></style>

