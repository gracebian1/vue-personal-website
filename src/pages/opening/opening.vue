<template>
  <div id="app" class="bg-img">
    <div class="bg-text">
        <h1 style="font-size:50px">Welcome to Grace's Wonderland</h1>
        <button onclick="location.href = 'home.html';" class="button" style="vertical-align:middle"><span>Get Started </span></button>
    </div>
  </div>
</template>

<script>
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body, html {
  height: 100%;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

* {
  box-sizing: border-box;
}

/* Opening page background */
.bg-img {
  /* The background image used */
  background-image: url("../../assets/images/bg.jpg");
  
  /* Add the blur effect */
  filter: blur(0px);
  
  /* Full height */
  height: 100%; 
  
  /* Center and scale the image */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page */
.bg-text {
  background-color: rgb(0,0,0);       /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: rgb(130, 221, 217);
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
  height: 250px;
  width: 1200px;
}

/* Arrow on hover effect of animated button, customized and revised based on W3Schools
https://www.w3schools.com/css/css3_buttons.asp */
.button {
  display: inline-block;
  border-radius: 4px;
  background-color: #adadad;
  border: none;
  color: white;
  text-align: center;
  font-size: 30px;
  padding: 20px;
  width: 250px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>