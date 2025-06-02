 <style scoped>
.btn{
       background: rgb(100, 201, 255);
}
</style>
 <template>
  <div class="col-md-6 col-lg-4 card">
    <img :src="getImageUrl(product.image)" />

    <h4>{{ product.name }}</h4>
     <h5>PKR: {{ product.PKR }}</h5>
    <button class="btn lead "><h5>Add to Cart</h5></button>
  </div>

</template>
<script setup> 
defineProps(['product', 'index'])

function getImageUrl(imageName) {
  return new URL(`../images/${imageName}`, import.meta.url).href
}
</script>
