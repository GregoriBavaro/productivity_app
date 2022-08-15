// let clockContainer = document.querySelector(".js-clock");
let clockTitle = clockContainer.querySelector("h1");
let reminderBtn = document.querySelector("#reminderBtn");
let clearBtn = document.querySelector('#deleteReminder');
let reminderWrapper = document.querySelector('#remindersWrapper');
let remindersTable = document.querySelector(`#remindersTableId`);
let reminderName = document.querySelector(`#inputForCreatingReminder`);
let reminderDate = document.querySelector('#inputForSettingDateForTask');
let reminderTime = document.querySelector('#inputForTimeOfReminder');
let reminderPriority = document.querySelector('#priorityRem');

const remindersForm = document.querySelector(".AddReminderPopUp");
const remindersFiled = document.querySelector("#remindersTableId");
const sessionCardSettings3 = document.querySelector(".sessionButtonSetting");
const sessionCardSessions3 = document.querySelector(".sessionButtonTimer");
const sessionCardShortBreak3 = document.querySelector(".sessionButtonShortBreak");
const sessionCardLongBreak3 = document.querySelector(".sessionButtonLongBreak");

sessionCardSettings3.addEventListener("click", () => {
    remindersForm.style.backgroundColor = "#2980b9";
    remindersFiled.style.backgroundColor = "#2980b9";
});

sessionCardSessions3.addEventListener("click", () => {
    remindersForm.style.backgroundColor = "#2980b9";
    remindersFiled.style.backgroundColor = "#2980b9";
});

sessionCardShortBreak3.addEventListener("click", () => {
    remindersForm.style.backgroundColor = "#598f94";
    remindersFiled.style.backgroundColor = "#598f94";
});

sessionCardLongBreak3.addEventListener("click", () => {
    remindersForm.style.backgroundColor = "#5079a1";
    remindersFiled.style.backgroundColor = "#5079a1";
});



let reminderId = 1;
let inputReminderName = 0;
let inputReminderDate = 0;
let inputReminderTime = 0;

let inputReminderPriority = 0; 
let reminderMockData = [];


reminderBtn.addEventListener("click", function() {
    gettingAllReminders();
    if (inputReminderName === '' || inputReminderDate === '' || inputReminderTime === '') {
        return alert('Please enter input in all fields!')
    }
    createReminderObject();
    addToLocalStorage();
    renderTable(remindersTable);
});

clearBtn.addEventListener("click", function() {
    remindersTable.innerHTML = '';
    reminderId = 1;
    inputReminderName = 0;
    inputReminderDate = 0;
    inputReminderTime = 0;

    inputReminderPriority = 0; 
    reminderMockData = [];

});

//function for getting inputs for reminder
function gettingReminderInput(elem) {
    return elem.value;
}

//function for getting all inputs for reminder
function gettingAllReminders() {
    inputReminderName = gettingReminderInput(reminderName);
    inputReminderDate = gettingReminderInput(reminderDate);
    inputReminderTime = gettingReminderInput(reminderTime);
    inputReminderPriority = gettingReminderInput(reminderPriority);
}

//function for deleting all reminders
function ClearAllReminders(elem) {
    elem.innerHTML = "";
}

//function for making objects with reminders
function ReminderObject(id, name, date, time, priority) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.time = time;
    this.priority = priority;
}

function createReminderObject() {
    let reminder = new ReminderObject(
        id = reminderId,
        gettingReminderInput(reminderName),
        gettingReminderInput(reminderDate),
        gettingReminderInput(reminderTime),
        gettingReminderInput(reminderPriority)
    )
    reminderMockData.push(reminder);
    reminderId++;
}

//function for rendering the table of reminders
function renderTable(elem) {
    let table = '<table><tr><th>#</th><th>Task</th><th>Date</th><th>Time</th><th>Priority</th><th>Remove</th></tr>';


    reminderMockData.forEach((reminderItem, index) => {
        table +=` <tr>`
        table += `<td>${index + 1}</td>`
    table += `<td>${reminderItem.name}</td>`
    table += `<td>${reminderItem.date}</td>`
    table += `<td>${reminderItem.time}</td>`
    table += `<td>${reminderItem.priority}</td>`
    table += `<td><button class="removeReminderByIdBtn" onclick="deleteReminderById(${reminderItem.id})">X</button></td>`
    table += `</tr>`
    })


    table += `</table>`
    elem.innerHTML = table
}


// function getTime() {
//     const date = new Date();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     clockTitle.innerText = `${
//         hours < 10 ? `0${hours}` : hours
//     }:${
//         minutes < 10 ? `0${minutes}` : minutes
//     }:${
//         seconds < 10 ? `0${seconds}` : seconds
//     }`;
// }

//function for deleting reminder by ID from the table
function deleteReminderById(reminderId) {
    console.log(reminderId);
    const newData = reminderMockData.filter(x => x.id !== reminderId);
    reminderMockData = [...newData];
    console.log(reminderMockData);
    renderTable(remindersTable);
}

function addToLocalStorage() {
    localStorage.setItem("remindersData", JSON.stringify(reminderMockData));
}

    

