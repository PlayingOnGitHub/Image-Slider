Creates a repeatable image carousel
/* click right arrow, move images to the left.... place new image on the right slide and move it to center. Take center image [previous item] and move it to the left slide. */ 
    /* ..... also..... side note -> not if statement is needed since I have already shifted my image-positions in the previous function */
/* click left arrow, move images to the right.... place new image on the left slide and move it to center. Take center image [previous item] and move it to the right slide. */

/* whatever the current image is, that image will have a higher z-index of 10... Whenever an arrow is clicked, all images are automatically assigned a z-index of 1 This will make sure the current image is always on top. */

// function animateCurrentImageToTheLeft() {
//     /* use transition property so I don't mess up Id's? */
    
// }

function animateCurrentImageToTheLeft() {
    
}


IDEA!!! Really wide div.... hide overflow........
For each item in array, move that image forwards or backwards in the div depending on whether we are clicking the forward arrow or backward arrow.

upon a reversal.... for each item in array, stack the items in reversal order starting at the end.... can use a += or something to keep adding 200+ or 200- for each item.

upon jumping forward.... for each item in array, stack the items in normal order starting at the beginning. can use a += or something to keep adding 200+ or 200- for each item.

