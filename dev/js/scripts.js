import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";




gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, Physics2DPlugin);




let mainTL = GSAP.timeline();
mainTL.add(outercircleAnimation()) ;

GSDevTools.create();
