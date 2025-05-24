
<style scoped>
.container{
  margin-top: 60px;  
}
.box{
  text-decoration: none;
}

</style>
  <template>
    
  <div class="container">
    <router-link to="/carSale" class="box"> 
    <div class="row">
        
      <productCard
        v-for="(product, index) in products"
        :key="index"
        :product="product"
        :index="index"
        @add-to-cart="addToCart"
        @increase="increase"
        @decrease="decrease" 
      />
       
    </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import productCard from './productCard.vue';
import { RouterLink } from 'vue-router';

const products = ref([
  {
    name: 'Honda Civic 2025',
    PKR:  '15 Million',
    image:'car1.jpg', 
  },
  {
    name: 'Hyundai 2025',
    PKR:  '20 Million  ',
    image:'car2.jpg',
  },
  {
    name: 'Automart: Cars ',
    PKR:  '  2 Million',
    image:'car3.jpg',
  },
  {
    name: 'The 4  Cars in the World',
    PKR:  'Most Expensive',
    image:'car4.jpg',
  },  
  {
    name: 'Lamborghini ',
    PKR: '  100 Million',
    image: 'car5.jpg',
  },
  {
    name: 'Temerario',
    PKR: ' 90 Million',
    image: 'car6.jpg',
  },
   
]);

</script>

