<template>
  <div class="defaultLayout flex flex-col">
    <div class="">
      <slot />
    </div>
    <div class="w-full flex justify-center bg-[#0A0B20] rounded-t-3xl">
      <Footer />
    </div>
  </div>
</template>
<style scoped>
.defaultLayout {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.defaultLayout::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
</style>
