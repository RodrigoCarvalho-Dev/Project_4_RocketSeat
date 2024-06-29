const nav = document.querySelector('nav');
const menu_hamburguer = document.querySelector('#menu_hamburguer');
const exit_nav = document.querySelector('#exit_menu_hamburguer');
const exit_icon = document.querySelector('.exit_icon');
const button_exit = document.querySelector("#exit");






if (menu_hamburguer.classList.contains("open")){

    menu_hamburguer.classList.remove("not_open");
    menu_hamburguer.classList.add("open");
    nav.style.marginLeft = "0";
    nav.style.opacity = "1";
    menu_hamburguer.style.marginTop = "-100%";

    button_exit.style.marginLeft = "0"

}

if (menu_hamburguer.classList.contains("not_open")){

    button_exit.style.marginLeft = "100%"

    setTimeout(() => {
        menu_hamburguer.style.marginTop = "0"
    },200);

}





menu_hamburguer.addEventListener("click", () => {

        menu_hamburguer.classList.add("open");

    if (menu_hamburguer.classList.contains("open")){

        menu_hamburguer.classList.remove("not_open");
        menu_hamburguer.classList.add("open");
        nav.style.marginLeft = "0";
        nav.style.opacity = "1";
        menu_hamburguer.style.marginTop = "-100%";

        button_exit.style.marginLeft = "80%"

    } else if (menu_hamburguer.classList.contains("not_open")){
        menu_hamburguer.classList.remove("open");
        menu_hamburguer.classList.add("not_open");

        button_exit.style.marginLeft = "100%"
    
        setTimeout(() => {
            menu_hamburguer.style.marginTop = "0"
        },200);

    }
});

button_exit.addEventListener('click' , () => {



});



button_exit.addEventListener('click' , () => {

    menu_hamburguer.style.marginTop = "0";
    nav.style.marginLeft = "-100%";
    nav.style.opacity = "0";
    button_exit.style.marginLeft = "100%"

});




exit_nav.addEventListener("click" , () => {

    exit_icon.classList.remove("not_translate");
    exit_icon.classList.add("translate");

    // transform: rotate(-45deg);

    if (exit_nav.classList.contains("translate")){
        exit_nav.classList.remove("translate");
        exit_nav.classList.add("exit_translate");
        exit_icon.style.transform = "rotate( -45deg )"
        

    } else if (exit_nav.classList.contains("not_translate")){
        exit_nav.classList.remove("not_translate");
        exit_nav.classList.add("translate");
        exit_icon.style.transform = "  rotate( 45deg ) " ;
        
    }

    nav.style.marginLeft = "-100% " ;
    nav.style.opacity = " 0 " ;


    menu_hamburguer.classList.remove("open");
    menu_hamburguer.classList.add("not_open");

    menu_hamburguer.style.marginTop = "0"

    button_exit.style.marginLeft = "100%"

    
});

