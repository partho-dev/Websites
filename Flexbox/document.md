Flexbox replaces properties like float, clear, and vertical-align that were commonly used for layout purposes. It also provides a better alternative to using percentage-based widths for creating flexible and responsive designs.
Flexbox is especially useful for creating complex layouts where you need elements to be dynamically adjusted based on the available space and also for aligning elements both vertically and horizontally within a container. It's widely used for building modern and responsive web interfaces.
The flex needs two separate entities
The main container [Parent] [Example : Div]


display : To enable flexbox, you set the display property of the container to flex or inline-flex. This establishes a flex container.
.container {
  display: flex; /* or inline-flex */
}




flex-direction : This property defines the main axis of the flex container. It determines whether the items are placed horizontally or vertically.
.container {
  flex-direction: row; /* or column, row-reverse, column-reverse */
}




flex-wrap: This property defines how the items should wrap if they exceed the size of the container along the main axis.
.container {
  flex-wrap: nowrap; /* or wrap, wrap-reverse */
}




justify-content: This property aligns the items along the main axis of the container. It controls the spacing between and around items.
.container {
  justify-content: center; /* or flex-start, flex-end, space-between, space-around */
}


If we give any specific height to the main container, the flex items can be adjusted to be shown either on start or end using this property.
align-items: This property aligns the items along the cross axis (perpendicular to the main axis).
.container {
  height:500px;
  align-items: center; /* or flex-start, flex-end, baseline, stretch */
}


The items [child] inside the container [Example : nav items]


flex: This property is applied to individual flex items and defines how they should grow, shrink, or remain fixed.
.item {
  flex: 1; /* flex-grow, flex-shrink, flex-basis */
}


By Default, if the container(Parent) does not have any height, the height gets automatically adjusted based on the contents.
If we assign some height to the container, but we want the child container to be with on the top or bottom.
align-self: This property overrides the align-items property for individual flex items.
.item {
  align-self: flex-start; /* or flex-end, center, baseline, stretch */
}




order: This property allows you to control the order in which flex items appear in the flex container.
.item {
  order: 2; /* Positive or negative integer value */
}




flex-grow, flex-shrink, flex-basis: These are individual components of the flex property, allowing you to specify the grow factor, shrink factor, and initial size of a flex item.


.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto; /* or a specific size value */
}


