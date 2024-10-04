// #FIXME value不要

export interface FormInputAreaType {
  id: string;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
  label: string;
  helperMessage?: string;
  displayHelper: UIValue<Display>;
  items?: SelectItem[];
}

export interface FormControlType {
  onClick: (req: FormValue) => Promise<void>;
}

export interface FormValue {
  lastPeriod?: Date;
  intercourseDate?: Date;
  cycleLength?: number;
  age?: number;
  bmi?: number;
  infertility?: number;
  contraception?: string;
}
