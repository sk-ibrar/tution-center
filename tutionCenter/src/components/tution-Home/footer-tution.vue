<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-left">
          <p>© Copyright 2025 Patshala. All rights reserved.</p>
        </div>
        <div class="footer-right">
          <span>Follow us:</span>
          <i class="pi pi-facebook"></i>
          <i class="pi pi-twitter"></i>
          <i class="pi pi-linkedin"></i>
          <i class="pi pi-instagram"></i>
        </div>
      </div>
      <Divider />
      <div class="footer-bottom">
        <p>Designed with ❤️ by Patshala Team</p>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: #222;
    color: #fff;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 20px;
  }
  
  .footer-left p {
    margin: 0;
  }
  
  .footer-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .pi {
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.3s ease;
  }
  
  .pi-facebook:hover {
    color: #1877f2;
  }
  
  .pi-twitter:hover {
    color: #1da1f2;
  }
  
  .pi-linkedin:hover {
    color: #0077b5;
  }
  
  .pi-instagram:hover {
    color: #e4405f;
  }
  
  .footer-bottom {
    margin-top: 10px;
    font-size: 0.8rem;
  }
  </style>