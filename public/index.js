let i = 0;

if(localStorage.getItem("welcomeToggle") === "true") {
    background.style.display = "none";
}

const steps = [
    { title: "Know Before Ye Go!", text: "We be a young crew still findin our way, so for now, we're stickin' to teachin' the basics of JavaScript. If ye were lookin' for another language, ye might need to set sail to a different shore—for now!" },
    { title: "The Map!", text: "This site's got articles, quizzes, and coding challenges to keep ye sharp! If ye ever get stuck, fear not—our hints will be there to lend ye a hand and guide ye back on course!" },
    { title: "Quick Note!", text: "Aye, quick note: This website was made for High Seas Hack Club, and I had to ship the website with only one article to get my hours counted; Sorry that there's not much here!"}
];

next.onclick = function() {
    if(i === 3) {
        background.style.display = "none";

        localStorage.setItem("welcomeToggle", true);
    }

    for(let j = 0; j < steps.length; j++) {
        if(i === j) {
            wt.innerText = steps[j].title;
            wte.innerText = steps[j].text;
            i++;
            break;
        }
    }
}

wb.onclick = function() {
    background.style.display = "block";
    i = 0;
    localStorage.setItem("welcomeToggle", false);
}