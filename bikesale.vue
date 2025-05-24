
 <style scoped>
.container{
  margin-top: 60px;
}
#btn{
  position:  absolute;
  right: 1px;
  bottom: 5px;
  background: rgb(5, 124, 5);
}
.btn{
  position:  absolute;
  right: 110px;
  bottom: 5px;
    background: rgb(107, 230, 230);
}
</style>
<!-- Test prject -->
 <template>
<div class="container">
    <div class="row">
  <div class="card col-10 offset-1 mb-3"    v-for="(product, index) in products" :key="product">
  <div class="row g-0">
    <div class="col-md-4">
      <img :src="getImageUrl(product.image)" class="img-fluid rounded-start" :alt="product.name" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">  {{ product.name }} &nbsp;&nbsp;&nbsp;
            PKR:  {{ product.PKR }}</h5>
        <!-- <h5 class="card-title"></h5> -->
        <p class="card-text">{{ product.text }} </p>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur facilis illo, aut repudiandae quae ullam fugiat ratione, error a fugit aliquid voluptates minus quas possimus aperiam quo cum at dignissimos.</p>
        <p class="card-text"><small class="text-muted"> {{ product.city }} 
          <router-link to="/pament">
             <button class="btn">Online Pament</button>
          </router-link>
       <a
    :href="`https://wa.me/${phoneNumber}?text=${encodeURIComponent(`Hello, I want to contact you`)}`"
    target="_blank"
    class="btn btn-success justify-content-md-end"
    id="btn"
  >
      WhatsApp
  </a> 
  </small>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
 </template>

<script setup>
import { ref,computed } from 'vue';
 
 function getImageUrl(imageName) {
    return new URL(`../images/${imageName}` , import.meta.url).href
 }

let products=ref([
    {
        name: "Suzuki 110cc ",
        PKR:"200,000 Lac",
        text:'2025 | 7,000 km | 4 Stroke',
        city:'Lahore',
        image:"bike1.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike2.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike3.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike4.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike5.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike6.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike1.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike2.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike3.jpg",
    },
    {
        name: "Honda 70cc",
        PKR:" 150,000 Lac",
        text:'2021 | 22,000 km | 2 Stroke',
        city:'Rahim Yar Khan', 
        image:"bike4.jpg",
    },
     
]);
 
   let phoneNumber=+923242728172;
</script> 
