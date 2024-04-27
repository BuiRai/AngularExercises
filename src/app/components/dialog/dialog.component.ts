import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  public constructor(
    private readonly dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: any
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
