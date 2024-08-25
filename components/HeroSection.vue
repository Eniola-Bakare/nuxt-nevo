<script setup>
const loading = ref(false);
</script>

<template>
  <div class="defaultLayout flex flex-col items-center">
    <section
      class="hero-section  w-full flex flex-col items-center gap-7 h-full overflow-clip"
    >
      <h1
        class="hero-text uppercase text-[#000] text-center text-[73px] font-custom pt-24"
      >
        Innovating Solutions for everyday business needs
      </h1>

      <p
        class="w-[60%] text-lg font-[Inter] font-medium text-[#000] text-center"
      >
        Nevo is the visionary parent company dedicated to harnessing the power
        of technology to address diverse everyday business needs across a
        multitude of industries.
      </p>

      <button
        class="flex py-[18px] px-[73px] justify-center items-center rounded-full bg-nevoSecondary text-white font-custom font-bold"
      >
        Explore products
      </button>

      <img
        src="/assets/notification.png"
        alt="a notification bell"
        class="py-8"
      />

      <div class="h-[530px]">
        <img
          src="/assets/heroImage.png"
          alt="a picture of a man operating servers"
        />
      </div>
    </section>

    <section
      class="products-section  w-full flex flex-col gap-16 px-[78px] pt-[125px] pb-[196px] bg-[#E5E7FF]"
    >
      <div class="texts flex flex-col justify-center items-center">
        <h2
          class="hero-text uppercase text-nevoPrimary text-center text-[73px] font-custom pt-24"
        >
          our products
        </h2>

        <p
          class="w-[70%] font-[Inter] font-medium text-[#666666] text-lg text-center"
        >
          An innovation driven company with a relentless commitment to utilizing
          technology to solve a wide spectrum of everyday business challenges
          across various industries.
        </p>
      </div>

      <div class="flex justify-center gap-8 learn-more">
        <div
          class="flex flex-col items-center justify-between w-[630px] h-[824px] pt-[79px] px-12 bg-nevoSecondary rounded-3xl"
        >
          <div class="flex flex-col gap-5 texts text-white pb-10">
            <h3 class="text-[32px] font-custom leading-[74px]">
              BOYO: CURRENCY TRADING MARKETPLACE
            </h3>
            <p class="text font-[Inter]">
              Boyo is your go-to marketplace for currency trading. We offer a
              peer-to-peer (P2P) platform where users can seamlessly trade
              currencies with ease and security.
            </p>

            <p class="flex items-center gap-1 text-lg font-custom text-links">
              LEARN MORE
              <span><img src="/assets/arrow-right.png" alt="" /></span>
            </p>
          </div>

          <div class="overflow-hidden">
            <img
              src="/assets/phoneScreen.png"
              alt="picture of a phone's screen"
            />
          </div>
        </div>
        <div
          class="flex flex-col items-center w-[630px] h-[824px] pt-[79px] px-12 bg-nevoPrimary rounded-3xl"
        >
          <div class="flex flex-col gap-5 texts text-white pb-10">
            <h3 class="text-[32px] font-custom">
              TALENT SAFARI : Connecting Businesses with Contractors
            </h3>
            <p class="text font-[Inter]">
              Talent Safari serves as the platform where businesses can
              effortlessly connect with a network of skilled contractors.
            </p>

            <p class="flex items-center gap-1 text-lg font-custom text-links">
              LEARN MORE
              <span><img src="/assets/arrow-right.png" alt="" /></span>
            </p>
          </div>

          <div class="overflow-hidden">
            <img
              src="/assets/team.png"
              alt="picture of a professional woman and men"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      class="products-section w-full bg-white flex flex-col gap-16 px-[78px] pt-[125px] pb-[196px]"
    >
      <div class="texts flex flex-col justify-center items-center">
        <h2
          class="hero-text uppercase text-nevoPrimary text-center text-[73px] font-custom pt-24"
        >
          JOIN THE TECH-DRIVEN FUTURE
        </h2>

        <p
          class="w-[70%] font-[Inter] font-medium text-[#666666] text-lg text-center"
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
