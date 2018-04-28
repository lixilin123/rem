(()=>{
    let designWidth = 750,
        baseSize = 100,
        pexleWidth = 0;
    let resize = ()=>{
        pexleWidth = window.innerWidth > designWidth ?  designWidth  : window.innerWidth;
        document.documentElement.setAttribute('style', 'width:' + pexleWidth + 'px;' + 'font-size:' + pexleWidth * baseSize / designWidth + 'px;margin:auto;');
    };
    resize();
    document.addEventListener('DOMContentLoaded', function () {
        resize();
    });
    window.addEventListener('load', function () {
        setTimeout(resize, 300);
    });
    window.addEventListener('resize', function () {
        setTimeout(resize, 300);
    });
})()