<template>
  <div class="topMain">
    <header :class="{ scrolled: isScrolled }">
      <div>
        <h1>Patshala</h1>
      </div>

      <div style="margin-top: 1.7rem">
        <Button style="border-radius: 3rem"> Request demo </Button>
      </div>
    </header>

    <div class="topBody">
      <div class="lBody">
        <h2>Excel academically and build confidence</h2>
        <Divider />
        <h3>Subjects We Offer</h3>
        <p>
          📖 Mathematics - Strengthen problem-solving skills.<br />
          📝 Science (Physics, Chemistry, Biology) - Learn through experiments &
          <br />&nbsp;&nbsp;&nbsp;&nbsp; practical applications.<br />
          📚 English & Grammar - Improve reading, writing & communication.<br />
          🌍 Social Studies - History, Geography & Civics made interesting!
        </p>
      </div>
      <div class="rbody">
        <div>
          <img src="/src/assets/images/schoolimg.jpeg" alt="school-image" class="schoolImg" />
          <div class="shadow"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="bottomMain">
    <h2>uyjhgf</h2>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button'
// import { Card } from 'primevue';
import { Divider } from 'primevue'
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)

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
.topMain {
  background: linear-gradient(to right, #d4bdce, #d4dae4, #8ca3ca, #d4dae4, #8fd7fc);
  min-height: 100vh;
}
header {
  padding: 20px;
  font-family: cursive;
  margin-top: 2rem;
  margin-left: 3rem;
  margin-right: 4rem;
  display: flex;
  justify-content: space-between;
  transition:
    background-color 0.5s ease-in-out,
    color 0.5s ease-in-out;
}
.scrolled {
    
    position: fixed;
    padding: 0px;
    /* position: fixed; */
  background-color: #c2c9cd; /* Dark color after scrolling */
  margin-top: 0rem;
  margin-left: 0rem;
  margin-right: 0rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}
.topBody {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial,
    sans-serif;
  display: flex;
  padding: 3rem;
  justify-content: space-between;
}
.rbody {
  width: 70%;

  /* margin-right: rem; */
  z-index: 3;
  width: 50%;
}
.schoolImg {
  height: 20rem;
  width: 32rem;
  border-radius: 1rem;
  /* box-shadow: 10px 10px 30px black; */
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: translate(-10px, -10px); /* Move 20px right and 20px down */
}
.shadow {
  z-index: 1;
  margin-top: -19.3rem;
  margin-left: 0.95rem;
  background-color: black;
  height: 20rem;
  width: 32rem;
  border-radius: 1rem;
  /* transition: transform 0.3s ease-in-out; */
}

.bottomMain {
  background-color: aliceblue;
  z-index: 2;
}
</style>
