import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";

gsap.set("#lines_1", {transformOrigin:"center"})
gsap.set("#lines_2", {transformOrigin:"center"})
gsap.set("#outer_circle_left", {transformOrigin:"center"})
gsap.set("#inner_circle_left", {transformOrigin:"center"})
gsap.set("#second_circle_left", {transformOrigin:"center"})
gsap.set("#fourth_circle_left", {transformOrigin:"center"})
gsap.set("#third_circle_left", {transformOrigin:"center"})
gsap.set("#outer_circle_right", {transformOrigin:"center"})
gsap.set("#inner_circle_right", {transformOrigin:"center"})
gsap.set("#second_circle_right", {transformOrigin:"center"})
gsap.set("#fourth_circle_right", {transformOrigin:"center"})
gsap.set("#third_circle_right", {transformOrigin:"center"})




gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, GSDevTools, Physics2DPlugin);

function flash(){
    let tl = gsap.timeline();

    tl.to("#inner_circle_left, #second_circle_left, #third_circle_left, #fourth_circle_left, #lines_1, #inner_circle_right, #second_circle_right, #third_circle_right, #fourth_circle_right, #lines_2" , {scaleY: 0 , duration: .2 , ease: 5})
    tl.to("#inner_circle_left, #second_circle_left, #third_circle_left, #fourth_circle_left, #lines_1, #inner_circle_right, #second_circle_right, #third_circle_right, #fourth_circle_right, #lines_2" , {pause:.25 , duration: .2 })
    tl.to("#inner_circle_left, #second_circle_left, #third_circle_left, #fourth_circle_left, #lines_1, #inner_circle_right, #second_circle_right, #third_circle_right, #fourth_circle_right, #lines_2" , {scaleY: 1 , duration: .2 , ease: 5})
   

    return tl;

}


function rotating(){
    let tl = gsap.timeline();
    tl.to("#lines_2, #lines_1", {pause: .2})

    tl.to("#lines_2, #lines_1", {rotate:150 , duration: 1 })
    tl.to("#outer_circle_left", {scale: 1.02 , duration: 1 , ease: 1 } , '-=1')
    tl.to("#outer_circle_right", {scale: .98 , duration: 1 , ease: 1 } , '-=1')


    tl.to("#lines_2, #lines_1", {rotate:680 , duration: 1, ease: 3 })
    tl.to("#outer_circle_left", {scale: 1.1 , duration: 1 , ease: 1 } , '-=1')
    tl.to("#outer_circle_right", {scale: .95 , duration: 1 , ease: 1 } , '-=1')  

    //tl.to("#lines_2, #lines_1", {pause: .2})

    tl.to("#lines_2, #lines_1", {rotate: 710 , duration: .5 })
    tl.to("#outer_circle_left", {scale: 1.13 , duration: .5 , ease: 3 } , '-=.5')
    tl.to("#outer_circle_right", {scale: .95 , duration: .5 , ease: 3 } , '-=.5')


    tl.to("#lines_2, #lines_1", {rotate: 200 , duration: 1 })
    tl.to("#outer_circle_left", {scale: 1 , duration: 1 , ease: 1 } , '-=1')
    tl.to("#outer_circle_right", {scale: 1 , duration: 1 , ease: 1 } , '-=1')

  





    return tl;

}

function blinkanim(){
    let tl = gsap.timeline();

    tl.to("#inner_circle_left, #second_circle_left, #third_circle_left, #fourth_circle_left, #lines_1, #inner_circle_right, #second_circle_right, #third_circle_right, #fourth_circle_right, #lines_2" , {scaleY: 0 , duration: .2 , ease: 5})
    tl.to("#inner_circle_left, #second_circle_left, #third_circle_left, #fourth_circle_left, #lines_1, #inner_circle_right, #second_circle_right, #third_circle_right, #fourth_circle_right, #lines_2" , {pause:.25 , duration: .2 })
    tl.to("#inner_circle_left, #second_circle_left, #third_circle_left, #fourth_circle_left, #lines_1, #inner_circle_right, #second_circle_right, #third_circle_right, #fourth_circle_right, #lines_2" , {scaleY: 1 , duration: .2 , ease: 5})
   

    return tl;

}





let mainTL = gsap.timeline();
mainTL.add(flash());

mainTL.add(rotating());

mainTL.add(blinkanim());

GSDevTools.create();
