import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";


gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, Physics2DPlugin);




function color(){
    let tl = gsap.timeline();

    tl.to("#owl", { backgroundColor: "#3c5350" })

    return tl;

}

let mainTL = gsap.timeline();

GSDevTools.create();
