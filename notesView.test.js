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

  it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';

    const button = document.querySelector('#add-note-btn');
    button.click();
    
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('My new amazing test note');
  });

  it('adds two new notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#add-note-input');
    input.value = 'My new amazing test note';

    const button = document.querySelector('#add-note-btn');
    button.click();
    
    const input2 = document.querySelector('#add-note-input');
    input2.value = 'My new note';

    button.click();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    expect(document.querySelectorAll('div.note')[1].innerText).toEqual('My new note');
  });
});