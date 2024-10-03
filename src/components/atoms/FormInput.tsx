import { Input } from "@yamada-ui/react";
import { FormInputType } from "../../types/Form";

export const FormInput: React.FC<FormInputType> = ({
  id,
  type,
  value,
  onChange,
  min,
  max,
  step,
  required,
}) => {
  return (
    <Input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      required={required}
    ></Input>
  );
};
