# Ace Technologies — Consulting Website

A small business website for Ace Technologies with a booking flow that saves consultations to a MySQL/MariaDB database. Built with HTML/CSS/JS for the frontend and a simple PHP endpoint for form submission.

## Overview
- Pages: `index.html`, `services.html`, `consultations.html`, `about.html`, `contact.html`
- Booking: form in `consultations.html` posts to `index.php` which validates and writes to `acedb.bookings`
- Assets: `Style.css`, `script.js`, images under `icons/`, `services/`, `more-services/`
- Database dump: `acedb.sql`

## Tech Stack
- HTML, CSS, Vanilla JS
- PHP 8+
- MySQL/MariaDB

## Project Structure
- `index.html` — homepage and modal service details
- `consultations.html` — booking form
- `index.php` — serves `index.html` on GET and handles booking POST
- `script.js` — UI interactions and form submission
- `Style.css` — styles and responsive layout
- `acedb.sql` — schema for `bookings` table

## Prerequisites
- `PHP >= 8.0`
- `MySQL` or `MariaDB`
- Optional: XAMPP/WAMP on Windows, or PHP built-in server

## Setup
1. Clone the repository into your web root or a working folder.
2. Create the database:
   - Create a database named `acedb`
   - Import `acedb.sql` into `acedb`
3. Configure database credentials in `index.php`:
   - Update `servername`, `username`, `password`, `dbname` at `index.php:3–6`
4. Run locally:
   - Option A (PHP built-in): in the project directory run `php -S localhost:8000` and open `http://localhost:8000/`
   - Option B (XAMPP/WAMP): place the folder under `htdocs`/`www`, start Apache and MySQL, then open `http://localhost/acetech_consulting/`

## Booking Flow
- Form: `consultations.html:34` (`#bookingForm`) validates on the client and submits via `fetch`
- Submission target: `script.js:201` posts to `index.php`
- Server-side validation: `index.php` checks name, email, date, message length, and service selection
  - Allowed services: `index.php:40` — `["Consultation","Device Management","Windows Troubleshooting","Network Solutions"]`
- Database insert: `index.php:78–99` writes to `bookings` table
- Table schema: see `acedb.sql:30–39` (`id`, `NAME`, `email`, `service`, `location`, `preferred_date`, `message`, `created_at`)

## Common Tasks
- Change allowed services: edit the array at `index.php:40`
- Adjust server validation rules: update regexes and checks in `index.php:28–66`
- Update styling: modify `Style.css`
- Update modal descriptions: edit `script.js:11–45`

## Troubleshooting
- DB connection failed: verify credentials at `index.php:3–6`, ensure `acedb` exists and MySQL is running
- JSON parse or API errors: use browser DevTools; `index.php` returns JSON on POST by design
- Column name mismatch: MariaDB/MySQL treat column names case-insensitively; if needed, align `NAME` to `name` in schema and code

## Security Notes
- Do not use `root` with blank password in production; use a dedicated DB user with limited privileges
- No CSRF protection is implemented; add a token if exposed publicly
- Consider moving credentials to environment variables or a config not committed to VCS

## Contact
- Email: `acetechnologies67@gmail.com`
- Phone: `(+264)85 701-1655`
- Address: `123 Schonlein St, Windhoek West, Khomas`