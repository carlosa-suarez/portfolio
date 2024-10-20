let casm = {   
    nav: document.getElementById('main-nav'),
    services: document.getElementsByClassName('service')
};

casm.toggleClass = (htmlElement) => {
    var clickClass = 'clicked';
    console.log('clicked');
    var classes = htmlElement.getAttribute('class');
    if (classes) {
        var clicked = classes.includes(clickClass);
        if (clicked) {
            classes = classes.replace(clickClass, '');
        }
        else {
            classes += ' ' + clickClass;
        }   

        htmlElement.setAttribute('class', classes);
    }
    else {
        htmlElement.setAttribute('class', clickClass);
    }
    
};

casm.start = () => {
    casm.nav.addEventListener("click", () => casm.toggleClass(casm.nav));

    for (let index = 0; index < casm.services.length; index++) {
        casm.services[index].addEventListener("click",() => casm.toggleClass(casm.services[index]));
    }
    console.log('started');
},

casm.start();