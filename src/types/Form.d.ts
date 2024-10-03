// #FIXME value不要
// #TODO selectタグのこと考慮してなかったー
export interface FormInputType {
  id: string;
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
}

export interface FormInputAreaType extends FormInputType {
  label: string;
  helperMessage?: string;
  DisplayHelper: UIValue<Display>;
}

export interface FormControlType extends FormInputAreaType {
  onSubmit: React.FormEventHandler<HTMLDivElement> | undefined;
}
