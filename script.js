document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.getElementById('saveButton');
    const noteContent = document.getElementById('noteContent');

    // Cargar contenido guardado al iniciar la aplicación
    const savedContent = localStorage.getItem('savedNote');
    if (savedContent) {
        noteContent.value = savedContent;
    }

    saveButton.addEventListener('click', function () {
        const content = noteContent.value;

        // Guardar el contenido en localStorage
        localStorage.setItem('savedNote', content);

        console.log('Contenido guardado:', content);
    });
});
          
