function returnOne() {
  let somehitng = "";
  let somethingelse = 123123123;
  let cool = 1 + 1;
  setTimeout(() => {
    return 1;
  }, 10000);
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}
// returnOne();
// this is calling one function. ✅ - 0.000001s
// go inside function that is getting called to see what to do: ✅, 0.00001s
// assign empty string to `somehitng` ✅ - 0.000001s
// assign 123123123 to `somethingelse` ✅ - 0.000001s
// assign math calculation to variable:
// it calculates math - ✅ - 0.005s
// it assigns cool: ✅ - 0.000001s
// sees setTimeout - ✅ . - (async) -> 0.000000000000000001s
// for loop to do (sync) -> 10000s
// checks no more synchronous code. lets check async side:
// sees the settimeout timetout -> it calls the setTimeout

function returnOneAfterOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(7);
    }, 2000);
  });
}

const theOne = returnOneAfterOneSecond();
console.log("theOne:", theOne);

theOne
  .then((one) => {
    console.log("one:", one);
  })
  .catch((err) => {
    console.log("ERRRRROR", err);
  });

const rickAndMortyURL = "https://rickandmortyapi.com/api/character";

const response = fetch(rickAndMortyURL);

response.then((apiResponse) => {});

console.log(response);
