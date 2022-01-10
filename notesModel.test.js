const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  beforeEach(() => {
    notes = new NotesModel()
  })

  it('should return an empty array if no notes added', () => {
    expect(notes.getNotes()).toEqual([])
  })

  it('can add a note', () => {
    notes.addNotes('Buy milk')
    expect(notes.getNotes()).toEqual(['Buy milk'])
  })

  it('empties the array', () => {{
    notes.addNotes('Forge Ruby')
    notes.reset()
    expect(notes.getNotes()).toEqual([])
  }})
})