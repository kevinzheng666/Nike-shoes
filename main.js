const header = document.querySelector("bar");
const close = document.querySelector("close");
const nav = document.querySelector("nav");

function myFunction(bar) {
    bar.addEventListener('çlick', () => {
        nav.classList.add('active');
    })
}

function myFunction(close)  {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

var images = [  "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f4.jpg?raw=true", 
                "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f3.jpg?raw=true",
                "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f2.jpg?raw=true",
                "https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website/blob/main/img/products/f1.jpg?raw=true"
            ]

// var productImg = document.getElementById("MainImg");
// var smallimg = document.getElementsByClassName("test");
// var index_images_urls = 0 ;

// minImg.onclick = function() {
//     console.log("Look the onlick function is working");
//     console.log("Current file in src : " , minImg.src);
//     console.log("Nex src file in src : ", images[index_images_urls]);

    
//     minImg.src = images[index_images_urls];  
//     index_images_urls++; // adds 1 to index_images_urls  

//     if (index_images_urls == images.length-1){ // if we are at the end of the list, 
//             index_images_urls = 0 ; // then we start again at the beginning 
//     }
    
// }

