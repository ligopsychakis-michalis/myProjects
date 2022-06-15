window.onload = () => {
    //set the mode (dark or not)..
    if (sessionStorage.getItem("dark-mode")){
        if (sessionStorage.getItem("dark-mode") == "false"){
            sessionStorage.setItem("dark-mode","true");
        }else{
            sessionStorage.setItem("dark-mode","false");
        }
        performModeState();
    }else{
        sessionStorage.setItem("dark-mode","false");
    };

    let firstRender = true;

    //display countries in DOM
    async function displayCountries(url){
        document.querySelector("main").innerHTML = "";
        try{

            const res = await fetch(`${url}?access_key=8c580ba2cd926d5799d7b479f2dd0f39`);
            const data = await res.json();

            data.forEach(country => {
                //add options for search input
                if (firstRender == true){
                    const option = document.createElement("option");
                    option.value = country.name;
                    document.querySelector("#searching").appendChild(option);
                }


                //html content for homepage cards
                const cardsOutput = `
                    <h4>${country.name}</h4>
                    <p>Population: ${numberWithCommas(country.population)}</p>
                    <p>Region: ${country.region}</p>
                    <p>Capital: ${country.capital}</p>
                `;

                const card = document.createElement("div");
                const img = document.createElement("img");
                const div = document.createElement("div");
                const main = document.querySelector("main");

                card.classList.add("card");
                div.classList.add("infos");
                img.src = country.flag;
                img.alt = country.name;
                div.innerHTML = cardsOutput;

                card.appendChild(img);
                card.appendChild(div);
                main.appendChild(card);
            });
            //perform the state of card because on the reload it's not performing 
            if (sessionStorage.getItem("dark-mode") == "true"){
                for (let i = 0; i < document.querySelectorAll(".card").length; i++){
                    document.querySelectorAll(".card")[i].classList.add("dark-mode");
                };
            };

            firstRender = false;
            clickCountry(data);
        }catch(err){
            document.querySelector("main").innerHTML = "<h1 style='color:hsl(0, 0%, 52%)'>No country by that Name..</h1>";
        }       
    }

    displayCountries("https://restcountries.eu/rest/v2/all");


    //listener for filter countries by region
    const region = document.querySelector(".region");
    region.addEventListener("change", () => {
        if (region.value === ""){
            displayCountries("https://restcountries.eu/rest/v2/all");
        }else{
            displayCountries(`https://restcountries.eu/rest/v2/region/${region.value.toLowerCase()}`);
        }
    });


    //search for a specific country
    const search = document.querySelector(".search");
    search.addEventListener("change", () => {
        if (search.value === "" && region.value != ""){
            displayCountries(`https://restcountries.eu/rest/v2/region/${region.value.toLowerCase()}`);
        }else if(search.value === "" && region.value === ""){
            displayCountries("https://restcountries.eu/rest/v2/all");
        }else{
            displayCountries(`https://restcountries.eu/rest/v2/name/${search.value.toLowerCase()}`);
        }
    });


    //function for listening to clicking a country
    function clickCountry(data){
        document.querySelector("main").addEventListener("click", (e) => {
            if (e.target.classList.contains("infos") || e.target.tagName == "IMG"){
                const countryObject = JSON.stringify(data.find(country => country.name == e.target.alt));
                sessionStorage.setItem("countryObject", countryObject);
                window.location.pathname = "myProjects/countries/details/details.html";
            };
        });
    }    


    //listener for clicking "Dark mode"
    document.getElementById("dark").addEventListener("click", () => {
        performModeState();
    });


    //function to perform dark mode or not..
    function performModeState(){
        if (sessionStorage.getItem("dark-mode") == "false"){
            document.body.classList.add("body-dark-mode");
            document.querySelector("nav").classList.add("dark-mode");
            for (let i = 0; i < document.querySelectorAll("input").length; i++){
                document.querySelectorAll("input")[i].classList.add("dark-mode");
            };
            for (let i = 0; i < document.querySelectorAll(".card").length; i++){
                document.querySelectorAll(".card")[i].classList.add("dark-mode");
            };
            sessionStorage.setItem("dark-mode","true");
        }else{
            document.body.classList.remove("body-dark-mode");
            document.querySelector("nav").classList.remove("dark-mode");
            for (let i = 0; i < document.querySelectorAll("input").length; i++){
                document.querySelectorAll("input")[i].classList.remove("dark-mode");
            };
            for (let i = 0; i < document.querySelectorAll(".card").length; i++){
                document.querySelectorAll(".card")[i].classList.remove("dark-mode");
            };
            sessionStorage.setItem("dark-mode","false");
        };
    };


    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

};

