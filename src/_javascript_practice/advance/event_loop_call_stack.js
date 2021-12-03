// https://www.youtube.com/watch?v=lMKhJPbK0HE

//* Microtask concept
//* Event loop always check for microtask queue first then the task queue
function scheduleWork() {
    setTimeout(() => console.log('First'), 0)
    setTimeout(() => console.log('Second'), 0)

    //* After Promise is resolved the function inside then are pushed to microtask queue
    Promise.resolve().then(() => console.log('First from microtask'))
    Promise.resolve().then(() => console.log('Second from microtask'))
}

scheduleWork()
//* First from microtask
//* Second from microtask
//* First
//* Second

function scheduleWork2() {
    setTimeout(() => console.log('First'), 0)
    setTimeout(() => console.log('Second'), 0)
    setTimeout(() => Promise.resolve('First from microtask').then((value) => console.log(value)), 0)
    setTimeout(() => Promise.resolve('Second from microtask').then((value) => console.log(value)), 0)
    setTimeout(() => setTimeout(() => Promise.resolve('Second nested from microtask').then((value) => console.log(value)), 0), 0)
}

scheduleWork2()
//* First
//* Second
//* First from microtask
//* Second from microtask
//* Second nested from microtask
