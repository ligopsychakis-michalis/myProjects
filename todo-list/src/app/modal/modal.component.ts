import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { NotesService, Note } from '../services/notes.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  noteForm = this.formBuilder.group({
    id: '',
    title: '',
    description: '',
    hot: false
  });

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note,
  ) {}

  ngOnInit(): void {
    this.noteForm.setValue(this.data);
  }

  onCancel() {
    this.dialogRef.close();
  }

  onDone() {
    this.notesService.editNote(this.noteForm.value);
    this.dialogRef.close();
  }
}
