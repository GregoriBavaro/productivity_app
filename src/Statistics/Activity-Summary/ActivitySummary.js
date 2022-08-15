// AS -> Activity Summary



const ACTIVITY_DETAILS_KEY = 'activityDetails';
const SESSIONS_KEY = 'sessions';
let dynamicAccessedDaysParagraph = document.getElementById("dynamicAccessedDays");
let dynamicStreakDaysParagraph = document.getElementById("dynamicStreakDays");
let sessionCardButtonLongBreak1 = document.getElementById("longBreak");
let sessionCardButtonShortBreak1 = document.getElementById("shortBreak");
let activityCards = document.getElementsByClassName("activityCard");
let chartBox = document.getElementsByClassName("chartBox");
let sessionButton = document.getElementById("timer");
let sessionSettingsButton = document.getElementById("sessionSettings");
document.addEventListener('load', updateAccessedDays());
const AS_favDialog = document.getElementById("favDialog");


function updateAccessedDays() {
    let activityDetails = getObjectFromLocalStorage(ACTIVITY_DETAILS_KEY);
    const currentAccessedDate = new Date().toISOString().slice(0, 10);
    if (!activityDetails?.hasValues) {
        createDefaultActivityDetails();
        activityDetails = getObjectFromLocalStorage(ACTIVITY_DETAILS_KEY);
    }

    if (activityDetails.hasValues == false) {

        activityDetails.previousDate = currentAccessedDate;
        activityDetails.countOfDaysAccessed = 1;
        activityDetails.countOfDaysStreak = 1;
        activityDetails.hasValues = true;

    } else if (currentAccessedDate > activityDetails.previousDate) {
        const previousDateToCompare = new Date(activityDetails.previousDate);
        previousDateToCompare.setDate(previousDateToCompare.getDate() + 1);
        const formatedPreviousDateToCompare = previousDateToCompare.toISOString().slice(0, 10);
        console.log(formatedPreviousDateToCompare);

        console.log(`currentAccessedDate == formatedPreviousDateToCompare`, currentAccessedDate == formatedPreviousDateToCompare);
        if (currentAccessedDate == formatedPreviousDateToCompare) {
            console.log(`streakDaysValidation(activityDetails.previousDate)`, streakDaysValidation(activityDetails.previousDate));
            if (streakDaysValidation(activityDetails.previousDate)) {
                activityDetails.countOfDaysStreak++;
            }
        }
        else {
            activityDetails.countOfDaysStreak = 1;
        }

        activityDetails.previousDate = currentAccessedDate;
        activityDetails.countOfDaysAccessed++;

    }
    console.log(activityDetails.countOfDaysStreak)
    saveObjectToLocalStorage(ACTIVITY_DETAILS_KEY, activityDetails);
    dynamicAccessedDaysParagraph.innerHTML = activityDetails.countOfDaysAccessed;
    dynamicStreakDaysParagraph.innerHTML = activityDetails.countOfDaysStreak;
};

function createDefaultActivityDetails() {
    const activityDetails = {
        'previousDate': new Date().toISOString().slice(0, 10),
        'countOfDaysAccessed': null,
        'countOfDaysStreak': null,
        'hasValues': false
    };

    saveObjectToLocalStorage(ACTIVITY_DETAILS_KEY, activityDetails);
}

function getObjectFromLocalStorage(key) {
    const json = localStorage.getItem(key);
    const object = JSON.parse(json);

    return object;
}

function saveObjectToLocalStorage(key, someObject) {
    localStorage.setItem(key, JSON.stringify(someObject));
}

function streakDaysValidation(previousDate) {
    const sessions = getObjectFromLocalStorage(SESSIONS_KEY);
    for (const session of sessions) {
        console.log(`Session Object : `, session);

        if (session.sessionDate === previousDate) {
            console.log("I am true! session.sessionDate = previousDate");

            for (const sessionTask of session.sessionTasks) {
                console.log(`Session Task:`, sessionTask)

                if (sessionTask.time.length > 0) {
                    return true;
                }
            }
        }
    }
}

// ======================= change colors =======================


function changeColor(backgroundColor, borderColor, backgroundImage) {
    data.datasets[0].backgroundColor = [backgroundColor];
    data.datasets[0].borderColor = [borderColor];
    chartBox[0].style.borderColor = borderColor;
    myChart.update();
    for (const card of activityCards) {
        card.style.backgroundImage = backgroundImage;
        card.style.borderColor = borderColor;
    }
}

sessionCardButtonShortBreak1.addEventListener("click",
    () => {
        changeColor(
            "rgba(89,143,148,0.6)",
            "rgba(68,144,173,1)",
            "linear-gradient(120deg, rgba(89,143,148,1) 42%, rgba(68,144,173,1) 100%)"
        )
    }
);

sessionCardButtonLongBreak1.addEventListener("click",
    () => {
        changeColor(
            "rgba(80,121,161,0.6)",
            "rgba(68,151,173,1)",
            "linear-gradient(120deg, rgba(80,121,161,1) 42%, rgba(68,151,173,1) 100%)"
        )
    });

function resetColors() {
    changeColor(
        "rgba(41, 128, 185, 0.6)",
        "rgba(69, 68, 173, 1)",
        "linear-gradient(120deg, rgba(41, 128, 185, 1) 49%, rgba(69, 68, 173, 1) 98%)"
    );
}

AS_favDialog.addEventListener("close", function onClose() {
    console.info(`Clicked...`);
    switch (AS_favDialog.returnValue) {
        case "Short Break":
            changeColor(
                "rgba(89,143,148,0.6)",
                "rgba(68,144,173,1)",
                "linear-gradient(120deg, rgba(89,143,148,1) 42%, rgba(68,144,173,1) 100%)"
            )
            break;
        case "Long Break":
            changeColor(
                "rgba(80,121,161,0.6)",
                "rgba(68,151,173,1)",
                "linear-gradient(120deg, rgba(80,121,161,1) 42%, rgba(68,151,173,1) 100%)"
            )
            break;
        case "Session":
            changeColor(
                "rgba(41, 128, 185, 0.6)",
                "rgba(69, 68, 173, 1)",
                "linear-gradient(120deg, rgba(41, 128, 185, 1) 49%, rgba(69, 68, 173, 1) 98%)"
            );
            break;
        default:
            break;
    }
});

sessionButton.addEventListener("click", resetColors);
sessionSettingsButton.addEventListener("click", resetColors);
document.addEventListener('load', resetColors);

localStorage.clear();
var allSessions2 = 
[
    {sessionDate:"2022-06-07",
    sessionTasks:
    [
        {
            title:"Task1",
            assignedTaskDuration: "30",
            id: 0,
            time: [30],
            timeNow: "Tuesday, 7 June 2022 at 19:52:17 CEST"
        },
        {
            title:"Task2",
            assignedTaskDuration: "70",
            id: 1,
            time: [70],
            timeNow: "Tuesday, 7 June 2022 at 20:52:17 CEST"
        }
    ]
    },
    {sessionDate:"2022-06-07",
    sessionTasks:
    [
        {
            title:"Task3",
            assignedTaskDuration: "81",
            id: 2,
            time: [81],
            timeNow: "Tuesday, 7 June 2022 at 21:52:17 CEST"
        },
        {
            title:"Task4",
            assignedTaskDuration: "60",
            id: 3,
            time: [60],
            timeNow: "Tuesday, 7 June 2022 at 22:52:17 CEST"
        }
    ]
    },
    {sessionDate:"2022-06-08",
    sessionTasks:
    [
        {
            title:"Task5",
            assignedTaskDuration: "45",
            id: 4,
            time: [45],
            timeNow: "Wednesday, 8 June 2022 at 20:52:17 CEST"
        },
        {
            title:"Task6",
            assignedTaskDuration: "55",
            id: 5,
            time: [55],
            timeNow: "Wednesday, 8 June 2022 at 22:52:17 CEST"
        }
    ]
    },
    {sessionDate:"2022-06-09",
    sessionTasks:
    [
        {
            title:"Task7",
            assignedTaskDuration: "77",
            id: 6,
            time: [77],
            timeNow: "Thursday, 9 June 2022 at 20:52:17 CEST"
        },
        {
            title:"Task8",
            assignedTaskDuration: "55",
            id: 7,
            time: [55],
            timeNow: "Thursday, 9 June 2022 at 22:52:17 CEST"
        }
    ]
    },
    {sessionDate:"2022-06-11",
    sessionTasks:
    [
        {
            title:"Task9",
            assignedTaskDuration: "84",
            id: 8,
            time: [84],
            timeNow: "Saturday, 11 June 2022 at 20:52:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-12",
    sessionTasks:
    [
        {
            title:"Task10",
            assignedTaskDuration: "66",
            id: 9,
            time: [66],
            timeNow: "Sunday, 12 June 2022 at 21:52:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-14",
    sessionTasks:
    [
        {
            title:"Task11",
            assignedTaskDuration: "54",
            id: 10,
            time: [54],
            timeNow: "Tuesday, 14 June 2022 at 20:44:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-15",
    sessionTasks:
    [
        {
            title:"Task12",
            assignedTaskDuration: "30",
            id: 11,
            time: [30],
            timeNow: "Wednesday, 15 June 2022 at 21:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-17",
    sessionTasks:
    [
        {
            title:"Task13",
            assignedTaskDuration: "65",
            id: 12,
            time: [65],
            timeNow: "Friday, 17 June 2022 at 19:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-19",
    sessionTasks:
    [
        {
            title:"Task14",
            assignedTaskDuration: "95",
            id: 13,
            time: [95],
            timeNow: "Sunday, 19 June 2022 at 18:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-20",
    sessionTasks:
    [
        {
            title:"Task15",
            assignedTaskDuration: "76",
            id: 14,
            time: [76],
            timeNow: "Monday, 20 June 2022 at 19:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-22",
    sessionTasks:
    [
        {
            title:"Task16",
            assignedTaskDuration: "44",
            id: 15,
            time: [44],
            timeNow: "Wednesday, 22 June 2022 at 14:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-23",
    sessionTasks:
    [
        {
            title:"Task17",
            assignedTaskDuration: "21",
            id: 16,
            time: [21],
            timeNow: "Thursday, 23 June 2022 at 11:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-24",
    sessionTasks:
    [
        {
            title:"Task18",
            assignedTaskDuration: "100",
            id: 17,
            time: [100],
            timeNow: "Friday, 24 June 2022 at 18:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-25",
    sessionTasks:
    [
        {
            title:"Task19",
            assignedTaskDuration: "28",
            id: 18,
            time: [28],
            timeNow: "Saturday, 25 June 2022 at 20:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-27",
    sessionTasks:
    [
        {
            title:"Task20",
            assignedTaskDuration: "57",
            id: 19,
            time: [57],
            timeNow: "Monday, 27 June 2022 at 22:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-28",
    sessionTasks:
    [
        {
            title:"Task21",
            assignedTaskDuration: "84",
            id: 20,
            time: [84],
            timeNow: "Tuesday, 28 June 2022 at 15:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-06-29",
    sessionTasks:
    [
        {
            title:"Task22",
            assignedTaskDuration: "39",
            id: 21,
            time: [39],
            timeNow: "Wednesday, 29 June 2022 at 12:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-01",
    sessionTasks:
    [
        {
            title:"Task23",
            assignedTaskDuration: "57",
            id: 22,
            time: [57],
            timeNow: "Friday, 1 July 2022 at 17:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-02",
    sessionTasks:
    [
        {
            title:"Task24",
            assignedTaskDuration: "85",
            id: 23,
            time: [85],
            timeNow: "Saturday, 2 July 2022 at 18:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-03",
    sessionTasks:
    [
        {
            title:"Task25",
            assignedTaskDuration: "36",
            id: 24,
            time: [36],
            timeNow: "Sunday, 3 July 2022 at 14:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-04",
    sessionTasks:
    [
        {
            title:"Task26",
            assignedTaskDuration: "95",
            id: 25,
            time: [95],
            timeNow: "Monday, 4 July 2022 at 15:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-05",
    sessionTasks:
    [
        {
            title:"Task27",
            assignedTaskDuration: "45",
            id: 26,
            time: [45],
            timeNow: "Tuesday, 5 July 2022 at 18:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-06",
    sessionTasks:
    [
        {
            title:"Task28",
            assignedTaskDuration: "57",
            id: 27,
            time: [57],
            timeNow: "Wednesday, 6 July 2022 at 20:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-07",
    sessionTasks:
    [
        {
            title:"Task29",
            assignedTaskDuration: "85",
            id: 28,
            time: [85],
            timeNow: "Thursday, 7 July 2022 at 11:45:17 CEST"
        },
        {
            title:"Task30",
            assignedTaskDuration: "15",
            id: 29,
            time: [15],
            timeNow: "Thursday, 7 July 2022 at 13:45:17 CEST"
        },
    ]
    },
    {sessionDate:"2022-07-07",
    sessionTasks:
    [
        {
            title:"Task31",
            assignedTaskDuration: "12",
            id: 29,
            time: [12],
            timeNow: "Thursday, 7 July 2022 at 14:45:17 CEST"
        },
        {
            title:"Task32",
            assignedTaskDuration: "10",
            id: 30,
            time: [10],
            timeNow: "Thursday, 7 July 2022 at 15:45:17 CEST"
        },
    ]
    },
];

localStorage.setItem("sessions", JSON.stringify(allSessions2));


