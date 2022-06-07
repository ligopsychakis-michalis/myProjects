import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NotesService, Note } from '../services/notes.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  noteForm = this.formBuilder.group({
    title: '',
    description: '',
    hot: false
  });
  notes: Note[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.notes = this.notesService.getNotes();
  }

  onSubmit() {
    this.notes = this.notesService.addNote(this.noteForm.value);
    this.noteForm.reset();
  }

  onDelete(id: string) {
    this.notes = this.notesService.deleteNote(id);
  }

  onEdit(id: string) {
    const note = this.notes.find(n => n.id === id);

    if (note) {
      const dialogRef = this.dialog.open(ModalComponent, {
        width: '500px',
        data: note,
      });
  
      dialogRef.afterClosed().subscribe(() => {
        this.notes = this.notesService.getNotes();
      });
    }
  }

  onGenerate() {
    this.notesService.getRandomNote().subscribe(data => {
      if (data?.dish) this.noteForm.setValue({ 
        title: `Eat some ${data.dish}`, description : data.description, hot: false
      });
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
    this.notesService.setNewOrder(this.notes);
  }
}
