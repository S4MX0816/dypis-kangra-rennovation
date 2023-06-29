import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-name-dialog',
  templateUrl: './update-name-dialog.component.html',
  styleUrls: ['./update-name-dialog.component.scss'],
})
export class UpdateNameDialogComponent implements OnInit {
  nameCtrl = new FormControl(this.data.name, Validators.required);

  constructor(
    public readonly dialogRef: MatDialogRef<UpdateNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private readonly data: { name: string }
  ) {}

  ngOnInit(): void {}
}
