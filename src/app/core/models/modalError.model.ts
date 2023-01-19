export interface ModalError{
  title: string;
  errorMessage: string;
  btnCloseAction?: ()=> void;
  btnAcceptAction?: ()=> void;
}

