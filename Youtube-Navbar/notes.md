For the middle section, we have used a flex property with some value as 1.

.middle-section{
    background-color: lightcoral;
    flex: 1;
    }
    This flex:1 property allows the section to stretch and takes all the remaining places 
    This property also allows the section to shrink or expands based on the page getting expanded or contracted.

To stop the width of the middle section after a certain width, we can use the property max-width
.middle-section{
    background-color: lightcoral;
    flex: 1;
    max-width: 300px;
}

If we need to provide shadow inside, we have to use the property inset with box-shadow.
box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.1);

there is no space between the search bar and the search button.
To achive that, we can add margine-left with negative to pull the other element inside.
.search-btn{
    height: 36px;
    width: 50px;
    margin-left: -1px;
}

Concept :
1. If we reduce the size of the page, we can see the right section icons also start to shrink.
To prevent the items shrinking inside Flex-box. We can use 

    flex-shrink: 0;

.last-section{
    /* background-color: lightgreen; */
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
    flex-shrink: 0;
}

2. If we reduce the screen, we see that the search bar does not shrink after a certain min width.
To avoid this and allow the search bar to shrink along with the page, we can remove the default width of any search bar by 

    width:0

.search-bar{
    flex: 1;
    height: 36px;
    padding-left: 12px;
    font-size: 16px;
    border: 1px solid rgb(197, 195, 195);
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
    box-shadow: inset 1px 2px 5px rgba(0, 0, 0, 0.1);
    width: 0;
}

flex-shrink:0 == > Dont Shrink
width:0 == > Shrink