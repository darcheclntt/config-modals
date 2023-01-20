import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { BottomSheetInfo } from '../../../core/models/bottomSheetInfo.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-bottom-sheet-info',
  templateUrl: './bottom-sheet-info.component.html',
  styleUrls: ['./bottom-sheet-info.component.scss'],
})
export class BottomSheetInfoComponent implements OnInit, OnChanges {
  private customClass: String = '';
  @Input() bottomSheetInfo?: BottomSheetInfo;
  @Input() openSheetMenu?: boolean;
  @Output() closeSheetMenuEmitter: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  @ViewChild('templateBottomSheetInfo')
  TemplateBottomSheetInfo!: TemplateRef<any>;
  constructor(
    private bottomSheet: MatBottomSheet,
    private _mediaObserver: MediaObserver
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['openSheetMenu']?.currentValue) {
      this.openTemplateSheetMenu();
    } else {
      this.closeTemplateSheetMenu();
    }
  }
  openTemplateSheetMenu(): void {
    if (this._mediaObserver.isActive('xs')) {
      this.customClass = 'mat-bottom-sheet-container-info__small';
    } else {
      this.customClass = 'mat-bottom-sheet-container-info__gt-small';
    }
    const bottomSheetRef = this.bottomSheet.open(this.TemplateBottomSheetInfo, {
      panelClass: `${this.customClass}`,
    });

    bottomSheetRef.afterDismissed().subscribe(() => {
      this.closeTemplateSheetMenu();
    });
  }

  closeTemplateSheetMenu(): void {
    this.closeSheetMenuEmitter.emit(true);
    this.bottomSheet.dismiss();
  }
  ngOnInit(): void {}
  public closeSheetMenu(): void {
    this.closeTemplateSheetMenu();
  }
  onButtonClick(): void {
    if (this.bottomSheetInfo?.btnAction) {
      this.bottomSheetInfo.btnAction();
    }
  }
}
