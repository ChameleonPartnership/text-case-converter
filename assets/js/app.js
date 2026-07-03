/**
 * Text Case Converter
 * Production-ready JavaScript with real-time conversion,
 * clipboard functionality, and dark mode support
 */

// ========================================
// Case Conversion Functions
// ========================================

class CaseConverter {
    /**
     * Convert text to UPPERCASE
     * @param {string} text
     * @returns {string}
     */
    static toUpperCase(text) {
        return text.toUpperCase();
    }

    /**
     * Convert text to lowercase
     * @param {string} text
     * @returns {string}
     */
    static toLowerCase(text) {
        return text.toLowerCase();
    }

    /**
     * Convert text to Title Case
     * @param {string} text
     * @returns {string}
     */
    static toTitleCase(text) {
        return text
            .toLowerCase()
            .split(/\s+/)
            .map(word => {
                if (!word) return word;
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(' ');
    }

    /**
     * Convert text to Sentence case
     * @param {string} text
     * @returns {string}
     */
    static toSentenceCase(text) {
        const trimmed = text.trim();
        if (!trimmed) return text;
        return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
    }

    /**
     * Convert text to camelCase
     * @param {string} text
     * @returns {string}
     */
    static toCamelCase(text) {
        return text
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .split(/\s+/)
            .map((word, index) => {
                if (!word) return '';
                if (index === 0) return word;
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join('');
    }

    /**
     * Convert text to snake_case
     * @param {string} text
     * @returns {string}
     */
    static toSnakeCase(text) {
        return text
            .trim()
            .toLowerCase()
            .replace(/[\s_-]+/g, '_')
            .replace(/([a-z])([A-Z])/g, '$1_$2')
            .replace(/[^a-z0-9_]+/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '');
    }

    /**
     * Convert text to kebab-case
     * @param {string} text
     * @returns {string}
     */
    static toKebabCase(text) {
        return text
            .trim()
            .toLowerCase()
            .replace(/[\s_-]+/g, '-')
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .replace(/[^a-z0-9-]+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
    }

    /**
     * Convert text to PascalCase
     * @param {string} text
     * @returns {string}
     */
    static toPascalCase(text) {
        return text
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, ' ')
            .split(/\s+/)
            .map(word => {
                if (!word) return '';
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join('');
    }

    /**
     * Convert text to CONSTANT_CASE
     * @param {string} text
     * @returns {string}
     */
    static toConstantCase(text) {
        return text
            .trim()
            .toUpperCase()
            .replace(/[\s-]+/g, '_')
            .replace(/([a-z])([A-Z])/g, '$1_$2')
            .replace(/[^A-Z0-9_]+/g, '_')
            .replace(/_+/g, '_')
            .replace(/^_|_$/g, '');
    }

    /**
     * Convert text to tOGGLE cASE
     * @param {string} text
     * @returns {string}
     */
    static toToggleCase(text) {
        return text
            .split('')
            .map(char => {
                if (char === char.toUpperCase() && char !== char.toLowerCase()) {
                    return char.toLowerCase();
                }
                if (char === char.toLowerCase() && char !== char.toUpperCase()) {
                    return char.toUpperCase();
                }
                return char;
            })
            .join('');
    }

    /**
     * Convert all case formats
     * @param {string} text
     * @returns {Object} Object with all case variants
     */
    static convertAll(text) {
        return {
            uppercase: this.toUpperCase(text),
            lowercase: this.toLowerCase(text),
            titlecase: this.toTitleCase(text),
            sentencecase: this.toSentenceCase(text),
            camelcase: this.toCamelCase(text),
            snakecase: this.toSnakeCase(text),
            kebabcase: this.toKebabCase(text),
            pascalcase: this.toPascalCase(text),
            constantcase: this.toConstantCase(text),
            togglecase: this.toToggleCase(text),
        };
    }
}

// ========================================
// Theme Management
// ========================================

class ThemeManager {
    constructor() {
        this.themeKey = 'textConverterTheme';
        this.darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.init();
    }

    init() {
        // Check localStorage, then system preference
        const savedTheme = localStorage.getItem(this.themeKey);
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            const prefersDark = this.darkModeQuery.matches;
            this.setTheme(prefersDark ? 'dark' : 'light');
        }

        // Listen for system theme changes
        this.darkModeQuery.addListener(() => {
            if (!localStorage.getItem(this.themeKey)) {
                const prefersDark = this.darkModeQuery.matches;
                this.setTheme(prefersDark ? 'dark' : 'light');
            }
        });
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(this.themeKey, theme);
    }

    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    }

    getCurrent() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }
}

// ========================================
// Clipboard Manager
// ========================================

class ClipboardManager {
    /**
     * Copy text to clipboard
     * @param {string} text
     * @returns {Promise<boolean>}
     */
    static async copy(text) {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            } else {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                const success = document.execCommand('copy');
                document.body.removeChild(textarea);
                return success;
            }
        } catch (err) {
            console.error('Failed to copy to clipboard:', err);
            return false;
        }
    }
}

// ========================================
// Toast Notification
// ========================================

class Toast {
    constructor(element) {
        this.element = element;
        this.timeout = null;
    }

    show(message, duration = 3000) {
        this.element.textContent = message;
        this.element.classList.add('show');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            this.element.classList.remove('show');
        }, duration);
    }

    hide() {
        clearTimeout(this.timeout);
        this.element.classList.remove('show');
    }
}

// ========================================
// App Main Controller
// ========================================

class TextCaseConverterApp {
    constructor() {
        this.inputElement = document.getElementById('inputText');
        this.clearButton = document.getElementById('clearBtn');
        this.charCountElement = document.getElementById('charCount');
        this.themeToggle = document.getElementById('themeToggle');
        this.toastElement = document.getElementById('toast');

        this.themeManager = new ThemeManager();
        this.toast = new Toast(this.toastElement);

        this.outputElements = {
            uppercase: document.getElementById('uppercaseOutput'),
            lowercase: document.getElementById('lowercaseOutput'),
            titlecase: document.getElementById('titlecaseOutput'),
            sentencecase: document.getElementById('sentencecaseOutput'),
            camelcase: document.getElementById('camelcaseOutput'),
            snakecase: document.getElementById('snakecaseOutput'),
            kebabcase: document.getElementById('kebabcaseOutput'),
            pascalcase: document.getElementById('pascalcaseOutput'),
            constantcase: document.getElementById('constantcaseOutput'),
            togglecase: document.getElementById('togglecaseOutput'),
        };

        this.copyButtons = Array.from(document.querySelectorAll('.copy-btn'));

        this.init();
    }

    init() {
        this.attachEventListeners();
        this.updateConversion();
    }

    attachEventListeners() {
        // Input text change
        this.inputElement.addEventListener('input', () => this.handleInput());

        // Clear button
        this.clearButton.addEventListener('click', () => this.clearInput());

        // Theme toggle
        this.themeToggle.addEventListener('click', () => {
            this.themeManager.toggle();
        });

        // Copy buttons
        this.copyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.handleCopy(e.target.closest('.copy-btn'));
            });
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + L: Focus input
            if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
                e.preventDefault();
                this.inputElement.focus();
            }
        });
    }

    handleInput() {
        this.updateConversion();
        this.updateCharCount();
    }

    updateConversion() {
        const text = this.inputElement.value;
        const conversions = CaseConverter.convertAll(text);

        Object.entries(this.outputElements).forEach(([key, element]) => {
            element.textContent = conversions[key] || '';
        });
    }

    updateCharCount() {
        const count = this.inputElement.value.length;
        this.charCountElement.textContent = `${count} character${count !== 1 ? 's' : ''}`;
    }

    async handleCopy(button) {
        const targetId = button.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        const text = targetElement.textContent;

        if (!text) {
            this.toast.show('Nothing to copy. Enter some text first!');
            return;
        }

        const success = await ClipboardManager.copy(text);

        if (success) {
            // Visual feedback
            const originalText = button.textContent;
            button.classList.add('copied');
            button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';

            this.toast.show('✓ Copied to clipboard!');

            setTimeout(() => {
                button.classList.remove('copied');
                button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> Copy';
            }, 2000);
        } else {
            this.toast.show('Failed to copy. Please try again.');
        }
    }

    clearInput() {
        this.inputElement.value = '';
        this.handleInput();
        this.inputElement.focus();
        this.toast.show('✓ Input cleared');
    }
}

// ========================================
// Initialize App
// ========================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new TextCaseConverterApp();
    });
} else {
    new TextCaseConverterApp();
}
