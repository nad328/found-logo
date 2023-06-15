import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, Physics2DPlugin);




function draw(){
    let tl = gsap.timeline();

    tl.to("#right" , {scaleY: 0 , duration: 3})
    tl.to("#left" , {scaleY: 0 , duration: 3} , '-=2.6')
    tl.to("#bottom" , {scaleY: 0 , duration: 3} , '-=2.3')



    return tl;

}

function letters(){
    let tl = gsap.timeline();

    tl.to("#m , #a , #g , #i , #c" , {scale: 0 , duration: .1})

    tl.to("#Rectangle_3" , {opacity: 0 , duration: .5})

    tl.to("#m , #a , #g , #i , #c" , {scale: 5 , duration: .3 , ease: 'linear'})
    tl.to("#m , #a , #g , #i , #c" , {scale: .5 , duration: .3})
    tl.to("#m , #a , #g , #i , #c" , {scale: 3 , duration: .3})
    tl.to("#m , #a , #g , #i , #c" , {scale: 1 , duration: .3})



    return tl;

}


let mainTL = gsap.timeline();
mainTL.add(letters());
mainTL.add(draw());



GSDevTools.create();
