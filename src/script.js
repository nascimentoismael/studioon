$(document).ready(() => {
// menu
    $('.navbar__menu-btn').on('click', function () {
        $('.navbar__links').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars');
        $(this).find('i').toggleClass('fa-times');
    })

//carousel
    const slickOptions = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button;',
        nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button;'
};
    $(".slider").slick(slickOptions);

    $('.footer__form-button').on('Click', () => {
        const email = $('#email').val();
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : email,
            Subject : "Adicionar inscrição",
            Body : `Incluir ${email} a subscrição`
        }).then(
        message => alert(message)
        );
    });
});