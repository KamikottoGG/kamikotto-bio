(function () {
    var titles = [
        "K",
        "Ka",
        "Kam",
        "Kami",
        "Kamik",
        "Kamiko",
        "Kamikot",
        "Kamikott",
        "Kamikotto",
        "Kamikotto_",
        "_Kamikotto_"

    ];

    var citates = [

    ];

    var titleIndex = 0;

    function changeTitle() {
        document.title = titles[titleIndex];
        titleIndex = (titleIndex + 1) % titles.length;
    }


    setInterval(changeTitle, 500);
})();


