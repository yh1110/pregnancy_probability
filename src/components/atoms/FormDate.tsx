import { DatePicker } from "@yamada-ui/calendar";
import React from "react";
interface FormDateType {
  id: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  value?: string | number | Date;
  onChange: (value: Date | undefined) => void;
}
export const FormDate: React.FC<FormDateType> = ({ id, value, onChange }) => {
  if (value instanceof Date || value === undefined) {
    return <DatePicker id={id} value={value} onChange={onChange} />;
  } else {
    return <p>inputDateの値が不正</p>;
  }
};
