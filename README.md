# Fullstack Open – Submission repo

This repository contains my deliverables for the [University of Helsinki Fullstack Open](https://fullstackopen.com/en/) course up to the end of **Part 2 (Communicating with server)**. It is intended for reviewer access and focuses on the React applications and supporting material required for grading Part 2. Part 3 work will be added later; placeholder folders remain so the overall structure matches the course.

## Completed Scope

- ✅ Part 1 – Exercises submitted through the course portal (not mirrored here yet).
- ✅ Part 2 – Countries and Phonebook React applications (sources included below).
- ⏳ Part 3 – Backend deployment exercises pending.

## Repository Layout

- `submissions/part2/countries` – Country lookup app implementing data fetching, conditional rendering, and API integration required for Part 2 exercises 2.12–2.14.
- `submissions/part2/phonebook` – CRUD phonebook demonstrating controlled forms, filtering, optimistic updates, and error notifications for exercises 2.6–2.18.
- `lessons/notes` – Notes app from the course material used as a personal reference while studying Part 2.
- `lessons/backend` – Express playground prepared for Part 3; not part of this submission but included for context.
- `submissions/part1` / `submissions/part3` – Empty placeholders to keep the repository aligned with the course structure.

## How to Evaluate the Part 2 Apps

### Countries (`submissions/part2/countries`)

1. `cd submissions/part2/countries`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:5173` and test searches (e.g., "Finland", "Sweden"). The app conditionally renders lists, single-country details, and weather information.

### Phonebook (`submissions/part2/phonebook`)

1. `cd submissions/part2/phonebook`
2. `npm install`
3. Start the mock backend: `npm run server` (JSON Server on port 3001)
4. In another terminal, `npm run dev`
5. Visit `http://localhost:5173` to add, update, filter, and delete contacts. Error handling messages appear when the backend entry has been removed.

Both projects use Vite + React 19, Axios for HTTP requests, and ESLint configurations aligned with the course recommendations. The `db.json` file in the phonebook project also includes the notes dataset reused in Part 2 exercises.

## Tooling Notes

- Requires Node.js 18+ (matching the course recommendation) and npm.
- Run one development server at a time to avoid clashes on ports `5173` and `3001`.
- The Express code in `lessons/backend` is optional for this review; it mirrors the tutorial backend and is ready for Part 3 development.

## Next Steps (Beyond This Submission)

- Export Part 1 exercise source locally for completeness.
- Implement the Part 3 backend, replace JSON Server in the phonebook app, and document deployment.
- Introduce automated tests (Vitest / React Testing Library) once covered in later course sections.

Thank you for reviewing the Part 2 work!
