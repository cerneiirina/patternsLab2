import Main from './index';

window.onload = function () {
    var x:any = document.getElementById('myCanvas');
    x.setAttribute('width',String(window.screen.width));
    x.setAttribute('height',String(window.screen.height));
    let main = new Main(x.getContext("2d"));
    main.scene();
}

