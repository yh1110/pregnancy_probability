import { HelperMessage, Label, Text } from "@yamada-ui/react";
import React from "react";
import { FormInput } from "../atoms/FormInput";
import { FormInputAreaType } from "../../types/Form";

export const FormInputArea: React.FC<FormInputAreaType> = ({
  label,
  type,
  id,
  value,
  onChange,
  min,
  max,
  step,
  required,
  DisplayHelper,
  helperMessage,
}) => {
  return (
    <Label>
      <Text>{label}</Text>
      <FormInput
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        required={required}
      />
      <HelperMessage display={DisplayHelper}>{helperMessage}</HelperMessage>
    </Label>
  );
};
