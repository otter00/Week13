const send_btn = document.querySelector("#send-req_btn");
const get_btn = document.querySelector("#get-click_btn");

const fio_str = "Анастасия Андреевна";

const invoke_bot = async (data, method) => {
  resp = await fetch(
    `https://api.telegram.org/bot7346633158:AAFrM6jZ9GbeToHWfGzsgzg7B0vD1nFO-LY/${method}?chat_id=293405071`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  ).then(async (data) => {
    await data.json();
  });

  console.log(data);
  console.log(data.reply_markup);
};

send_btn.addEventListener("click", async () => {
  // const data = {
  //   text: ` `,
  //   reply_markup: {
  //     inline_keyboard: [
  //       [{ text: `Первая кнопка`, callback_data: "get_task" }],
  //       [{ text: `Вторая кнопка`, callback_data: "reject_task" }],
  //     ],
  //   },
  // };

  // const invoke_bot = async (data, method) => {
  //   resp = await fetch(
  //     `https://api.telegram.org/bot7346633158:AAFrM6jZ9GbeToHWfGzsgzg7B0vD1nFO-LY/${method}?chat_id=293405071`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     }
  //   ).then(async (data) => {
  //     await data.json();
  //   });
  //   //   .then(() => {
  //   //     {
  //   //      data = {
  //   //         text: data.text,
  //   //         reply_markup: data.reply_markup,
  //   //       };
  //   //     }
  //   //   });
  //   console.log(data);
  //   console.log(data.reply_markup);
  //   // .then(async (data) => {
  //   //   await data.reply_markup;
  //   // });
  //   // //   .then(async (resp) => await resp.callback_data);
  //   // console.log(data);
  //   // console.log(data.reply_markup);
  //   // console.log(data.reply_markup.inline_keyboard);
  //   //get_resp(data.reply_markup);
  // };

  // let keyb;
  // const get_resp = async (resp) => {
  //   keyb = await resp.inline_keyboard;
  //   console.log(keyb);
  // };

  const method = "sendMessage";
  await invoke_bot(
    {
      text: `${fio_str}, у вас есть задача!`,
      reply_markup: {
        inline_keyboard: [
          [{ text: `Первая кнопка`, callback_data: "get_task" }],
          [{ text: `Вторая кнопка`, callback_data: "reject_task" }],
        ],
      },
    },
    method
  );
});

get_btn.addEventListener("click", async () => {
  let delete_hook = await fetch(
    `https://api.telegram.org/bot7346633158:AAFrM6jZ9GbeToHWfGzsgzg7B0vD1nFO-LY/deleteWebhook`
  );
  let get_btn_call = await fetch(
    `https://api.telegram.org/bot7346633158:AAFrM6jZ9GbeToHWfGzsgzg7B0vD1nFO-LY/getUpdates?chat_id=293405071`
  );
  const updates = await get_btn_call.json();
  console.log(updates);
  console.log(updates.result);
  console.log(updates.result.length);

  if (updates.result.length === 0) {
    console.log("there`s no click");

    const method = "sendMessage";
    await invoke_bot(
      {
        text: `${fio_str}, у вас есть задача!`,
        reply_markup: {
          inline_keyboard: [
            [{ text: `Первая кнопка`, callback_data: "get_task" }],
            [{ text: `Вторая кнопка`, callback_data: "reject_task" }],
          ],
        },
      },
      method
    );
  } else if (
    updates.result[updates.result.length - 1].callback_query.data === "get_task"
  ) {
    console.log("task's got");
    console.log(updates.result);
    console.log(updates.result[updates.result.length - 1]);
    console.log(updates.result[updates.result.length - 1].callback_query);
    console.log(updates.result[updates.result.length - 1].callback_query.data);

    const method = "sendMessage";
    await invoke_bot(
      {
        text: `Задача принята в работу`,
        callback_data: "get_finish",
        // reply_markup: {
        //   //inline_keyboard: [[{ text: `Назад`, callback_data: "get_back" }]],
        // },
      },
      method
    );
    // await invoke_bot(
    //   {
    //     text: `Задача принята в работу`,
    //     reply_markup: {
    //       inline_keyboard: [[{ text: `Назад`, callback_data: "get_back" }]],
    //     },
    //   },
    //   "editMessageText"
    // );
  } else if (
    updates.result[updates.result.length - 1].callback_query.data ===
    "reject_task"
  ) {
    console.log(updates.result[updates.result.length - 1].callback_query);
    console.log("task's rejected");

    const method = "sendMessage";
    await invoke_bot(
      {
        text: `Задача отклонена`,
        callback_data: "get_finish",
        // reply_markup: {
        //   //inline_keyboard: [[{ text: `Назад`, callback_data: "get_back" }]],
        // },
      },
      method
    );

    // await invoke_bot(
    //   {
    //     text: `Задача отклонена`,
    //     reply_markup: {
    //       inline_keyboard: [[{ text: `Назад`, callback_data: "get_back" }]],
    //     },
    //   },
    //   "editMessageText"
    // );
  }
});
