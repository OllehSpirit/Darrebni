const boxs = document.querySelectorAll('.box');
const observerBox = new IntersectionObserver(grids=>{
    grids.forEach(grid=>{
        if (grid.isIntersecting) grid.target.classList.add('simpleTranslateX');
        else grid.target.classList.remove('simpleTranslateX');
    })
})
boxs.forEach(box => observerBox.observe(box));


const titles = document.querySelectorAll('.title');
const observerTitle = new IntersectionObserver(titles=>{
    titles.forEach(title=>{
        if (title.isIntersecting) title.target.classList.add('simpleTranslateXTitle');
        else title.target.classList.remove('simpleTranslateXTitle');
    })
})
titles.forEach(title => observerTitle.observe(title));


const subTitles = document.querySelectorAll('.title + p');
const observersubTitles = new IntersectionObserver(subTitles=>{
    subTitles.forEach(subTitle=>{
        if (subTitle.isIntersecting) subTitle.target.classList.add('simpleTranslateXTitle2');
        else subTitle.target.classList.remove('simpleTranslateXTitle2');
    })
})
subTitles.forEach(title => observersubTitles.observe(title));



const grids = document.querySelectorAll('.grid');
const observerGrid = new IntersectionObserver((grids) => {
    grids.forEach((grid) => {
        if (grid.isIntersecting) 
            grid.target.classList.add('simpleTranslateY');
        
        else 
        grid.target.classList.remove('simpleTranslateY');
        
    });
});
grids.forEach((grid) => observerGrid.observe(grid));



const albums = document.querySelectorAll('.album');
const observerAlbum = new IntersectionObserver((albums) => {
    albums.forEach((album) => {
        if (album.isIntersecting) 
            album.target.classList.add('simpleAnimationOpacity');
        
        else 
        album.target.classList.remove('simpleAnimationOpacity');
        
    });
});
albums.forEach((album) => observerAlbum.observe(album));


const leftReviews = document.querySelectorAll('.reviewBox > div:first-child');
const observerleftReview = new IntersectionObserver((leftReviews) => {
    leftReviews.forEach((leftReview) => {
        if (leftReview.isIntersecting) 
            leftReview.target.classList.add('simpleTranslateY');
        
        else 
        leftReview.target.classList.remove('simpleTranslateY');
        
    });
});
leftReviews.forEach((leftReview) => observerleftReview.observe(leftReview));


const rightReviews = document.querySelectorAll('.reviewBox > div:last-child');
const observerRightReview = new IntersectionObserver((rightReviews) => {
    rightReviews.forEach((rightReview) => {
        if (rightReview.isIntersecting) 
            rightReview.target.classList.add('simpleTranslateY2');
        
        else 
        rightReview.target.classList.remove('simpleTranslateY2');
        
    });
});
rightReviews.forEach((rightReview) => observerRightReview.observe(rightReview));


const leftContacts = document.querySelectorAll('.contactBox .left');
const observerleftContact = new IntersectionObserver((leftContacts) => {
    leftContacts.forEach((leftContact) => {
        if (leftContact.isIntersecting) 
            leftContact.target.classList.add('simpleTranslateY');
        
        else 
        leftContact.target.classList.remove('simpleTranslateY');
        
    });
});
leftContacts.forEach((leftContact) => observerleftContact.observe(leftContact));


const rightContacts = document.querySelectorAll('.contactBox .right');
const observerRightContact = new IntersectionObserver((rightContacts) => {
    rightContacts.forEach((rightContact) => {
        if (rightContact.isIntersecting) 
            rightContact.target.classList.add('simpleTranslateY2');
        
        else 
        rightContact.target.classList.remove('simpleTranslateY2');
        
    });
});
rightContacts.forEach((rightContact) => observerRightContact.observe(rightContact));