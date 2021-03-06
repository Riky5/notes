(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNotes(note) {
          return this.notes.push(note);
        }
        reset() {
          return this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesModel2 = require_notesModel();
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
          document.querySelector("#add-note-btn").addEventListener("click", () => {
            const newNote = document.querySelector("#add-note-input").value;
            this.addNewNote(newNote);
          });
        }
        addNewNote(newNote) {
          this.model.addNotes(newNote);
          this.displayNotes();
        }
        clearNote() {
          const allNotes = document.querySelectorAll(".note");
          allNotes.forEach((note) => {
            note.remove();
          });
        }
        displayNotes() {
          this.clearNote();
          const mynotes = this.model.getNotes();
          console.log(this.model.getNotes());
          mynotes.forEach((element) => {
            let div = document.createElement("div");
            div.innerText = element;
            div.className = "note";
            this.mainContainerEl.append(div);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        setNotes(notes2) {
          notes2.forEach((note) => {
            this.notes.push(note);
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  console.log("The notes app is running");
  var notes = new NotesModel();
  var viewer = new NotesView(notes);
  notes.addNotes("This is an example note");
  viewer.displayNotes();
  var api = new NotesApi();
  var model = new NotesModel();
  var view = new NotesView(model, api);
  api.loadNotes((notes2) => {
    model.setNotes(notes2);
    view.displayNotes();
  });
})();
