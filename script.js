new fullpage('#fullpage', {
	//options here
	autoScrolling:false,
	scrollHorizontally: false,
	navigation:true,
	loopTop: false,
	fadingEffect: true,
	keyboardScrolling: true,
	controlArrows: true,
	controlArrowsHTML: [
		'<div class="fp-arrow"></div>', 
		'<div class="fp-arrow"></div>'
	],
	sectionsColor : ['#6919ff', '#0f1922',"#6919ff","#0f1922","#0f1922"],
	paddingTop: '3em',
	paddingBottom: '10px',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	onLeave: (origin, destination, direction)=>{
		const section = destination.item;
		const title = section.querySelector("h1");
		console.log(title);
		const tl = new TimelineMax({delay:0.8});
		if(destination.index>0){

			tl.fromTo(title,0.6,{y:"50",opacity:0},{y:"0",opacity:1})

		}
		

		// if(destination.index===0){
		// 	gsap.killTweensOf("h1");
		// }

		if(destination.index===1){
			const text = document.querySelector(".about-text");
			tl.fromTo(text,0.,{x:-100,opacity:0},{x:0,opacity:1})
		}

	}
});




//script for typo js 

const type = new Typed(".auto-type",{
	strings:["Programmer...","teacher...","web developer..."],
	typeSpeed:150,
	backspeed:300,
	loop:true
})


const tech = new Typed(".tech",{
	strings:["Javscript","Java","Python","ExpressJs","NodeJs","Git & github","MongoDB"],
	typeSpeed:200,
	backspeed:350,
	loop:true
})
