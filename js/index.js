function borgir(){
    let hamburger_button = document.getElementById('boigah');
    if(hamburger_button.classList.contains('open')){
        hamburger_button.classList.replace('open', 'close');
    }else{
        hamburger_button.classList.replace('close', 'open');
    }
}