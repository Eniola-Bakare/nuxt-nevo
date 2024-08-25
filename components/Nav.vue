<script setup>
const navLinks = ref([
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
]);
</script>

<template>
  <div class="flex justify-between items-center font-custom">
    <Logo />

    <div class="hidden lg:flex">
      <nav class="">
        <ul
          class="gap-5 py-[18px] px-[32px] justify-center items-center rounded-full bg-[#FFFFFF]"
        >
          <li
            v-for="(navLink, index) in navLinks"
            :key="index"
            class="uppercase text-nevoPrimary text-[18px] font-bold leading-[28px]"
          >
            <span onclick="">{{ navLink.title }}</span>
          </li>
        </ul>
      </nav>

      <div
        class="flex h-[79px] px-[11px] pr-[19px] pl-[15px] items-center rounded-full bg-[#FFFFFF]"
      >
        <button
          class="flex items-center gap-3 uppercase bg-[#00064B] rounded-full pt-[14px] pb-[15px] px-[36px] text-[#FFFFFF]"
        >
          Talk to sales
          <img src="/assets/rightArrow.png" alt="a right side arror" />
        </button>
      </div>
    </div>

     
  </div>
</template>
