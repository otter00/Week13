window.addEventListener("load", async () => {
  const base = `https://www.cbr-xml-daily.ru/daily_json.js`;

  // Using fetch to get data
  fetch(base)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.Valute);
      console.log(data.Valute.AZN);
      console.log(data.Valute.AZN.Value);
    });

  //   let response = await fetch(base);
  //   if (response.ok) {
  //     // получаем тело ответа
  //     let json = response.json();
  //     console.log(json);
  //   } else {
  //     console.log("Fail to fetch API");
  //   }
});
