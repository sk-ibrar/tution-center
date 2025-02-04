<template>
    <div class="cardsStyle">
      <Carousel 
        :value="cards" 
        :numVisible="3" 
        :numScroll="1" 
        :circular="true" 
        :autoplayInterval="3000">
        
        <template #item="slotProps">
          <Card :style="{ margin: '10px', borderRadius: '5px', overflow: 'hidden' }">
            <template #header>
              <img :src="slotProps.data.image" alt="user header" style="height: 10rem; width: 100%;border-radius: 5px 5px 0 0;" />
            </template>
            <template #title>{{slotProps.data.title}}</template>
            <template #subtitle>{{slotProps.data.subtitle}}</template>
            <template #content>
              <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
                repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </template>
          </Card>
        </template>
      </Carousel>
    </div>

    <div class="card-container">
    <Card class="custom-card">
      <template #title>Why Choose Us?</template>
      <template #content>
        <ul class="feature-list">
          <li>
            <i class="pi pi-check-circle"></i>
            <span>Experienced Teachers – Personalized attention for every student</span>
          </li>
          <li>
            <i class="pi pi-check-circle"></i>
            <span>Structured Curriculum – Covers school syllabus + extra learning materials</span>
          </li>
          <li>
            <i class="pi pi-check-circle"></i>
            <span>Doubt Clearing Sessions – No question left unanswered!</span>
          </li>
          <li>
            <i class="pi pi-check-circle"></i>
            <span>Small Batches – Ensuring focused learning</span>
          </li>
          <li>
            <i class="pi pi-check-circle"></i>
            <span>Regular Assessments – Track your child’s progress effectively</span>
          </li>
        </ul>
      </template>
    </Card>
  </div>
  </template>
  

<script setup lang="ts">
import Card from 'primevue/card'
import { ref } from 'vue';
import Carousel from 'primevue/carousel';


const cards = ref([
    {title: "Mathematics",subtitle:"class 5-8",image: '/src/assets/images/math.webp'},
    {title: "Physics",subtitle:"class 5-12",image:'/src/assets/images/physics.jpg'},
    {title: "Chemistery",subtitle:"class 5-12",image:'/src/assets/images/chemistery.webp'},
    {title: "Biology",subtitle:"class 5-12",image:'/src/assets/images/biology.jpg'},
    {title: "Computer Application",subtitle:"class 5-12",image:'/src/assets/images/computer.jpg'},
    ]);
</script>

<style scoped>
.cardsStyle {
    width: 80%;
  margin: auto;
  /* display: flex; */
  gap: 15px; /* Adds space between cards */
  /* justify-content: center; */
}

.card-container {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.custom-card {
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f9f9f9, #ffffff);
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 1rem;
  font-weight: 500;
}

.pi-check-circle {
  color: #28a745;
  font-size: 1.2rem;
}
</style>
