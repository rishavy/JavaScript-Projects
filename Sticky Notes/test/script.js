function addNote() {
    var noteText = document.getElementById('note-input').value;
    var noteColor = document.getElementById('color-picker').value;

    if (noteText.trim() === '') {
        alert('Please enter a note.');
        return;
    }

    var notesContainer = document.getElementById('notes-container');

    var note = document.createElement('div');
    note.className = 'note';
    note.style.backgroundColor = noteColor;
    note.innerHTML = noteText;
    
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete-btn';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        notesContainer.removeChild(note);
    };

    note.appendChild(deleteButton);
    notesContainer.appendChild(note);

    document.getElementById('note-input').value = '';
}
