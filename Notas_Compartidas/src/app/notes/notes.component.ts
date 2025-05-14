import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  imports: [FormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {
  notes: {id:number, title:string, desc:string, date:string}[] = [];
  get noteExist(): boolean {
    return this.notes.length > 0;
  }
  note = {
    id : 0,
    title : "",
    desc : "",
    date : ""
  };

  private nextId = 1;

  addNote() {
    const newNote = {
      id: this.nextId++,
      title: this.note.title,
      desc: this.note.desc,
      date: this.note.date
    };

    this.notes.push(newNote);
    this.note.title = '';
    this.note.desc = '';
    this.note.date = '';
  }
}
