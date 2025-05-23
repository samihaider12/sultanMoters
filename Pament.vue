<template>
<div class="containse">
   
          <div class="p-6 max-w-3xl mx-auto" id="pament">
    <h1 class="text-2xl font-bold mb-4">Online Sultan Motors Payment Methods</h1>
    <div class="row"> 
<div 
  v-for="method in paymentMethods"
  :key="method.title"
  class="col-6 border p-4 rounded-lg shadow transition flex items-start gap-4 hover:bg-gray-50"
>
    <a
    v-if="method.link"
    :href="method.link"
    class="flex items-start gap-4 w-full"
  >
    <span class="text-3xl">{{ method.icon }}</span>
    <div>
      <h2 class="text-xl font-semibold">{{ method.title }}</h2>
      <p class="text-gray-600">{{ method.description }}</p>
    </div>
  </a>
  <div v-else class="flex items-start gap-4">
    <span class="text-3xl">{{ method.icon }}</span>
    <div>
      <h2 class="text-xl font-semibold">{{ method.title }}</h2>
      <p class="text-gray-600">{{ method.description }}</p>
    </div>
  </div>
</div>

     
  </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
// Agar Bootstrap use kar rahe ho:
document.body.classList.remove('modal-open');
document.querySelector('.modal-backdrop')?.remove();
const paymentMethods = ref([
    {
    title: 'JazzCash',
    icon: '🇵🇰',
    description: 'Popular mobile wallet in Pakistan for fast, secure payments.',
    link: 'https://www.jazzcash.com.pk'
  },
  {
    title: 'Easypaisa',
    icon: '📞',
    description: 'Trusted payment service widely used in Pakistan.',
    link: 'https://www.easypaisa.com.pk'
  },
  {
    title: 'Bank Transfers',
    icon: '🏦',
    description: 'Direct bank transfers like ACH, SEPA, and wire.'
  },
  {
    title: 'Digital Wallets',
    icon: '📱',
    description: 'PayPal, Apple Pay, Google Pay – fast and private.'
  },
  {
    title: 'Buy Now, Pay Later',
    icon: '🕒',
    description: 'Afterpay, Klarna – flexible installment options.'
  },
  {
    title: 'Mobile Payments / UPI',
    icon: '📲',
    description: 'Venmo, UPI – easy mobile payments.'
  },
  {
    title: 'Cryptocurrencies',
    icon: '₿',
    description: 'Bitcoin, Ethereum – decentralized, secure.'
  },
  {
    title: 'Cash on Delivery (COD)',
    icon: '💵',
    description: 'Pay when item arrives – good for new buyers.'
  },

])
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
   
a{
    color: #2c3e50;
    text-decoration: none;
}
#pament{
    margin-top: 50px;
}
</style>

 
