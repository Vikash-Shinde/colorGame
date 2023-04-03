// alert("hello to js")

let button1 = document.getElementById("colorbutton1");
let button2 = document.getElementById("colorbutton2");
let button3 = document.getElementById("colorbutton3");
let button4 = document.getElementById("colorbutton4");
let button5 = document.getElementById("colorbutton5");
let button6 = document.getElementById("colorbutton6");
let button7 = document.getElementById("colorbutton7");
let repeat = document.getElementById("repeat");
repeat.style.display = 'none';


button1.addEventListener('click', colorfun);
button2.addEventListener('click', colorfun);
button3.addEventListener('click', colorfun);
button4.addEventListener('click', colorfun);
button5.addEventListener('click', colorfun);
button6.addEventListener('click', colorfun);
button7.addEventListener('click', colorfun);

function colorfun() {

    let color = ["red", "green", "yellow", "blue", "black", "grey", "white",]
    let bgcolor = document.getElementById("colorfind");
    let i = Math.floor(Math.random() * 7);
    // bgcolor.style.backgroundColor = color[i];
    if (this.value == color[i]) {
        bgcolor.style.backgroundColor = color[i];
        document.getElementById("result1").innerHTML = "congratulations you have guessed the correct colour"
        // console.log(color[i]);
        repeat.style.display = 'block';
        repeat.addEventListener('click', () => {
            window.location.reload();
        })
        setInterval(() => {
            window.location.reload();
        }, 5000);
    }
    else {
        document.getElementById("result2").innerHTML = "incorrect, correct colour: " + color[i];
        repeat.style.display = 'block';
        repeat.addEventListener('click', () => {
            window.location.reload();
           

        })
        setInterval(() => {
            window.location.reload();
        }, 5000);

    }
}




