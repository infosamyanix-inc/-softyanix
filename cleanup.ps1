# Softyanix Cleanup Script
# Run this from the project root: c:\Users\yaqoob\Downloads\-softyanix-main

# Root-level unnecessary files
Remove-Item -Force -ErrorAction SilentlyContinue ".\IMPLEMENTATION_SUMMARY.md"
Remove-Item -Force -ErrorAction SilentlyContinue ".\SETUP_GUIDE.md"
Remove-Item -Force -ErrorAction SilentlyContinue ".\frontend.dev.log"
Remove-Item -Force -ErrorAction SilentlyContinue ".\vite.config.ts.timestamp-*.mjs"

# Dead page components
Remove-Item -Force -ErrorAction SilentlyContinue ".\src\pages\Home.tsx"
Remove-Item -Force -ErrorAction SilentlyContinue ".\src\pages\About.tsx"
Remove-Item -Force -ErrorAction SilentlyContinue ".\src\pages\Contact.tsx"
Remove-Item -Force -ErrorAction SilentlyContinue ".\src\pages\NotFound.tsx"

# Unused UI components (37 files)
$unusedUI = @(
    "accordion.tsx", "alert-dialog.tsx", "alert.tsx", "aspect-ratio.tsx",
    "avatar.tsx", "breadcrumb.tsx", "calendar.tsx", "carousel.tsx",
    "chart.tsx", "checkbox.tsx", "collapsible.tsx", "command.tsx",
    "context-menu.tsx", "dialog.tsx", "drawer.tsx", "dropdown-menu.tsx",
    "form.tsx", "hover-card.tsx", "input-otp.tsx", "menubar.tsx",
    "navigation-menu.tsx", "pagination.tsx", "popover.tsx", "progress.tsx",
    "radio-group.tsx", "resizable.tsx", "scroll-area.tsx", "sheet.tsx",
    "sidebar.tsx", "skeleton.tsx", "slider.tsx", "switch.tsx",
    "table.tsx", "tabs.tsx", "toggle.tsx", "toggle-group.tsx",
    "use-toast.ts"
)
foreach ($file in $unusedUI) {
    Remove-Item -Force -ErrorAction SilentlyContinue ".\src\components\ui\$file"
}

# Backend cleanup
Remove-Item -Force -ErrorAction SilentlyContinue ".\backend\index.js"
Remove-Item -Force -ErrorAction SilentlyContinue ".\backend\.env"
Remove-Item -Force -ErrorAction SilentlyContinue ".\backend\backend.dev.log"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue ".\backend\.vscode"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue ".\backend\backend"

# Build artifacts and dev directories
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue ".\dist"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue ".\.github"
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue ".\.vscode"

Write-Host "Cleanup complete!" -ForegroundColor Green
