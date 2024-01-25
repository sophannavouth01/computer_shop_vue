<template>
	<body>
		<div class="grid grid-cols-2  bg-white mx-3 gap-4">
			<!-- left -->
			<div>
				<div class="w-full bg-white px-3">
					<div class="md:flex items-center border-b pb-2 border-gray-200">
						<div class="flex items-center md:mt-0 mt-4">
							<p class="text-base ml-3 font-medium leading-4 text-gray-800">
								Please input Information About Brand
							</p>
						</div>
					</div>
					<div class="mt-8 md:flex items-center">
						<div class="flex flex-col">
							<input type="name" tabindex="0" aria-label="Enter first name"
								class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
								placeholder="Barcode" />
						</div>
						<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
							<input type="name" tabindex="0" aria-label="Enter first name"
								class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
								placeholder="Product Name" />
						</div>

					</div>
					<div class="mt-12 md:flex items-center">
						<div class="flex flex-col">
							<input type="name" tabindex="0" aria-label="Enter first name"
								class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
								placeholder="Brand" />
						</div>
						<div class="flex flex-col md:ml-3 md:mt-0 mt-8">
							<input type="name" tabindex="0" aria-label="Enter first name"
								class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
								placeholder="Quanitity" />
						</div>
					</div>

					<div class="mt-12  md:flex items-center">
						<div class="flex flex-col">
							<input type="name" tabindex="0" aria-label="Enter first name"
								class="w-64  text-sm font-medium leading-none text-gray-800 p-3  border-b-2"
								placeholder="Price" />
						</div>

					</div>
					<div class=" mx-[100px]">
						<div class=" pb-5 flex ">
							<button role="button"
								class="flex items-center justify-center py-2 px-3 focus:outline-none bg-red-600 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
								<span class="text-sm font-medium text-center capitalize">Cancell</span>
								<i class="fa-regular fa-rectangle-xmark ml-2"></i>							</button>
							<button role="button"
								class="flex items-center justify-center  ml-10 py-2 px-3 focus:outline-none  bg-indigo-800 text-white border  rounded-md border-gray-400 mt-7 md:mt-14  hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 ">
								<span class="text-sm font-medium text-center capitalize">Submit</span>
								<i class="fa-regular fa-square-check ml-2"></i>
							</button>

						</div>
					</div>

				</div>

			</div>
			<!-- right -->
			<div class=" mt-3">
                <img src="../../../public/images/illustration-email-marketing-list-checklist-workplace-home-office-laptop-completed-application-form-site-filling-out-documents-monitor-screen-blue-eps-10_249405-18.avif" alt="">
			</div>
		</div>

	</body>
</template>
  
<style scoped>.checkbox:checked+.check-icon {
	display: flex;
}</style>
  