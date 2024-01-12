export interface IForm {
  title?: string;
  description?: string;
  date?: string;
  file?: string | FileList;
  price?: string | number;
  state?: string;
  currency?: string;
}
