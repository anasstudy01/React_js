# Batch script for Windows
@echo off

rem Set custom date and commit
set GIT_COMMITTER_DATE=2024-12-01T10:30:00
set GIT_AUTHOR_DATE=2024-12-01T10:30:00

git add your-file.js
git commit -m "Your commit message"

rem Reset environment variables
set GIT_COMMITTER_DATE=
set GIT_AUTHOR_DATE=
