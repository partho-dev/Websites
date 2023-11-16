We want to place an element on another element and we want that to be fixed even the parent element goes up or down, the child element remains on its position.
Example : YouTube has many video on its home page, we find the duration of video remains on its card even if we scroll up the page.

The position absolutute works well with its parents position relative.
Think like, the parent creates a boundary with its width and height.
That means the child who got position absolute, it jumps high and can move any direction, but this time within its parents boundary.

If you remove position relative from its parent, the child absolute goes up and moves any direction with its grand parent (May be the entire page or its immediate above its parent)