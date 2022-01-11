// console.log doesn't print anything on the page
// it is not meant to be visible to the user, but for you
// to help in debugging and getting visibility in your JS code.
//
// on Mac (using Chrome), use Option+Command+J to open the console and see this message.
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./notesApi')

console.log('The notes app is running');

let notes = new NotesModel()
let viewer = new NotesView(notes)
notes.addNotes('This is an example note')
viewer.displayNotes()

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  // This method is new — you'll need to add it to the model class
  model.setNotes(notes);
  view.displayNotes();
});
