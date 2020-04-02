
import 'jquery-mask-plugin'
import 'bootstrap'
import 'bootstrap/scss/bootstrap.scss'

import './plugins.scss'
import './style.scss'


alert(12)
import('./test')
let angle = 0
function rotate(){
    angle += 360
    document.body.style.transform = `rotate(${angle}deg)`
}
document.onclick = function(){
    console.log(angle,'aaaaa')
    rotate()
}




