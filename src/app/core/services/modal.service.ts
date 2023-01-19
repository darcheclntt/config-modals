import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalInfo } from '../models/modalInfo.model';
import { ModalInfoComponent } from '../../shared/components/modal-info/modal-info.component';
import { Observable, from, map } from 'rxjs';
import { ComponentType } from '@angular/cdk/portal';
import { ModalError } from '../models/modalError.model';
import { ModalErrorComponent } from '../../shared/components/modal-error/modal-error.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dialog: MatDialog) {}

  public openModalInfo(
    modalData: ModalInfo
  ): Observable<MatDialogRef<ModalInfoComponent>> {
    const chunkObserver = from(
      import(`../../shared/components/modal-info/modal-info.component`)
    ).pipe(
      map((chunk) => {
        const dialogComponent = Object.values(
          chunk
        )[0] as ComponentType<ModalInfoComponent>;

        const dialogRef = this.dialog.open(dialogComponent, {
          panelClass: 'app-modal-info',
          data: modalData,
          autoFocus: true,
          disableClose: true,
        });

        return dialogRef;
      })
    );

    return chunkObserver;
  }

  public openModalError(
    modalData: ModalError
  ): Observable<MatDialogRef<ModalErrorComponent>> {
    const chunkObserver = from(
      import(`../../shared/components/modal-error/modal-error.component`)
    ).pipe(
      map((chunk) => {
        const dialogComponent = Object.values(
          chunk
        )[0] as ComponentType<ModalErrorComponent>;

        const dialogRef = this.dialog.open(dialogComponent, {
          panelClass: 'app-modal-error',
          data: modalData,
          autoFocus: true,
          disableClose: false,
        });

        return dialogRef;
      })
    );

    return chunkObserver;
  }
}
