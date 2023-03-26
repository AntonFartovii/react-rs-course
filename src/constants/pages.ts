export const MAIN_ROUTE = '/';
export const ABOUT_US = '/about_us';
export const PAGE_404 = '/404';
export const FORM_ROUTE = '/form';

export enum STATE_GOOD {
  NEW = 'новое',
  OLD = 'б/у',
}

export enum FORM_ERRORS {
  length_0 = 'length cannot be 0',
  agree = 'You must agree',
  empty = 'file is empty',
  wrong_file = 'file type is not image',
  wrong_date = 'incorrect date',
  not_chosen = 'should be choose',
}
