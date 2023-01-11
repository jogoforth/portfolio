console.log ("Hello world")
function menuToggle(){
    var x = doctument.getElementById ('myNavtoggle');
    if (x.className === 'navtoggle') {
    x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}