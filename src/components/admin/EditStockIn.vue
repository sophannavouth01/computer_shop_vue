<template>
  <div class=" bg-white">
    <div class="container mx-auto  ">
      <div class="md:flex no-wrap md:-mx-2 ">
        <!-- Left Side -->
        <div class="w-full md:w-6/12 md:mx-2">
          <div class="bg-white ">
            <img
              src="https://www3.recruiter.com/recruiting/wp-content/uploads/2022/04/Clever-ways-to-source-tech-talent.jpg"
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
                  <input type="name" class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
                    placeholder="User Name" v-model="User.name" />
                </div>
                <div class="flex flex-col md:ml-3 md:mt-0 mt-8">
                  <input type="name" class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
                    placeholder="Email" v-model="User.email" />
                </div>

              </div>

              <div class="mt-8 md:flex items-center">
                <div class="flex flex-col">
                  <select v-model="User.roles_as"
                    class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2">
                    <option value="" disabled>Give Role</option>
                    <option value="1">Admin</option>
                    <option value="0">Cashier</option>
                  </select>
                </div>
                <div class="flex flex-col md:ml-3 md:mt-0 mt-8">
                  <select v-model="User.status"
                    class="w-64 text-sm font-medium leading-none text-gray-800 p-3 border-b-2">
                    <option value="" disabled>Status</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                  </select>
                </div>

              </div>
            </div>

            <div class=" pb-5 flex  items-center  justify-center">
              <button role="button"
                class="flex items-center justify-center py-2 px-3 focus:outline-none  bg-red-600 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
                <span class="text-sm font-medium text-center capitalize">Cancell</span>
                <i class="fa-regular fa-rectangle-xmark ml-2"></i> </button>
              <button @click="EditUser()"
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
    const id = this.$route.params.id

    return {
      id,
      User: {

        name: "",
        email: "",
        roles_as: '',
        status: '',
      }
    }
  },
  mounted() {
    this.GetUserByID();

  },
  methods: {
    GetUserByID() {
      axios.get(`http://127.0.0.1:8000/api/auth/user/${this.id}`)
        .then((res) => {
          console.log(res);
          this.User.name = res.data.user.name;
          this.User.email = res.data.user.email;

          this.User.roles_as = res.data.user.roles_as;
          this.User.status = res.data.user.status;

        })
        .catch((error) => {
          console.error('Error fetching User by ID:', error);
        });
    },
    EditUser() {
      console.log("EditUser function called");
      console.log("User data:", this.User);

      axios.put(`http://127.0.0.1:8000/api/auth/users/${this.id}`, {
        name: this.User.name,
        email: this.User.email,
        roles_as: this.User.roles_as,
        status: this.User.status,
      })
        .then((response) => {
          console.log("EditUser success:", response.data);
          this.$router.push({ name: 'all-user' });
        })
        .catch((error) => {
          console.error("EditUser error:", error);
          // Handle error, e.g., show an error message to the user
        });
    }


  }

}
</script>
<style scoped>
.checkbox:checked+.check-icon {
  display: flex;
}
</style>
