<template>
  <div id="app">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <div class="grid-container animated fadeIn"> 
        <header> 
          <h1>A little About Me</h1>
          <nav class="w3-theme-l1"> 
              <ul>
                  <li><a href="../home.html">Home</a></li>
                  <li><a href="nationalpark.html">National Park</a></li>
                  <li><a href="universe.html">Universe</a></li>
                  <li><a href="hiking.html">Hiking</a></li>
                  <li><a href="movies.html">Movies</a></li>
                  <li><a href="moviesearch.html">IMDB</a></li>
                  <li style="color:white;"><b>About</b></li>                      
                  <li><a href="skills.html">Skills</a></li>
                  <li><a href="contact.html">Contact</a></li>
              </ul>
          </nav>
        </header>

        <aside class="aside-iframe">
        <!-- Image © Ylanite Koppens / Pexels -->
        <figure>   
            <img class="regular-image" src="../../assets/images/about.jpg" alt="Work desk with book, phone, pen and indoor plants">
        </figure>
        </aside>

        <main class="main-iframe">
            <section class="fade-in-text" > 
              <h2>A Mini Biography</h2>
              <p>I'm Grace, a master student in Computer Science at Boston University.</p>

              <p>It has been a wonderful experience here at BU. 
                  I believe the challenging and rewarding learning experience has been constantly strengthening my hands-on skills. 
                  Right now I look forward to a new learning advanture on Web Application Development. Web design and 
                  development has always been attractive to me. Can't wait to explore more in this area.</p>
            </section>
        </main>

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
    width: 85%;
}

.aside-iframe {
    margin-top: 80px;
    margin-right: 150px;
}

@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
}

.fade-in-text { 
    text-transform: none;
    margin: 0 20px;
    opacity: 100%;
    animation: fadeIn ease 6s;
}

@media (max-width: 1100px) {
    .main-iframe {
        margin-left: 50px;
    }
}
</style>
