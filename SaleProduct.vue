<script setup>
import { ref } from 'vue'

// Upload data (dummy arrays for 4 cards)
const uploads = ref([
  { id: 1, title: '', description: '', file: null },
  { id: 2, title: '', description: '', file: null },
  { id: 3, title: '', description: '', file: null },
  { id: 4, title: '', description: '', file: null },
])

const handleFileChange = (e, index) => {
  uploads.value[index].file = e.target.files[0]
}
</script>

<template>
  <div class="container">
    <h2 class="text-center my-4">Upload Your Vehicle Media</h2>
    <div class="row">
      <div
        v-for="(item, index) in uploads"
        :key="item.id"
        class="col-md-6 col-lg-6 mb-4"
      >
        <div class="upload-card">
          <h4 class="mb-3">Pic & Video Your Product {{   }}</h4>

          <!-- File input -->
          <input
            type="file"
            accept="image/*,video/*"
            @change="e => handleFileChange(e, index)"
            class="form-control mb-3"
          />

          <!-- Title -->
          <input
            v-model="item.title"
            type="text"
            placeholder="Enter Title"
            class="form-control mb-2"
          />

          <!-- Description -->
          <textarea
            v-model="item.description"
            rows="3"
            placeholder="Enter Description"
            class="form-control mb-2"
          ></textarea>

          <button class="btn btn-upload mt-2">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 60px;
}

.upload-card {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.btn-upload {
  background-color: #00bcd4;
  border: none;
  color: white;
  padding: 10px 20px;
  width: 100%;
  border-radius: 8px;
}
</style>
