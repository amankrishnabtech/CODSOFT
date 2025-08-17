// Mobile App Signup Flow Demo - JavaScript

class SignupFlowDemo {
    constructor() {
        this.currentScreen = 'landing-page';
        this.currentStep = 1;
        this.userData = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            interests: ''
        };
        this.init();
    }

    init() {
        this.bindEvents();
        this.showScreen('landing-page');
    }

    bindEvents() {
        // Landing page events
        document.getElementById('start-demo')?.addEventListener('click', () => {
            this.startDemo();
        });

        // Step navigation
        document.getElementById('back-to-landing')?.addEventListener('click', () => {
            this.showScreen('landing-page');
        });

        document.getElementById('back-to-step-1')?.addEventListener('click', () => {
            this.showStep(1);
        });

        document.getElementById('back-to-step-2')?.addEventListener('click', () => {
            this.showStep(2);
        });

        // Form submissions
        document.getElementById('email-form')?.addEventListener('submit', (e) => {
            this.handleEmailSubmit(e);
        });

        document.getElementById('password-form')?.addEventListener('submit', (e) => {
            this.handlePasswordSubmit(e);
        });

        document.getElementById('details-form')?.addEventListener('submit', (e) => {
            this.handleDetailsSubmit(e);
        });

        // Email validation
        document.getElementById('email')?.addEventListener('input', (e) => {
            this.validateEmail(e.target.value);
        });

        // Password strength validation
        document.getElementById('password')?.addEventListener('input', (e) => {
            this.validatePassword(e.target.value);
        });

        // Password toggle
        document.getElementById('password-toggle')?.addEventListener('click', () => {
            this.togglePasswordVisibility();
        });

        // Social login buttons
        document.getElementById('google-login')?.addEventListener('click', () => {
            this.handleSocialLogin('Google');
        });

        document.getElementById('apple-login')?.addEventListener('click', () => {
            this.handleSocialLogin('Apple');
        });

        document.getElementById('facebook-login')?.addEventListener('click', () => {
            this.handleSocialLogin('Facebook');
        });

        // Skip details
        document.getElementById('skip-details')?.addEventListener('click', () => {
            this.skipPersonalDetails();
        });

        // Success screen actions
        document.getElementById('get-started')?.addEventListener('click', () => {
            this.completeDemo();
        });

        document.getElementById('view-insights')?.addEventListener('click', () => {
            this.showInsights();
        });

        // Demo controls
        document.getElementById('restart-demo')?.addEventListener('click', () => {
            this.restartDemo();
        });

        document.getElementById('test-errors')?.addEventListener('click', () => {
            this.showErrorDemo();
        });

        // Insights navigation
        document.getElementById('back-from-insights')?.addEventListener('click', () => {
            this.showScreen('mobile-frame');
        });

        document.getElementById('try-again-from-insights')?.addEventListener('click', () => {
            this.restartDemo();
        });

        // Error modal
        document.getElementById('close-error-modal')?.addEventListener('click', () => {
            this.closeErrorModal();
        });

        document.getElementById('close-error-modal-btn')?.addEventListener('click', () => {
            this.closeErrorModal();
        });

        // Modal backdrop click
        document.querySelector('.modal-backdrop')?.addEventListener('click', () => {
            this.closeErrorModal();
        });

        // Form input enhancements
        this.enhanceFormInputs();
    }

    enhanceFormInputs() {
        // Add real-time validation feedback
        const inputs = document.querySelectorAll('.form-control');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.classList.remove('error', 'success');
            });
        });
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            this.currentScreen = screenId;
        }
    }

    showStep(stepNumber) {
        // Hide all step screens
        document.querySelectorAll('.step-screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target step
        const targetStep = document.getElementById(`step-${stepNumber}`);
        if (targetStep) {
            targetStep.classList.add('active');
            this.currentStep = stepNumber;
        }
    }

    startDemo() {
        this.showScreen('mobile-frame');
        this.showStep(1);
        // Focus on email input
        setTimeout(() => {
            document.getElementById('email')?.focus();
        }, 300);
    }

    handleEmailSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('email').value.trim();
        
        if (this.isValidEmail(email)) {
            this.userData.email = email;
            this.showLoadingState('Validating email...', () => {
                this.showStep(2);
                setTimeout(() => {
                    document.getElementById('password')?.focus();
                }, 300);
            });
        }
    }

    handlePasswordSubmit(e) {
        e.preventDefault();
        const password = document.getElementById('password').value;
        
        if (this.isValidPassword(password)) {
            this.userData.password = password;
            this.showLoadingState('Securing your account...', () => {
                this.showStep(3);
                setTimeout(() => {
                    document.getElementById('firstName')?.focus();
                }, 300);
            });
        }
    }

    handleDetailsSubmit(e) {
        e.preventDefault();
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const interests = document.getElementById('interests').value;

        this.userData.firstName = firstName;
        this.userData.lastName = lastName;
        this.userData.interests = interests;

        this.showLoadingState('Creating your account...', () => {
            this.completeSignup();
        });
    }

    skipPersonalDetails() {
        this.showLoadingState('Creating your account...', () => {
            this.completeSignup();
        });
    }

    completeSignup() {
        this.showStep(4);
        this.updateSuccessScreen();
        this.celebrateSuccess();
    }

    updateSuccessScreen() {
        // Update welcome message
        const welcomeMessage = document.getElementById('welcome-message');
        if (this.userData.firstName) {
            welcomeMessage.textContent = `Welcome aboard, ${this.userData.firstName}!`;
        }

        // Update summary
        document.getElementById('summary-email').textContent = this.userData.email;
        
        if (this.userData.firstName || this.userData.lastName) {
            const nameContainer = document.getElementById('summary-name-container');
            const nameValue = document.getElementById('summary-name');
            const fullName = `${this.userData.firstName} ${this.userData.lastName}`.trim();
            if (fullName) {
                nameContainer.style.display = 'flex';
                nameValue.textContent = fullName;
            }
        }

        if (this.userData.interests) {
            const interestContainer = document.getElementById('summary-interest-container');
            const interestValue = document.getElementById('summary-interest');
            interestContainer.style.display = 'flex';
            interestValue.textContent = this.getInterestLabel(this.userData.interests);
        }
    }

    getInterestLabel(value) {
        const labels = {
            'fitness': 'Fitness & Health',
            'productivity': 'Productivity',
            'entertainment': 'Entertainment',
            'learning': 'Learning & Education',
            'social': 'Social & Communication'
        };
        return labels[value] || value;
    }

    celebrateSuccess() {
        // Add confetti animation
        setTimeout(() => {
            const confetti = document.querySelector('.success-confetti');
            if (confetti) {
                confetti.style.animation = 'confetti 1s ease-out';
            }
        }, 500);
    }

    validateEmail(email) {
        const emailInput = document.getElementById('email');
        const feedback = document.getElementById('email-feedback');
        const submitBtn = document.querySelector('#email-form button[type="submit"]');

        if (email.length === 0) {
            emailInput.classList.remove('error', 'success');
            feedback.textContent = '';
            feedback.className = 'field-feedback';
            submitBtn.disabled = true;
            return false;
        }

        if (this.isValidEmail(email)) {
            emailInput.classList.remove('error');
            emailInput.classList.add('success');
            feedback.textContent = '✓ Valid email address';
            feedback.className = 'field-feedback success';
            submitBtn.disabled = false;
            return true;
        } else {
            emailInput.classList.remove('success');
            emailInput.classList.add('error');
            feedback.textContent = 'Please enter a valid email address';
            feedback.className = 'field-feedback error';
            submitBtn.disabled = true;
            return false;
        }
    }

    validatePassword(password) {
        const passwordInput = document.getElementById('password');
        const strengthFill = document.getElementById('strength-fill');
        const strengthText = document.getElementById('strength-text');
        const submitBtn = document.querySelector('#password-form button[type="submit"]');

        // Check requirements
        const requirements = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            number: /\d/.test(password)
        };

        // Update requirement indicators
        this.updateRequirement('req-length', requirements.length);
        this.updateRequirement('req-uppercase', requirements.uppercase);
        this.updateRequirement('req-number', requirements.number);

        // Calculate strength
        let strength = 0;
        let strengthLabel = '';
        let strengthClass = '';

        if (password.length === 0) {
            strength = 0;
            strengthLabel = 'Password strength';
            strengthClass = '';
        } else if (requirements.length && requirements.uppercase && requirements.number) {
            strength = 100;
            strengthLabel = 'Strong password';
            strengthClass = 'strong';
        } else if (requirements.length && (requirements.uppercase || requirements.number)) {
            strength = 60;
            strengthLabel = 'Medium strength';
            strengthClass = 'medium';
        } else {
            strength = 30;
            strengthLabel = 'Weak password';
            strengthClass = 'weak';
        }

        // Update UI
        strengthFill.style.width = `${strength}%`;
        strengthFill.className = `strength-fill ${strengthClass}`;
        strengthText.textContent = strengthLabel;

        // Enable/disable submit button
        const isValid = this.isValidPassword(password);
        submitBtn.disabled = !isValid;
        
        if (isValid) {
            passwordInput.classList.remove('error');
            passwordInput.classList.add('success');
        } else if (password.length > 0) {
            passwordInput.classList.remove('success');
            passwordInput.classList.add('error');
        } else {
            passwordInput.classList.remove('error', 'success');
        }

        return isValid;
    }

    updateRequirement(reqId, met) {
        const requirement = document.getElementById(reqId);
        const icon = requirement.querySelector('.req-icon');
        
        if (met) {
            requirement.classList.add('met');
            icon.textContent = '✓';
        } else {
            requirement.classList.remove('met');
            icon.textContent = '○';
        }
    }

    togglePasswordVisibility() {
        const passwordInput = document.getElementById('password');
        const toggleIcon = document.querySelector('.toggle-icon');
        
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            toggleIcon.textContent = '👁️';
        }
    }

    handleSocialLogin(provider) {
        this.showLoadingState(`Connecting to ${provider}...`, () => {
            // Simulate social login success
            this.userData.email = `user@${provider.toLowerCase()}.com`;
            this.userData.firstName = 'Demo';
            this.userData.lastName = 'User';
            
            // Skip to final step
            this.completeSignup();
        }, 1500);
    }

    showLoadingState(message, callback, duration = 1000) {
        const overlay = document.getElementById('loading-overlay');
        const loadingText = document.getElementById('loading-text');
        
        loadingText.textContent = message;
        overlay.classList.remove('hidden');
        
        setTimeout(() => {
            overlay.classList.add('hidden');
            callback();
        }, duration);
    }

    completeDemo() {
        this.showLoadingState('Launching app...', () => {
            alert('🎉 Demo completed! In a real app, the user would now be taken to the main application interface.');
            this.showInsights();
        });
    }

    showInsights() {
        this.showScreen('insights-page');
    }

    restartDemo() {
        // Reset data
        this.userData = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            interests: ''
        };

        // Reset forms
        document.querySelectorAll('.signup-form').forEach(form => form.reset());
        document.querySelectorAll('.form-control').forEach(input => {
            input.classList.remove('error', 'success');
        });

        // Reset feedback
        document.querySelectorAll('.field-feedback').forEach(feedback => {
            feedback.textContent = '';
            feedback.className = 'field-feedback';
        });

        // Reset password strength
        const strengthFill = document.getElementById('strength-fill');
        const strengthText = document.getElementById('strength-text');
        if (strengthFill) {
            strengthFill.style.width = '0%';
            strengthFill.className = 'strength-fill';
        }
        if (strengthText) {
            strengthText.textContent = 'Password strength';
        }

        // Reset requirements
        document.querySelectorAll('.requirement').forEach(req => {
            req.classList.remove('met');
            req.querySelector('.req-icon').textContent = '○';
        });

        // Reset buttons
        document.querySelectorAll('button[type="submit"]').forEach(btn => {
            btn.disabled = true;
        });

        // Reset summary display
        document.getElementById('summary-name-container').style.display = 'none';
        document.getElementById('summary-interest-container').style.display = 'none';
        document.getElementById('welcome-message').textContent = 'Welcome aboard!';

        // Go to start
        this.startDemo();
    }

    showErrorDemo() {
        document.getElementById('error-modal').classList.remove('hidden');
    }

    closeErrorModal() {
        document.getElementById('error-modal').classList.add('hidden');
    }

    // Validation helpers
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPassword(password) {
        return password.length >= 8 && 
               /[A-Z]/.test(password) && 
               /\d/.test(password);
    }
}

// Additional utility functions for enhanced user experience
class UIEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.addKeyboardNavigation();
        this.addTouchEnhancements();
        this.addVisualFeedback();
    }

    addKeyboardNavigation() {
        // Enter key handling for forms
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.classList.contains('form-control')) {
                const form = e.target.closest('form');
                if (form) {
                    const submitBtn = form.querySelector('button[type="submit"]');
                    if (submitBtn && !submitBtn.disabled) {
                        submitBtn.click();
                    }
                }
            }

            // Escape key for modals
            if (e.key === 'Escape') {
                const modal = document.querySelector('.modal:not(.hidden)');
                if (modal) {
                    modal.classList.add('hidden');
                }
            }
        });
    }

    addTouchEnhancements() {
        // Add haptic feedback simulation for mobile
        document.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('btn') || e.target.classList.contains('social-btn')) {
                e.target.style.transform = 'scale(0.98)';
            }
        });

        document.addEventListener('touchend', (e) => {
            if (e.target.classList.contains('btn') || e.target.classList.contains('social-btn')) {
                setTimeout(() => {
                    e.target.style.transform = '';
                }, 150);
            }
        });
    }

    addVisualFeedback() {
        // Add ripple effect to buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn') && !e.target.classList.contains('btn--outline')) {
                this.createRipple(e);
            }
        });
    }

    createRipple(e) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;

        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// Analytics and insights tracking
class DemoAnalytics {
    constructor() {
        this.events = [];
        this.startTime = Date.now();
    }

    trackEvent(eventType, data = {}) {
        this.events.push({
            type: eventType,
            timestamp: Date.now(),
            data: data
        });
    }

    getInsights() {
        const totalTime = Date.now() - this.startTime;
        const stepTimes = this.calculateStepTimes();
        const abandonmentPoints = this.findAbandonmentPoints();

        return {
            totalTime,
            stepTimes,
            abandonmentPoints,
            completionRate: this.events.filter(e => e.type === 'signup_complete').length > 0 ? 100 : 0
        };
    }

    calculateStepTimes() {
        const stepEvents = this.events.filter(e => e.type.includes('step_'));
        const times = {};
        
        for (let i = 0; i < stepEvents.length - 1; i++) {
            const current = stepEvents[i];
            const next = stepEvents[i + 1];
            const stepNumber = current.type.replace('step_', '');
            times[stepNumber] = next.timestamp - current.timestamp;
        }

        return times;
    }

    findAbandonmentPoints() {
        // In a real implementation, this would analyze where users typically drop off
        return ['email_validation', 'password_strength', 'personal_details'];
    }
}

// CSS animations for better UX
const addDynamicStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .form-control:invalid:not(:placeholder-shown) {
            animation: shake 0.3s ease-in-out;
        }

        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }

        .btn:active {
            transform: translateY(1px);
        }

        .tooltip {
            animation: slideInDown 0.3s ease-out;
        }

        @keyframes slideInDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Add dynamic styles
    addDynamicStyles();

    // Initialize main demo
    window.signupDemo = new SignupFlowDemo();
    
    // Initialize UI enhancements
    new UIEnhancements();
    
    // Initialize analytics (for demo purposes)
    window.analytics = new DemoAnalytics();

    // Add some demo-specific enhancements
    setTimeout(() => {
        // Add subtle animations to principles cards
        document.querySelectorAll('.principle-card').forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.style.animation = 'slideInUp 0.6s ease-out forwards';
        });
    }, 500);

    // Track initial page load
    window.analytics.trackEvent('demo_loaded');
});

// Add CSS for the slide in animation
const slideInUpKeyframes = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

// Add the keyframes to the document
const styleSheet = document.createElement('style');
styleSheet.textContent = slideInUpKeyframes;
document.head.appendChild(styleSheet);