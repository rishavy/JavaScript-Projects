const TextArea = document.getElementById('text-area');
        window.onload = function() {
            const storedText = localStorage.getItem('autosave_text');
            if (storedText) {
                TextArea.value = storedText;
            }
        };
        TextArea.addEventListener('input', function() {
            localStorage.setItem('autosave_text', TextArea.value);
        });