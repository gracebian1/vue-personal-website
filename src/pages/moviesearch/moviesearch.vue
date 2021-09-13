<template>
  <div id="app">
      <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-grey.css">
      <div class="animated fadeIn">
    <header>
        <h1>IMDB Movie Search</h1>
        <nav class="w3-theme-l1"> 
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="nationalpark.html">National Park</a></li>
                <li><a href="universe.html">Universe</a></li>
                <li><a href="hiking.html">Hiking</a></li>
                <li><a href="movies.html">Movies</a></li>
                <li style="color:white;"><b>IMDB</b></li>                         
                <li><a href="aboutme.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <h2>Check if your favorite movie is among IMDB top 100! &#127909; &#127916;</h2>
    
    <form name="myForm" action="http://18.221.177.230/php/lookup.php" method="post" v-on:submit="checkForm">
        <br>
        <p>Movie rank: <input v-bind:value="rank" v-on:input="rank = $event.target.value"
            type="text" class="text-input type-1" id="rank" name="rank" ></p>
        <p>Movie title: <input v-bind:value="title" v-on:input="title = $event.target.value"
            type="text" class="text-input type-1" id="title" name="title" ></p>
        <p>Movie year: <input v-bind:value="year" v-on:input="year = $event.target.value"
            type="text" class="text-input type-1" id="year" name="year" ></p>
        <br>
     
        <input class="submit-type" type="submit" value="Submit">
    </form>
    <br>
    <ul class="boxed" id="error-msg"></ul>
    <br>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        // JS function for validating the form 
        checkForm: function (e) {
            console.log("Start validation");
            let errorMsg = document.getElementById("error-msg");

            // Reset innerHTML
            errorMsg.innerHTML = "";
            // If no input for all fields
            if (!this.rank && !this.title && !this.year) {
                errorMsg.innerHTML = "<p>" + "Oops, at least one field is needed." + "</p>";
                console.log("At lease one field is needed.");
                // Stop submitting the form if invalid
                e.preventDefault();
                return false;
            }

            // If input rank is not a number
            if (this.rank != null && isNaN(this.rank)) {
                errorMsg.innerHTML = "<p>" + "Oops, only numbers are allowed for the rank field." + "</p>";
                console.log("Only numbers are allowed for the 'rank' field.");
                e.preventDefault();
                return false;
            }

            // If input year is not a number
            if (this.year != null && isNaN(this.year)) {
                errorMsg.innerHTML = "<p>" + "Oops, only numbers are allowed for the year field." + "</p>";
                console.log("Only numbers are allowed for the 'year' field.");
                e.preventDefault();
                return false;
            }

            // If input year is less than 4 digits
            if (this.year && this.year.length != 4) {
                errorMsg.innerHTML = "<p>" + "Oops, the year field needs 4-digit number." + "</p>";
                console.log("The year field needs 4-digit number.");
                e.preventDefault();
                return false;
            }

            // If title is entered
            if (this.title) {
                return true;
            }

            // Otherwise, input is valid
            console.log("Valid. Returning.");
            return true;
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

h2 {
    text-align: center;
}

/* Text input styling, revised and customized based on examples: 
https://blog.logrocket.com/how-to-style-forms-with-css-a-beginners-guide/*/
.text-input {
    display:block;
    width:98%;
    margin:10px 0;
    padding:10px;
    margin-left: 50px;
}

.type-1 {
    border-radius:8px;
    border: 1px solid #eee;
    transition: .3s border-color;
    box-shadow:0 0 4px rgba(0,0,0,0.3);  
}

.type-1:hover {
    border: 1px solid #eee;
    background-color: rgb(212, 245, 229); /*When mouse hovers over text input area, background color changed*/
}

.submit-type {
    width: 100%;
    background-color: #abecbf;
    color: #000000;
    padding: 15px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 25pt;
    font-family: Cabin Sketch, Arial, sans-serif;
    margin-left: 50px;
}
  
.submit-type:hover {     /* Mouse hovers over the submit button, background color changed */
    background-color: #69f172;
}

.boxed {
    width: 96%;
    border-radius: 4px;
    margin-left: 50px;
    background-color: tomato;  /* Error messgaes background color */
}
</style>