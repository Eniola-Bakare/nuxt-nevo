<template>
  <div class="default">
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
