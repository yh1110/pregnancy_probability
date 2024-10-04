import { Select, SelectItem } from "@yamada-ui/react";
import React from "react";
interface FormSelectType {
  id: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  items?: SelectItem[];
  value?: string | number | Date;
  onChange: (value: string) => void;
}
export const FormSelect: React.FC<FormSelectType> = ({ id, items, value, onChange }) => {
  if (typeof value === "string" || value === undefined) {
    return <Select id={id} items={items} value={value} onChange={onChange} />;
  } else {
    return <p>inputSelectの値が不正</p>;
  }
};
