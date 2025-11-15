// Menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu-button');
    const navLinks = document.querySelector('nav ul');

    menuButton.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const serviceDescriptions = {
        'Device Management': `
            Our comprehensive Device Management service includes:
            • Full system setup and configuration
            • Regular maintenance and updates
            • Security software installation and monitoring
            • Performance optimization
            • Remote support capabilities
            • Data backup solutions
            • Device inventory tracking
            • Software license management
        `,
        'Windows Troubleshooting': `
            Our Windows Troubleshooting service covers:
            • Blue screen errors resolution
            • System crash analysis
            • Performance optimization
            • Driver updates and compatibility issues
            • Boot problems diagnosis and repair
            • Malware removal and security fixes
            • Software conflict resolution
            • System restore and recovery
        `,
        'Network Solutions': `
            Our Network Solutions service provides:
            • Network design and implementation
            • Wi-Fi optimization and coverage analysis
            • Security assessment and enhancement
            • Firewall configuration
            • VPN setup and management
            • Network monitoring and maintenance
            • Bandwidth optimization
            • Remote access solutions
        `
    };
    const modal = document.getElementById('serviceModal');
    if (modal) {
        const modalTitle = modal.querySelector('.modal-title');
        const modalBody = modal.querySelector('.modal-body');
        const closeBtn = modal.querySelector('.close-modal');

        document.querySelectorAll('.services .read-more').forEach(button => {
            button.addEventListener('click', function() {
                const serviceInfo = this.closest('.service-info');
                if (!serviceInfo) return;
                const serviceTitle = serviceInfo.querySelector('h3').textContent;
                modalTitle.textContent = serviceTitle;
                modalBody.innerHTML = (serviceDescriptions[serviceTitle] || '').split('•').join('<br>•');
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }
}); 

// Blog post expand/collapse
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#blog-section .read-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const blogPost = this.closest('.blog-post');
            if (!blogPost) return;
            blogPost.classList.toggle('expanded');
            this.textContent = blogPost.classList.contains('expanded') ? 'Show Less' : 'Read More';
        });
    });
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isOpen = answer.classList.contains('show');
        
        // Close all other answers
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('show'));
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
        
        // Toggle the clicked answer
        if (!isOpen) {
            answer.classList.add('show');
            question.classList.add('active');
        }
    });
});
const select = document.querySelector('#service');
if (select && select.options.length <= 1) {
    ['Consultation','Device Management','Windows Troubleshooting','Network Solutions'].forEach(service => {
        const option = document.createElement('option');
        option.value = service;
        option.text = service;
        select.add(option);
    });
}

// Form validation
function validateForm() {
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const location = document.getElementById('location').value.trim();
    const date = document.getElementById('date').value;
    const info = document.getElementById('info').value.trim();
    
    // Error message element
    const errorMessage = document.getElementById('errorMessage');
    
    // Clear previous error messages
    errorMessage.innerHTML = '';
    
    // Validation checks
    let errors = [];

    // Name validation (at least 2 words, letters only)
    if (!/^[A-Za-z]+ [A-Za-z ]+$/.test(name)) {
        errors.push("Please enter your full name (first and last name, letters only)");
    }

    // Email validation (using regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address");
    }

    // Service validation
    if (!service) {
        errors.push("Please select a service");
    }

    // Location validation (minimum 3 characters)
    if (location.length < 3) {
        errors.push("Location must be at least 3 characters long");
    }

    // Date validation
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (!date) {
        errors.push("Please select a date");
    } else if (selectedDate < today) {
        errors.push("Please select a future date");
    }

    // Message validation (minimum 10 characters)
    if (info.length < 10) {
        errors.push("Message must be at least 10 characters long");
    }

    // Display errors if any
    if (errors.length > 0) {
        errorMessage.classList.remove('success');
        errorMessage.classList.add('error');
        errorMessage.innerHTML = errors.join('<br>');
        return false;
    }

    // If validation passes, submit the form using fetch
    submitForm();
    return false; // Prevent default form submission
}

function submitForm() {
    const form = document.getElementById('bookingForm');
    const formData = new FormData(form);
    const errorMessage = document.getElementById('errorMessage');

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = 'Submitting...';
    submitButton.disabled = true;

    fetch('index.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            form.reset();
            errorMessage.classList.remove('error');
            errorMessage.classList.add('success');
            errorMessage.innerHTML = data.message;
        } else {
            errorMessage.classList.remove('success');
            errorMessage.classList.add('error');
            errorMessage.innerHTML = data.message;
        }
    })
    .catch(error => {
        errorMessage.innerHTML = 'An error occurred. Please try again.';
        console.error('Error:', error);
    })
    .finally(() => {
        // Restore button state
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.min = `${yyyy}-${mm}-${dd}`;
    }
});