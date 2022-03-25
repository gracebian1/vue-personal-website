<template>
  <div id="app">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
      <div class="grid-container animated fadeIn"> 
    <header> 
        <h1>Movies</h1>
        <nav class="w3-theme-l1"> 
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="nationalpark.html">National Park</a></li>
                <li><a href="universe.html">Universe</a></li>
                <li><a href="hiking.html">Hiking</a></li>
                <li style="color:white;"><b>Movies</b></li>                        
                <li><a href="moviesearch.html">IMDB</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!--Movie gallary using flexbox-->
    <section class="grid-img flex-container">     
        <div class="column overlayfade"> 
            <!-- Three movie images from Google image -->
            <img class="multirow-img overlayimage" src="../../assets/images/inception.jpg" alt="Inception movie" >
            <div class="middle">
                <!--Button defined, when cursor hovers over image, image fades, and button becomes clickable-->
                <form action="movies.html#inception">    
                    <button class="button">Inception</button>  
                </form>
            </div>
        </div>
        <div class="column overlayfade">
            <img class="multirow-img overlayimage" src="../../assets/images/tenet.jpg" alt="Tenet movie">
            <div class="middle">
                <!--Button defined, when cursor hovers over image, image fades, and button becomes clickable-->
                <form action="movies.html#tenet">        
                    <button class="button">Tenet</button>   
                </form>
            </div>
        </div>
        <div class="column overlayfade">
            <img class="multirow-img overlayimage" src="../../assets/images/interstellar.jpg" alt="Interstellar movie">
            <div class="middle">
                <!--Button defined, when cursor hovers over image, image fades, and button becomes clickable-->
                <form action="movies.html#interstellar">   
                    <button class="button">Interstellar</button>  
                </form>
            </div>
        </div>
    </section>
    <br>
    
    <main class="main-iframe">
        <section id="inception"> 
            <h2>Inception</h2>
            <!-- Movie reviews from IMDB, authors: adrien_ngoc_1701; spaaw -->
            <p>Inception is one of my favorite movies. I'm a big fan of Christopher Nolan's movies, and I'm interested in 
                sci-fi stories. To quote some of the reviewers' comments on IMDB, Inception is <i>"A one-of-a-kind mind-blowing
                masterpiece"</i> (adrien_ngoc_1701), and <i>"A benchmark in all cinema to come."</i> (spaaw) Besides the story, 
                the visual effects in this movie are extremely attractive to me. I wish I could one day become one of the team 
                members to have an opportunity to do such kind of amazing visual effect.</p>
        </section>
        <br>
        <section id="tenet"> 
            <h2>Tenet</h2>
            <!-- Movie reviews of Tenet -->
            <p>Tenet is a brand new masterpiece directed by Christopher Nolan, and it has just been released recently in the US. This 
                movie includes quite a lot interesting and complex plots, for example timeline twists. Doing mind-blowing movies is 
                one of the most distinguishable features in Nolan's world. He's an expert at making good use of these complex concepts 
                as well as plots and bringing people a whole new world, consisting of both realistic and imaginary experiences. 
            </p>
        </section>
        <br>
        <section id="interstellar"> 
            <h2>Interstellar</h2>
            <!-- Movie reviews of Interstellar, reference: Off to the Stars, With Grief, Dread and Regret, by A.O.Scott, 
                    The New York Times, 2014 -->
            <p>In this movie, a NASA astronaut and also father of two went on an astonishing journey with his team to search for 
                another planet for humans to relocate, after climate change has made the earth almost uninhabitable. Nolan again 
                used timeline twists, flashbacks and cross cuts. One scene that moves me is that finally the astronaut came back 
                home, while his daughter is on her deathbed. The space and gravity have made the astronaut even younger than his 
                own daughter. But they were so happy to have the last chance to meet their loved ones. 
            </p>
        </section>
    </main>

    <aside class="aside-iframe">
        <!--Youtube video linked,  BoxOfficeSmashers, Youtube.com-->
        <iframe width="500" height="350" 
            src="https://www.youtube.com/embed/8hP9D6kZseM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
            allowfullscreen>
        </iframe>
        <br>
        <br>
        <br>
        <!--Youtube video linked,  Warner Bros. Pictures, Youtube.com-->
        <iframe width="500" height="350" 
            src="https://www.youtube.com/embed/LdOM0x0XDMo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
            allowfullscreen>
        </iframe>
        <br>
        <br>
        <br>
        <br>
        <!--Youtube video linked,  Interstellar Movie, Youtube.com-->
        <iframe width="500" height="350" 
            src="https://www.youtube.com/embed/0vxOhd4qlnA"
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

/* Button class that defines styles for buttons. When cursor hovers over image, image fades, button becomes clickable */
.button { 
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
}

.button:hover {      /* Cursor hovers, button font color changes */
    color: red;
}

/* --------- Movies page animation, overlayfade effect. Revised and customized based on example of W3Schools
  https://www.w3schools.com/howto/howto_css_image_overlay.asp -- */
/* Flexbox styles */
.flex-container {
    width: 98%;
    display: flex;
}
  
.flex-container > div {
    background-color: grey;
    box-shadow: 10px 10px 5px grey;
    margin: 15px;
    margin-top: 25px;
    padding: 10px;
    width: 30%;
}

.column {
    float: left;
    width: 310px;
    padding: 10px;
}

.multirow-img {
    width:100%;
    box-shadow: 10px 10px 5px grey;
}

/* Overlay fade effect, when cursor hovers on top of image, image fades, and shows text in the middle */
.overlayfade {
    position: relative;
    width: 50%;
}

.overlayimage {      
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
}
/* When hovers on image, overlay image becomes 0.3 opac */
.overlayfade:hover .overlayimage {
    opacity: 0.3;
}

/* When hovers in the middle, triggers the button effect */
.middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.overlayfade:hover .middle {
    opacity: 1;
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
