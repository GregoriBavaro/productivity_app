//const sessionMain = document.getElementById("sessionMain");
const sessionCardButtons = document.querySelectorAll(".sessionButtons");
const sessionModals = document.querySelector(".sessionPopUpModals");
const closeButton = document.querySelector(".closeSessionModal");
const overlayDiv = document.querySelector(".sessionOverlayDiv");
const startButton = document.querySelector("#startSessionBtn");
const cardContainer = document.querySelector("#sessionMain");
let timer;
let timeDelay = 1000;
//buttons variables
const sessionCardButtonSetting = document.querySelector(".sessionButtonSetting");
const sessionCardButtonShortBreak = document.querySelector(".sessionButtonShortBreak");
const sessionCardButtonsLongBreak = document.querySelector(".sessionButtonLongBreak");
const stopButton = document.querySelector("#stopSessionBtn");
const body = document.querySelector("body");
const timerElement = document.querySelector("#timerDiv");
const timerInput = document.querySelector("#inputForTimeOfTask");
const addTaskButton = document.querySelector("#addTaskBtn");
const taskForm = document.querySelector(".taskFormDiv");
const timerUpButton = document.querySelector("#arrowUp");
const timerDownButton = document.querySelector("#arrowDown");
const addNoteButton = document.querySelector("#noteForTaskBtn");
const textAreaOfTask = document.querySelector("#taskText");


// Modals functionality

const closeModalFunction = function () {
    sessionModals.classList.add("hidden");
    overlayDiv.classList.add("hidden");
    taskForm.classList.add("hidden");
    textAreaOfTask.style.display = "none";
    //body.style.backgroundImage = "var(--clr-neutral-300)";
    cardContainer.style.backgroundColor = "rgb(255, 154, 117)";
    //body.style.backgroundColor = "rgb(255, 154, 117)";
}

const openModalFunction = function () {
    sessionModals.classList.remove("hidden");
    overlayDiv.classList.remove("hidden");
    taskForm.classList.remove("hidden");

}

//TIMER FUNCTIONALITY
// ================== CHECK LATER ???
// let t;
//     function pause_game() {
//     let lastTime;
//     if (elem.value == "PAUSE") {
//         lastTime = clearInterval(t);
//         elem.value = "RESUME";
//     }
//     if (elem.value == "RESUME") {
//         startTimer(lastTime);
//         elem.value = "PAUSE";
//     }
// }

const startTimer = function () {
    const tickTock = function () {

        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);

        // In each call, print the remaining time to UI
        timerElement.textContent = `${min}:${sec}`;

        // When 0 seconds, stop timer and pint message
        if (time === 0) {
            clearInterval(timer);
            timerElement.style.fontSize = "35px";
            timerElement.textContent = "Your time is up!";
        }

        // hide start , show stop button
        startButton.style.zIndex = "-1";
        stopButton.style.zIndex = "1";
        // Decrease 1s
        time--;


    };
    // Set time to 2 minutes
    let time = 5;
    // Call the timer every second
    tickTock();

    timer = setInterval(tickTock, timeDelay);

    return timer;
// console.log(sessionModals);
// console.log(sessionCardButtons.length);
for (let i = 0; i < sessionCardButtons.length; i++) {
    sessionCardButtons[i].addEventListener("click", openModalFunction);
};


//EVENT LISTENERS FOR BUTTONS

closeButton.addEventListener("click", closeModalFunction);
overlayDiv.addEventListener("click", closeModalFunction);
addTaskButton.addEventListener("click", closeModalFunction);


document.addEventListener("keydown", function (e) {
    console.log(e.key);
    if (e.key === "Escape" && !sessionModals.classList.contains("hidden")) {
        closeModalFunction();
    }
});

sessionCardButtonSetting.addEventListener("click", function () {
    sessionModals.classList.remove("hidden");
    overlayDiv.classList.remove("hidden");
    cardContainer.style.backgroundImage =
        "linear-gradient(315deg, #537895 0%, #09203f 74%)";
    body.style.backgroundImage =
        "linear-gradient(315deg, #537895 0%, #09203f 74%)";
});

sessionCardButtonShortBreak.addEventListener("click", function () {
    sessionModals.classList.remove("hidden");
    overlayDiv.classList.remove("hidden");
    cardContainer.style.backgroundImage =
        "linear-gradient(315deg, #20bf55 0%, #01baef 74%)";
    body.style.backgroundImage =
        "linear-gradient(315deg, #20bf55 0%, #01baef 74%)";
});

sessionCardButtonsLongBreak.addEventListener("click", function () {
    sessionModals.classList.remove("hidden");
    overlayDiv.classList.remove("hidden");
    cardContainer.style.backgroundImage =
        "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)";
    body.style.backgroundImage =
        "linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%)";
});

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", function () {
    if (timer) clearInterval(timer);
    //   pause_game();
    // hide stop , show start button
    startButton.style.zIndex = "1";
    stopButton.style.zIndex = "-1";

    // two problems  show and hide button, pausing the timer
});

//Add task
addTaskButton.addEventListener("click", function () {
    taskForm.classList.remove("hidden");
    overlayDiv.classList.remove("hidden");
})

//Arrows up and down 
timerUpButton.addEventListener("click", function () {
    timerInput.value++;
});

timerDownButton.addEventListener("click", function () {
    timerInput.value > 0 ? timerInput.value-- : timerInput.value = 0;
});


//Add note in task form button

if (textAreaOfTask.style.display = "none") {
    addNoteButton.addEventListener("click", function () {
        textAreaOfTask.style.display = "block";
    })
}; //ne e funkcionalno kopcheto koga vekje e otvorena textarea za pishuvanje na note, t.e. raboti samo koga ne e otvorena textArea










// for (let i = 0; i < sessionCardButtons.length; i++) {
//     sessionCardButtons[i].addEventListener("click", openModalFunction);
// };




}
