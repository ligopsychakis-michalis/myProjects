//Event - show mobile navbar when burger clicked
export function mobileNav(){
    const burger = document.querySelector(".desktop-nav ul li:last-child i");
    let mobileNav = false;

    burger.addEventListener("click", () => {
        if (mobileNav == false){
            document.querySelector(".mobile-nav").style.display = "block";
            document.querySelector(".mobile-nav").classList.remove("fade-out");
            document.querySelector(".mobile-nav").classList.add("fade-in");
            burger.className = "far fa-window-close fa-2x";
            mobileNav = true;
        }else { 
            document.querySelector(".mobile-nav").classList.remove("fade-in");
            document.querySelector(".mobile-nav").classList.add("fade-out");
            setTimeout(() => { 
                document.querySelector(".mobile-nav").style.display = "none";
            }, 800)
            burger.className = "fas fa-bars fa-2x";
            mobileNav = false; 
        };    
    });
}
