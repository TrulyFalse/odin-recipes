function borgir(){
    let hamburger_button = document.getElementById('boigah');
    let hamburger_menu = document.getElementById('hamburger-menu');
    if(hamburger_button.classList.contains('open')){
        hamburger_button.classList.replace('open', 'close');
        hamburger_menu.style.left = '-200px';
    }else{
        hamburger_button.classList.replace('close', 'open');
        hamburger_menu.style.left = '0px';
    }
}