document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Logic (Existing) ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileNavOverlay = document.createElement('div');
    mobileNavOverlay.classList.add('mobile-nav-overlay');
    mobileNavOverlay.innerHTML = `
        <div class="close-icon"><i class="fas fa-times"></i></div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Support</a></li>
            <li><button class="developer-btn mobile-dev-btn">Developer</button></li>
        </ul>
    `;
    document.body.appendChild(mobileNavOverlay);

    const closeIcon = mobileNavOverlay.querySelector('.close-icon');
    const mobileNavLinks = mobileNavOverlay.querySelectorAll('a, .mobile-dev-btn');

    const openMobileMenu = () => {
        mobileNavOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileNavOverlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    if (mobileMenuIcon) {
        mobileMenuIcon.addEventListener('click', openMobileMenu);
    }

    if (closeIcon) {
        closeIcon.addEventListener('click', closeMobileMenu);
    }

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
                e.preventDefault();
            }
            closeMobileMenu();
        });
    });

    // --- Developer Modal Logic ---
    const developerButton = document.querySelector('.developer-btn');
    const developerModal = document.getElementById('developerModal');
    const modalCloseButton = developerModal.querySelector('.close-button');
    const appSubmissionForm = document.getElementById('appSubmissionForm');
    const shortDescription = document.getElementById('shortDescription');
    const longDescription = document.getElementById('longDescription');
    const shortDescCharCount = document.getElementById('shortDescCharCount');
    const longDescCharCount = document.getElementById('longDescCharCount');
    const appLogoInput = document.getElementById('appLogo');
    const appLogoPreview = document.getElementById('appLogoPreview');
    const appImagesInput = document.getElementById('appImages');
    const appImagesPreviewContainer = document.getElementById('appImagesPreview');
    const distributeUrlRadio = document.getElementById('distributeUrl');
    const distributeApkRadio = document.getElementById('distributeApk');
    const websiteUrlGroup = document.getElementById('websiteUrlGroup');
    const apkUploadGroup = document.getElementById('apkUploadGroup');
    const websiteUrlInput = document.getElementById('websiteUrl');
    const apkFileInput = document.getElementById('apkFile');

    // Error message elements
    const appNameError = document.getElementById('appNameError');
    const appLogoError = document.getElementById('appLogoError');
    const shortDescriptionError = document.getElementById('shortDescriptionError');
    const longDescriptionError = document.getElementById('longDescriptionError');
    const appImagesError = document.getElementById('appImagesError');
    const appCategoryError = document.getElementById('appCategoryError');
    const distributionMethodError = document.getElementById('distributionMethodError');
    const websiteUrlError = document.getElementById('websiteUrlError');
    const apkFileError = document.getElementById('apkFileError');
    const developerNameError = document.getElementById('developerNameError');
    const developerEmailError = document.getElementById('developerEmailError');


    // Function to show custom message box
    function showMessageBox(title, message) {
        const messageBoxContainer = document.createElement('div');
        messageBoxContainer.classList.add('message-box-container');
        messageBoxContainer.innerHTML = `
            <div class="message-box">
                <h3>${title}</h3>
                <p>${message}</p>
                <button class="ok-button">OK</button>
            </div>
        `;
        document.body.appendChild(messageBoxContainer);
        messageBoxContainer.style.display = 'flex'; // Show it

        const okButton = messageBoxContainer.querySelector('.ok-button');
        okButton.addEventListener('click', () => {
            document.body.removeChild(messageBoxContainer);
        });
    }

    // Open Modal
    if (developerButton) {
        developerButton.addEventListener('click', () => {
            developerModal.style.display = 'flex'; // Use flex to center
            document.body.style.overflow = 'hidden'; // Prevent scrolling body
        });
    }

    // Close Modal
    modalCloseButton.addEventListener('click', () => {
        developerModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scrolling
        appSubmissionForm.reset(); // Reset form fields
        resetFormErrors(); // Clear validation errors
        clearPreviews(); // Clear image previews
    });

    // Close Modal if clicked outside content
    window.addEventListener('click', (event) => {
        if (event.target == developerModal) {
            developerModal.style.display = 'none';
            document.body.style.overflow = '';
            appSubmissionForm.reset();
            resetFormErrors();
            clearPreviews();
        }
    });

    // Handle character counts for text areas
    shortDescription.addEventListener('input', () => {
        shortDescCharCount.textContent = `${shortDescription.value.length}/100`;
        validateField(shortDescription, shortDescriptionError, 'Short description cannot be empty.', shortDescription.value.length > 0);
    });

    longDescription.addEventListener('input', () => {
        longDescCharCount.textContent = `${longDescription.value.length}/400`;
        validateField(longDescription, longDescriptionError, 'Full description cannot be empty.', longDescription.value.length > 0);
    });

    // Image Preview for App Logo (Square format)
    appLogoInput.addEventListener('change', (event) => {
        appLogoPreview.innerHTML = ''; // Clear previous preview
        appLogoError.style.display = 'none'; // Hide error
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    // Check if image is square
                    if (img.width === img.height) {
                        appLogoPreview.appendChild(img);
                    } else {
                        appLogoInput.value = ''; // Clear input
                        appLogoPreview.innerHTML = '';
                        appLogoError.textContent = 'Logo must be square (e.g., 200x200 pixels).';
                        appLogoError.style.display = 'block';
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Image Preview for App Screenshots (16:9 or 9:16)
    const uploadedImages = []; // Store validated images for submission later
    appImagesInput.addEventListener('change', (event) => {
        appImagesPreviewContainer.innerHTML = ''; // Clear previous previews
        appImagesError.style.display = 'none'; // Hide error
        uploadedImages.length = 0; // Clear previous uploaded images

        const files = Array.from(event.target.files);

        if (files.length < 2 || files.length > 5) {
            appImagesError.textContent = 'Please upload between 2 and 5 screenshots.';
            appImagesError.style.display = 'block';
            appImagesInput.value = ''; // Clear input
            return;
        }

        let validCount = 0;
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    // Check aspect ratio (allowing for small floating point inaccuracies)
                    const aspectRatio = img.width / img.height;
                    const is16_9 = Math.abs(aspectRatio - (16 / 9)) < 0.01;
                    const is9_16 = Math.abs(aspectRatio - (9 / 16)) < 0.01;

                    if (is16_9 || is9_16) {
                        const previewItem = document.createElement('div');
                        previewItem.classList.add('image-preview-item');
                        if (is9_16) {
                            previewItem.classList.add('portrait');
                        }
                        const imgElement = document.createElement('img');
                        imgElement.src = e.target.result;
                        previewItem.appendChild(imgElement);

                        const removeButton = document.createElement('span');
                        removeButton.classList.add('remove-image');
                        removeButton.innerHTML = '&times;';
                        removeButton.addEventListener('click', () => {
                            uploadedImages.splice(uploadedImages.indexOf(file), 1); // Remove from array
                            previewItem.remove(); // Remove from DOM
                            // Re-validate count after removal
                            if (uploadedImages.length < 2) {
                                appImagesError.textContent = 'Minimum 2 screenshots required.';
                                appImagesError.style.display = 'block';
                            } else {
                                appImagesError.style.display = 'none';
                            }
                        });
                        previewItem.appendChild(removeButton);
                        appImagesPreviewContainer.appendChild(previewItem);
                        uploadedImages.push(file); // Add to array only if valid
                        validCount++;
                    } else {
                        showMessageBox('Invalid Image Aspect Ratio', `Image '${file.name}' has an invalid aspect ratio. Please upload 16:9 or 9:16 images.`);
                        appImagesInput.value = ''; // Clear input if any invalid image
                        appImagesPreviewContainer.innerHTML = ''; // Clear all previews if one is invalid
                        uploadedImages.length = 0; // Clear array
                    }

                    // After all files are processed, check the count again
                    if (validCount > 0 && validCount < 2) {
                        appImagesError.textContent = 'Minimum 2 screenshots required.';
                        appImagesError.style.display = 'block';
                    } else if (validCount > 5) {
                         appImagesError.textContent = 'Maximum 5 screenshots allowed.';
                         appImagesError.style.display = 'block';
                    } else if (validCount >= 2 && validCount <= 5) {
                        appImagesError.style.display = 'none';
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });
    });

    // Handle distribution method change
    distributeUrlRadio.addEventListener('change', () => {
        websiteUrlGroup.style.display = 'block';
        apkUploadGroup.style.display = 'none';
        websiteUrlInput.setAttribute('required', 'required');
        apkFileInput.removeAttribute('required');
        apkFileInput.value = ''; // Clear APK input if switching
        apkFileError.style.display = 'none'; // Hide error
    });

    distributeApkRadio.addEventListener('change', () => {
        websiteUrlGroup.style.display = 'none';
        apkUploadGroup.style.display = 'block';
        apkFileInput.setAttribute('required', 'required');
        websiteUrlInput.removeAttribute('required');
        websiteUrlInput.value = ''; // Clear URL input if switching
        websiteUrlError.style.display = 'none'; // Hide error
    });

    // Form Submission Handler
    appSubmissionForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission
        resetFormErrors(); // Clear previous errors

        let isValid = true;

        // Validation for App Name
        isValid = validateField(document.getElementById('appName'), appNameError, 'App Name cannot be empty.', document.getElementById('appName').value.trim() !== '') && isValid;

        // Validation for App Logo
        if (!appLogoInput.files[0]) {
            appLogoError.textContent = 'Please upload an app logo.';
            appLogoError.style.display = 'block';
            isValid = false;
        } else {
             // Re-check square aspect ratio during submission for logo
             const file = appLogoInput.files[0];
             const img = new Image();
             img.src = URL.createObjectURL(file);
             await new Promise(resolve => img.onload = resolve);
             if (img.width !== img.height) {
                appLogoError.textContent = 'Logo must be square (e.g., 200x200 pixels).';
                appLogoError.style.display = 'block';
                isValid = false;
             }
        }


        // Validation for Short Description
        isValid = validateField(shortDescription, shortDescriptionError, 'Short description cannot be empty.', shortDescription.value.trim() !== '') && isValid;
        isValid = validateField(shortDescription, shortDescriptionError, 'Short description cannot exceed 100 characters.', shortDescription.value.length <= 100) && isValid;


        // Validation for Long Description
        isValid = validateField(longDescription, longDescriptionError, 'Full description cannot be empty.', longDescription.value.trim() !== '') && isValid;
        isValid = validateField(longDescription, longDescriptionError, 'Full description cannot exceed 400 characters.', longDescription.value.length <= 400) && isValid;


        // Validation for App Images
        if (uploadedImages.length < 2 || uploadedImages.length > 5) {
            appImagesError.textContent = 'Please upload between 2 and 5 screenshots.';
            appImagesError.style.display = 'block';
            isValid = false;
        } else {
            // Re-validate aspect ratios during submission for images
            for (const file of uploadedImages) {
                const img = new Image();
                img.src = URL.createObjectURL(file);
                await new Promise(resolve => img.onload = resolve);
                const aspectRatio = img.width / img.height;
                const is16_9 = Math.abs(aspectRatio - (16 / 9)) < 0.01;
                const is9_16 = Math.abs(aspectRatio - (9 / 16)) < 0.01;
                if (!is16_9 && !is9_16) {
                    appImagesError.textContent = `Image '${file.name}' has an invalid aspect ratio. Please upload 16:9 or 9:16 images.`;
                    appImagesError.style.display = 'block';
                    isValid = false;
                    break;
                }
            }
        }

        // Validation for Category
        isValid = validateField(document.getElementById('appCategory'), appCategoryError, 'Please select a category.', document.getElementById('appCategory').value !== '') && isValid;


        // Validation for Distribution Method
        if (distributeUrlRadio.checked) {
            isValid = validateField(websiteUrlInput, websiteUrlError, 'Website URL cannot be empty.', websiteUrlInput.value.trim() !== '') && isValid;
            isValid = validateField(websiteUrlInput, websiteUrlError, 'Please enter a valid URL.', isValidUrl(websiteUrlInput.value.trim())) && isValid;
        } else if (distributeApkRadio.checked) {
            if (!apkFileInput.files[0]) {
                apkFileError.textContent = 'Please upload an APK file.';
                apkFileError.style.display = 'block';
                isValid = false;
            } else if (apkFileInput.files[0].type !== 'application/vnd.android.package-archive') {
                apkFileError.textContent = 'Only .apk files are allowed.';
                apkFileError.style.display = 'block';
                isValid = false;
            }
        } else {
            distributionMethodError.textContent = 'Please choose a distribution method.';
            distributionMethodError.style.display = 'block';
            isValid = false;
        }


        // Validation for Developer Name
        isValid = validateField(document.getElementById('developerName'), developerNameError, 'Developer Name cannot be empty.', document.getElementById('developerName').value.trim() !== '') && isValid;

        // Validation for Developer Email
        isValid = validateField(document.getElementById('developerEmail'), developerEmailError, 'Developer Email cannot be empty.', document.getElementById('developerEmail').value.trim() !== '') && isValid;
        isValid = validateField(document.getElementById('developerEmail'), developerEmailError, 'Please enter a valid email address.', isValidEmail(document.getElementById('developerEmail').value.trim())) && isValid;


        if (!isValid) {
            showMessageBox('Submission Failed', 'Please correct the errors in the form.');
            return;
        }

        // --- Simulated API Calls ---
        const appData = {
            appName: document.getElementById('appName').value,
            shortDescription: shortDescription.value,
            longDescription: longDescription.value,
            appCategory: document.getElementById('appCategory').value,
            distributionMethod: document.querySelector('input[name="distributionMethod"]:checked').value,
            websiteUrl: websiteUrlInput.value,
            developerName: document.getElementById('developerName').value,
            developerEmail: document.getElementById('developerEmail').value,
            submissionDate: new Date().toISOString()
        };

        const appLogoFile = appLogoInput.files[0];
        const apkFile = apkFileInput.files[0];

        try {
            // Simulate S3/Archive.org API upload for APK (if chosen) and images
            if (appData.distributionMethod === 'apk' && apkFile) {
                const formDataApk = new FormData();
                formDataApk.append('file', apkFile); // 'file' is common field name for uploads

                console.log('Simulating APK upload to S3/Archive.org API...');
                // Replace with your actual S3/Archive.org upload endpoint
                const s3UploadResponse = await fetch('https://api.archive.org/upload/your-bucket', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'LOW t1neWUa7JnuqGiMv:sLBddyAy31lVj4pR',
                        // Content-Type will be 'multipart/form-data' automatically with FormData
                    },
                    body: formDataApk
                });
                const s3Result = await s3UploadResponse.json();
                console.log('Simulated S3/Archive.org APK upload result:', s3Result);
                // In a real scenario, you'd get a URL to the uploaded APK here
                appData.apkUrl = `https://archive.org/download/${s3Result.key || 'simulated-apk-key'}/${apkFile.name}`;
            }

            // Simulate S3/Archive.org API upload for App Logo
            if (appLogoFile) {
                const formDataLogo = new FormData();
                formDataLogo.append('file', appLogoFile);
                console.log('Simulating App Logo upload to S3/Archive.org API...');
                const s3LogoResponse = await fetch('https://api.archive.org/upload/your-bucket-logos', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'LOW t1neWUa7JnuqGiMv:sLBddyAy31lVj4pR',
                    },
                    body: formDataLogo
                });
                const s3LogoResult = await s3LogoResponse.json();
                console.log('Simulated S3/Archive.org Logo upload result:', s3LogoResult);
                appData.appLogoUrl = `https://archive.org/download/${s3LogoResult.key || 'simulated-logo-key'}/${appLogoFile.name}`;
            }

            // Simulate S3/Archive.org API upload for App Images
            appData.appImageUrls = [];
            for (const imageFile of uploadedImages) {
                const formDataImage = new FormData();
                formDataImage.append('file', imageFile);
                console.log(`Simulating App Image '${imageFile.name}' upload to S3/Archive.org API...`);
                const s3ImageResponse = await fetch('https://api.archive.org/upload/your-bucket-images', {
                    method: 'POST',
                    headers: {
                        'Authorization': 'LOW t1neWUa7JnuqGiMv:sLBddyAy31lVj4pR',
                    },
                    body: formDataImage
                });
                const s3ImageResult = await s3ImageResponse.json();
                console.log(`Simulated S3/Archive.org Image upload result for '${imageFile.name}':`, s3ImageResult);
                appData.appImageUrls.push(`https://archive.org/download/${s3ImageResult.key || 'simulated-image-key'}/${imageFile.name}`);
            }

            // Simulate Appwrite metadata storage
            console.log('Simulating Appwrite metadata storage...');
            // Replace with your actual Appwrite API endpoint and project/collection IDs
            const appwriteResponse = await fetch('https://[YOUR_APPWRITE_ENDPOINT]/v1/databases/[DATABASE_ID]/collections/[COLLECTION_ID]/documents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Appwrite-Project': '[YOUR_APPWRITE_PROJECT_ID]',
                    'X-Appwrite-Key': '[YOUR_APPWRITE_API_KEY]' // Use a server-side key or set up policies
                },
                body: JSON.stringify(appData)
            });
            const appwriteResult = await appwriteResponse.json();
            console.log('Simulated Appwrite metadata storage result:', appwriteResult);

            // Simulate sending app release request to console page (via a placeholder API)
            console.log('Simulating sending app release request to console page...');
            const consoleRequestResponse = await fetch('https://your-console-backend.com/api/app-requests', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    appName: appData.appName,
                    developerName: appData.developerName,
                    developerEmail: appData.developerEmail,
                    status: 'Pending Review',
                    // Include any relevant data for your backend console
                })
            });
            const consoleRequestResult = await consoleRequestResponse.json();
            console.log('Simulated console request result:', consoleRequestResult);

            // Simulate opening email client with pre-filled details
            const subject = encodeURIComponent(`App Submission Request: ${appData.appName}`);
            const body = encodeURIComponent(`Dear LoomStore Team,\n\nI have submitted my app "${appData.appName}" for review.\n\nDeveloper Name: ${appData.developerName}\nDeveloper Email: ${appData.developerEmail}\nApp Category: ${appData.appCategory}\n\nShort Description: ${appData.shortDescription}\n\nFull Description: ${appData.longDescription}\n\n${appData.distributionMethod === 'url' ? `Website URL: ${appData.websiteUrl}` : `APK File Uploaded (simulated URL: ${appData.apkUrl})`}\n\nThank you for your time.\n\nSincerely,\n${appData.developerName}`);
            // This will attempt to open the user's default email client
            window.location.href = `mailto:${appData.developerEmail}?subject=${subject}&body=${body}`;


            showMessageBox('Submission Successful!', 'Your app has been submitted for review. An email with submission details has been prepared for you. We will notify you of the review status.');
            developerModal.style.display = 'none'; // Close modal on success
            document.body.style.overflow = '';
            appSubmissionForm.reset(); // Reset form fields
            resetFormErrors(); // Clear validation errors
            clearPreviews(); // Clear image previews

        } catch (error) {
            console.error('Submission error:', error);
            showMessageBox('Submission Failed', `There was an error submitting your app: ${error.message}. Please try again.`);
        }
    });

    // Helper functions for validation
    function validateField(inputElement, errorElement, errorMessage, condition) {
        if (!condition) {
            errorElement.textContent = errorMessage;
            errorElement.style.display = 'block';
            inputElement.classList.add('input-error'); // Optional: add a class for error styling
            return false;
        } else {
            errorElement.style.display = 'none';
            inputElement.classList.remove('input-error');
            return true;
        }
    }

    function isValidEmail(email) {
        // Simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (e) {
            return false;
        }
    }

    function resetFormErrors() {
        document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    }

    function clearPreviews() {
        appLogoPreview.innerHTML = '';
        appImagesPreviewContainer.innerHTML = '';
        uploadedImages.length = 0; // Clear the array storing image files
        appLogoInput.value = ''; // Clear file input value
        appImagesInput.value = ''; // Clear file input value
        apkFileInput.value = ''; // Clear file input value
    }

    // --- Mobile Developer Button (Existing, now opens modal) ---
    const mobileDeveloperButton = mobileNavOverlay.querySelector('.mobile-dev-btn');
    if (mobileDeveloperButton) {
        mobileDeveloperButton.addEventListener('click', () => {
             developerModal.style.display = 'flex';
             document.body.style.overflow = 'hidden';
             closeMobileMenu(); // Close the mobile menu after opening the popup
        });
    }

    // --- Secret URL functionality for /console.html (Existing) ---
    if (window.location.pathname.endsWith('/console.html')) {
        document.body.style.display = 'none';
        window.open('console.html', 'LoomStoreDeveloperConsole', 'width=800,height=600,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no');
        window.location.href = '/';
    }
});
