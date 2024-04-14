const btn = document.getElementById("btn");
btn.addEventListener("click", addNote);
function addNote() {
    let title = document.getElementById('noteTitle').value;
    let content = document.getElementById('noteContent').value;
    let color = document.getElementById('noteColor').value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter both title and content for the note.');
        return;
    }

    let note = document.createElement('div');
    note.className = 'stickyNote';
    note.style.backgroundColor = color;
    note.innerHTML = `
        <h2>${title}</h2>
        <textarea readonly>${content}</textarea>
        <button onclick="editNote(this)">Edit</button>
        <button onclick="deleteNote(this)">Delete</button>
    `;

    document.getElementById('container').appendChild(note);

    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
}

function editNote(btn) {
    let note = btn.parentElement;
    let textarea = note.querySelector('textarea');

    textarea.readOnly = !textarea.readOnly;
    btn.innerText = textarea.readOnly ? 'Edit' : 'Save';
}

function deleteNote(btn) {
    let note = btn.parentElement;
    note.remove();
}