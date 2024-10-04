import { Input } from "@yamada-ui/react";
interface FormInputType {
  id: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  value?: string | number | Date;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const FormInput: React.FC<FormInputType> = ({
  id,
  type,
  min,
  max,
  step,
  required,
  onChange,
  value,
}) => {
  value = Number(value);

  if (value === 0) {
    value = undefined;
  }
  if (typeof value === "number" || value === undefined) {
    return (
      <Input
        id={id}
        value={value}
        type={type}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        required={required}
      ></Input>
    );
  } else {
    return <p>inputの値が不正</p>;
  }
};
