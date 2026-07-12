/**
 * Email template utilities
 * Centralized functions to avoid code duplication
 */

// Base email style constants
const emailStyles = {
  container:
    'style="max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 8px;"',
  baseText:
    'style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;"',
  heading:
    'style="color: #1a1a2e; border-bottom: 3px solid #00d4ff; padding-bottom: 10px;"',
  sectionHeading: 'style="color: #00d4ff; font-size: 18px; margin-top: 0;"',
  sectionBox:
    'style="background: white; padding: 20px; border-radius: 6px; margin: 15px 0;"',
  footer:
    'style="background: #1a1a2e; color: white; padding: 15px; border-radius: 6px; margin-top: 20px; text-align: center;"',
  footerText: 'style="margin: 0; font-size: 12px;"',
  footerSubText: 'style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.8;"',
};

/**
 * Create email footer with metadata
 * @param {string} ip - Client IP address
 * @param {string} timestamp - Current timestamp
 * @returns {string} HTML footer
 */
const createEmailFooter = (ip, timestamp) => `
  <div ${emailStyles.footer}>
    <p ${emailStyles.footerText}>
      Submitted on: ${timestamp}
    </p>
    <p ${emailStyles.footerSubText}>
      IP Address: ${ip}
    </p>
  </div>
`;

/**
 * Create contact info section
 * @param {object} data - Contact form data
 * @returns {string} HTML section
 */
const createContactInfoSection = (data) => {
  const fields = [
    { label: "Name", value: data.name },
    {
      label: "Email",
      value: `<a href="mailto:${data.email}">${data.email}</a>`,
    },
    { label: "Company", value: data.company, optional: true },
    { label: "Service Needed", value: data.service, optional: true },
    { label: "Budget Range", value: data.budget, optional: true },
    { label: "Timeline", value: data.timeline, optional: true },
  ];

  const fieldsHTML = fields
    .filter((f) => !f.optional || f.value)
    .map((f) => `<p><strong>${f.label}:</strong> ${f.value}</p>`)
    .join("");

  return `
    <div ${emailStyles.sectionBox}>
      <h2 ${emailStyles.sectionHeading}>Contact Information</h2>
      ${fieldsHTML}
    </div>
  `;
};

/**
 * Create company email template
 * @param {object} data - Contact form data
 * @param {string} ip - Client IP address
 * @returns {string} HTML email
 */
const createCompanyEmailTemplate = (data, ip) => `
  <html>
    <body ${emailStyles.baseText}>
      <div ${emailStyles.container}>
        <h1 ${emailStyles.heading}>
          New Contact Form Submission
        </h1>
        
        ${createContactInfoSection(data)}

        <div ${emailStyles.sectionBox}>
          <h2 ${emailStyles.sectionHeading}>Project Details</h2>
          <p style="white-space: pre-wrap; word-wrap: break-word;">${data.message}</p>
        </div>

        ${createEmailFooter(ip, new Date().toLocaleString())}
      </div>
    </body>
  </html>
`;

/**
 * Create user confirmation email template
 * @param {string} name - User's name
 * @returns {string} HTML email
 */
const createConfirmationEmailTemplate = (name) => `
  <html>
    <body ${emailStyles.baseText}>
      <div ${emailStyles.container}>
        <h1 ${emailStyles.heading}>
          Thank You for Contacting Softyanix!
        </h1>
        
        <div ${emailStyles.sectionBox}>
          <p>Hi ${name},</p>
          <p>We've received your message and appreciate you reaching out. Our team will review your project details and get back to you within <strong>24 hours</strong>.</p>
          
          <h3 style="color: #00d4ff;">What happens next?</h3>
          <ul>
            <li>We'll analyze your requirements</li>
            <li>Prepare a detailed project proposal</li>
            <li>Schedule a call to discuss your vision</li>
            <li>Provide timeline and cost estimation</li>
          </ul>
          
          <h3 style="color: #00d4ff;">In the meantime...</h3>
          <p>Feel free to explore our portfolio and services at <a href="https://softyanix.com" style="color: #00d4ff;">softyanix.com</a></p>
        </div>

        <div ${emailStyles.sectionBox}>
          <h4 style="margin-top: 0;">Contact Us Directly</h4>
          <p style="margin: 5px 0;">
            📧 Email: <a href="mailto:infosamyanix@gmail.com" style="color: #00d4ff;">infosamyanix@gmail.com</a>
          </p>
          <p style="margin: 5px 0;">
            📞 Phone: +92 (315) 065-7943
          </p>
          <p style="margin: 5px 0;">
            🌍 Website: <a href="https://softyanix.com" style="color: #00d4ff;">softyanix.com</a>
          </p>
        </div>

        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; color: #999; font-size: 12px;">
          <p>© 2024 Softyanix. All rights reserved.</p>
        </div>
      </div>
    </body>
  </html>
`;

export {
  createCompanyEmailTemplate,
  createConfirmationEmailTemplate,
  emailStyles,
};
