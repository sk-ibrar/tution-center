<template>
    <div class="blackBar">
      <!-- Left Section (Profile) -->
      <div class="barchildName">
        <img src="/src/assets/images/mithunSmall.jpg" alt="teacherImage" class="round-image" />
        <div class="name-details">
          <h3>Mithu Chowdhury</h3>
          <p>BCA, MCA</p>
        </div>
      </div>
  
      <!-- Right Section (Social Media) -->
      <div class="socialBlock">
        <h5>Share Us On</h5>
        <i class="pi pi-facebook"></i>
        <i class="pi pi-discord"></i>
        <i class="pi pi-telegram"></i>
      </div>
    </div>
  </template>
  
  <style scoped>
  .blackBar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
    border-radius: 1rem;
    padding: 1rem 2rem;
    font-family: 'Lucida Sans', sans-serif;
    flex-wrap: wrap; /* Allows wrapping on small screens */
  }
  
  .round-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ddd;
  }
  
  .barchildName {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .name-details h3 {
    margin: 0;
    font-size: 1.2rem;
  }
  
  .name-details p {
    margin: 0;
    font-size: 0.9rem;
    color: #ccc;
  }
  
  .socialBlock {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .socialBlock h5 {
    margin-right: 0.5rem;
  }
  
  .socialBlock i {
    font-size: 1.5rem;
    color: slateblue;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .socialBlock i:hover {
    transform: scale(1.1);
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .blackBar {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .barchildName {
      flex-direction: column;
      text-align: center;
    }
  
    .socialBlock {
      margin-top: 1rem;
      justify-content: center;
    }
  }
  </style>
  
  <script setup lang="ts">
  import 'primeicons/primeicons.css';
  </script>