function getJoke() {

    fetch("https://official-joke-api.appspot.com/random_joke").then(response => response.json()).then(data => {

            document.getElementById("setup").innerText = data.setup;
            document.getElementById("punchline").innerText = data.punchline;

        })

        .catch(error => {
            console.log(error);
            document.getElementById("setup").innerText ="Unable to get joke";
            document.getElementById("punchline").innerText = "Please try again.";

        });
}