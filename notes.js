const fs = require('fs');

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const getAll = () => {
  return fetchNotes();
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  const note = {
    title,
    body
  };
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getNote = (title) => {
  const notes = fetchNotes();
  const filteredNotes = notes.filter((note) => note.title === title);

  return filteredNotes[0];
}

const removeNote = (title) => {
  const notes = fetchNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  saveNotes(updatedNotes);

  return notes.length !== updatedNotes.length;
};

const logNote = (note) => {
  console.log('===');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};