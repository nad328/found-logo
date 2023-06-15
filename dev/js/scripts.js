import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, Physics2DPlugin);




function draw(){
    let tl = gsap.timeline();

    tl.fromTo("eyeball", 3, {drawSVG:"50% 50%"}, {drawSVG:"100% 0%"});

    return tl;

}

let mainTL = gsap.timeline();

mainTL.add(draw());

GSDevTools.create();
