function toggleMenu() {
    console.log("toggleMenu volána");
    var menu = document.querySelector('.contact-info');
    menu.classList.toggle('open');

    var krizek = document.getElementById('krizek');

    // Podle toho, zda má menu třídu 'open', skryje nebo zobrazí obrázek krížku
    if (menu.classList.contains('open')) {
        krizek.style.display = 'block';
    } else {
        krizek.style.display = 'none';
    }
}
function closeMenu() {
    var menu = document.querySelector('.contact-info');
    menu.classList.remove('open');

    var krizek = document.getElementById('krizek');
    krizek.style.display = 'none';
}
