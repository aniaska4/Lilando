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

            //price hand

            const price = document.querySelector(".price_hand");
            const details = document.querySelector('.price_hand_main');
            price.addEventListener('click', () => {
                if (details.style.display === "none") {
                    details.style.display = "block"
                } else {
                    details.style.display = "none"
                }
            });

            //price feet

            const priceFeet = document.querySelector(".price_feet");
            const detailsFeet = document.querySelector('.price_feet_main');
            priceFeet.addEventListener('click', () => {
                if (detailsFeet.style.display === "none") {
                    detailsFeet.style.display = "block"
                } else {
                    detailsFeet.style.display = "none"
                }
            });


            //price cosmetics

            const priceCosmetics = document.querySelector(".price_cosmetics");
            const detailsCosmetics = document.querySelector('.price_cosmetics_main');

            priceCosmetics.addEventListener('click', () => {
                if (detailsCosmetics.style.display === "none") {
                    detailsCosmetics.style.display = "block"
                } else {
                    detailsCosmetics.style.display = "none"
                }
            });


            //up button


            $(document).ready(function () {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 750) {
                        $('#scroll-top').fadeIn();
                    } else {
                        $('#scroll-top').fadeOut();
                    }
                });
                $('#scroll-top').click(function () {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
            });

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

            //scroll menu droopdown

            
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