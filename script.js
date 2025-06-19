document.addEventListener('DOMContentLoaded', () => {
    const developerBtn = document.getElementById('developer-btn');
    const developerForm = document.getElementById('developer-form');
    const form = developerForm.querySelector('form');

    developerBtn.addEventListener('click', () => {
        developerForm.style.display = 'block';
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const logoInput = document.getElementById('app-logo');
        const imagesInput = document.getElementById('app-images');
        const apkInput = document.getElementById('apk-file');

        // Validate logo
        if (logoInput.files.length === 0) {
            alert('Please upload a logo.');
            return;
        }
        const logoFile = logoInput.files[0];
        const logoImg = await loadImage(logoFile);
        if (logoImg.width !== logoImg.height) {
            alert('Logo must be square.');
            return;
        }

        // Validate app images
        if (imagesInput.files.length < 2) {
            alert('Please upload at least 2 images.');
            return;
        }
        for (let file of imagesInput.files) {
            const img = await loadImage(file);
            const ratio = img.width / img.height;
            if (ratio !== 16/9 && ratio !== 9/16) {
                alert('Images must be in 16:9 or 9:16 ratio.');
                return;
            }
        }

        // Validate APK
        if (apkInput.files.length === 0) {
            alert('Please upload an APK file.');
            return;
        }

        // Prepare and send form data
        const formData = new FormData(form);
        try {
            const response = await fetch('/submit-app', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                alert('App submitted successfully.');
                developerForm.style.display = 'none';
            } else {
                alert('Error submitting app.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting app.');
        }
    });

    function loadImage(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    }
});
