import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/services/modal.service';
import { BottomSheetInfo } from '../../core/models/bottomSheetInfo.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private _modalService: ModalService) {}
  public openSheetMenuOptInfo: boolean = false;
  public bottomSheetInfo: BottomSheetInfo = {
    title: 'Bottom Sheet',
    description:
      'Automáticamente se cierra cuando pulsamos fuera o también se puede cerrar desde un botón que tenga asociada la acción de cerrar.',
    btnText: 'Cerrar',
    btnAction: () => {
      this.openSheetMenuOptInfo = false;
    },
  };
  ngOnInit(): void {}

  onBtn1Press(): void {
    this.openModalInfo();
  }
  onBtn2Press(): void {
    this.openModalError();
  }
  onBtn3Press(): void {
    this.openSheetMenuOptInfo = true;
  }

  public openModalInfo(): void {
    this._modalService
      .openModalInfo({
        title: 'Aviso',
        description:
          'Este modal esta hecho para ser cerrado únicamente pulsado el botón de aceptar o cerrar',
        btnAcceptAction: () => {
          console.log('Has pulsado aceptar, también me cierro');
        },
      })
      .subscribe((modal) => {
        modal.afterClosed().subscribe((result) => {
          console.log('Aquí se pueden poner acciones asociadas al cierre');
        });
      });
  }
  public openModalError(): void {
    this._modalService
      .openModalError({
        title: 'Modal de error',
        errorMessage:
          'Este modal se puede cerrar pulsando en el botón de cerrar o en la parte exterior del modal',
        btnAcceptAction: () => {
          console.log('Pulsado Aceptar');
        },
      })
      .subscribe((modal) => {
        modal.afterClosed().subscribe((result) => {
          console.log('Aquí se puden poner acciones asociadas al cierre');
        });
      });
  }
  public closeSheetMenuInfo($event: any): void {
    this.openSheetMenuOptInfo = !$event;
  }
}
