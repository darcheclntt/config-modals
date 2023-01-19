import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalErrorComponent } from './components/modal-error/modal-error.component';
import { BottomSheetInfoComponent } from './components/bottom-sheet-info/bottom-sheet-info.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ModalInfoComponent,
    ModalErrorComponent,
    BottomSheetInfoComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatDialogModule
  ],
  exports: [FlexLayoutModule, MatDialogModule, MatBottomSheetModule, ModalInfoComponent, ModalErrorComponent, BottomSheetInfoComponent],
})
export class SharedModule {}
