var init = () => {
    const moveStep = 120;

    var rightArrow = $('.rightArrow');
    var leftArrow = $('.leftArrow');
    var toursContainer = $('.toursContainer');
    var leftPos = 1;
    var timeOut1, timeOut2;

    var rightArrowAnimation = bodymovin.loadAnimation({
        container: rightArrow[0],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/json/accept_arrows.json'
    })

    var leftArrowAnimation = bodymovin.loadAnimation({
        container: leftArrow[0],
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/json/decline_arrows.json'
    })

    var toursContainerMoveLeft = () => {
        if (leftPos < -237) {
            return;
        };
        toursContainer.css('left', leftPos + "px");
        leftPos -= 2;
        timeOut1 = setTimeout(toursContainerMoveLeft, 1);
    };

    var toursContainerMoveRight = () => {
        if (leftPos > 0) {
            return;
        };
        toursContainer.css('left', leftPos + "px");
        leftPos += 2;
        timeOut2 = setTimeout(toursContainerMoveRight, 1);
    };

    rightArrow.on("mouseover", () => {
        leftArrow.toggle(true);
        rightArrow.toggle(false);
        clearTimeout(timeOut2);
        //toursContainer.css('left', 0 + "px");
        leftPos = 0;
        toursContainerMoveLeft();
    });

    leftArrow.on("mouseover", () => {
        leftArrow.toggle(false);
        rightArrow.toggle(true);
        clearTimeout(timeOut1);
        //toursContainer.css('left', -237 + "px");
        leftPos = -237;
        toursContainerMoveRight();
    });
}