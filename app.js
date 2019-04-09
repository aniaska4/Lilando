document.addEventListener('DOMContentLoaded', function () {

            //slaider

            window.onload = function () {

                const mainPic = document.querySelector(".main_picture");
                const allPic = document.querySelectorAll(".slider__image");

                let image = new Image();
                mainPic.appendChild(image);

                let currentPicture = allPic[0];
                currentPicture.className += " current";

                image.src = currentPicture.getAttribute('src'); //pobieram atrybut src

                for (let el of allPic) {
                    el.onmouseover = function () {
                        currentPicture.className = currentPicture.className.replace("current", ""); //zamieniamy klasę z current na pustą
                        currentPicture = this; //przez this odnosi się do konkretnego obrazka
                        currentPicture.className += " current"
                        image.src = this.getAttribute('src');
                    }
                }
            };

            //price details

            const priceAll = function (a, b) {
                a.addEventListener('click', () => {
                    if (b.style.display == "none") {
                        b.style.display = "block"
                    } else {
                        b.style.display = "none"
                    }
                });
            }

            //price hand

            const price = document.querySelector(".price_hand");
            const details = document.querySelector('.price_hand_main');
            priceAll(price, details);

            //price feet

            const priceFeet = document.querySelector(".price_feet");
            const detailsFeet = document.querySelector('.price_feet_main');
            priceAll(priceFeet, detailsFeet);           


            //price cosmetics

            const priceCosmetics = document.querySelector(".price_cosmetics");
            const detailsCosmetics = document.querySelector('.price_cosmetics_main');
            priceAll(priceCosmetics, detailsCosmetics);



            //up button
            let interval = 0;
            const scroll_btn = document.querySelector('.scroll-top');

            function scrollButton(){
                if(window.pageYOffset === 0){
                    clearInterval(interval)
                }
                    window.scrollTo(0, window.pageYOffset - 100);
                
            }

            function scrollTop(){
                interval = setInterval(scrollButton, 16.66);
            }

            scroll_btn.addEventListener('click', scrollTop);


            //scroll menu

            function scrollIt(element) {  
                window.scrollTo({
                  'behavior': 'smooth',
                  'left': 0,
                  'top': element.offsetTop
                });
            }

            const scroll = document.querySelectorAll('.scroll');
            const section = document.querySelectorAll('.scroll_section');

            scroll[0].addEventListener('click', () => {
                scrollIt(section[0]);
            });

            scroll[1].addEventListener('click', () => {
                scrollIt(section[1]);
            });

            scroll[2].addEventListener('click', () => {
                scrollIt(section[2]);
            });

            scroll[3].addEventListener('click', () => {
                scrollIt(section[3]);
            });


            //scroll menu dropdown
            
            function scrollIt(element) {  
                window.scrollTo({
                  'behavior': 'smooth',
                  'left': 0,
                  'top': element.offsetTop
                });
            }

            const scroll_dropdown = document.querySelectorAll('.scroll_dropdown');
            const section_dropdown = document.querySelectorAll('.scroll_section');

            scroll_dropdown[0].addEventListener('click', () => {
                scrollIt(section_dropdown[0]);
            });

            scroll_dropdown[1].addEventListener('click', () => {
                scrollIt(section_dropdown[1]);
            });

            scroll_dropdown[2].addEventListener('click', () => {
                scrollIt(section_dropdown[2]);
            });

            scroll_dropdown[3].addEventListener('click', () => {
                scrollIt(section_dropdown[3]);
            });



            //hamburger

            const hamburger = document.querySelector('.hamburger');
           
            hamburger.addEventListener('click', updateValue);

            function updateValue() {
               document.querySelector('.dropdown').classList.toggle('active');
            }

});