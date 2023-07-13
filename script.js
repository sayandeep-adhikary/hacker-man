const messages = [
  "> initalizing hack program...</br>",
  "> Connecting to Facebook...</br>",
  "> Connecting to the server...</br>",
  "> connection failed!...reconnecting to server...</br>",
  "> connected successfully!...</br>",
  "> Username found! @xxxxxxxx</br>",
  "> fetching password...</br>",
  "> 1 million passwords tried...</br>",
  "> match not found!</br>",
  "> Trying again...</br>",
  "> Congratulations! match found!</br>",
  "> password is : xxxxxxxxxxx</br>",
  "> Accessing acount ...</br>",
  "> hack successful!</br>",
];
function randomDigit() {
  return Math.floor(Math.random() * 2);
}

function generateRandomBinary(binaryLength) {
  let binary = "";
  for (let i = 0; i < binaryLength; ++i) {
    binary += randomDigit();
  }
  return binary;
}
const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
const showHack = async (message) => {
  await sleep(2);
  mainProgram.innerHTML = message;
};
let btn = document.getElementById("hack-btn");
// btn.innerHTML = "HI";
let showDigits = document.getElementsByClassName("numbers");
let mainProgram = document.getElementById("hack-program");
// console.log(showDigits);
let messageBody = document.querySelector("#hack-program");
messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;

const inp = document.getElementsByClassName("input")[0];
const inpVal = inp.getAttribute("value");
// console.log(inpVal);

function getInputValue() {
  let inputValue = document.querySelector("#textInput").value;
  // document.getElementById("output").innerHTML = "Input Value 1: " + inputValue1 + " Input Value 2: " + inputValue2;
  // console.log(inputValue);
  return inputValue;
}

btn.addEventListener("click", () => {
  let val = getInputValue();
  if (val === "") {
    alert("Enter Specified Target!");
  }
  else{
    mainProgram.innerHTML = `hacking ${val}...`;
    let interval = setInterval(() => {
      let digits = generateRandomBinary(750);
      // console.log(digits);
      showDigits[0].innerHTML = showDigits[1].innerHTML = digits;
    }, 100);
    (async () => {
      for (let i = 0; i < messages.length; i++) {
        await showHack(messages[i]);
        if (i === messages.length - 1) {
          clearInterval(interval);
        }
      }
    })().then(() => {
      alert("Facebook Hacked!");
    });
  }
  // console.log("Hello");
});
