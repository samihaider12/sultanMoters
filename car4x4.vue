
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
    <router-link to="/car4x4Sale" class="box"> 
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
    name: 'Honda 4x4 2025',
    PKR:  '15 Million',
    image:'4x41.jpg', 
  },
  {
    name: 'Hyundai 2023',
    PKR:  '15 Million  ',
    image:'4x43.jpg',
  },
  {
    name: 'Automart: 4x4 ',
    PKR:  '  12 Million',
    image:'4x46.jpg',
  },
  {
    name: 'Best 4x4 inthe UAE',
    PKR:  '14 Million',
    image:'4x42.jpg',
  },  
  {
    name: 'FORD 4x4',
    PKR: '  50 Million',
    image: '4x44.jpg',
  },
  {
    name: 'Temerario',
    PKR: ' 20 Million',
    image: '4x45.jpg',
  },
   
]);

</script>
