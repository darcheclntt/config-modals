export interface ModalInfo{
  title: string;
  description: string;
  btnCloseAction?: ()=> void;
  btnAcceptAction?: ()=> void;
}
