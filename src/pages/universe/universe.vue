<template>
  <div id="app">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <div class="grid-container animated fadeIn"> 
    <header> 
        <h1>Universe</h1>
        <nav class="w3-theme-l1"> 
            <ul>
                <li><a href="../home.html">Home</a> </li>
                <li><a href="nationalpark.html">National Park</a> </li>
                <li style="color:white;"><b>Universe</b> </li>            
                <li><a href="hiking.html">Hiking</a> </li>  
                <li><a href="movies.html">Movies</a></li>
                <li><a href="moviesearch.html">IMDB</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Four images in image gallery-->
    <section class="grid-img container">
        <figure class="box">
            <!-- Image © Eberhard Grossgasteiger/ Pexels -->
            <img src="../../assets/images/star-mountain.jpg" alt="Mountain under the night sky">
            <span>Mountain</span> 
        </figure>
            <!-- Image © Alex Azabache / Pexels --> 
        <figure class="box">
            <img src="../../assets/images/star-arch.jpg" alt="Arch under the night sky">
            <span>Arch</span>
        </figure>
        <figure class="box">
            <!-- Image © Philippe Donn / Pexels -->
            <img src="../../assets/images/star-field.jpg" alt="Field under the night sky">
            <span>Field</span>
        </figure>
        <figure class="box">
            <!-- Image © Guillermo Ferla / Unsplash -->
            <img src="../../assets/images/milkyway.jpg" alt="Milkyway">
            <span>Milkyway</span>
        </figure>
    </section>

    <main>
        <section class="main-iframe"> 
            <h2>Big Fan of the Universe</h2>
            <!--Youtube video linked as aside, from melodysheep, Youtube.com-->
            <p>I am also a big fan of natural science, life, and the universe. This video is one of the most attractive ones, which talks about a journey of the time.
            Feel free to check it out. &#127756;&#127756;&#127756;</p>
            <p>And here is a quote from melodysheep, Youtube.com:</p>
            <!--Block quotation, melodysheep, youtube -->
            <blockquote cite="https://youtu.be/uD4izuDMUQA"> 
            <em>We start in 2019 and travel exponentially through time, witnessing the future of Earth, the death of the sun, the end of all stars, proton decay, 
            zombie galaxies, possible future civilizations, exploding black holes, the effects of dark energy, alternate universes, the final fate of the cosmos - 
            to name a few.</em>
            <br> 
            <em>This is a picture of the future as painted by modern science - a picture that will surely evolve over time as we dig for more clues to how our story 
            will unfold. Much of the science is very recent - and new puzzle pieces are still waiting to be found.</em>
            </blockquote>
        </section>
    </main>

    <aside class="aside-iframe">   
        <iframe width="480" height="350" title="Timelapse of the Future"
        src="https://www.youtube.com/embed/uD4izuDMUQA" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
        allowfullscreen>
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
</script>

<style>
@import '../../components/css/styles.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-iframe {
    width: 80%;
}

.aside-iframe {
    margin-top: 100px;
    margin-right: 100px;
}
/* ------------- Universe page animation, image hover effect, https://freefrontend.com/css-image-effects/. 
  Revised and customized based on example of Mert Cukuren ----------- */
 .container {
    display: flex;
    width: 98%;
    padding: 4% 2%;
    box-sizing: border-box;
    height: 700px;
}
    
.box {
    flex: 0.8;
    overflow: hidden;
    transition: 0.5s;
    margin: 0 1%;
    box-shadow: 0 20px 30px rgba(0,0,0,0.1);
    line-height: 0;
}
    
.box > img {        
    width: 100%;
    height: 550px;
    object-fit: cover; 
    transition: 0.5s;
}
    
/* Styling of text below the images */
.box > span {        
    font-size: 20pt;
    display: block;
    text-align: center;
    height: 500px;
    line-height: 2.6;
}
    
/* Animation when hover on the box */
.box:hover { 
    flex: 1 1 60%; 
}

.box:hover > img {
    width: 100%;
    height: 100%;
}
</style>
