import { Component } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  public constructor(private readonly dialog: MatDialog) {}
  protected name: any;

  protected openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: this.name },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('Button clicked & dialog has been opened');
      this.name = result;
    });
  }
}
