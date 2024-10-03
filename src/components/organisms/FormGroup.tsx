import { FormControl } from "@yamada-ui/react";
import React from "react";
import { FormControlType } from "../../types/Form";
import { FormInputArea } from "../molecules/FormInputArea";

export const FormGroup: React.FC<FormControlType> = ({
  label,
  helperMessage,
  DisplayHelper,
  id,
  type,
  value,
  onChange,
  min,
  max,
  step,
  required,
  onSubmit,
}) => {
  return (
    <FormControl onSubmit={onSubmit}>
      <FormInputArea
        label={label}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        required={required}
        DisplayHelper={DisplayHelper}
        helperMessage={helperMessage}
      />
    </FormControl>
  );
};
