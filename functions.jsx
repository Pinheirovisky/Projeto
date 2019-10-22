var roboMoviment = [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0', color: '#000' },
    { color: '#431236', offset: 0.3 },
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
];

var roboTiming = {
    duration: 3000,
    iterations: Infinity
}

document.getElementsByClassName("robo").animate(
    roboMoviment,
    roboTiming
)

console.log(roboMoviment)