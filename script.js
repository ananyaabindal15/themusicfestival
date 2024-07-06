
let card = document.querySelector(".card")
let moreinfo = document.querySelector(".box3")
card.addEventListener('click', function() {
    moreinfo.scrollIntoView({ behavior: 'smooth' });
});
let card2 = document.querySelector(".card2")
let moreinfo2 = document.querySelector(".box4")
card2.addEventListener('click', function() {
    moreinfo2.scrollIntoView({ behavior: 'smooth' });
});
let card3 = document.querySelector(".card3")
let moreinfo3 = document.querySelector(".box5")
card3.addEventListener('click', function() {
    moreinfo3.scrollIntoView({ behavior: 'smooth' });
});
let button1 = document.querySelectorAll(".box6 > button")
console.log(button1)
let buyTickets = document.querySelector(".tickets")
button1.forEach (button => {
  button.addEventListener('click', function() {
    buyTickets.scrollIntoView({ behavior: 'smooth' });
});
})
let about = document.querySelector(".button > button")
let aboutinfo = document.querySelector(".about")
about.addEventListener('click', function() {
    aboutinfo.scrollIntoView({ behavior: 'smooth' });
});
let tickets = document.querySelector(".tickets1")
let buytickets = document.querySelector(".tickets")
tickets.addEventListener('click', function() {
    buytickets.scrollIntoView({ behavior: 'smooth' });
});


document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.querySelector(".timer");
    const eventDate = new Date("2024-08-10T00:00:00Z");
    console.log("Event Date:", eventDate);
    function updateCountdown() {
        const now = new Date();
        const timeDifference = eventDate - now;
        console.log("Current Time:", now);
        console.log("Time Difference:", timeDifference);

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerHTML = "The event has started!";
        }
    }

    setInterval(updateCountdown, 1000);
    
})
main()