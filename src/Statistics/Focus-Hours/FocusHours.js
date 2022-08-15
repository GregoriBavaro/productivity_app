// let myChart = document.getElementById('dynamicChart').getContext('2d');

//     // Global Options
//     Chart.defaults.global.defaultFontFamily = '"Barlow", sans-serif';
//     Chart.defaults.global.defaultFontSize = 16;
//     Chart.defaults.global.defaultFontColor = '#777';

//     let massPopChart = new Chart(myChart, {
//       type:'horizontalBar', // other possible forms: bar, horizontalBar, pie, line, doughnut, radar, polarArea
//       data:{
//         labels:['6-Jun', '7-Jun', '8-Jun', '9-Jun', '10-Jun', '11-Jun', '12-Jun'],
//         datasets:[{
//         //   label:'Hours per Day', //refers to label in the legend
//           data:[
//             5,
//             4,
//             6.5,
//             2,
//             1,
//             0.5,
//             3.5,
//           ],
//           backgroundColor:[
//             'rgb(191,206,226)',
//             'rgb(191,206,226)',
//             'rgb(191,206,226)',
//             'rgb(191,206,226)',
//             'rgb(191,206,226)',
//             'rgb(191,206,226)',
//             'rgb(191,206,226)'
//           ],

//           borderWidth:1,
//           borderColor:'rgb(12, 106, 143)',
//           hoverBorderWidth:3,
//           hoverBorderColor:'rgb(12, 106, 143)'
//         }]
//       },
//       options:{
//         title:{
//           display:false,// if true -> title of the chart will be displayed
//           text:'Hours per Day',
//           fontSize:16,
//         },
//         legend:{
//           display:false,//if true -> legend of the chart will be displayed
//           position:'right',
//           labels:{
//             fontColor:'#000'
//           }
//         },
//         layout:{
//           padding:{
//             left:50,
//             right:0,
//             bottom:0,
//             top:0
//           }
//         },
//         tooltips:{
//           enabled:true
//         }
//       }
//     });

let startingDate = document.getElementById("startDate");
let endingDate = document.getElementById("endDate");
startingDate.value=new Date(new Date().getTime()-60*60*24*1000*6).toISOString().slice(0, 10);
endingDate.value = new Date().toISOString().slice(0, 10);

function startingArrayOfChartDates(){
    let arrayOfDates = [];
    let currentDate = new Date().toISOString().slice(0, 10);
    for (let i = 6; i > 0; i--) {
    let daysBefore = new Date(new Date().getTime()-60*60*24*1000*i).toISOString().slice(0, 10); 
    arrayOfDates.push(daysBefore);
 }
    arrayOfDates.push(currentDate);
    return arrayOfDates;
 }

// function numberOfDailyHours(){ //temporary solution
//     let arrayOfHoursPerDay =[];
//     for (let i=1; i<32; i++){
//         let randomNumber = Math.floor(Math.random() * 16);
//         arrayOfHoursPerDay.push(randomNumber)
//     }
//     return arrayOfHoursPerDay;
// } 


const allSessions1 = JSON.parse(localStorage.getItem("sessions"));
 console.log(allSessions1);
 let arrayOfSessionDates = [];
 for (let i=0; i<allSessions1?.length; i++){
    arrayOfSessionDates.push(allSessions1[i].sessionDate)
 }
 console.log(arrayOfSessionDates); // se dobiva niza od datumite na sekoja oddelna sesija// NO, datumite se povtoruvaat

 let arrayOfHours = [];
 for (let i=0; i<allSessions1.length; i++){
    arrayOfHours.push((allSessions1[i].sessionTasks).flatMap((parameter) => Math.round(parameter.time/60 * 100) / 100).reduce((sum, current) => sum + current, 0));
//zaokruzuvanje na brojot na casovi na 2 decimali...
 }
 console.log(arrayOfHours); // se dobiva niza od casovi za sekoja sesija// NO, casovite se odnesuvaat na sekoja oddelna sesija a oddelnite sesii moze da se na ist datum

const objectOfDatesHoursPairs = arrayOfHours.reduce((acc,e,i, arr) => {
  acc[arrayOfSessionDates[i]] = (acc[arrayOfSessionDates[i]] || 0) + e;
  return acc;
}, {});

console.log(objectOfDatesHoursPairs); // objekt kade datumite se keys, a casovite se values// datumite ne se povtoruvaat, a casovite se sobrani vo ramki na sekoj datum

var finalArrayOfDates = [],
    finalArrayOfHours = [];

for (var property in objectOfDatesHoursPairs) {

   if ( !objectOfDatesHoursPairs.hasOwnProperty(property)) {
      continue;
   }

   finalArrayOfDates.push(property);
   finalArrayOfHours.push(objectOfDatesHoursPairs[property]);
}
console.log(finalArrayOfDates); // niza od datumite// bez da se povtoruvaat
console.log(finalArrayOfHours); //niza od casovite za soodvetnite datumi

const dates = startingArrayOfChartDates();
function genDataArrayChart(){
    dataArrayChart=[];
    for(i=0; i<dates.length; i++){
        if(finalArrayOfDates.includes(dates[i])){
            let indexx = finalArrayOfDates.indexOf(dates[i]);
            dataArrayChart.push(finalArrayOfHours[indexx])}
            else{dataArrayChart.push(0)}
        }
        return dataArrayChart;
};
 
const datepoints = genDataArrayChart();
const data = {
    labels: dates,
    datasets: [{
        label: 'Daily Activity',
        data: datepoints,
        backgroundColor: [
            'rgba(41, 128, 185, 0.6)',
        ],
        borderColor: [
            'rgba(69, 68, 173, 1)'
        ],
        borderWidth: 1
    }]
};
const config = {
    type: 'bar',
    data,
    options: {
        scales: {
            y: {
                beginAtZero: true

            }
        }
    }
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

let focusHours = document.getElementById("dynamicFocusHours");
// let accessDays = document.getElementById("dynamicAccessedDays");
// let streakDays = document.getElementById("dynamicStreakDays");

// let count=0;
// for (let i=0; i < 7; i++){
//      if(datepoints[i] != 0){
//      count++
//      };
//      }
//  accessDays.innerHTML = count;

//  let count2=0;
//  let arrStreakDays = [];
//  for (let i=0; i < 7; i++){ 
//      count2++;
//      if(datepoints[i] == 0){
//      count2=0;   
//          }
//          arrStreakDays.push(count2);
//      }
//  streakDays.innerHTML = Math.max(...arrStreakDays);

 let sum=0;
 for (let i=0; i<7; i++){
     if (isNaN(datepoints[i])){
         datepoints[i]=0;
     }
     sum += datepoints[i];
 };
 const focusHours1 = (Math.floor(sum)+((sum-Math.floor(sum))*60/100)).toFixed(2);

 focusHours.innerHTML = `${Math.floor(sum)} h ${(((sum-Math.floor(sum))*60)).toFixed(0)} min`;

function filterDate() {
    const dynamicDates = [];
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');

    const newStartDate = new Date(startDate.value); // 2022-06-08
    const newEndeDate = new Date(endDate.value);

    const numberOfDates = (newEndeDate.getTime()-newStartDate.getTime())/(1000 * 3600 * 24); //4
    let dateToBeFormated = newStartDate;

    for (let i = 0; i <= numberOfDates; i++) {
        const formatedDate = `${dateToBeFormated.toISOString().slice(0, 10)}`;

        const nextDay = dateToBeFormated.getDate() + 1;
        const nextDate = new Date(formatedDate);
        nextDate.setDate(nextDay);

        dynamicDates.push(formatedDate);
        dateToBeFormated = nextDate;
    }
    myChart.config.data.labels = dynamicDates;
    console.log(dynamicDates);
    function genDataArrayChart1(){
        const dataArrayChart1=[];
        for(i=0; i<dynamicDates.length; i++){
            if(finalArrayOfDates.includes(dynamicDates[i])){
                let indexx1 = finalArrayOfDates.indexOf(dynamicDates[i]);
                dataArrayChart1.push(finalArrayOfHours[indexx1])}
                else{dataArrayChart1.push(0)}
            }
            return dataArrayChart1;
    };
    myChart.config.data.datasets[0].data = genDataArrayChart1();
    if (numberOfDates > 31) {
        alert("For better visibility of your chart, we highly recommend you to choose a time period that does not exceed 31 days! Please try again!");
     }
    else{myChart.update()
    };
}

function updateSummary(){
    const startDate2 = document.getElementById('startDate');
    const endDate2 = document.getElementById('endDate');
    const newStartDate2 = new Date(startDate2.value); // 2022-06-08
    const newEndeDate2 = new Date(endDate2.value);
    const numberOfDates2 = (newEndeDate2.getTime()-newStartDate2.getTime())/(1000 * 3600 * 24);
    
    let sum = 0;
    // let count = 0;
    // let count2 = 0;
    // let arrStreakDays =[];

    // for (let i=0; i < numberOfDates2+1; i++){
    // if(myChart.config.data.datasets[0].data[i]=0 != 0){
    // count++
    // };
    // }
    // accessDays.innerHTML = count;
    // for (let i=0; i < numberOfDates2+1; i++){ 
    // count2++;
    // if(myChart.config.data.datasets[0].data[i]=0){
    // count2=0;   
    // }
    // arrStreakDays.push(count2);
    // }
    // streakDays.innerHTML = Math.max(...arrStreakDays);
    for (let i=0; i<=numberOfDates2; i++){
         if (isNaN(myChart.config.data.datasets[0].data[i])){
            myChart.config.data.datasets[0].data[i]=0;
         }
         sum+=myChart.config.data.datasets[0].data[i];
     }
     focusHours.innerHTML = `${Math.floor(sum)} h ${(((sum-Math.floor(sum))*60)).toFixed(0)} min`;
     if (numberOfDates2 > 31) {
         focusHours.innerHTML=null;
         //streakDays.innerHTML=null;
         //accessDays.innerHTML=null;
     };
};

document.getElementById("startDate").addEventListener("change", updateSummary);
document.getElementById("endDate").addEventListener("change", updateSummary);



