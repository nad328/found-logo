import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, Physics2DPlugin);




function draw(){
    let tl = gsap.timeline();

    tl.to("#right" , {scaleY: 0 , duration: 3})
    tl.to("#left" , {scaleY: 0 , duration: 3})
    tl.to("#bottom" , {scaleY: 0 , duration: 3})



    return tl;

}

let mainTL = gsap.timeline();

mainTL.add(draw());

GSDevTools.create();
