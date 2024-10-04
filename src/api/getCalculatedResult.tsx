import { FormValue } from "../types/Form";

//#TODO 引数に入力されたvalueの値をいい感じに取得して、API叩く
const headers = new Headers();
headers.append("Content-Type", "application/json");

//return type:json

export const fetchApi = async (url: string, reqBody: FormValue) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(reqBody),
    });

    if (!response) {
      console.log("error");
    } else if (response.body === null) {
      console.log("null");
    } else {
      return response.json();
    }
  } catch (e) {
    console.error(e);
    throw new Error();
  }
};
