<template>
  <div id="app">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <div class="grid-container animated fadeIn"> 
    <header> 
        <h1>National Park</h1>
        <nav class="w3-theme-l1"> 
            <ul> 
                <li><a href="../home.html">Home</a> </li>
                <li style="color:white;"><b>National Park</b> </li>      
                <li><a href="universe.html">Universe</a> </li>  
                <li><a href="hiking.html">Hiking</a> </li>
                <li><a href="movies.html">Movies</a></li>
                <li><a href="moviesearch.html">IMDB</a></li>
                <li><a href="aboutme.html">About</a> </li>
                <li><a href="skills.html">Skills</a> </li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
        
    <figure class="grid-img cf"> <!--Image class defined as cf, stands for cross fading-->
        <!--Photo by myself-->
        <img src="../../assets/images/lighthouse.jpg" alt="Lighthouse in Acadia National Park">
        <!--Fog rolling in towards Otter Cliff | © Jim Lukach / Flickr-->
        <img class="top" src="../../assets/images/OtterCliff.jpg" alt="Otter Cliff in Acadia National Park">
    </figure>

    <main>
        <section class="main-iframe"> 
            <h2>National Park Adventure</h2>
            <p>I love to visit national parks. Discovering fun places is pretty exciting. Different national parks represent different 
                kinds of landscape, as well as cutural and historical features.</p>
            <p>One of my favorite places is <a href="https://www.nps.gov/acad/index.htm" target="_blank"><b>Acadia National Park</b></a>.
                I visited there a couple of years ago. Check out its breathtaking beauty online.</p> <!--External link to be opend in new tab-->

        <p class="text-bold"><b>Click the button to see if the weather is<br> good to go to Acadia.</b></p>
        <!--Button to query the weather data-->
        <button class="button" id="btn" a @click="handleClick">Click to Start!</button>
        <br>
        <br> 
        <p id="output-msg"></p>
        </section>
    </main>  

    <aside class="aside-iframe"> 
        <iframe   
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d91345.16225495494!2d-68.36702102473693!3d44.31948196555327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4caea3b20ea22925%3A0x62df220efc555584!2sAcadia%20National%20Park!5e0!3m2!1sen!2sus!4v1604759623897!5m2!1sen!2sus"
            height="350"
            width="455"
            title="Acadia National Park Google Map">
        </iframe>
    </aside>
    <br> 
    <footer>
        Copyright &copy; 2020 Grace (Xiaobin) Bian. All Rights Reserved.
        <p id="printnotice">Printed version: Grace's Wonderland.</p>
    </footer>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        // When event happens (mouse click)
        handleClick: function() {
            // Calling the event handler
            console.log("Making request");
            // AJAX request
            var xmlhttp = new XMLHttpRequest();
            // Handle request
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState === XMLHttpRequest.DONE ) {
                    if (xmlhttp.status === 200) {
                        console.log("HTTP request success.")
                        document.getElementById("output-msg").innerHTML= "";
                        // Parse the received data to JSON
                        let data = JSON.parse(xmlhttp.responseText);
                        // Output to innerHTML 
                        document.getElementById("output-msg").innerHTML += "Tremont, Maine";
                        document.getElementById("output-msg").innerHTML += "<br> Today's weather: " + data.weather[0].description;
                        document.getElementById("output-msg").innerHTML += "<br> Temperature: " + data.main.temp + " Fahrenheit";
                        document.getElementById("output-msg").innerHTML += "<br> Wind speed: " + data.wind.speed + " Miles/hour";
                        console.log("Fetched weather data:");
                        console.log(xmlhttp.responseText);
                    } else if (xmlhttp.status == 400) {
                        console.log('There was an error 400');
                    } else {
                        console.log('something else other than 200 was returned');
                    }
                }
            };
            // Asynchronous request use your API key generated from openweatherapp.org
            xmlhttp.open("GET", '', true);
            xmlhttp.send();
        }
    }
}
</script>

<style>
@import '../../components/css/styles.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-bold {
    font-size: 28px;
    color: rgb(62, 122, 97);
}

/* ---------- National park page animation,  Cross fading image, 
   Source: http://css3.bradshawenterprises.com/cfimg/ , Demo 1 and Demo 3 combined and revised */
.cf {
    position:relative;     
    margin-left: 50px;
    height: 230px;
}

/* Defines key frames for cross fade animation */
@keyframes cf3FadeInOut { 
    0% {opacity:1;}       /* To call fade_in_out function, 1 means opaque, 0 is completely transparent */
    45% {opacity:1;}
    55% {opacity:0;}
    100% {opacity:0;}
}

/* Cross fade image 1 */
.cf img {
    position:absolute;
    max-width: 100%;
    left: 0;
    right: 0;
    height: auto;
    margin-bottom:20px;
    border-radius: 8px;
    transition: opacity 1s ease-in-out;
}

/* Cross fade image 2 */
.cf img.top {
    animation-name: cf3FadeInOut;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-direction: alternate;
}

/* Defines image for national park page */
.main-iframe {
    margin-top: 450px;
    width: 80%;
}

.aside-iframe {
    margin-top: 450px;
    width: 80%;
    margin-right: 20px;
}

/* Button styling */
.button {
  display: inline-block;
  padding: 15px 25px;
  font-family: "Macondo Swash Caps";  /* Google font "Macondo Swash Caps" for button text */
  font-size: 35px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #426bda;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  margin-left: 160px;
}
/* Mouse hovers over button, background color changed */
.button:hover {background-color: #1310e9}

.button:active {
  background-color: #1310e9;
  box-shadow: 0 5px #666;    /* Button shadow effect */
  transform: translateY(4px);
}

@media (max-width: 1100px) {
    .main-iframe {
        margin-left: 50px;
    }
}
</style>