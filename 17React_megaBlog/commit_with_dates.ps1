# PowerShell script to commit files with different dates

# Array of files and their desired commit dates
$commits = @(
    @{
        files = @("src/appwrite/auth.js")
        message = "Add authentication service"
        date = "2024-11-15 09:00:00"
    },
    @{
        files = @("src/appwrite/config.js")
        message = "Add database configuration"
        date = "2024-11-16 14:30:00"
    },
    @{
        files = @("src/components/")
        message = "Add React components"
        date = "2024-11-17 16:45:00"
    }
)

# Loop through each commit
foreach ($commit in $commits) {
    Write-Host "Adding files: $($commit.files -join ', ')" -ForegroundColor Green
    
    # Add files to staging
    foreach ($file in $commit.files) {
        git add $file
    }
    
    # Commit with custom date
    git commit -m $commit.message --date="$($commit.date)"
    
    Write-Host "Committed with date: $($commit.date)" -ForegroundColor Yellow
    Start-Sleep -Seconds 1
}

Write-Host "All commits completed!" -ForegroundColor Green
