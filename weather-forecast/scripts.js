// Openweathermap API. Do not share it publicly.
const api = "9181e2dffaa27e8ec6e678f774e96604"; //Replace with your API

const iconImg = document.getElementById("weather-icon");
const loc = document.querySelector("#location");
const tempC = document.querySelector(".c");
const tempF = document.querySelector(".f");
const desc = document.querySelector(".desc");
const sunriseDOM = document.querySelector(".sunrise");
const sunsetDOM = document.querySelector(".sunset");

// var a = {
//   Ё: "YO",
//   Й: "I",
//   Ц: "TS",
//   У: "U",
//   К: "K",
//   Е: "E",
//   Н: "N",
//   Г: "G",
//   Ш: "SH",
//   Щ: "SCH",
//   З: "Z",
//   Х: "H",
//   Ъ: "'",
//   ё: "yo",
//   й: "i",
//   ц: "ts",
//   у: "u",
//   к: "k",
//   е: "e",
//   н: "n",
//   г: "g",
//   ш: "sh",
//   щ: "sch",
//   з: "z",
//   х: "h",
//   ъ: "'",
//   Ф: "F",
//   Ы: "I",
//   В: "V",
//   А: "A",
//   П: "P",
//   Р: "R",
//   О: "O",
//   Л: "L",
//   Д: "D",
//   Ж: "ZH",
//   Э: "E",
//   ф: "f",
//   ы: "i",
//   в: "v",
//   а: "a",
//   п: "p",
//   р: "r",
//   о: "o",
//   л: "l",
//   д: "d",
//   ж: "zh",
//   э: "e",
//   Я: "Ya",
//   Ч: "CH",
//   С: "S",
//   М: "M",
//   И: "I",
//   Т: "T",
//   Ь: "'",
//   Б: "B",
//   Ю: "YU",
//   я: "ya",
//   ч: "ch",
//   с: "s",
//   м: "m",
//   и: "i",
//   т: "t",
//   ь: "'",
//   б: "b",
//   ю: "yu",
// };

// function transliterate(word) {
//   return word
//     .split("")
//     .map(function (char) {
//       return a[char] || char;
//     })
//     .join("");
// }

function translit(word) {
  const converter = {
    sch: "щ",
    i: "и",
    yo: "ё",
    zh: "ж",
    ch: "ч",
    sh: "ш",
    yu: "ю",
    ya: "я",
    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "е",
    z: "з",
    и: "и",
    y: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф",
    h: "х",
    c: "ц",
    y: "ы",
  };

  for (const [key, value] of Object.entries(converter)) {
    word = word.replaceAll(key, value);
  }
  return word;
}

console.log(translit("schuka"));
console.log(translit("yozh"));

window.addEventListener("load", () => {
  let long;
  let lat;
  // Accesing Geolocation of User
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // Storing Longitude and Latitude in variables
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`;

      // Using fetch to get data
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp, feels_like } = data.main;
          const place = data.name;
          console.log(translit(place));
          const { description, icon } = data.weather[0];
          const { sunrise, sunset } = data.sys;

          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;

          // Converting Epoch(Unix) time to GMT
          const sunriseGMT = new Date(sunrise * 1000);
          const sunsetGMT = new Date(sunset * 1000);

          // Interacting with DOM to show data
          iconImg.src = iconUrl;
          loc.textContent = `${place}`;
          desc.textContent = `${description}`;
          tempC.textContent = `${temp.toFixed(2)} °C`;
          tempF.textContent = `${fahrenheit.toFixed(2)} °F`;
          sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
          sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
        });
    });
  }
});
