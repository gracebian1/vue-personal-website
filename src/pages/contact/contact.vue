<template>
  <div id="app">
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
    <div class="grid-container animated fadeIn"> 
      <header> 
        <h1>Contact</h1>
        <nav class="w3-theme-l1"> 
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="nationalpark.html">National Park</a></li>
                <li><a href="universe.html">Universe</a></li>
                <li><a href="hiking.html">Hiking</a></li>
                <li><a href="movies.html">Movies</a></li>
                <li><a href="moviesearch.html">IMDB</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li style="color:white;"><b>Contact</b></li>                  
            </ul>
        </nav>
      </header>
   
      <aside class="aside-iframe">
          <!-- Image © Brady Knoll / Pexels -->
          <figure>   
              <img class="contact-image" src="../../assets/images/contact.jpg" alt="Ocean and beach">
          </figure>
      </aside>

      <main class="main-iframe">
          <section> 
              <h2>My Contact Info</h2>  
              <p class="slideinfromleft">Check out contact info, both on earth <em>and</em> in outer space! &#127758;&#127756;</p>
          </section>
      
          <table> <!--Table for tabular data-->
              <tr> <!--Table row-->
                <th><b>Address</b></th> <!--Table header-->
                <th><b>Planet</b></th>
                <th><b>Distance to BU</b></th>
              </tr>
              <tr>
                <td>123 Main St., ABC town, US</td> <!--Table data-->
                <td>Earth</td>
                <td>800 miles</td>
              </tr>
              <tr>
                <td>Martian Building, Suit 123</td> 
                <td>Mars</td>
                <td>47 million miles</td>
              </tr>
              <tr>
                <td>Arcturus Spaceship, Room 123</td> 
                <td>Arcturus</td>
                <td>36 light years</td>
              </tr>
              <tr>
                <td>Pillars Cell 123</td> 
                <td>Pillars of Creation</td>
                <td>7000 light years</td>
              </tr>
          </table>
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

.aside-contact { 
    width: 40%;
    padding: 0px 0px 0px 0px;
    float: right;
    background-color: transparent;
}
    
.aside-iframe {
    margin-top: 20px;
    margin-right: -120px;
}

.main-iframe {
    width: 80%;
    text-align: center;
}

.contact-image {
    width: 330px;
    border-radius: 8px;
    box-shadow: 10px 10px 5px grey;
    margin-left: -20px;
}

.slideinfromleft {   
    animation-duration: 3s;
    width: 100%;
    animation-name: slideinfromleft;
}
  
@keyframes slideinfromleft {
    from {
      margin-left: -50%;
      width: 100%; }
    to {
        margin-left: 0%;
        width: 100%;}
}

@media (max-width: 1100px) {
    .main-iframe {
        margin-left: 80px;
    }
}
</style>
