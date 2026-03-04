function updateModal(title, desc, videoUrl) {
            document.getElementById('mTitle').innerText = title;
            document.getElementById('mDesc').innerText = desc;
            document.getElementById('mVideo').src = videoUrl;
        }

document.getElementById('formRegistro').addEventListener('submit', function(e) {
            e.preventDefault();
            const n = document.getElementById('v_nombre').value;
            if (n.length < 3) {
                alert("Ingresa un nombre válido.");
                return;
            }
            alert("¡Registro exitoso! Gracias, " + n);
            this.reset();
        });