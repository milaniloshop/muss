@echo off
title Milan Hype - Import Product Photos
cd /d "%~dp0"

echo.
echo ========================================
echo   Milan Hype - Import Product Photos
echo ========================================
echo.

set "PHOTO_SRC=C:\Users\leily\Downloads\cursor"

if not exist "%PHOTO_SRC%" (
  echo ERROR: Folder not found:
  echo   %PHOTO_SRC%
  echo.
  echo Put your product photos in that folder, then run this again.
  echo.
  pause
  exit /b 1
)

echo Copying from: %PHOTO_SRC%
echo.

node import-photos.js "%PHOTO_SRC%"

if errorlevel 1 (
  echo.
  echo Make sure Node.js is installed. In this folder run: npm install
  pause
  exit /b 1
)

echo.
echo Starting store...
start http://localhost:3000
npm start
