const animationName = document.querySelectorAll('.animationNameJS');
const observerAnimationNameJS = new IntersectionObserver(elements=>{
    elements.forEach(element=>{
        if(element.isIntersecting) element.target.classList.add('animationName');
    })
})
animationName.forEach(element => observerAnimationNameJS.observe(element) );


const animationMe = document.querySelectorAll('.animationMeJS');
const observerAnimationMeJS = new IntersectionObserver(elements=>{
    elements.forEach(element=>{
        if(element.isIntersecting) element.target.classList.add('animationMe');
    })
})
animationMe.forEach(element => observerAnimationMeJS.observe(element) );


const animationSkills = document.querySelectorAll('.animationSkillsJS');
const observerAnimationSkills = new IntersectionObserver(elements=>{
    elements.forEach(element=>{
        if(element.isIntersecting) element.target.classList.add('animationSkills');
    })
})
animationSkills.forEach(element => observerAnimationSkills.observe(element) );

