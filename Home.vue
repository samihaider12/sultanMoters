<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
 
</script>

<template>
  <div class="container">
    <div class="row">

                  <!--Car 1 Sale  -->
       <router-link to="/car"  class="col-md-6  card"> 
          <img src="../views/car1.jpg" alt="">  
          <b>Can you Buy  then Click me</b>
        <h5 class="lead">Honda Civic = 1800cc </h5>
    <button class="btn" id="btn1">Purchase to PKR=88.5 Lac</button>
</router-link>
  
        
                        <!-- Car  2 Perchase Card -->
        <router-link to="/SaleProduct"  class="col-md-6  card"> 
          <img src="../views/car2.jpg" alt="">
          <b>Can you Sale Cars then Click me</b>
          <h5 class="lead">Me Buy your Cars</h5>
          <button class="btn " style="margin-top:16px;">Every Cars Buyer Company</button>     
       </router-link>


       <!--4x4 1 Sale  -->
       <router-link to="/car4x4"  class="col-md-6  card"> 
          <img src="../views/4x42.jpg" alt="">  
          <b>Can you Buy  then Click me</b>
        <h5 class="lead">Best 4x4 SUVs In The UAE </h5>
    <button class="btn" id="btn1">Purchase to PKR=18.5 M</button>
</router-link>
  
        
                        <!-- 4x4  2 Perchase Card -->
        <router-link to="/SaleProduct"  class="col-md-6  card"> 
          <img src="../views/4x44.jpg" alt="">
          <b>Can you Sale 4x4 then Click me</b>
          <h5 class="lead">Me Buy your 4x4</h5>
          <button class="btn " style="margin-top:16px;">Every 4x4 Buyer Company</button>     
       </router-link>


       
       <!--Bus 1 Sale  -->
       <router-link to="/bus"  class="col-md-6  card"> 
          <img src="../views/bus1.jpg" alt="">  
          <b>Can you Buy  then Click me</b>
        <h5 class="lead">Best Buses </h5>
    <button class="btn" id="btn1">Purchase to PKR=118.5 M</button>
</router-link>
  
        
                        <!-- Bus  2 Perchase Card -->
        <router-link to="/SaleProduct"  class="col-md-6  card"> 
          <img src="../views/bus2.jpg" alt="">
          <b>Can you Sale Bus then Click me</b>
          <h5 class="lead">Me Buy your Bus</h5>
          <button class="btn " style="margin-top:16px;">Every Bus Buyer Company</button>     
       </router-link>


                              <!-- bike 1 Sale Product-->
                          
<router-link to="/bike"  class="col-md-6  card"> 
          <img src="../views/bike1.jpg" alt="">  
          <b>Are you Sale Bike then Click me</b>
        <h5 class="lead">Honda Company Bike = 125cc </h5>
    <button class="btn" id="btn1">Purchase to PKR=2.5 Lac</button>
</router-link>
  
        
                        <!-- bike 2 Perchase product -->
        <router-link to="/SaleProduct"  class="col-md-6  card"> 
          <img src="../views/bike2.jpg" alt="">
          <p>You Perchase Bike then Click me</p>
          <h5 class="lead">Honda Company Bike = 70cc </h5>
          <button class="btn ">Purchase to Honda Bike</button>     
       </router-link>
    </div>
  </div>
</template>

<style scoped>
.container{
  margin-top: 60px;
}
.btn{
  background: rgb(107, 230, 230);
}
.card{
  text-decoration: none;
  margin-bottom: 3px;
  margin-top: 3px;
}
#btn1{
  margin-top: 16px;
}
</style>