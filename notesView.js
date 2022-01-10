const NotesModel = require('./notesModel')

class NotesView {
  constructor(notes = new NotesModel()) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.notes = notes
  }

  displayNotes() {
    const mynotes = this.notes.getNotes()
    mynotes.forEach( element=> {
      let div = document.createElement("div");
      div.innerText = element
      div.className = 'note';
      this.mainContainerEl.append(div)})
  }

}

module.exports = NotesView