Concept
If you give height of the nav bar as 50px.
You need to push the body 50px down to show all contents on the body, else they get hidden under the nav bar

if you give width of left side bar as 100px
You need to move the body 100px right to avoid getting the body content hidden under the side bar

body{
    padding: 0;
    padding-top: 50px; // This is equivalant of height of nav bar
    padding-left: 100px; // This is equivalent of width of side bar
}


Notes about position absolute:
When we assign position as absolute to an object : It simply comes above (Think like it jumps high and any element behind him comes to his position)
To understand this, I take an example of traffic road.
There are 3 cars [Red, Blue, Black] - Red car on 1st and Black on last
now, if I add position absolute on Red car, it actually jumps high and get into the overbridge
So, the other two cars behind, got a place to come front.
So, the Blue car comes to the place of Red and Black comes to the place of blue.

But, we have to keep in mind, this absolute position on an element gives it freedom to move left, right, top, bottom in the reference of the entire body or the page itself.
.position-absolute{
    background-color:green;
    color: white;
    position: absolute;
    left: 0; // This will take the element(the one we made as position absolute into the extreme left)
}

position: fixed == > Keeps the element on the browser window - Means its visible even the page moves up and down
position: absolute == > Places the elemnt on the page - If its mentioned as left, it will be visible if we come to the window, but if we scroll down, we may not see that element anymore.

If we write position element after the other element.
Ex: Nav bar element is above the elemnt which has position absolute, in that case, the position absolute element will be scrolling above the nav bar
Basically, any element which are above the absolute element, it will scroll above all of them.

To make the nav bar apear above, when the absolute elemnt scrols up, we have to use z-index:1 for nav bar.
.nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: gray;
    color: white;
    height: 50px;
    z-index: 1; // This makes it float above even the absolute element
}

To control that, we have use another position called relative or position fixed, 

Example : We have the side bar with fixed width.
Now, if we keep any element inside that side bar and give right:0 to that absolute element, it will be 0 pixel from right from the side bar

Use of position absolute:
1. You want to keep a close botton and it should always be on the top right side of the side bar. Here its relative to its side bar, so use top:0, left:0 on the element.
2. attach a number on a notification icon. [Relative to the icon]
3. video time on YouTube right bottom corner. [Relative to the video box] 