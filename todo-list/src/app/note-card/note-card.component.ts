import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../services/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})
export class NoteCardComponent implements OnInit {
  @Input() note: Note | undefined;
  @Output() edit: EventEmitter<string> = new EventEmitter();
  @Output() delete: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  onEdit() {
    this.edit.emit(this.note?.id);
  }

  onDelete() {
    this.delete.emit(this.note?.id);
  }
}
