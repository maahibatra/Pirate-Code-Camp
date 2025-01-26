// let i = 0;
// const steps = [
//     { title: "Know Before Ye Go!", text: "We be a young crew still findin our way, so for now, we're stickin' to teachin' the basics of JavaScript. If ye were lookin' for another language, ye might need to set sail to a different shore—for now!" },
//     { title: "The Map!", text: "This site's got articles, quizzes, and coding challenges to keep ye sharp! If ye ever get stuck, fear not—our hints will be there to lend ye a hand and guide ye back on course!" }
// ]

// next.onclick = function() {
//     if(i === 2) {
//         welcome.style.display = "none";
//     }

//     for(let j = 0; j < steps.length; j++) {
//         if(i === j) {
//             title.innerText = steps[j].title;
//             text.innerText = steps[j].text;
//             i++;
//             break;
//         }
//     }
// }

toggle.onclick = function() {
    sidebar.classList.toggle("active");
}