/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

describe('NotesView', () => {
  it('should return 2 notes when notes created ', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let notes = new NotesModel()
    let viewer = new NotesView(notes)
    notes.addNotes('Buy milk')
    notes.addNotes('Buy more milk')
    viewer.displayNotes()

    expect(document.querySelectorAll('div.note').length).toBe(2)
  })

})