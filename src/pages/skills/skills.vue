<template>
  <div id="app">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
      <div class="grid-container animated fadeIn"> 
    <header>
        <h1>Skills</h1>
        <nav class="w3-theme-l1"> 
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="nationalpark.html">National Park</a></li>
                <li><a href="universe.html">Universe</a></li>
                <li><a href="hiking.html">Hiking</a> </li>
                <li><a href="movies.html">Movies</a></li>
                <li><a href="moviesearch.html">IMDB</a></li>
                <li><a href="aboutme.html">About</a></li>
                <li style="color:white;"><b>Skills</b></li>                    
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
      
    <aside class="aside-iframe">
        <figure> <!-- Image © Serpstat / Pexels --> 
            <img class="regular-image fade-in" src="../../assets/images/skills.jpg" alt="Work desk with computer, books, and plants">
        </figure>
    </aside>  

    <main class="main-iframe">
        <section> 
            <h2>Computer Science Courses I've Taken</h2>
            <p>Feel free to check out some of the computer science related courses I've taken in different universities.
                Besides these, I'm also doing self-learning on Node.js, AWS, machine learning, etc.
            </p>
        
            <ul>
                <li>Information Structures with Python</li> 
                <li>Data Structures and Algorithms</li>
                <li>Computer Information Processing</li>
                <li>Computer and Database Management</li>
                <li>Information Systems Analysis and Design</li>
                <li>Problem Solving with Java</li>
            </ul>
        </section>

        <section> 
            <h2>Skill Set</h2>       
           
            <dl> 
            <dt>Front End</dt> 
            <dd> HTML, CSS, JavaScript, JQuery</dd> 
            <dt>Back End</dt>
            <dd> Java, Python, Node.js</dd>
            <dt>Others</dt>
            <dd>Github, Docker, Data structures and algorithms, Object Oriented programming</dd>
            </dl>
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
    margin-top: 60px;
    margin-right: 150px;
}

.fade-in {  
    width: 500px;
    border-radius: 8px;
    box-shadow: 15px 15px 5px grey;
    animation: fadeIn ease 6s;
}

@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
}

@media (max-width: 1100px) {
    .main-iframe {
        margin-left: 60px;
    }
}
</style>