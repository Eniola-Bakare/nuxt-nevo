<template>
  <div class="defaultLayout flex flex-col">
    <slot />
    <Footer />
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
