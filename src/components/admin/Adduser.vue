<template>
	<div class=" bg-white">
		<div class="container mx-auto  ">
			<div class="md:flex no-wrap md:-mx-2 ">
				<!-- Left Side -->
				<div class="w-full md:w-6/12 md:mx-2">
					<div class="bg-white ">
						<img src="https://blog.djolt.co/hubfs/hubspot-automation-workflows%5B1%5D.png"
							alt="">
					</div>
				</div>
				<!-- Right Side -->
				<div class="w-full md:w-6/12 mx-2 ">
					<!-- Experience and education -->
					<div class="bg-white  shadow-sm rounded-sm">
						<h1 class=" text-center py-5 text-lg  font-semibold">Create Cashier For Login</h1>
						<hr class=" mx-[100px]">
						<div class="  mt-5">
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="name"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="User Name" v-model="User.name"/>
								</div>
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="name"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Email" v-model="User.email" />
								</div>

							</div>
							<div class="mt-8 md:flex items-center">
								<div class="flex flex-col">
									<input type="name"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Password"  v-model="User.password"/>
								</div>
								<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
									<input type="name"  class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
										placeholder="Password-confirmation" v-model="User.password_confirmation"/>
								</div>

							</div>
							
						</div>

						<div class=" pb-5 flex  items-center  justify-center">
							<button role="button"
								class="flex items-center justify-center py-2 px-3 focus:outline-none  bg-red-600 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
								<span class="text-sm font-medium text-center capitalize">Cancell</span>
								<i class="fa-regular fa-rectangle-xmark ml-2"></i> </button>
							<button @click="AddUser()"
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
import Swal from 'sweetalert2';

export default {
	data() {
		return {
			User: {

				name: "",
				email: "",
				password:"",
				password_confirmation: "",
       
			}
		}
	},
	methods: {
		AddUser(){
			axios.post('http://127.0.0.1:8000/api/auth/register', {

				name: this.User.name,
				email: this.User.email,
				password: this.User.password,
				password_confirmation: this.User.password_confirmation
				
			})
				.then(() => {
					Swal.fire({
						title: 'Success!',
						text: 'Create User successfully !', 
						icon: 'success',
						confirmButtonText: 'OK'
					});
					  this.$router.push('all-user');
				}) 
				.catch((error) => {
					Swal.fire({
						title: 'Error!',
						text: 'Login could not be processed. Please try again.',
						icon: 'error',
						confirmButtonText: 'OK'
					});
					console.error(error);
					// Handle error, e.g., show an error message to the user
				});
		}
	}

}
</script>
<style scoped></style>
