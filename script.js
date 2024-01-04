document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
});

function addNote() {
    var noteInput = document.getElementById('note-input').value;

    if (noteInput.trim() !== '') {
        var notesContainer = document.getElementById('notes-container');
        var noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `
            <span>${noteInput}</span>
            <button class="delete-button" onclick="deleteNote(this)">&#128465;</button>
        `;

        notesContainer.appendChild(noteElement);
        document.getElementById('note-input').value = '';

        saveNotes();
    }
}

function deleteNote(button) {
    var note = button.parentElement;
    note.remove();

    saveNotes();
}

function saveNotes() {
    var notesContainer = document.getElementById('notes-container');
    var notes = [];

    for (var i = 0; i < notesContainer.children.length; i++) {
        var noteText = notesContainer.children[i].querySelector('span').innerText;
        notes.push(noteText);
    }

    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    var notesContainer = document.getElementById('notes-container');
    var storedNotes = localStorage.getItem('notes');

    if (storedNotes) {
        var notes = JSON.parse(storedNotes);

        notes.forEach(function (noteText) {
            var noteElement = document.createElement('div');
            noteElement.className = 'note';
            noteElement.innerHTML = `
                <span>${noteText}</span>
                <button class="delete-button" onclick="deleteNote(this)">&#128465;</button>
            `;
            notesContainer.appendChild(noteElement);
        });
    }
                      }
