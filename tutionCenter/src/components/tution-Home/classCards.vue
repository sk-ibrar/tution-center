<template>
  <div class="cardsStyle">
    <Carousel 
      :value="cards"
      :numVisible="visibleCards"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="3000"
      :responsiveOptions="responsiveOptions">
      
      <template #item="slotProps">
        <Card class="carousel-card">
          <template #header>
            <img :src="slotProps.data.image" alt="user header" class="card-image"/>
          </template>
          <template #title>{{ slotProps.data.title }}</template>
          <template #subtitle>{{ slotProps.data.subtitle }}</template>
          <template #content>
            <p class="m-0">
              {{ slotProps.data.Content }}
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
import Card from 'primevue/card';
import { ref, onMounted } from 'vue';
import Carousel from 'primevue/carousel';

const cards = ref([
    { title: "Mathematics", subtitle: "class 5-8", Content: " Develops Critical Thinking – Enhances logical reasoning and analytical skills.✅ Applicable Everywhere – Used in science, technology, engineering, economics, and daily life.✅ Builds Problem-Solving Skills – Helps tackle real-world challenges effectively.",
     image: '/src/assets/images/math.webp'},
    { title: "Physics", subtitle: "class 5-12",Content:"✅ Explains Natural Phenomena – From gravity to electricity, physics describes the fundamental forces of nature.✅ Drives Technological Advancements – Innovations like computers, smartphones, and medical imaging all stem from physics.✅ Solves Real-World Problems – Used in engineering, space exploration, medicine, and more.", 
    image: '/src/assets/images/physics.jpg'},
    { title: "Chemistry", subtitle: "class 5-12",Content:"Healthcare: Chemistry is the foundation of pharmaceuticals and medicines. The development of drugs, vaccines, and treatments to combat diseases relies heavily on chemical research.Environment: Understanding chemical processes is crucial to addressing environmental challenges like pollution and climate change.", 
    image: '/src/assets/images/chemistery.webp'},
    { title: "Biology", subtitle: "class 5-12",Content:"Health and Medicine: Biology plays a central role in medicine and healthcare. Understanding the human body’s systems, diseases, and genetic factors helps in diagnosing, treating, and preventing illnesses. Fields like immunology, microbiology, and pharmacology directly impact how we fight infections and develop new treatments.",
    image: '/src/assets/images/biology.jpg'},
    { title: "Computer Application", subtitle: "class 5-12",Content:"Efficiency and Productivity: Computer applications simplify complex tasks, making individuals and organizations more efficient. For example, spreadsheet software like Excel allows for fast calculations and data analysis, while project management tools help teams stay organized and meet deadlines.",
     image: '/src/assets/images/computer.jpg'}
]);

// Dynamic carousel visibility based on screen width
const visibleCards = ref(3);

const updateVisibleCards = () => {
  if (window.innerWidth < 768) {
    visibleCards.value = 1; // Show 1 card on small screens
  } else if (window.innerWidth < 1024) {
    visibleCards.value = 2; // Show 2 cards on medium screens
  } else {
    visibleCards.value = 3; // Show 3 cards on large screens
  }
};

onMounted(() => {
  updateVisibleCards();
  window.addEventListener("resize", updateVisibleCards);
});

// PrimeVue responsive settings
const responsiveOptions = ref([
  { breakpoint: '1024px', numVisible: 2, numScroll: 1 },
  { breakpoint: '768px', numVisible: 1, numScroll: 1 }
]);
</script>

<style scoped>
/* Responsive container */
.cardsStyle {
  width: 90%;
  margin: auto;
}

/* Style for carousel cards */
.carousel-card {
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
}

/* Card image styling */
.card-image {
  height: 10rem;
  width: 100%;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
}

/* Container for "Why Choose Us?" */
.card-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-top: 2rem;
}

/* "Why Choose Us?" card */
.custom-card {
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f9f9f9, #ffffff);
}

/* Feature list styling */
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

/* Responsive adjustments */
@media (max-width: 1024px) {
  .custom-card {
    max-width: 80%;
  }
}

@media (max-width: 768px) {
  .cardsStyle {
    margin-top: 10rem;
    width: 100%;
  }

  .custom-card {
    max-width: 90%;
  }

  .feature-list li {
    font-size: 0.9rem;
  }
}
</style>
