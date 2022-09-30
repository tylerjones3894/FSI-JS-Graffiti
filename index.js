let header = document.querySelector('#page-header')
    header.style.textAlign = "left"

let dogImages = document.querySelectorAll('.dog-image')
for(let i = 0; i < dogImages.length; i++){
	dogImages[i].style.borderRadius = '50px'
}
let dogNames = document.querySelectorAll('.dog-name')
    for (let i = 0; i < dogNames.length; i++) {
        dogNames[i].style.textAlign = 'left';
    }
let footer = document.querySelector('.footer');
    footer.style.color = 'blue';

    dogImages.forEach((image) => {
        image.style.transform = 'rotateY(180deg)';
    });




// Select some elements...