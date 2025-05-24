
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
    <router-link to="/busSale" class="box"> 
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
    name: 'Metro Bus Public',
    PKR:  '15 Million',
    image:'bus1.jpg', 
  },
  {
    name: 'City Transport',
    PKR:  '20 Million',
    image:'bus2.jpg',
  },
  {
    name: 'Automart: School Bus ',
    PKR:  '  12 Million',
    image:'bus3.jpg',
  },
  {
    name: 'China 22-Wellor',
    PKR:  '10 Million',
    image:'trla1.jpg',
  },  
  {
    name: 'Japani ',
    PKR: '  19 Million',
    image: 'trla2.jpg',
  },
  {
    name: 'Temerario',
    PKR: ' 90 Million',
    image: 'trla3.jpg',
  },
   
]);

</script>
