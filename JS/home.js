
var swiper2 = new Swiper(".slide-content2", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".pagination_addswiper",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".next_addswiper",
        prevEl: ".prev_addswiper",
    },
    autoplay: {
        delay:5000,
        disableOnInteraction: false,
    },
});

function n(){for(j=0;j<r.length; j++){r[j].classList.add('act');};i=(i+1)%r.length;r[i].classList.remove('act');};
function p(){for(j=0;j<r.length;j++){r[j].classList.add('act');};i=(i-1+r.length)%r.length;r[i].classList.remove('act');};
const sc=document.querySelector('.ri').outerHTML;
const te=document.querySelectorAll('#to-copy');
te.forEach(element=>{element.innerHTML=sc;});
const se = document.querySelectorAll('.stars');
const s1=document.querySelector('.s1').outerHTML;
const s2=document.querySelector('.s2').outerHTML;
const s3=document.querySelector('.s3').outerHTML;
let i=0;
let r=document.querySelectorAll('.rsc');
function buildStars(n,t){n++;for(let i=0;i<5;i++){if(n-1>=1){ta=s1}else if(n-1===0.5){ta=s2}else if(n-1<=0){ta=s3}let d=document.createElement('div');d.innerHTML=ta;t.appendChild(d.firstChild);n--;};};
se.forEach(stars=>{buildStars(Number(stars.getAttribute('note')),stars)})