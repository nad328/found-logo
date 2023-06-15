import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";




let mainTL = gsap.timeline();

function color(){
    let tl = gsap.timeline();

    tl.to("#owl", { backgroundColor: "#3c5350" })

    return tl;

}


GSDevTools.create();
