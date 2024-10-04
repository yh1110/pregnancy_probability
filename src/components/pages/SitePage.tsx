import { Heading, Text } from "@yamada-ui/react";
import { useState } from "react";
import { FormGroup } from "../organisms/FormGroup";
import { fetchApi } from "../../api/getCalculatedResult";
import { FormValue } from "../../types/Form";

export const SitePage = () => {
  const [result, setResult] = useState("");

  const getResult = async (reqBody: FormValue) => {
    const url = import.meta.env.VITE_API_URL;
    const result = await fetchApi(url, reqBody);
    setResult(result.prop);
  };
  //#TODO memo化でなけなしの対策を図る
  //memo化でも動きが遅くなるようなら、なくなくコンポーネントは分割に
  return (
    <>
      <Heading>aaa</Heading>
      <main>
        <FormGroup onClick={getResult} />
        <Text>{result}</Text>
      </main>
      <footer>
        <p>妊娠確率計算機 © 2024</p>
      </footer>
    </>
  );
};
