Certainly, Lucas! Here's a simple `README.md` template tailored for your "Brawl Tool" project. Feel free to modify it as needed.

---

# Brawl Tool - Trophies Calculator

## Overview
**Brawl Tool** is a React + Next.js application designed to calculate trophies dynamically for the popular game *Brawl Stars*. The tool allows players to determine trophies based on consecutive wins and vice versa, providing a simple, user-friendly interface.

## Features
- **Dynamic Updates:** Calculates trophies in real-time based on win streaks or desired trophy count.
- **Customizable Inputs:** Enter either the win streak or the trophy target, and the tool automatically calculates the other field.
- **Responsive UI:** Styled with Tailwind CSS and Shadcn components for a clean, modern look.
- **Accessibility:** Designed with accessibility in mind using ARIA-friendly components.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/lubualo/brawl-tool.git
   cd brawl-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open the app:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Enter the **win streak** in the input field to calculate the total trophies earned.
- Alternatively, enter the **desired trophy count** to determine the required win streak.
- Results update dynamically without needing to submit!

## Technologies Used
- **React** with **Next.js**
- **React Hook Form** for form management
- **Zod** for schema validation
- **Shadcn Components** for UI styling
- **Tailwind CSS** for responsive styling

## Folder Structure
```
src/
├── app/                    // Next.js routes
│   └── home/               // Home page logic
├── components/             // Reusable React components
│   ├── ui/                 // Shadcn UI components
│   └── TrophyCalculator.tsx // Main calculator component
├── styles/                 // Global styles (e.g., Tailwind)
├── utils/                  // Calculation logic and validation
│   └── trophyCalculatorService.ts // Trophy calculation functions
│   └── validation.ts       // Zod schemas for form validation
```

## Contributing
Contributions are welcome! If you would like to enhance this project:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and submit a pull request.

## License
This project is licensed under the MIT License.

---

Let me know if you'd like additional sections or refinements! 😊✨
