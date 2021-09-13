<template>
  <div id="app">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <div class="grid-container animated fadeIn"> 
        <header> 
            <h1>Grace's Wonderland</h1> 
            <nav class="w3-theme-l1" > 
                <ul> 
                    <li style="color:white;"><b>Home</b></li>                          
                    <li><a href="nationalpark.html">National Park</a></li> 
                    <li><a href="universe.html">Universe</a></li>
                    <li><a href="hiking.html">Hiking</a></li>
                    <li><a href="movies.html">Movies</a></li>
                    <li><a href="moviesearch.html">IMDB</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="skills.html">Skills</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>

        <div class="flip-box">
            <div class="flip-box-inner  grid-img">
                <!-- Flip box front image @ Federico Di Dio / Unsplash -->
                <img class="flip-box-front" src="@/assets/images/ocean.jpg" alt="Ocean">
                <!-- Flip box back image @ Nick Fewings / Unsplash -->
                <img class="flip-box-back" src="@/assets/images/woods.jpg" alt="Woods"> 
            </div> 
        </div>

        <main> 
            <section>
                <h2>Welcome to <i>Grace's Wonderland!</i></h2>
                <p>Once upon a time, on one of the remote planets deep in the vast universe, there lived someone who was originally
                    from a planet called Earth. She is passionate about natural science, and also interested in lots of fun stuff, 
                    natural scenery, hiking, and sci-fi movies. And she has a great interest in programming. Guess who she is? 
                    Bingo! That's me &#128105;
                <p>In this web site, you'll find out a couple of my favorite hobbies, including visiting national parks,
                    exploring natural science, as well as hiking. 
                    Also, feel free to check out my professional skills and my academic courses related to computer science.</p>
                <p>Ready for an adventure? Let's get started! &#9973;&#9973;&#9973;</p>

                <!--Audio source: https://youtu.be/rNsgHMklBW0, grimgroove, Youtube.com--> 
                <audio controls>
                    <source src="@/assets/audios/CanonInD.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio> 
            </section>
        </main> 

        <aside> 
            <!--The right hand side includes featured links to other pages of the website-->
            <h2>Featured Topics</h2>
            <a href="nationalpark.html">National Park <br> (Fun Place I've Been)</a>
            <a href="universe.html">Universe <br> (Dive into Infinity)</a>
            <a href="hiking.html">Hiking <br> (Embrace the Nature)</a>
            <a href="movies.html">Movies <br> (Movies I Like)</a>
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

<style>  /* -- Import some common features of CSS --- */
@import '../../components/css/styles.css';
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Image animation, flip box, customized and revised based on example from W3Schools
https://www.w3schools.com/howto/howto_css_flip_box.asp */
.flip-box {
  display: block;
  margin-top: 30px;
  margin-left: 30px;
  background-color: transparent;
  width: 1050px;
  height: 700px;
  perspective: 2000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-box-front {
  margin-left: -525px;
  border-radius: 8px;
}

.flip-box-back {
  margin-left: -525px;
  transform: rotateY(180deg);
  border-radius: 8px;
}

main {
  width: 70%;
}

aside {
  margin-left: -300px;
}

@media (max-width: 1100px) {
    main {
        width: 80%;
        margin-left: 60px;
    }
    aside {
      display: none;
    }
}
</style>