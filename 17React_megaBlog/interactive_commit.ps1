# Interactive PowerShell script for custom date commits

function Commit-WithCustomDate {
    param(
        [string]$FilePath,
        [string]$CommitMessage,
        [string]$CommitDate
    )
    
    Write-Host "Processing: $FilePath" -ForegroundColor Cyan
    
    # Add file to staging
    git add $FilePath
    
    # Check if file was added successfully
    $status = git status --porcelain $FilePath
    if ($status) {
        # Commit with custom date
        git commit -m $CommitMessage --date=$CommitDate
        Write-Host "✓ Committed '$FilePath' with date: $CommitDate" -ForegroundColor Green
    } else {
        Write-Host "⚠ No changes to commit for: $FilePath" -ForegroundColor Yellow
    }
}

# Usage examples:
Write-Host "=== Custom Date Commit Tool ===" -ForegroundColor Magenta

# Example commits - modify these for your files
Commit-WithCustomDate -FilePath "src/appwrite/auth.js" -CommitMessage "Add authentication service with proper error handling" -CommitDate "2024-11-20 09:00:00"

Commit-WithCustomDate -FilePath "src/appwrite/config.js" -CommitMessage "Add database configuration" -CommitDate "2024-11-21 14:30:00"

# You can add more files here...
# Commit-WithCustomDate -FilePath "src/components/Header.jsx" -CommitMessage "Add header component" -CommitDate "2024-11-22 10:15:00"

Write-Host "=== All commits completed! ===" -ForegroundColor Green
