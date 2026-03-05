# Security Policy

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Softyanix seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Where to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@softyanix.com**

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

### What to Include

Please include the following information in your report:

- **Type of issue** (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- **Full paths of source file(s)** related to the issue
- **Location of the affected source code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue**, including how an attacker might exploit it

This information will help us triage your report more quickly.

### What to Expect

- **Acknowledgment**: We'll acknowledge receipt of your vulnerability report within 48 hours
- **Communication**: We'll keep you informed about the progress of fixing the vulnerability
- **Credit**: We'll give you credit for the discovery (unless you prefer to remain anonymous)
- **Disclosure**: We'll coordinate with you on the disclosure timeline

### Security Update Process

1. Security vulnerability is reported
2. We confirm the problem and determine affected versions
3. We audit code to find similar problems
4. We prepare fixes for all supported releases
5. We release new security patch versions

## Security Best Practices for Contributors

### Frontend
- Never commit API keys, secrets, or credentials
- Use environment variables for sensitive data
- Sanitize user inputs to prevent XSS attacks
- Validate all data from external sources
- Keep dependencies up to date
- Use HTTPS for all external requests

### Backend
- Never expose sensitive environment variables
- Implement proper authentication and authorization
- Use parameterized queries to prevent SQL injection
- Validate and sanitize all user inputs
- Implement rate limiting for API endpoints
- Use HTTPS in production
- Keep Node.js and npm packages updated
- Follow the principle of least privilege

### General
- Review code before committing
- Don't commit `.env` files
- Use strong passwords and 2FA
- Regularly update dependencies
- Follow OWASP security guidelines

## Security-Related Configuration

### Environment Variables
All sensitive configuration should be stored in environment variables:
- API keys
- Database credentials
- JWT secrets
- Third-party service credentials

### CORS Configuration
- Configure CORS properly in production
- Whitelist specific domains
- Avoid using wildcard (`*`) in production

### Dependencies
- Run `npm audit` regularly
- Update dependencies with security patches
- Use tools like Dependabot for automated updates

## Acknowledgments

We appreciate the security research community's efforts in helping keep Softyanix and our users safe.

## Contact

For any security-related questions or concerns:
- **Email**: security@softyanix.com
- **General Contact**: contact@softyanix.com

---

**Thank you for helping keep Softyanix secure!** 🔒
