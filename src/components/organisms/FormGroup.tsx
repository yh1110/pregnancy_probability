import { Button, FormControl, HelperMessage, Label, Text } from "@yamada-ui/react";
import React, { useState } from "react";
import { FormControlType, FormValue } from "../../types/Form";
import { FormDate } from "../atoms/FormDate";
import { FormInput } from "../atoms/FormInput";
import { FormSelect } from "../atoms/FormSelect";
import formModel from "../../model/formModel";

export const FormGroup: React.FC<FormControlType> = ({ onClick }) => {
  const [formValue, setFormValue] = useState<FormValue>({});

  return (
    <FormControl>
      {formModel.map((formItem) => {
        console.log(formValue);

        if (formItem.type === "date") {
          return (
            <Label key={formItem.id}>
              <Text>{formItem.label}</Text>

              <FormDate
                id={formItem.id}
                value={formValue[formItem.id as keyof typeof formValue]}
                onChange={(value) => {
                  setFormValue({ ...formValue, [formItem.id]: value });
                }}
              />
              <HelperMessage display={formItem.displayHelper}>
                {formItem.helperMessage}
              </HelperMessage>
            </Label>
          );
        } else if (formItem.type === "number") {
          return (
            <Label key={formItem.id}>
              <Text>{formItem.label}</Text>

              <FormInput
                type={formItem.type}
                id={formItem.id}
                value={formValue[formItem.id as keyof typeof formValue]}
                onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
                  const { id, value } = e.target;
                  setFormValue({ ...formValue, [id]: value ?? undefined });
                }}
                min={formItem.min}
                max={formItem.max}
                step={formItem.step}
                required={formItem.required}
              />
              <HelperMessage display={formItem.displayHelper}>
                {formItem.helperMessage}
              </HelperMessage>
            </Label>
          );
        } else if (formItem.type === "select") {
          return (
            <Label key={formItem.id}>
              <Text>{formItem.label}</Text>
              <FormSelect
                id={formItem.id}
                value={formValue[formItem.id as keyof typeof formValue]}
                onChange={(value) => {
                  setFormValue({ ...formValue, [formItem.id]: value });
                }}
                items={formItem.items}
              />
              <HelperMessage display={formItem.displayHelper}>
                {formItem.helperMessage}
              </HelperMessage>
            </Label>
          );
        } else {
          console.log(`Unsupported formItem type: ${formItem.type}`);
          return null;
        }
      })}

      <Button
        onClick={() => {
          if (onClick) {
            onClick(formValue);
          }
        }}
      />
    </FormControl>
  );
};
