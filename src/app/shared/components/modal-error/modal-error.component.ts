import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalError } from 'src/app/core/models/modalError.model';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.scss']
})
export class ModalErrorComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalError,
    private _mediaObserver: MediaObserver,

  ) {}

  ngOnInit(): void {
    if (this._mediaObserver.isActive('xs')) {
      this.dialogRef.addPanelClass('app-modal-error__small');
    } else {
      this.dialogRef.addPanelClass('app-modal-error__gt-small');
    }
  }

  public onBtnAcceptAction(): void {
    if (this.data.btnAcceptAction) {
      this.data.btnAcceptAction();
    }
    this.dialogRef.close(true);
  }
  public onBtnCancelAction(): void {
    this.dialogRef.close(true);
  }
}
