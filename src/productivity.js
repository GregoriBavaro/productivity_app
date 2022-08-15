const productivity = {
    "ruleOfThree": {
        title: "The Rule of Three",
        discription: "The Rule of Three is a great technique for people who are overly ambitious, or write to-do lists that they rarely ever complete. It’s about prioritizing what’s most important and focusing on having a meaningful outcome for your day. This technique simply entails writing down three things you want to achieve each day. Crucially, they shouldn’t be tasks – they should be results, like “complete expenses report”. By kicking off your day with three meaningful intentions, you’re continually reminding yourself of what’s important and what you should be focusing on. This seemingly small action can have a big outcome."
    },
    "deepWork": {
        title: "Deep work",
        discription: "Deep work is about regularly working in a state of intense concentration for prolonged periods of time. It’s effectively a method for tapping into flow states, helping you stay present and focus entirely on what you’re doing – which in turn allows you to push your cognitive capacities to their limit. A huge part of this involves removing distractions and “shallow tasks” that exhaust your attention. But deep work is also about training yourself to concentrate for longer – scheduling 90-minute sessions with one measurable goal, and gradually scaling their duration and frequency. It’s touted as the world’s ultimate job skill for good reason, and here at Memory we find it to be one of the most effective productivity techniques out there."
    },
    "timeBlocking": {
        title: "Time blocking",
        discription: "Time blocking is a productivity technique that breaks your daily schedule into set, time-controlled units – like 10 minutes for email, 60 minutes to work on a document and 20 minutes to scope a new project. Limiting the amount of time you spend on a task is a direct response to Parkinson’s Law, which suggests that work often expands to fill the time we give it – instead of the time actually required to complete it. Instead of allowing a task to stretch out into a borderless schedule, time blocking encloses the time we can spend on them. Ensuring each time block is relatively small can add a competitive pressure, helping to keep us focused and results-driven. Whereas following a to-do list lets you move through tasks at your own pace, time blocking protects time for each and keeps all activity accountable. It allows you to become more intentional with how you allocate your time, and is especially useful for placing time boundaries around low-value daily tasks, like Slack, email and admin."
    },
    "twoMinuteRule": {
        title: "The two-minute rule",
        discription: "The two-minute rule comes from David Allen’s book, Getting Things Done, and it suggests that if we have any tasks on our to-do list that will take two minutes or less to complete, we should just do them now. The purpose of this technique is to overcome procrastination by taking immediate action – so if you have an email to respond to and it’s weighing on your mind, reply to it now if it will only take two minutes to do so. This will make you feel you’ve accomplished something, which in turn boosts your motivation and builds momentum. Plus, it helps clear our minds and stop us worrying about all those tiny tasks we still have to do."
    },
    "repeatYourself": {
        title: "Don’t Repeat Yourself",
        discription: "The Don’t Repeat Yourself technique (or DRY Principle) is about saving time by reusing and recycling work you’ve already done. Repetition is by its nature inefficient and needless, so the DRY Principles encourages you to create workflows and templates to minimize it. An obvious example is email templates: rather than writing out what’s essentially the same email time and again, create a template for it, and tweak it as necessary. Pretty much every job requires writing of some form, so save yourself time by creating templates for docs you use regularly – like invoices, reports and documents. This strategy can also be extended to rooting out low-value, repetitive tasks – there are tons of apps that completely automate daily admin, including meeting scheduling, time tracking and minute taking. It’s all about freeing up more time and headspace for complex, important tasks."
    },
    "eisenhowerPrinciple": {
        title: "The Eisenhower Principle",
        discription: "The Eisenhower Principle is a productivity technique with several nicknames, one of the most popular being “eat the frog”. It’s about frontloading important tasks and focusing on what’s important instead of what’s urgent (and was used with great success by US President Eisenhower, who lends it his name). If we have a long list of jobs to do, many of us tend to prioritize the tasks with the closest deadlines, even if they don’t actually advance us towards our goals. The Eisenhower Principle encourages us to instead prioritize the work that’s truly valuable, regardless of deadline, advising us to select 1-3 tasks that are genuinely important and focus on them. In doing so, at the end of the day we’ll always have achieved something substantive."
    },
    "paretoPrinciple": {
        title: "The 80/20 Rule",
        discription: "Also called the Pareto Principle, the 80/20 Rule is another productivity technique that encourages us to do more of our highest-value work. It suggests that 80% of all of our output tends to stem from only 20% of our efforts – so 80% of your income may come from 20% of your projects. It’s about identifying which of our tasks provide the biggest return and prioritizing them; spending our energy on the “right work” instead of wasting time on the minor details. Think of those days where you spend hours jumping from task to task, but have nothing of note to show for it at the end of the day; this is probably because you were spending your time on the wrong stuff. The 80/20 rule is designed to add meaning and value to your day by encouraging you to always prioritize what’s meaningful."
    },
    "taskBatching": {
        title: "Task batching",
        discription: "Task batching is simply grouping similar low-value tasks together and completing them back-to-back in one stint. Many of us intend to do this, but it’s all too easy to get distracted. We might sit down to spend half an hour replying to emails, but get pulled down a rabbit hole by a request and find ourselves starting a new task we never intended to do. Task batching is about limiting context switching, multitasking and procrastination, and building a more focused workflow by creating momentum. It helps to fast-track the more mundane aspects of our work, so they don’t occupy a disproportionate amount of our day. Using task batching, we can increase our focus on important work that pushes us forward, without constant interruption."
    },
    "singTaksing": {
        title: "Single-tasking",
        discription: "Single-tasking is the opposite of multitasking – which is one of the biggest killers of productivity. Most of us multitask because we think it helps us get more done, but actually the opposite is true. The human brain can only concentrate on one complex task at a time, and each time we switch context to work on something else, we dilute the quality of our work. Multitasking can also create a great deal of stress, which can seriously harm our productivity. As the name suggests, single-tasking is just about giving 100% of your focus to one specific job. Limit distractions, turn your phone off, close unrelated tabs and give yourself space to work on one task without getting sidetracked."
    },
    "productivityJournaling": {
        title: "Productivity journaling",
        discription: "Productivity journaling is an intentionally slow, long-hand form of productive reflection. If you enjoy writing, this technique might suit you: essentially, you write out your goals and activities and document your achievements in a rich and descriptive manner. Each week, you read through your journal, reflect on your successes and failures, and use this information to improve. Because a productivity journal allows you to document emotional aspects of your performance (like how you felt doing a task and what you didn’t enjoy) it can give you space to consider more qualitative aspects of your productivity. Writing things down has the added benefit of being quite therapeutic, and feeling like you’ve given your mind a bit of clear out has its own positive effects for productivity."
    }
}


const productivityElement = document.getElementById("productivity")
const informations = document.getElementById("informations")
const goBackButton = document.getElementById("go-back")
const backButton = document.querySelector(".go-back-button");

const children = productivityElement.children

goBackButton.addEventListener('click', function(event){
    // productivityElement.style.display = "block"
    productivityElement.style.display = "flex"
    informations.innerHTML = ``
    goBackButton.style.display = "none"
})

for (let i = 0 ; i < children.length ; i++) {
    children[i].addEventListener('click', function (event){
        goBackButton.style.display = "inline-block"
        const { title, discription } = productivity[children[i].alt]

        informations.innerHTML = `<h1>${title}</h1> <p> ${discription} </p>`
        // productivityElement.style.display = "none"
        productivityElement.style.display = "none"
      })
}

// Search box 

function toggleShow () {
    var el = document.getElementById("box");
    el.classList.toggle("show");
}

// Fixed positioning

// window.onload = function() {     var left1 = document.getElementById("left1");
// var origOffsetY = left1.offsetTop;

// function onScroll(e) {
//    console.log("calling scroll")
//     window.scrollY >= origOffsetY ? left1.style.position = "fixed":
//     left1.style.position="absolute";
// }

// document.addEventListener('scroll', onScroll);
//                       }
