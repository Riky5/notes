class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  setNotes(notes) {
    notes.forEach(note => {
      this.notes.push(note);
    });
  }
}

module.exports = NotesApi;