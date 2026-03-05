# Contributing to Softyanix

Thank you for your interest in contributing to Softyanix! We welcome contributions from the community.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/-softyanix.git
   cd -softyanix
   ```
3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/infosamyanix-inc/-softyanix.git
   ```

## 🔄 Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

Branch naming conventions:

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### 2. Make Your Changes

- Write clean, maintainable code
- Follow the existing code style
- Add comments for complex logic
- Update documentation if needed
- Test your changes thoroughly

### 3. Commit Your Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add dark mode toggle"
```

Commit message format:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance

### 4. Keep Your Branch Updated

```bash
git fetch upstream
git rebase upstream/main
```

### 5. Push Your Changes

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the repository on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Submit for review

## 📋 Pull Request Guidelines

### PR Title Format

```
[Type] Brief description
```

Examples:

- `[Feature] Add contact form validation`
- `[Fix] Resolve navigation bug on mobile`
- `[Docs] Update installation instructions`

### PR Description Should Include

- **What**: Description of changes
- **Why**: Reason for the changes
- **How**: Implementation details
- **Testing**: How you tested the changes
- **Screenshots**: For UI changes

### Checklist

Before submitting, ensure:

- [ ] Code follows the project's style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console errors or warnings
- [ ] Tested on multiple browsers (if frontend)
- [ ] Responsive design verified (if UI changes)

## 💻 Development Guidelines

### Frontend (React + TypeScript)

#### Code Style

- Use functional components with hooks
- Prefer const arrow functions
- Use TypeScript types/interfaces
- Follow React best practices

```typescript
// Good
const MyComponent: React.FC<Props> = ({ title, items }) => {
  const [state, setState] = useState<string>('');

  return (
    <div className="container">
      {/* Component content */}
    </div>
  );
};

export default MyComponent;
```

#### Component Structure

```typescript
// 1. Imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
const Component: React.FC<Props> = ({ title }) => {
  // 4. State and hooks
  const [state, setState] = useState();

  // 5. Effects
  useEffect(() => {}, []);

  // 6. Event handlers
  const handleClick = () => {};

  // 7. Render
  return <div>{title}</div>;
};

// 8. Export
export default Component;
```

#### Styling

- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Maintain consistent spacing
- Use theme colors from config

### Backend (Node.js + Express)

#### Code Style

```javascript
// Use ES6+ features
import express from "express";

// Use descriptive names
const handleUserRegistration = async (req, res) => {
  try {
    // Implementation
  } catch (error) {
    // Error handling
  }
};

// Export at the end
export default router;
```

#### Error Handling

Always include proper error handling:

```javascript
router.get("/endpoint", async (req, res) => {
  try {
    // Logic here
    res.json({ status: "success", data });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});
```

## 🧪 Testing

Before submitting:

```bash
# Run linter
npm run lint

# Build the project
npm run build

# Test the build
npm run preview
```

## 📝 Documentation

- Update README.md for new features
- Add JSDoc comments for functions
- Update API documentation for backend changes
- Include inline comments for complex logic

## 🐛 Bug Reports

When reporting bugs, include:

- Bug description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots/videos if applicable
- Environment details (browser, OS, etc.)
- Error messages/console logs

## 💡 Feature Requests

When suggesting features:

- Clear description of the feature
- Use case and benefits
- Possible implementation approach
- Mockups/wireframes if applicable

## ❓ Questions

- Check existing issues and documentation first
- Use GitHub Discussions for general questions
- Contact the team at contact@softyanix.com

## 🙏 Thank You!

Your contributions help make Softyanix better for everyone!

---

**Happy Coding! 🚀**
