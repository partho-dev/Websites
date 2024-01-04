This is used to apply a smooth scrolling effect on the website.
Need to get CDN for script tag and for CSS as well.
script CDN : https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.js
CSS CDN:
https://cdn.jsdelivr.net/npm/locomotive-scroll@3.5.4/dist/locomotive-scroll.css
Then get the JS code from its github code
put this code on the index.js file
const scroll = new LocomotiveScroll({
   el: document.querySelector(''),
   smooth: true
});

Important Notes:
Locomotive needs a proper HTML structure
All the HTML elements needs to be wrapped inside a main element or a wrapper 
the height of any page can not be given in %tage, because for the parent wrapper(main) we can not provide any height and width
Its a limitation
So, the heights always needs to be given in “vh” like 100 vh [ height:100vh ]
order of placing the scripts CDN
Locomitive JS CDN
GSAP script CDN
scrolltrigger CDN
HTML Script to link JS
Locomotive basically disturbs the scrolltrigger, it does not effect the GSAP though.
To make the Locomotive work well with scrollTrigger, there are certain steps that needs to be looked into.
Go to codepen website - https://codepen.io/GreenSock/pen/ExPdqKy
Copy the JS code from there
remove all the redpanel, orange panel and purple panel and the next 3 lines of timeline codes
change the queryselector to your main arapper (.main)
gsap scrollTrigger code, update the scroller:”.main” from “body”



why use locomotive scroll
Smooth Scrolling : It enables a very smooth scrolling on the website.
Parallax Effects: The library supports parallax scrolling effects, that create visually engaging experiences where background elements move at different speeds as the user scrolls.
Customisation : We can control the scrolling speed



