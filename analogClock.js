/*This code stores the elements of the classes in variables. */
const secEl = document.querySelector(".second-hand")
const minEl = document.querySelector(".min-hand")
const hourEl = document.querySelector(".hour-hand")

/*This code is the technology behind the clock. */
setInterval(() => {
    const date = new Date;
    const secDeg = date.getSeconds()/60 * 360 - 90;
    const minDeg = date.getMinutes()/60 * 360 - 90;
    const hourDeg = date.getHours()/12 * 360 -90;
    secEl.style.transform = `rotate(${secDeg}deg)`
    minEl.style.transform = `rotate(${minDeg}deg)`
    hourEl.style.transform = `rotate(${hourDeg}deg)`
}, 1000)