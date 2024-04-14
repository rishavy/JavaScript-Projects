const btn = document.getElementById("add-btn");
btn.addEventListener("click", addNote);

function addNote() {
    let title = document.getElementById('note-title').value;
    let content = document.getElementById('note-text').value;
    let color = document.getElementById('note-color').value;

    if (title.trim() === '' || content.trim() === '') {
        alert('Please enter both title and content for the note.');
        return;
    }

    let note = document.createElement('div');
    note.className = 'sticky-note';
    note.style.backgroundColor = color;
    note.innerHTML = `
        <h2>${title}</h2>
        <textarea readonly>${content}</textarea>
        <button class="btn-icon edit" onclick="editNote(this)">✎</button>
        <button class="btn-icon close" onclick="deleteNote(this)">X</button>
    `;

    document.getElementById('container').appendChild(note);

    document.getElementById('note-title').value = '';
    document.getElementById('note-text').value = '';
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
