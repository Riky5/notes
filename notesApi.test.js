const NotesApi = require('./notesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi class', () => {
  it('loads note from api', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: 'A note',
    }));

    api.loadNotes((noteInfo) => {
      expect(noteInfo.notes).toBe('A note');
    });
  });
});