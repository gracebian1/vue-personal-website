<template>
  <div id="app">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
      <div class="grid-container animated fadeIn"> 
    <header> 
        <h1>Hiking</h1>
        <nav class="w3-theme-l1"> 
            <ul>
                <li><a href="home.html">Home</a> </li>
                <li><a href="nationalpark.html">National Park</a> </li>
                <li><a href="universe.html">Universe</a> </li>
                <li style="color:white;"><b>Hiking</b> </li>                        
                <li><a href="movies.html">Movies</a></li>
                <li><a href="moviesearch.html">IMDB</a></li>
                <li><a href="aboutme.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <!-- Image © Toomas Tartes / Unsplash -->
    <figure class="grid-img"> 
        <img class="slidein" src="../../assets/images/hiking.jpg" alt="Hiking"> 
    </figure>

    <main class="main-iframe">
        <section> 
            <h2>Favorite Hiking Videos</h2>
            <p>Besides natural science, I love hiking and exploring nature. Although I haven't been doing hiking recently, 
                there are quite a lot youtubers who do hiking videos and I really enjoy watching them. They bring people to 
                lots of fun places "on screen".</p>
            <p>Here is one of my favorite videos, which is about Hornstrandir Iceland. Check out the magnificent natural scenery in this video, 
                especially starting from 10:00! &#127800;&#127808;&#127809;</p>
        </section>
    </main>
    <aside class="aside-iframe"> 
        
        <!--Youtube video linked, Kraig Adams, Youtube.com--> 
        <iframe width="500" height="350" title="Hiking 60 Miles Alone in Hornstrandir Iceland"
            src="https://www.youtube.com/embed/6A5HY7hDeQA" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
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

/* --------- Hiking page animation, image slide in. Revised and customized based on example of 
   https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations --- */

.slidein {    
    margin-left: -10px;
    border-radius: 8px;
    width: 103%;
    box-shadow: 15px 15px 5px grey;
    animation-duration: 3s;
    animation-name: slidein;
}

/* Key frames for slide in animation */
@keyframes slidein {
    from {
        margin-left: -10px;
        width: 130%; 
        }
    to {
        margin-left: -10px;
        border-radius: 8px;
        width: 103%;
        box-shadow: 15px 15px 5px grey;}
}

@media (max-width: 1100px) {
    .main-iframe {
        width: 100%;
        margin-left: 80px;
    }
}

.main-iframe {
    width: 80%;
}

.aside-iframe {
    margin-top: 60px;
    margin-right: 110px;
}
</style>
