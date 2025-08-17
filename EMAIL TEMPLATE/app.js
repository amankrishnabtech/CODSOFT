// Application Data
const templateData = {
  "templates": [
    {
      "id": "modern-marketing",
      "name": "Modern Marketing",
      "category": "Marketing",
      "description": "Clean, professional design perfect for product launches and campaigns",
      "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjhmOWZhIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIzMCIgZmlsbD0iIzM3NDNkYiIvPgo8cmVjdCB4PSIxMCIgeT0iNTAiIHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNlNWU3ZWIiLz4KPHJlY3QgeD0iMTAiIHk9IjEyMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMzc0M2RiIi8+Cjwvc3ZnPg=="
    },
    {
      "id": "newsletter",
      "name": "Newsletter",
      "category": "Newsletter", 
      "description": "Multi-section layout ideal for regular newsletters and updates",
      "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjlmYWZiIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyNSIgZmlsbD0iIzFmMjkzNyIvPgo8cmVjdCB4PSIxMCIgeT0iNDUiIHdpZHRoPSI4NSIgaGVpZ2h0PSI0NSIgZmlsbD0iI2U1ZTdlYiIvPgo8cmVjdCB4PSIxMDUiIHk9IjQ1IiB3aWR0aD0iODUiIGhlaWdodD0iNDUiIGZpbGw9IiNlNWU3ZWIiLz4KPHJlY3QgeD0iMTAiIHk9IjEwMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2Y5ZmFmYiIvPgo8L3N2Zz4="
    },
    {
      "id": "welcome",
      "name": "Welcome Email",
      "category": "Onboarding",
      "description": "Friendly single-column design for user onboarding and welcomes",
      "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZmVmZmZmIi8+CjxyZWN0IHg9IjQwIiB5PSIyMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzEwYjk4MSIvPgo8Y2lyY2xlIGN4PSIxMDAiIGN5PSI2NSIgcj0iMTUiIGZpbGw9IiMxMGI5ODEiLz4KPHJlY3QgeD0iNjAiIHk9IjkwIiB3aWR0aD0iODAiIGhlaWdodD0iMTAiIGZpbGw9IiNkMWQ1ZGIiLz4KPHJlY3QgeD0iNzAiIHk9IjExMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMTBiOTgxIi8+Cjwvc3ZnPg=="
    },
    {
      "id": "promotional",
      "name": "Promotional",
      "category": "Marketing",
      "description": "Bold design with discount banners and urgency elements",
      "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZmVmMmYyIi8+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMzAiIGZpbGw9IiNkYzI2MjYiLz4KPHN0YXIgY3g9IjEwMCIgY3k9IjczIiByMT0iMjAiIHIyPSIxMCIgZmlsbD0iI2ZiYmYyNCIvPgo8cmVjdCB4PSI2MCIgeT0iMTAwIiB3aWR0aD0iODAiIGhlaWdodD0iMjUiIGZpbGw9IiNkYzI2MjYiLz4KPC9zdmc+"
    },
    {
      "id": "corporate",
      "name": "Corporate",
      "category": "Professional",
      "description": "Professional corporate design for announcements and formal communications",
      "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZmZmZmZmIi8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyNSIgZmlsbD0iIzM3NDE1MSIvPgo8cmVjdCB4PSIyMCIgeT0iNTAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTAiIGZpbGw9IiM2YjcyODAiLz4KPHJlY3QgeD0iMjAiIHk9IjcwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjNmI3MjgwIi8+CjxyZWN0IHg9IjIwIiB5PSIxMTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzM3NDE1MSIvPgo8L3N2Zz4="
    },
    {
      "id": "ecommerce",
      "name": "E-commerce",
      "category": "Marketing",
      "description": "Product showcase layout perfect for online stores and catalogs",
      "thumbnail": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDIwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjNmNGY2Ii8+CjxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIyNSIgZmlsbD0iIzU5MTZhYyIvPgo8cmVjdCB4PSIxNSIgeT0iNDUiIHdpZHRoPSI1NSIgaGVpZ2h0PSI0NSIgZmlsbD0iI2U1ZTdlYiIvPgo8cmVjdCB4PSI3NSIgeT0iNDUiIHdpZHRoPSI1NSIgaGVpZ2h0PSI0NSIgZmlsbD0iI2U1ZTdlYiIvPgo8cmVjdCB4PSIxMzUiIHk9IjQ1IiB3aWR0aD0iNTUiIGhlaWdodD0iNDUiIGZpbGw9IiNlNWU3ZWIiLz4KPHJlY3QgeD0iMTUiIHk9IjEwNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjNTkxNmFjIi8+CjxyZWN0IHg9Ijc1IiB5PSIxMDUiIHdpZHRoPSI0MCIgaGVpZ2h0PSIxNSIgZmlsbD0iIzU5MTZhYyIvPgo8cmVjdCB4PSIxMzUiIHk9IjEwNSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjE1IiBmaWxsPSIjNTkxNmFjIi8+Cjwvc3ZnPg=="
    }
  ]
};

// Application State
let currentTemplate = 'modern-marketing';
let currentDevice = 'desktop';
let emailContent = {
  companyName: "Your Company",
  headline: "Welcome to Our Newsletter!",
  subHeadline: "Stay updated with our latest news and offers",
  bodyText: "Thank you for subscribing to our newsletter. We're excited to share valuable insights, exclusive offers, and important updates with you.",
  ctaText: "Get Started",
  ctaLink: "https://example.com",
  footerText: "© 2025 Your Company. All rights reserved."
};

let designSettings = {
  primaryColor: "#3743db",
  secondaryColor: "#1f2937",
  accentColor: "#10b981",
  fontFamily: "Arial, sans-serif",
  fontSize: 16,
  maxWidth: 600,
  spacing: 20,
  columnLayout: "single"
};

// DOM Elements
const templateGrid = document.getElementById('templateGrid');
const emailPreview = document.getElementById('emailPreview');
const previewContainer = document.getElementById('previewContainer');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Email Template Builder...');
  initializeTemplateGrid();
  initializeEventListeners();
  initializeFormFields();
  updateEmailPreview();
  console.log('Application initialized successfully');
});

// Template Grid Functions
function initializeTemplateGrid() {
  templateGrid.innerHTML = '';
  
  templateData.templates.forEach(template => {
    const templateCard = document.createElement('div');
    templateCard.className = `template-card ${template.id === currentTemplate ? 'active' : ''}`;
    templateCard.dataset.templateId = template.id;
    
    templateCard.innerHTML = `
      <img src="${template.thumbnail}" alt="${template.name}" class="template-thumbnail">
      <h4 class="template-name">${template.name}</h4>
      <span class="template-category">${template.category}</span>
    `;
    
    templateCard.addEventListener('click', () => selectTemplate(template.id));
    templateGrid.appendChild(templateCard);
  });
  
  console.log('Template grid initialized with', templateData.templates.length, 'templates');
}

function selectTemplate(templateId) {
  console.log('Selecting template:', templateId);
  currentTemplate = templateId;
  
  // Update active state
  document.querySelectorAll('.template-card').forEach(card => {
    card.classList.toggle('active', card.dataset.templateId === templateId);
  });
  
  updateEmailPreview();
}

// Initialize Form Fields
function initializeFormFields() {
  console.log('Initializing form fields...');
  
  // Content fields
  const companyNameInput = document.getElementById('companyName');
  const headlineInput = document.getElementById('headline');
  const subHeadlineInput = document.getElementById('subHeadline');
  const bodyTextInput = document.getElementById('bodyText');
  const ctaTextInput = document.getElementById('ctaText');
  const ctaLinkInput = document.getElementById('ctaLink');
  
  // Design fields
  const primaryColorInput = document.getElementById('primaryColor');
  const secondaryColorInput = document.getElementById('secondaryColor');
  const accentColorInput = document.getElementById('accentColor');
  const fontFamilySelect = document.getElementById('fontFamily');
  const fontSizeInput = document.getElementById('fontSize');
  
  // Layout fields
  const maxWidthSelect = document.getElementById('maxWidth');
  const columnLayoutSelect = document.getElementById('columnLayout');
  const spacingInput = document.getElementById('spacing');
  
  // Set initial values
  if (companyNameInput) companyNameInput.value = emailContent.companyName;
  if (headlineInput) headlineInput.value = emailContent.headline;
  if (subHeadlineInput) subHeadlineInput.value = emailContent.subHeadline;
  if (bodyTextInput) bodyTextInput.value = emailContent.bodyText;
  if (ctaTextInput) ctaTextInput.value = emailContent.ctaText;
  if (ctaLinkInput) ctaLinkInput.value = emailContent.ctaLink;
  
  if (primaryColorInput) primaryColorInput.value = designSettings.primaryColor;
  if (secondaryColorInput) secondaryColorInput.value = designSettings.secondaryColor;
  if (accentColorInput) accentColorInput.value = designSettings.accentColor;
  if (fontFamilySelect) fontFamilySelect.value = designSettings.fontFamily;
  if (fontSizeInput) fontSizeInput.value = designSettings.fontSize;
  
  if (maxWidthSelect) maxWidthSelect.value = designSettings.maxWidth;
  if (columnLayoutSelect) columnLayoutSelect.value = designSettings.columnLayout;
  if (spacingInput) spacingInput.value = designSettings.spacing;
  
  // Update range displays
  updateRangeDisplays();
  
  console.log('Form fields initialized');
}

function updateRangeDisplays() {
  const fontSizeDisplay = document.querySelector('#fontSize + .range-value');
  const spacingDisplay = document.querySelector('#spacing + .range-value');
  
  if (fontSizeDisplay) fontSizeDisplay.textContent = designSettings.fontSize + 'px';
  if (spacingDisplay) spacingDisplay.textContent = designSettings.spacing + 'px';
}

// Event Listeners
function initializeEventListeners() {
  console.log('Setting up event listeners...');
  
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = e.target.dataset.tab;
      switchTab(tabName);
    });
  });
  
  // Device preview buttons
  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const device = e.target.closest('.device-btn').dataset.device;
      switchDevice(device);
    });
  });
  
  // Content inputs
  const contentInputs = ['companyName', 'headline', 'subHeadline', 'bodyText', 'ctaText', 'ctaLink'];
  contentInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      input.addEventListener('input', updateContentFromInput);
      console.log('Added listener to', inputId);
    }
  });
  
  // Design inputs
  const designInputs = ['primaryColor', 'secondaryColor', 'accentColor', 'fontFamily', 'fontSize'];
  designInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      if (input.type === 'range' || input.type === 'color') {
        input.addEventListener('input', updateDesignFromInput);
      } else {
        input.addEventListener('change', updateDesignFromInput);
      }
      console.log('Added listener to', inputId);
    }
  });
  
  // Layout inputs
  const layoutInputs = ['maxWidth', 'columnLayout', 'spacing'];
  layoutInputs.forEach(inputId => {
    const input = document.getElementById(inputId);
    if (input) {
      if (input.type === 'range') {
        input.addEventListener('input', updateDesignFromInput);
      } else {
        input.addEventListener('change', updateDesignFromInput);
      }
      console.log('Added listener to', inputId);
    }
  });
  
  // Range value displays
  const fontSizeInput = document.getElementById('fontSize');
  const spacingInput = document.getElementById('spacing');
  
  if (fontSizeInput) {
    fontSizeInput.addEventListener('input', (e) => {
      const display = e.target.nextElementSibling;
      if (display) display.textContent = e.target.value + 'px';
    });
  }
  
  if (spacingInput) {
    spacingInput.addEventListener('input', (e) => {
      const display = e.target.nextElementSibling;
      if (display) display.textContent = e.target.value + 'px';
    });
  }
  
  // Export buttons
  const exportHTML = document.getElementById('exportHTML');
  const copyHTML = document.getElementById('copyHTML');
  const exportMailchimp = document.getElementById('exportMailchimp');
  const exportPlainText = document.getElementById('exportPlainText');
  
  if (exportHTML) exportHTML.addEventListener('click', showExportHTML);
  if (copyHTML) copyHTML.addEventListener('click', copyToClipboard);
  if (exportMailchimp) exportMailchimp.addEventListener('click', showExportMailchimp);
  if (exportPlainText) exportPlainText.addEventListener('click', showExportPlainText);
  
  // Modal controls
  const closeModal = document.getElementById('closeModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const downloadHTML = document.getElementById('downloadHTML');
  const exportModal = document.getElementById('exportModal');
  
  if (closeModal) closeModal.addEventListener('click', hideModal);
  if (closeModalBtn) closeModalBtn.addEventListener('click', hideModal);
  if (downloadHTML) downloadHTML.addEventListener('click', downloadHTMLFile);
  
  // Close modal when clicking outside
  if (exportModal) {
    exportModal.addEventListener('click', (e) => {
      if (e.target.id === 'exportModal') {
        hideModal();
      }
    });
  }
  
  console.log('Event listeners initialized');
}

// Tab Functions
function switchTab(tabName) {
  console.log('Switching to tab:', tabName);
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === tabName + 'Tab');
  });
}

// Device Functions
function switchDevice(device) {
  console.log('Switching to device:', device);
  currentDevice = device;
  
  // Update device buttons
  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.device === device);
  });
  
  // Update preview classes
  emailPreview.className = `email-preview ${device}-view fade-in`;
  
  // Update header preview toggle
  const previewMode = document.getElementById('previewMode');
  if (previewMode) {
    previewMode.textContent = device.charAt(0).toUpperCase() + device.slice(1);
  }
}

// Content Update Functions
function updateContentFromInput(e) {
  const field = e.target.id;
  const value = e.target.value;
  
  console.log('Updating content field:', field, 'to:', value);
  emailContent[field] = value;
  updateEmailPreview();
}

function updateDesignFromInput(e) {
  const field = e.target.id;
  const value = e.target.value;
  
  console.log('Updating design field:', field, 'to:', value);
  designSettings[field] = e.target.type === 'range' ? parseInt(value) : value;
  
  // Update range displays
  if (e.target.type === 'range') {
    const display = e.target.nextElementSibling;
    if (display && display.classList.contains('range-value')) {
      display.textContent = value + 'px';
    }
  }
  
  updateEmailPreview();
}

// Email Preview Functions
function updateEmailPreview() {
  console.log('Updating email preview for template:', currentTemplate);
  const template = getEmailTemplate();
  emailPreview.innerHTML = template;
  emailPreview.classList.add('fade-in');
  
  setTimeout(() => {
    emailPreview.classList.remove('fade-in');
  }, 300);
}

function getEmailTemplate() {
  const template = templateData.templates.find(t => t.id === currentTemplate);
  
  switch(currentTemplate) {
    case 'modern-marketing':
      return getModernMarketingTemplate();
    case 'newsletter':
      return getNewsletterTemplate();
    case 'welcome':
      return getWelcomeTemplate();
    case 'promotional':
      return getPromotionalTemplate();
    case 'corporate':
      return getCorporateTemplate();
    case 'ecommerce':
      return getEcommerceTemplate();
    default:
      return getModernMarketingTemplate();
  }
}

function getModernMarketingTemplate() {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: ${designSettings.maxWidth}px; margin: 0 auto; font-family: ${designSettings.fontFamily}; font-size: ${designSettings.fontSize}px; line-height: 1.6; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color: ${designSettings.primaryColor}; padding: ${designSettings.spacing}px; text-align: center;">
          <h1 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">${emailContent.companyName}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: ${designSettings.spacing * 1.5}px ${designSettings.spacing}px; background-color: #ffffff; text-align: center;">
          <h2 style="margin: 0 0 10px 0; color: ${designSettings.secondaryColor}; font-size: 28px; font-weight: bold;">${emailContent.headline}</h2>
          <p style="margin: 0 0 25px 0; color: #6b7280; font-size: 18px;">${emailContent.subHeadline}</p>
          <div style="background-color: #f9fafb; padding: ${designSettings.spacing}px; border-radius: 8px; margin: 20px 0; text-align: left;">
            <p style="margin: 0; color: #374151; line-height: 1.6;">${emailContent.bodyText}</p>
          </div>
          <div style="margin: 30px 0;">
            <a href="${emailContent.ctaLink}" style="display: inline-block; background-color: ${designSettings.primaryColor}; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px; transition: all 0.3s ease;">${emailContent.ctaText}</a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f9fafb; padding: ${designSettings.spacing}px; text-align: center; font-size: 14px; color: #6b7280; border-top: 1px solid #e5e7eb;">
          ${emailContent.footerText}
        </td>
      </tr>
    </table>
  `;
}

function getNewsletterTemplate() {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: ${designSettings.maxWidth}px; margin: 0 auto; font-family: ${designSettings.fontFamily}; font-size: ${designSettings.fontSize}px; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color: ${designSettings.secondaryColor}; padding: ${designSettings.spacing}px; text-align: center;">
          <h1 style="margin: 0; color: white; font-size: 22px;">${emailContent.companyName} Newsletter</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: ${designSettings.spacing}px; background-color: #ffffff;">
          <h2 style="margin: 0 0 15px 0; color: ${designSettings.secondaryColor}; font-size: 24px;">${emailContent.headline}</h2>
          <p style="margin: 0 0 20px 0; color: #6b7280; font-size: 16px;">${emailContent.subHeadline}</p>
          
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="48%" style="background-color: #f9fafb; padding: ${designSettings.spacing}px; border-radius: 8px; vertical-align: top;">
                <h3 style="margin: 0 0 10px 0; color: ${designSettings.primaryColor}; font-size: 18px;">Latest Updates</h3>
                <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.5;">Stay informed with our recent developments and exciting announcements.</p>
              </td>
              <td width="4%"></td>
              <td width="48%" style="background-color: #f9fafb; padding: ${designSettings.spacing}px; border-radius: 8px; vertical-align: top;">
                <h3 style="margin: 0 0 10px 0; color: ${designSettings.accentColor}; font-size: 18px;">Featured Content</h3>
                <p style="margin: 0; color: #374151; font-size: 14px; line-height: 1.5;">Discover handpicked articles and resources selected just for you.</p>
              </td>
            </tr>
          </table>
          
          <div style="margin: 25px 0; padding: ${designSettings.spacing}px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid ${designSettings.accentColor};">
            <p style="margin: 0; color: #374151; line-height: 1.6;">${emailContent.bodyText}</p>
          </div>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${emailContent.ctaLink}" style="display: inline-block; background-color: ${designSettings.accentColor}; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: bold;">${emailContent.ctaText}</a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f9fafb; padding: ${designSettings.spacing}px; text-align: center; font-size: 14px; color: #6b7280;">
          ${emailContent.footerText}
        </td>
      </tr>
    </table>
  `;
}

function getWelcomeTemplate() {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: ${designSettings.maxWidth}px; margin: 0 auto; font-family: ${designSettings.fontFamily}; font-size: ${designSettings.fontSize}px; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <tr>
        <td style="padding: ${designSettings.spacing * 2}px ${designSettings.spacing}px; background-color: #ffffff; text-align: center;">
          <div style="background-color: ${designSettings.accentColor}; color: white; padding: ${designSettings.spacing}px; border-radius: 8px; margin-bottom: 25px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: bold;">${emailContent.companyName}</h1>
          </div>
          
          <div style="background-color: ${designSettings.accentColor}; color: white; width: 60px; height: 60px; border-radius: 50%; margin: 20px auto; display: flex; align-items: center; justify-content: center; font-size: 30px;">
            👋
          </div>
          
          <h2 style="margin: 0 0 10px 0; color: ${designSettings.secondaryColor}; font-size: 28px; font-weight: bold;">${emailContent.headline}</h2>
          <p style="margin: 0 0 25px 0; color: #6b7280; font-size: 18px;">${emailContent.subHeadline}</p>
          
          <div style="background-color: #f0fdf4; padding: ${designSettings.spacing * 1.5}px; border-radius: 12px; margin: 25px 0; border-left: 4px solid ${designSettings.accentColor}; text-align: left;">
            <p style="margin: 0; color: #374151; line-height: 1.6;">${emailContent.bodyText}</p>
          </div>
          
          <div style="margin: 30px 0;">
            <a href="${emailContent.ctaLink}" style="display: inline-block; background-color: ${designSettings.accentColor}; color: white; padding: 15px 35px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);">${emailContent.ctaText}</a>
          </div>
          
          <div style="margin-top: 40px; padding-top: 25px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #9ca3af; font-size: 14px;">Welcome to the family! 🎉</p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f9fafb; padding: ${designSettings.spacing}px; text-align: center; font-size: 14px; color: #6b7280;">
          ${emailContent.footerText}
        </td>
      </tr>
    </table>
  `;
}

function getPromotionalTemplate() {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: ${designSettings.maxWidth}px; margin: 0 auto; font-family: ${designSettings.fontFamily}; font-size: ${designSettings.fontSize}px; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color: #dc2626; padding: 15px; text-align: center;">
          <h1 style="margin: 0; color: white; font-size: 20px; font-weight: bold;">🔥 LIMITED TIME OFFER 🔥</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: ${designSettings.spacing * 1.5}px ${designSettings.spacing}px; background-color: #ffffff; text-align: center;">
          <div style="background: linear-gradient(135deg, ${designSettings.primaryColor}, ${designSettings.accentColor}); color: white; padding: ${designSettings.spacing}px; border-radius: 12px; margin-bottom: 25px;">
            <h2 style="margin: 0 0 5px 0; font-size: 32px; font-weight: bold;">${emailContent.headline}</h2>
            <p style="margin: 0; font-size: 18px; opacity: 0.9;">${emailContent.subHeadline}</p>
          </div>
          
          <div style="background-color: #fef2f2; border: 2px dashed #dc2626; padding: ${designSettings.spacing}px; border-radius: 8px; margin: 20px 0;">
            <div style="font-size: 36px; color: #dc2626; margin-bottom: 10px;">⭐</div>
            <h3 style="margin: 0 0 10px 0; color: #dc2626; font-size: 24px;">EXCLUSIVE DEAL</h3>
            <p style="margin: 0; color: #374151; font-weight: bold;">Don't miss this amazing opportunity!</p>
          </div>
          
          <div style="margin: 25px 0; text-align: left;">
            <p style="margin: 0; color: #374151; line-height: 1.6;">${emailContent.bodyText}</p>
          </div>
          
          <div style="background-color: #fbbf24; color: #92400e; padding: 15px; border-radius: 8px; margin: 20px 0; font-weight: bold;">
            ⏰ Act fast - Limited time offer!
          </div>
          
          <div style="margin: 30px 0;">
            <a href="${emailContent.ctaLink}" style="display: inline-block; background-color: #dc2626; color: white; padding: 18px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 18px; text-transform: uppercase; box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);">${emailContent.ctaText} NOW!</a>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #fef2f2; padding: ${designSettings.spacing}px; text-align: center; font-size: 14px; color: #6b7280;">
          ${emailContent.footerText}
        </td>
      </tr>
    </table>
  `;
}

function getCorporateTemplate() {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: ${designSettings.maxWidth}px; margin: 0 auto; font-family: ${designSettings.fontFamily}; font-size: ${designSettings.fontSize}px; border: 1px solid #e5e7eb; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color: ${designSettings.secondaryColor}; padding: ${designSettings.spacing * 1.5}px ${designSettings.spacing}px;">
          <h1 style="margin: 0; color: white; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">${emailContent.companyName}</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: ${designSettings.spacing * 2}px ${designSettings.spacing * 1.5}px; background-color: #ffffff;">
          <h2 style="margin: 0 0 20px 0; color: ${designSettings.secondaryColor}; font-size: 24px; font-weight: 600; line-height: 1.3;">${emailContent.headline}</h2>
          
          <div style="border-left: 4px solid ${designSettings.primaryColor}; padding-left: 20px; margin: 25px 0;">
            <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 16px; font-style: italic;">${emailContent.subHeadline}</p>
          </div>
          
          <div style="line-height: 1.7; color: #374151; margin: 25px 0;">
            <p style="margin: 0 0 20px 0;">${emailContent.bodyText}</p>
            
            <ul style="margin: 20px 0; padding-left: 20px; color: #4b5563;">
              <li style="margin-bottom: 8px;">Professional communication standards maintained</li>
              <li style="margin-bottom: 8px;">Streamlined business processes implemented</li>
              <li style="margin-bottom: 8px;">Enhanced corporate efficiency achieved</li>
            </ul>
          </div>
          
          <div style="background-color: #f8fafc; padding: ${designSettings.spacing}px; border-radius: 6px; border: 1px solid #e2e8f0; margin: 25px 0;">
            <p style="margin: 0; color: #475569; font-size: 14px; text-align: center;">
              <strong>Important:</strong> This communication contains confidential business information.
            </p>
          </div>
          
          <div style="margin: 30px 0; text-align: left;">
            <a href="${emailContent.ctaLink}" style="display: inline-block; background-color: ${designSettings.secondaryColor}; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: 600; font-size: 15px; text-transform: capitalize;">${emailContent.ctaText}</a>
          </div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; color: #6b7280; font-size: 14px; line-height: 1.5;">
              Best regards,<br>
              <strong style="color: ${designSettings.secondaryColor};">${emailContent.companyName} Team</strong>
            </p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f8fafc; padding: ${designSettings.spacing}px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #e2e8f0;">
          ${emailContent.footerText}
        </td>
      </tr>
    </table>
  `;
}

function getEcommerceTemplate() {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width: ${designSettings.maxWidth}px; margin: 0 auto; font-family: ${designSettings.fontFamily}; font-size: ${designSettings.fontSize}px; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
      <tr>
        <td style="background-color: #7c3aed; padding: ${designSettings.spacing}px; text-align: center;">
          <h1 style="margin: 0; color: white; font-size: 24px; font-weight: bold;">🛍️ ${emailContent.companyName} Store</h1>
        </td>
      </tr>
      <tr>
        <td style="padding: ${designSettings.spacing * 1.5}px ${designSettings.spacing}px; background-color: #ffffff;">
          <h2 style="margin: 0 0 15px 0; color: ${designSettings.secondaryColor}; font-size: 26px; font-weight: bold; text-align: center;">${emailContent.headline}</h2>
          <p style="margin: 0 0 25px 0; color: #6b7280; font-size: 16px; text-align: center;">${emailContent.subHeadline}</p>
          
          <table width="100%" cellpadding="0" cellspacing="0" style="margin: 25px 0;">
            <tr>
              <td width="32%" style="background-color: #f9fafb; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #e5e7eb;">
                <div style="background-color: #e5e7eb; height: 80px; border-radius: 6px; margin-bottom: 10px; line-height: 80px; font-size: 24px;">📱</div>
                <h4 style="margin: 0 0 5px 0; color: ${designSettings.secondaryColor}; font-size: 14px;">Electronics</h4>
                <p style="margin: 0; color: #7c3aed; font-weight: bold; font-size: 12px;">Starting at $99</p>
              </td>
              <td width="2%"></td>
              <td width="32%" style="background-color: #f9fafb; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #e5e7eb;">
                <div style="background-color: #e5e7eb; height: 80px; border-radius: 6px; margin-bottom: 10px; line-height: 80px; font-size: 24px;">👕</div>
                <h4 style="margin: 0 0 5px 0; color: ${designSettings.secondaryColor}; font-size: 14px;">Fashion</h4>
                <p style="margin: 0; color: #7c3aed; font-weight: bold; font-size: 12px;">Starting at $29</p>
              </td>
              <td width="2%"></td>
              <td width="32%" style="background-color: #f9fafb; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #e5e7eb;">
                <div style="background-color: #e5e7eb; height: 80px; border-radius: 6px; margin-bottom: 10px; line-height: 80px; font-size: 24px;">🏠</div>
                <h4 style="margin: 0 0 5px 0; color: ${designSettings.secondaryColor}; font-size: 14px;">Home & Garden</h4>
                <p style="margin: 0; color: #7c3aed; font-weight: bold; font-size: 12px;">Starting at $19</p>
              </td>
            </tr>
          </table>
          
          <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: ${designSettings.spacing}px; border-radius: 12px; margin: 25px 0; text-align: center; border: 2px solid #f59e0b;">
            <h3 style="margin: 0 0 10px 0; color: #92400e; font-size: 20px;">🎉 Special Promotion</h3>
            <p style="margin: 0; color: #374151;">${emailContent.bodyText}</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${emailContent.ctaLink}" style="display: inline-block; background-color: #7c3aed; color: white; padding: 15px 35px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);">🛒 ${emailContent.ctaText}</a>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; color: #1e40af; font-size: 14px; font-weight: 500;">✨ Free shipping on orders over $50 | 30-day returns | 24/7 support</p>
          </div>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f3f4f6; padding: ${designSettings.spacing}px; text-align: center; font-size: 14px; color: #6b7280;">
          ${emailContent.footerText}
        </td>
      </tr>
    </table>
  `;
}

// Export Functions
function showExportHTML() {
  const htmlContent = generateFullHTML();
  document.getElementById('exportCode').value = htmlContent;
  document.getElementById('exportModal').classList.remove('hidden');
}

function copyToClipboard() {
  const htmlContent = generateFullHTML();
  navigator.clipboard.writeText(htmlContent).then(() => {
    showSuccessMessage('HTML copied to clipboard!');
  }).catch(() => {
    fallbackCopy(htmlContent);
  });
}

function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  showSuccessMessage('HTML copied to clipboard!');
}

function showExportMailchimp() {
  const template = getEmailTemplate();
  const mailchimpHTML = `<!-- Mailchimp Compatible Template -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailContent.headline}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
${template}
</body>
</html>`;
  
  document.getElementById('exportCode').value = mailchimpHTML;
  document.getElementById('exportModal').classList.remove('hidden');
}

function showExportPlainText() {
  const plainText = `
${emailContent.companyName}

${emailContent.headline}
${emailContent.subHeadline}

${emailContent.bodyText}

${emailContent.ctaText}: ${emailContent.ctaLink}

${emailContent.footerText}
  `.trim();
  
  document.getElementById('exportCode').value = plainText;
  document.getElementById('exportModal').classList.remove('hidden');
}

function generateFullHTML() {
  const template = getEmailTemplate();
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${emailContent.headline}</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; }
    table { border-collapse: collapse; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    @media only screen and (max-width: 600px) {
      .email-container { width: 100% !important; }
      .mobile-padding { padding: 10px !important; }
    }
  </style>
</head>
<body>
  <div style="background-color: #f4f4f4; padding: 20px 0;">
    ${template}
  </div>
</body>
</html>`;
}

function downloadHTMLFile() {
  const htmlContent = document.getElementById('exportCode').value;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `email-template-${currentTemplate}-${Date.now()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showSuccessMessage('Template downloaded successfully!');
}

// Modal Functions
function hideModal() {
  document.getElementById('exportModal').classList.add('hidden');
}

// Utility Functions
function showSuccessMessage(message) {
  const existingMessage = document.querySelector('.success-message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.textContent = message;
  
  const previewHeader = document.querySelector('.preview-header');
  if (previewHeader) {
    previewHeader.insertAdjacentElement('afterend', successDiv);
    
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 3000);
  }
}