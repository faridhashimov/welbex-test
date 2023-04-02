const inputEl = document.querySelector('input')
const buttonEl = document.querySelector('button')
const timerEl = document.querySelector('span')

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
function getZero(num) {
    if (num >= 0 && num < 10) {
        return '0' + num
    } else {
        return num
    }
}

let end

function getTime(s) {
    ++end
    const time = s - end,
        sec = Math.floor(time % 60),
        minutes = Math.floor((time / 60) % 60),
        hours = Math.floor((time / (60 * 60)) % 24)

    return {
        total: time,
        hours: hours,
        minutes: minutes,
        seconds: sec,
    }
}
let timeInterval
function updateTimer(endtime) {
    timeInterval = setInterval(renewTimer, 1000)
    function renewTimer() {
        const t = getTime(endtime)
        timerEl.innerHTML = `${getZero(t.hours)}:${getZero(
            t.minutes
        )}:${getZero(t.seconds)}`
        if (t.total <= 0) {
            clearInterval(timeInterval)
        }
        console.log('hi')
    }
}

const createTimerAnimator = () => {
    return (seconds) => {
        return updateTimer(seconds)
    }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener('input', () => {
    inputEl.placeholder = inputEl.value
})

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value)
    end = 0
    clearInterval(timeInterval)
    animateTimer(seconds)

    inputEl.value = ''
})
