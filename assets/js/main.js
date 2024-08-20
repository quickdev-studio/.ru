(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 200);
        new WOW().init();
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          logo.src = 'assets/images/logo/logo.svg';
        } else {
          header_navbar.classList.remove("sticky");
          logo.src = 'assets/images/logo/logo.svg';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });


    // Show modal contacts information
    const teamSocialLinks = document.querySelectorAll('ul.social li');

    teamSocialLinks.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const link = item.querySelector('a').getAttribute('href');

            Swal.fire(
                {
                    icon: 'info',
                    html: `Если вы собираетесь что-то заказать или у вас есть вопросы, пожалуйста, напишите<br>` +
                          `в наше сообщество ВКонтакте. <br>` +
                          `Исполнители не работают через личные сообщения в большинстве случаев.`,
                    confirmButtonText: 'Написать разработчику',
                    denyButtonText: 'Написать в паблик',
                    showDenyButton: true,
                    iconColor: '#723FE4'
                }
            ).then((result) => {
                if(result.isConfirmed) {
                    window.open(link, '_blank');
                } else if (result.isDenied) {
                    window.open("https://vk.com/im?media=&sel=-195500908");
                }
            });



        })
    })

})();

