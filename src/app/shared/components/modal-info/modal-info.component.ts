import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalInfo } from 'src/app/core/models/modalInfo.model';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalInfo,
    private _mediaObserver: MediaObserver
  ) {}

  ngOnInit(): void {
    if (this._mediaObserver.isActive('xs')) {
      this.dialogRef.addPanelClass('app-modal-info__small');
    } else {
      this.dialogRef.addPanelClass('app-modal-info__gt-small');
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
