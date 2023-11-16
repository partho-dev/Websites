Position fixed:
This is a css property which is used to stick some element to a certain position and the corresponding property which it needs are 
top 
bottom
right
left

This 4 properties decides where the element needs to be sticked.

If we just use the position of an element as fixed, it becomes transperant & to see the element, we need to use background color.

If we want to keep the element(In our case, its some boxes) just below the nav bar,
we can do that either by putting margin-top on the element(boxes) or bottom property on the nav bar.
Below both methods are not recommended
.nav-bar{
    position:fixed;
    /* bottom: we can not put any bottom here, instead we will give padding on the body to push the object on the body down */
}
.grid-box{
    display: grid;
    grid-template-columns: 200px 200px 1fr;
    /* margin-top: 50px;  */
}

But, this is not the best practise, because anytime if the boxes are removed and new element comes, it may break.

This method is recommended
So, the recommended solution is to provide padding-top on the body itself
body{
    padding-top: 40px;
    }