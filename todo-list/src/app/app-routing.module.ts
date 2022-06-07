import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotesComponent } from './notes/notes.component';
import { About1Component } from './about1/about1.component';
import { About2Component } from './about2/about2.component';
import { About3Component } from './about3/about3.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: 'about', component: AboutComponent, children: [
    { path: 'about1', component: About1Component },
    { path: 'about2', component: About2Component },
    { path: 'about3', component: About3Component }
  ] },
  { path: 'contact', component: ContactComponent },
  { path: 'note/:id', component: NoteComponent },
  { path: '**', component: NotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
