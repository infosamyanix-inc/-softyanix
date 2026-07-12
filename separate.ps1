# Softyanix Separation Script
# Restructures the folder layout into clean frontend/ and backend/ side-by-side folders

$Root = "c:\Users\yaqoob\Downloads\-softyanix-main"
Set-Location $Root

# 1. Create a temporary staging area for frontend files
New-Item -ItemType Directory -Path ".\frontend_temp" -Force | Out-Null

# 2. Identify and move frontend files into staging area
$FrontendPaths = @(
    "src",
    "public",
    "index.html",
    "package.json",
    "package-lock.json",
    "tsconfig.json",
    "tsconfig.app.json",
    "tsconfig.node.json",
    "vite.config.ts",
    "tailwind.config.ts",
    "postcss.config.js",
    "eslint.config.js",
    "components.json",
    ".env.example",
    "README.md"
)

foreach ($path in $FrontendPaths) {
    if (Test-Path ".\$path") {
        Move-Item -Path ".\$path" -Destination ".\frontend_temp\" -Force
    }
}

# 3. Move the backend folder up if it's nested (it's already at root, so we leave it there)

# 4. Rename the staged frontend folder to "frontend"
if (Test-Path ".\frontend_temp") {
    Rename-Item -Path ".\frontend_temp" -NewName "frontend" -Force
}

# 5. Clean up any leftover files
Remove-Item -Force -ErrorAction SilentlyContinue ".\cleanup.ps1"

Write-Host "Folder structure separated successfully!" -ForegroundColor Green
Write-Host "New layout:" -ForegroundColor Yellow
Write-Host "  - backend/  (Express API)" -ForegroundColor Cyan
Write-Host "  - frontend/ (Vite Client)" -ForegroundColor Cyan
