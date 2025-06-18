// Appwrite SDK Client and Database initialization
import { Client, Databases, Query } from 'https://cdn.jsdelivr.net/npm/appwrite@11.0.0/dist/esm/sdk.js';

// --- Appwrite Configuration ---
const APPWRITE_ENDPOINT = 'https://cloud.appwrite.io/v1'; // Your Appwrite Endpoint
const APPWRITE_PROJECT_ID = '68528057001314063369'; // Your Appwrite Project ID
const DATABASE_ID = '6852a77b0029f40ae7a4'; // Your Appwrite Database ID
const COLLECTION_ID = '6852a7a3001e4713b6f6'; // Your Appwrite Collection ID for app submissions

const client = new Client();
client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);

const databases = new Databases(client);

// --- S3/Archive.org API Configuration (SIMULATED FOR CLIENT-SIDE SAFETY) ---
// WARNING: Storing these directly in client-side code is a SECURITY RISK.
// In a real application, handle uploads via a secure backend.
const S3_ARCHIVE_ACCESS_KEY = 'cFDtuIpumfXlW76M';
const S3_ARCHIVE_SECRET_KEY = 'NVbTrPoAOnJYzeMJ'; // This is the secret part
// The 'LOW' prefix with a combined key suggests an Archive.org specific format:
const S3_ARCHIVE_AUTH_HEADER_VALUE = `LOW ${S3_ARCHIVE_ACCESS_KEY}:${S3_ARCHIVE_SECRET_KEY}`;

// Placeholder URL for simulated Archive.org uploads.
// In a real Archive.org setup, this would point to a specific collection/item.
const SIMULATED_ARCHIVE_ORG_UPLOAD_BASE_URL = 'https://s3.us.archive.org/your-collection-name/simulated-item-id';

/**
 * Simulates file upload to S3/Archive.org.
 * In a real scenario, this would be handled by a secure backend that generates
 * pre-signed URLs or directly uploads using the secret key.
 *
 * @param {File} file The file to upload.
 * @returns {Promise<string>} A promise that resolves with the simulated public URL of the uploaded file.
 */
async function uploadFileToS3Archive(file) {
    const formData = new FormData();
    formData.append('file', file);
    // Archive.org's S3-like API usually requires an 'identifier' for the item
    // and the files are uploaded within that item. This is a very simplified simulation.
    formData.append('name', file.name); // Common for some APIs

    try {
        console.log(`Simulating upload for file: ${file.name}`);
        // This fetch call is a simulation. It won't actually upload to archive.org directly from here
        // due to CORS, pre-flight requests, and the need for a proper item identifier.
        // It's meant to represent the *attempt* to upload.
        const response = await fetch(SIMULATED_ARCHIVE_ORG_UPLOAD_BASE_URL, {
            method: 'POST',
            // For actual Archive.org IAS3, authentication is done in headers like this:
            headers: {
                 'Authorization': S3_ARCHIVE_AUTH_HEADER_VALUE,
                 // Content-Type for FormData is usually automatically set by the browser.
            },
            body: formData,
        });

        // Simulate success regardless of actual network response for the placeholder URL
        // In a real app, you would check response.ok and parse actual results.
        if (response.ok) {
            const result = await response.json(); // Attempt to parse if response is JSON
            console.log("Simulated S3/Archive.org upload response:", result);
        } else {
            // Log error but proceed with simulated URL for client-side demo
            console.warn(`Simulated S3/Archive.org upload to placeholder URL failed with status ${response.status}. Continuing with simulated URL.`);
        }

        // Generate a plausible-looking simulated URL for the file
        const simulatedFileUrl = `${SIMULATED_ARCHIVE_ORG_UPLOAD_BASE_URL}/${file.name.replace(/\s/g, '_')}_${Date.now()}`;
        console.log(`Simulated file URL: ${simulatedFileUrl}`);
        return simulatedFileUrl;

    } catch (error) {
        console.error("Error during simulated file upload:", error);
        // Fallback to a generic placeholder URL on error
        return `https://placehold.co/150x150/FF0000/FFFFFF?text=Upload+Failed`;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // --- Mobile Menu Logic --- (Unchanged from previous versions)
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

    // --- General Message Box for Index Page ---
    const generalMessageBoxContainer = document.getElementById('generalMessageBoxContainer');
    const generalMessageBoxTitle = document.getElementById('generalMessageBoxTitle');
    const generalMessageBoxMessage = document.getElementById('generalMessageBoxMessage');
    const generalOkButton = document.querySelector('.general-ok-button');

    function showGeneralMessageBox(title, message) {
        generalMessageBoxTitle.textContent = title;
        generalMessageBoxMessage.textContent = message;
        generalMessageBoxContainer.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    }

    generalOkButton.addEventListener('click', () => {
        generalMessageBoxContainer.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scroll
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
                        const existingImg = appLogoPreview.querySelector('img');
                        if (existingImg) appLogoPreview.removeChild(existingImg); // Remove previous image
                        const newImg = document.createElement('img');
                        newImg.src = e.target.result;
                        appLogoPreview.appendChild(newImg);
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
    let uploadedImages = []; // Store validated images for submission later
    appImagesInput.addEventListener('change', (event) => {
        appImagesPreviewContainer.innerHTML = ''; // Clear previous previews
        appImagesError.style.display = 'none'; // Hide error
        uploadedImages = []; // Clear previous uploaded images

        const files = Array.from(event.target.files);

        if (files.length < 2 || files.length > 5) {
            appImagesError.textContent = 'Please upload between 2 and 5 screenshots.';
            appImagesError.style.display = 'block';
            appImagesInput.value = ''; // Clear input
            return;
        }

        let processingCount = 0;
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = new Image();
                img.onload = () => {
                    processingCount++;
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
                            const indexToRemove = uploadedImages.indexOf(file);
                            if (indexToRemove > -1) {
                                uploadedImages.splice(indexToRemove, 1); // Remove from array
                            }
                            previewItem.remove(); // Remove from DOM
                            // Re-validate count after removal
                            if (uploadedImages.length < 2 && appImagesInput.files.length > 0) { // Only show error if user initially selected files
                                appImagesError.textContent = 'Minimum 2 screenshots required.';
                                appImagesError.style.display = 'block';
                            } else {
                                appImagesError.style.display = 'none';
                            }
                        });
                        previewItem.appendChild(removeButton);
                        appImagesPreviewContainer.appendChild(previewItem);
                        uploadedImages.push(file); // Add to array only if valid
                    } else {
                        // If any image is invalid, clear all and show error
                        showGeneralMessageBox('Invalid Image Aspect Ratio', `Image '${file.name}' has an invalid aspect ratio. Please upload 16:9 or 9:16 images.`);
                        appImagesInput.value = '';
                        appImagesPreviewContainer.innerHTML = '';
                        uploadedImages = [];
                        appImagesError.textContent = 'One or more images have an invalid aspect ratio.';
                        appImagesError.style.display = 'block';
                    }

                    // After all selected files are processed, check the final count
                    if (processingCount === files.length) {
                        if (uploadedImages.length < 2) {
                            appImagesError.textContent = 'Minimum 2 screenshots required.';
                            appImagesError.style.display = 'block';
                        } else if (uploadedImages.length > 5) {
                             appImagesError.textContent = 'Maximum 5 screenshots allowed.';
                             appImagesError.style.display = 'block';
                        } else {
                            appImagesError.style.display = 'none';
                        }
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
            } else if (apkFileInput.files[0].type !== 'application/vnd.android.package-archive' && apkFileInput.files[0].name.split('.').pop().toLowerCase() !== 'apk') {
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
            showGeneralMessageBox('Submission Failed', 'Please correct the errors in the form.');
            return;
        }

        // --- Prepare Data for Appwrite and Simulated File Uploads ---
        let appData = {
            appName: document.getElementById('appName').value,
            shortDescription: shortDescription.value,
            longDescription: longDescription.value,
            appCategory: document.getElementById('appCategory').value,
            distributionMethod: document.querySelector('input[name="distributionMethod"]:checked').value,
            websiteUrl: websiteUrlInput.value,
            apkUrl: '', // Will be filled if APK is uploaded
            developerName: document.getElementById('developerName').value,
            developerEmail: document.getElementById('developerEmail').value,
            submissionDate: new Date().toISOString(), // Appwrite uses ISO strings for datetime
            status: 'Pending', // Initial status
            appLogoUrl: '', // Will be filled after upload
            appImageUrls: [] // Will be filled after uploads
        };

        const appLogoFile = appLogoInput.files[0];
        const apkFile = apkFileInput.files[0];

        try {
            // Upload App Logo
            if (appLogoFile) {
                appData.appLogoUrl = await uploadFileToS3Archive(appLogoFile);
            }

            // Upload App Images
            appData.appImageUrls = [];
            for (const imageFile of uploadedImages) {
                const imageUrl = await uploadFileToS3Archive(imageFile);
                appData.appImageUrls.push(imageUrl);
            }

            // Upload APK if distribution method is APK
            if (appData.distributionMethod === 'apk' && apkFile) {
                appData.apkUrl = await uploadFileToS3Archive(apkFile);
            }

            // --- Store app data in Appwrite ---
            console.log('Storing app data in Appwrite...');
            const doc = await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                Appwrite.ID.unique(), // Use Appwrite's ID.unique() for document ID
                appData
            );
            console.log("Appwrite document created:", doc);
            appData.$id = doc.$id; // Store the Appwrite document ID


            // Simulate opening email client with pre-filled details
            const subject = encodeURIComponent(`App Submission Request: ${appData.appName}`);
            const body = encodeURIComponent(`Dear ${appData.developerName},\n\nThank you for submitting your app "${appData.appName}" to LoomStore. Your application is now pending review.\n\nSubmission ID: ${appData.$id}\nDeveloper Email: ${appData.developerEmail}\nApp Category: ${appData.appCategory}\n\nWe will notify you of the review status within 3-5 business days.\n\nSincerely,\nThe LoomStore Team`);
            window.location.href = `mailto:${appData.developerEmail}?subject=${subject}&body=${body}`;


            showGeneralMessageBox('Submission Successful!', 'Your app has been submitted for review. An email with submission details has been prepared for you. We will notify you of the review status.');
            developerModal.style.display = 'none'; // Close modal on success
            document.body.style.overflow = '';
            appSubmissionForm.reset(); // Reset form fields
            resetFormErrors(); // Clear validation errors
            clearPreviews(); // Clear image previews

        } catch (error) {
            console.error('Submission error:', error);
            showGeneralMessageBox('Submission Failed', `There was an error submitting your app: ${error.message}. Please try again.`);
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
        uploadedImages = []; // Reset array
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
        window.open('console.html', 'LoomStoreDeveloperConsole', 'width=1200,height=800,resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no,location=no'); // Increased size
        window.location.href = '/';
    }


    // --- Display Approved Apps on Main LoomStore Page ---
    const approvedAppsGrid = document.getElementById('approvedAppsGrid');

    /**
     * Creates an app card HTML element for display on the main LoomStore page.
     * @param {Object} app - The app data object from Appwrite.
     * @returns {HTMLElement} The created app card element.
     */
    function createAppDisplayCard(app) {
        const card = document.createElement('div');
        card.classList.add('app-card'); // Use the existing .app-card style

        card.innerHTML = `
            <div class="app-icon">
                <img src="${app.appLogoUrl || 'https://placehold.co/80x80/007bff/ffffff?text=APP'}" alt="${app.appName} Logo" onerror="this.onerror=null;this.src='https://placehold.co/80x80/007bff/ffffff?text=APP';" />
            </div>
            <h4>${app.appName}</h4>
            <p class="app-category">${app.appCategory}</p>
            <p class="app-description">${app.shortDescription}</p>
            <div class="app-rating">
                <i class="fas fa-star"></i> 4.5 <!-- Static rating for now -->
            </div>
            <button class="get-btn" data-app-id="${app.$id}" data-app-name="${app.appName}" data-apk-url="${app.apkUrl}" data-website-url="${app.websiteUrl}" data-distribution-method="${app.distributionMethod}">Get</button>
        `;

        // Add event listener for the "Get" button
        card.querySelector('.get-btn').addEventListener('click', (e) => {
            const appId = e.target.dataset.appId;
            const appName = e.target.dataset.appName;
            const apkUrl = e.target.dataset.apkUrl;
            const websiteUrl = e.target.dataset.websiteUrl;
            const distributionMethod = e.target.dataset.distributionMethod;

            if (distributionMethod === 'apk' && apkUrl) {
                // Simulate APK download
                showGeneralMessageBox('Downloading App', `Downloading ${appName}... (Simulated from: ${apkUrl})`);
                // In a real scenario, you'd trigger a download:
                // window.open(apkUrl, '_blank');
            } else if (distributionMethod === 'url' && websiteUrl) {
                // Open website URL
                showGeneralMessageBox('Opening Website', `Opening website for ${appName}...`);
                window.open(websiteUrl, '_blank');
            } else {
                showGeneralMessageBox('Error', 'App download/install method not available.');
            }
        });

        return card;
    }

    /**
     * Fetches approved apps from Appwrite and displays them.
     */
    async function fetchAndDisplayApprovedApps() {
        try {
            console.log("Fetching approved apps from Appwrite...");
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.equal('status', 'Approved'), Query.orderDesc('submissionDate')]
            );

            approvedAppsGrid.innerHTML = ''; // Clear loading message/previous apps

            if (response.documents.length === 0) {
                approvedAppsGrid.innerHTML = '<p class="no-apps-message">No approved apps found yet.</p>';
            } else {
                response.documents.forEach(app => {
                    approvedAppsGrid.appendChild(createAppDisplayCard(app));
                });
            }
            console.log("Approved apps displayed:", response.documents.length);

        } catch (error) {
            console.error("Error fetching approved apps:", error);
            approvedAppsGrid.innerHTML = '<p class="no-apps-message error">Failed to load apps. Please try again later.</p>';
            showGeneralMessageBox('Error Loading Apps', 'Failed to retrieve approved applications. Please check your internet connection or try again later.');
        }
    }

    // Call this function when the page loads to populate the app grid
    fetchAndDisplayApprovedApps();

    // Appwrite Realtime Subscription for Approved Apps Grid
    client.subscribe(`databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`, response => {
        // Only react to updates within our specific collection and if the payload has a status
        if (response.events.some(event => event.startsWith(`databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents.`))) {
            const updatedApp = response.payload;
            // If an app's status changes to Approved, or an Approved app is updated/deleted, refresh the list
            if (updatedApp && (updatedApp.status === 'Approved' || response.events.includes('database.documents.delete'))) {
                console.log("Realtime update for approved apps received, refreshing grid.");
                fetchAndDisplayApprovedApps();
            }
        }
    });

    // --- Main Search Bar functionality ---
    const mainSearchBar = document.getElementById('mainSearchBar');
    const mainSearchButton = document.getElementById('mainSearchButton');

    async function performAppSearch(query) {
        approvedAppsGrid.innerHTML = '<p class="no-apps-message">Searching for apps...</p>';
        try {
            let response;
            if (query.trim() === '') {
                // If search bar is empty, show all approved apps
                response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [Query.equal('status', 'Approved'), Query.orderDesc('submissionDate')]
                );
            } else {
                // Search by app name or short description
                response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [
                        Query.equal('status', 'Approved'),
                        Query.search('appName', query), // Search in appName
                        Query.search('shortDescription', query), // Search in shortDescription
                        Query.orderDesc('submissionDate')
                    ]
                );
            }

            approvedAppsGrid.innerHTML = '';
            if (response.documents.length === 0) {
                approvedAppsGrid.innerHTML = `<p class="no-apps-message">No approved apps found for "${query}".</p>`;
            } else {
                response.documents.forEach(app => {
                    approvedAppsGrid.appendChild(createAppDisplayCard(app));
                });
            }
        } catch (error) {
            console.error("Error during app search:", error);
            approvedAppsGrid.innerHTML = '<p class="no-apps-message error">Error performing search.</p>';
        }
    }

    mainSearchButton.addEventListener('click', () => {
        performAppSearch(mainSearchBar.value);
    });

    mainSearchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performAppSearch(mainSearchBar.value);
        }
    });

});
