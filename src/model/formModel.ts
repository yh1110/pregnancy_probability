import { FormInputAreaType } from "../types/Form";

//続きはここから #TODO
const formModel: FormInputAreaType[] = [
  { label: "最後の月経開始日:", id: "lastPeriod", type: "date", required: true, displayHelper: "" },
  {
    label: "性行為の日付:",
    id: "intercourseDate",
    type: "date",
    required: true,
    displayHelper: "",
  },
  {
    label: "月経周期の長さ（日数）:",
    id: "cycleLength",
    type: "number",
    min: 21,
    max: 35,
    displayHelper: "",
  },
  { label: "年齢:", id: "age", type: "number", min: 10, max: 60, displayHelper: "" },
  { label: "BMI:", id: "bmi", type: "number", min: 15, max: 40, step: 0.1, displayHelper: "" },
  {
    label: "不妊期間（月）:",
    id: "infertility",
    type: "number",
    min: 0,
    max: 36,
    displayHelper: "",
  },
  {
    label: "避妊方法:",
    id: "contraception",
    type: "select",
    items: [
      { value: "none", label: "なし" },
      { value: "condom", label: "コンドーム" },
      { value: "pill", label: "ピル" },
    ],
    displayHelper: "",
  },
];

export default formModel;
