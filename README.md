UI Components Library

  A small React + TypeScript component library showcasing InputField and DataTable components.
  Built with TailwindCSS for styling and documented using Storybook.

🚀 Features:

  📦 Reusable components (InputField, DataTable)
  🎨 TailwindCSS for styling
  📖 Storybook with interactive examples
  🔍 Supports sorting, helper texts, error states, and selectable rows

  Folder Structure
    src/
     ├── components/
     │    ├── InputField.tsx
     │    ├── DataTable.tsx
     │    └── index.ts
     ├── stories/
     │    ├── InputField.stories.tsx
     │    └── DataTable.stories.tsx
     ├── App.tsx
     ├── main.tsx
     ├── index.css
     .storybook/
     package.json
     tailwind.config.js
     README.md


🛠️ Setup Instructions
  1. Clone the repo
  git clone https://github.com/bhoomikahs5/frontend-story.git
  cd <repo-name>
  
  2. Install dependencies
  npm install
  
  3. Run the project (Vite dev server)
  npm run dev
  
  4. Run Storybook
  npm run storybook
  
  5. Build Storybook (for deployment)
  npm run build-storybook

  Storybook Preview
👉 Live Preview: https://frontend-story.vercel.app/


🧑‍💻 Approach

InputField:
  Supports labels, placeholders, helper text, error states, and password type.
  Built with accessibility in mind.
DataTable:
  Generic TypeScript support (<T> for row types).
  Configurable columns with sorting.

Optional row selection.
  Storybook used for interactive documentation.
  TailwindCSS ensures consistent, utility-first styling.
