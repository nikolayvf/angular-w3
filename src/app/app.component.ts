import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public index: number = -1;

  public tempTitle: any;
  public tempNote: any;

  public modelSize = 7;

  public modelTitle = '';
  public modelNote = '';

  public notesCollection = [
    {
      title: 'Бележка 1',
      notes: 'съдържание...',
    },
    {
      title: 'Бележка 2',
      notes: 'съдържание...',
    },
    {
      title: 'Бележка 3',
      notes: 'съдържание...',
    },
    {
      title: 'Заглавие',
      notes: 'Съдържание',
    },
  ];

  public processPrevNote() {
    this.index--;

    if (this.index < 0) {
      this.index = this.notesCollection.length - 1;
    }

    this.resetTempData();
  }

  public processNextNote() {
    this.index++;

    if (this.index >= this.notesCollection.length) {
      this.index = 0;
    }

    this.resetTempData();
  }

  public processSaveNotesData() {
    const foundIndex = this.notesCollection.findIndex(
      (note) => note.title === this.modelTitle
    );
    if (foundIndex !== -1) {
      this.notesCollection[foundIndex].notes = this.modelNote;
    } else {
      const newNote = {
        title: this.modelTitle,
        notes: this.modelNote,
      };
      this.notesCollection.push(newNote);
    }
    this.resetTempData();
  }

  public processAddNewNote() {
    const newNote = {
      title: this.modelTitle,
      notes: this.modelNote,
    };
    this.notesCollection.push(newNote);
    this.resetTempData();
  }

  public processDeleteNote(index: number) {
    this.notesCollection.splice(index, 1);
  }

  public processNotesRecord(notesElement: any, index: number) {
    this.index = index;
    this.modelTitle = notesElement.title;
    this.modelNote = notesElement.notes;
  }

  private resetTempData() {
    this.modelTitle = '';
    this.modelNote = '';
  }
}
