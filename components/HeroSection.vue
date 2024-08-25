<script setup>
const loading = ref(false);
</script>

<template>
  <div class="defaultLayout w-full flex flex-col items-center mx-auto my-auto">
    <section
      class="hero-section w-full m-w-[1440px] flex flex-col items-center gap-7 overflow-clip"
    >
      <h1
        class="hero-text w-[60%] uppercase text-[#000] text-center text-[35px] xl:text-[73px] font-custom pt-24"
      >
        Innovating Solutions for everyday business needs
      </h1>

      <p
        class="xl:w-[60%] text-lg font-[Inter] font-medium text-[#000] text-center px-[11px] xl:px-0"
      >
        Nevo is the visionary parent company dedicated to harnessing the power
        of technology to address diverse everyday business needs across a
        multitude of industries.
      </p>

      <button
        class="flex py-4 px-10 sm:py-[18px] sm:px-[73px] justify-center items-center rounded-full bg-nevoSecondary text-white font-custom font-bold"
      >
        Explore products
      </button>

      <img
        src="/assets/notification.png"
        alt="a notification bell"
        class="py-8"
      />

      <div class="2xl:h-[530px]">
        <img
          src="/assets/heroImage.png"
          alt="a picture of a man operating servers"
          class=""
        />
      </div>
    </section>

    <section
      class="products-section w-full m-w-[1440px] flex flex-col justify-center items-center gap-16 px-6 lg:px-[78px] lg:pt-[125px] pb-[85px] lg:pb-[196px] bg-[#E5E7FF]"
    >
      <div class="texts flex flex-col justify-center items-center">
        <h2
          class="hero-text uppercase text-nevoPrimary text-center text-[73px] font-custom pt-24"
        >
          our products
        </h2>
        <p
          class="xl:w-[70%] font-[Inter] font-medium text-[#666666] text-lg text-center"
        >
          An innovation driven company with a relentless commitment to utilizing
          technology to solve a wide spectrum of everyday business challenges
          across various industries.
        </p>
      </div>

      <div
        class="flex flex-col 2xl:flex-row justify-center items-center 2xl:items-start gap-8 learn-more"
      >
        <div
          class="flex flex-col items-center justify-center 2xl:justify-between w-[90%] 2xl:w-[630px] 2xl:h-[824px] px-8 pt-10 lg:pt-[79px] lg:px-12 bg-nevoSecondary rounded-3xl"
        >
          <div class="flex flex-col gap-5 texts text-white pb-10">
            <h3
              class="text-[24px] lg:text-[32px] font-custom lg:leading-[74px] text-center 2xl:text-start"
            >
              BOYO: CURRENCY TRADING MARKETPLACE
            </h3>
            <p class="text font-[Inter] text-center 2xl:text-start">
              Boyo is your go-to marketplace for currency trading. We offer a
              peer-to-peer (P2P) platform where users can seamlessly trade
              currencies with ease and security.
            </p>

            <p
              class="flex items-center gap-1 text-lg font-custom text-links justify-center 2xl:justify-start"
            >
              LEARN MORE
              <span><img src="/assets/arrow-right.png" alt="" /></span>
            </p>
          </div>

          <div class="overflow-hidden">
            <img
              src="/assets/phoneScreen.png"
              alt="picture of a phone's screen"
              class=""
            />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center 2xl:justify-between w-[90%] 2xl:w-[630px] 2xl:h-[824px] px-8 pt-10 lg:pt-[79px] lg:px-12 bg-nevoPrimary rounded-3xl"
        >
          <div
            class="flex flex-col items-center 2xl:items-start gap-5 texts text-white pb-10"
          >
            <h3
              class="text-[24px] lg:text-[32px] font-custom text-center 2xl:text-start"
            >
              TALENT SAFARI : Connecting Businesses with Contractors
            </h3>
            <p class="w-[70%] text font-[Inter] text-center 2xl:text-start">
              Talent Safari serves as the platform where businesses can
              effortlessly connect with a network of skilled contractors.
            </p>

            <p
              class="flex items-center gap-1 text-lg font-custom text-links justify-center 2xl:justify-start"
            >
              LEARN MORE
              <span><img src="/assets/arrow-right.png" alt="" /></span>
            </p>
          </div>

          <div class="overflow-hidden pb-10">
            <img
              src="/assets/team.png"
              alt="picture of a phone's screen"
              class=""
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="products-section w-full bg-white flex flex-col gap-16 px-[35px] sm:px-[78px] pt-[125px] pb-[196px]"
    >
      <div class="texts flex flex-col justify-center items-center">
        <h2
          class="hero-text uppercase text-nevoPrimary text-center text-[45px] lg:text-[73px] font-custom pt-24"
        >
          JOIN THE TECH-DRIVEN FUTURE
        </h2>

        <p
          class="md:w-[50%] font-[Inter] font-medium text-[#666666] text-lg text-center"
        >
          An innovation driven company with a relentless commitment to utilizing
          technology to solve a wide spectrum of everyday business challenges
          across various industries.
        </p>
      </div>

      <img src="/assets/testimonial.png" alt="" />
    </section>
  </div>
</template>
