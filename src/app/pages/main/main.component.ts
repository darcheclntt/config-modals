import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private _modalService: ModalService) {}

  ngOnInit(): void {}

  onBtn1Press(): void {
    this.openModalInfo();
  }
  onBtn2Press(): void {
    this.openModalError();
  }
  onBtn3Press(): void {
    console.log('btn 3');
  }

  public openModalInfo(): void {
    this._modalService
      .openModalInfo({
        title: 'Aviso',
        description: 'Este modal esta hecho para ser cerrado unicamente pulsado el botón de cerrar',
        btnAcceptAction: () => {
          console.log('bye');
        },
      })
      .subscribe((modal)=>{
        modal.afterClosed().subscribe((result) => {
          console.log("Me subscribo al cierre");
        });
      });
  }
  public openModalError(): void {
    this._modalService
      .openModalError({
        title: 'Modal de error',
        errorMessage: 'Este modal se puede cerrar pulsando en el botón de cerrar o en la parte exterior del modal',
        btnAcceptAction: () => {
          console.log('Pulsado Aceptar');
        },
      })
      .subscribe((modal)=>{
        modal.afterClosed().subscribe((result) => {
          console.log("Me subscribo al cierre");
        });
      });
  }
}
