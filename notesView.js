const NotesModel = require('./notesModel')

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-btn').addEventListener('click', () => {
      const newNote = document.querySelector('#add-note-input').value;
      this.addNewNote(newNote);
    });
  }

  addNewNote(newNote) {
    this.model.addNotes(newNote);
    this.displayNotes();
  }

  clearNote() {
    const allNotes = document.querySelectorAll('.note');
    allNotes.forEach(note => {
      note.remove();
    })
    // document.querySelector('#add-note-input').value = ""
  }

  displayNotes() {
    this.clearNote();
    const mynotes = this.model.getNotes()
    console.log(this.model.getNotes())
    mynotes.forEach( element=> {
      let div = document.createElement("div");
      div.innerText = element
      div.className = 'note';
      this.mainContainerEl.append(div)})
  }
}

module.exports = NotesView