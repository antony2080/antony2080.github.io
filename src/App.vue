<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-center h-[calc(100vh-165px)]">
      <div class="card w-full border bg-base-100 shadow-md lg:w-4/12">
        <div class="card-body text-center">
          <div class="flex justify-center">
            <div class="avatar placeholder">
              <div class="bg-neutral text-neutral-content rounded-full w-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
              </div>
            </div>
          </div>
          <h1 class="text-3xl">Login</h1>
          <p>Please choose 3rd party social provider.</p>
          <div class="card-actions justify-center">
            <button class="btn bg-blue-700 hover:bg-blue-500 text-neutral-content"><svg fill="currentColor"
                class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>facebook</title>
                <path
                  d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
