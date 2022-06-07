import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Note {
  constructor (
    public id: string, 
    public title: string, 
    public description: string, 
    public hot: boolean
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: Note[] = [];

  constructor(private http: HttpClient) { }

  getNotes(): Note[] {
    const storage = window.localStorage.getItem('notes');
    
    if (storage) {
      this.notes = JSON.parse(storage);
      return JSON.parse(storage);
    } else {
      return this.notes;
    }  
  }

  getNote(id: string) {
    return this.notes.find(note => note.id === id);
  }

  getRandomNote(): Observable<any> {
    return this.http.get("https://random-data-api.com/api/food/random_food");
  }

  addNote(note: {description: string, title: string, hot: boolean}): Note[] {
    this.notes.push( 
      new Note(
        new Date().getTime().toString(),
        note.title,
        note.description,
        note.hot
      )
    );

    window.localStorage.setItem('notes', JSON.stringify(this.notes))

    return this.notes;
  }

  deleteNote(id: string): Note[] {
    this.notes = this.notes.filter(n => n.id !== id); 

    window.localStorage.setItem('notes', JSON.stringify(this.notes))
    
    return this.notes;
  }

  editNote(newNote: Note) {
    const index = this.notes.findIndex(n => n.id === newNote.id);
    this.notes[index] = newNote;
    window.localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  setNewOrder(notes: Note[]): void {
    this.notes = notes;
    window.localStorage.setItem('notes', JSON.stringify(this.notes));
  }
}
