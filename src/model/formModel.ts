import { FormInputAreaType } from "../types/Form";
const onChange = (e: React.ChangeEvent<HTMLInputElement>) => e.target.value;

//続きはここから #TODO
const formModel: FormInputAreaType[] = [
  {
    id: "string",
    type: "string",
    value: "string",
    onChange,
    label: "最後の月経開始日:",
    DisplayHelper: "flex",
    min: 1,
    max: 1,
    step: 1,
    required: true,
    helperMessage: "ヘルパーメッセージ",
  },
];

export default formModel;
