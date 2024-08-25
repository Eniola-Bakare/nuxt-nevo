<template>
  <div class="default flex flex-col ">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style scoped>
.default {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.default::-webkit-scrollbar {
  display: none !important; /* Safari and Chrome */
}
</style>
