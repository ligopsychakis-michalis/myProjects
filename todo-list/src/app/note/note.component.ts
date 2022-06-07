import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotesService, Note } from '../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note | undefined;

  constructor(
    private route: ActivatedRoute,
    private notesService: NotesService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.note = this.notesService.getNote(id);
  }
}
