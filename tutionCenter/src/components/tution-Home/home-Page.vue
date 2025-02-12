<template>
  <div class="container">
    <div class="topMain">
      <header :class="{ scrolled: isScrolled }">
        <h1>Patshala</h1>
        <Button @click="displayDialog = true" class="demo-button">Request Demo</Button>
      </header>

      <div class="topBody">
        <!-- Left Section -->
        <div class="lBody">
          <h2>Excel academically and build confidence</h2>
          <Divider />
          <h3>Unlock Your Child’s Potential with Expert Offline Tuition! 🎯</h3>
          <p>
            Is your child struggling with studies or needs an extra push to excel? <br /><br />
            Join our offline tuition classes for Grades 5-9<br /><br />
            and watch them gain confidence and mastery over subjects!
          </p>
        </div>

        <!-- Right Section (Image) -->
        <div class="rBody">
          <div class="image-container">
            <img src="/src/assets/images/schoolimg.jpeg" alt="school-image" class="schoolImg" />
            <div class="shadow"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Teacher Section -->
    <div class="bottomMain">
      <TeacherBar />
    </div>

    <!-- Subjects Section -->
    <div class="subjects-title">
      <h2>Subjects we Offer</h2>
    </div>
    <div class="cardsSection">
      <ClassCards/>
    </div>

    <!-- Footer -->
    <FooterTution/>

    <!-- Popup Dialog -->
    <Dialog
      v-model:visible="displayDialog"
      header="Meet Our Teacher"
      :modal="true"
      :closable="true"
      :style="{ width: '600px' }"
      :breakpoints="{ '960px': '95vw' }"
    >
      <div class="dialog-content">
        <div class="left-section">
          <img src="/src/assets/images/mithun.jpg" alt="Teacher" class="teacher-image" />
        </div>
        <div class="right-section">
          <h3>Contact Details</h3>
          <p><strong>Name:</strong> Mithu Chowdhury</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Phone:</strong> 9851096778</p>
          <p><strong>Office Hours:</strong> Mon-Sun, 9 AM - 5 PM</p>
          <Button label="Contact Now" icon="pi pi-envelope" class="p-button-success mt-3" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
import { Divider } from 'primevue'
import { onMounted, onUnmounted, ref } from 'vue'
import TeacherBar from '../teacherBar.vue'
import ClassCards from './classCards.vue'
import FooterTution from './footer-tution.vue'
import Dialog from 'primevue/dialog'

const isScrolled = ref(false)
const displayDialog = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Main Container */
.bottomMain {
  margin-top: -1rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
}
.container {
  position: relative;
}

/* Top Section */
.topMain {
  background: linear-gradient(to right, #d4bdce, #d4dae4, #8ca3ca, #d4dae4, #8fd7fc);
  min-height: 100vh;
  padding: 2rem;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  transition:
    background-color 0.5s ease-in-out,
    color 0.5s ease-in-out;
}

header.scrolled {
  margin-left: -3rem;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

.demo-button {
  border-radius: 3rem;
  padding: 0.8rem 1.5rem;
}

/* Top Body (Content) */
.topBody {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 3rem 2rem;
  flex-wrap: wrap;
}

.lBody {
  flex: 1;
  max-width: 600px;
}

.rBody {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-container {
  position: relative;
  display: inline-block;
}

.schoolImg {
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
  position: relative;
  z-index: 2;
}

.schoolImg:hover {
  transform: translate(-10px, -10px);
}

.shadow {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: black;
  border-radius: 1rem;
  z-index: 1;
}

/* Subjects Title */
.subjects-title {
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin-top: 7rem;
}

/* Cards Section */
.cardsSection {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* Dialog Content */
.dialog-content {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.left-section {
  flex: 1;
  text-align: center;
}

.teacher-image {
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .topBody {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .lBody {
    max-width: 100%;
  }

  .rBody {
    width: 100%;
    justify-content: center;
  }

  .schoolImg {
    max-width: 100%;
  }

  .shadow {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .dialog-content {
    flex-direction: column;
    text-align: center;
  }

  .teacher-image {
    width: 70%;
    margin: auto;
  }

  .right-section {
    text-align: center;
  }

  header {
    flex-direction: column;
    text-align: center;
  }

  .demo-button {
    margin-top: 1rem;
  }
}
</style>
