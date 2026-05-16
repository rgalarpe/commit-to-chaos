# **PRODUCT REQUIREMENT DOCUMENT (PRD)**

## **For: Resume Portfolio Website**

## **Tech Stack: React + Tailwind CSS**

## **Target: Cursor AI Agent (Cursor 3 / Composer)**

---

## **1. PROJECT OVERVIEW**

Build a single-page resume/portfolio website with modern design, fully responsive, using React functional components and Tailwind CSS for styling. No backend required. All content is dummy/placeholder.

**Project type:** Static frontend only  
**Package manager:** npm (default create-react-app or Vite)  
**Styling:** Tailwind CSS v3+  
**Icons:** lucide-react or react-icons

---

## **2. PAGE STRUCTURE (Single Page with Sections)**

Create ONE page with these sections in vertical order:


| **Section**         | **Content Required**                                                                                                                                     | **Priority** |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **Hero**            | Name, title, short bio, call-to-action button (Download Resume - dummy PDF link)                                                                         | High         |
| **Skills**          | Grid of technical skills with icons and proficiency levels (Junior/Mid/Senior style)                                                                     | High         |
| **Work Experience** | 2-3 dummy job entries with company, role, dates, 2 bullet points each                                                                                    | High         |
| **Projects**        | 3 dummy project cards with title, description, tech stack tags, and a "View" button (modal or link to #)                                                 | Medium       |
| **Contact**         | Email, GitHub, LinkedIn (all dummy links starting with #), plus a simple contact form (name, email, message - frontend only, no submission logic needed) | Medium       |
| **Footer**          | Copyright year, simple back-to-top button                                                                                                                | Low          |


---

## **3. DESIGN SPECIFICATIONS**

### **Color Scheme (Tailwind classes)**

text

```
Primary background: bg-gray-50 (light mode only for simplicity)
Card background: bg-white
Primary text: text-gray-900
Secondary text: text-gray-600
Accent color: text-blue-600 (buttons, links, icons)
Border: border-gray-200
```

### **Layout & Spacing**

- Max width container: `max-w-6xl mx-auto`
- Padding: `px-4 sm:px-6 lg:px-8` per section
- Section spacing: `py-16` between sections
- Card grid: responsive (1 column on mobile, 2 on md, 3 on lg for projects/skills)

### **Typography**

- Headings: `text-3xl md:text-4xl font-bold mb-8 text-center`
- Section title format: All sections should have a centered heading with an underline accent (use `border-b-4 border-blue-500 w-24 mx-auto mt-2`)

### **Interactive Elements**

- Hover effects: Cards scale slightly (`hover:scale-[1.02] transition`) and shadow increases
- Buttons: Rounded-full, subtle shadow on hover
- Mobile menu: Not needed (simple nav is fine, but optional sticky header with anchor links is nice-to-have)

---

## **4. DUMMY DATA STRUCTURE**

Create a `data.js` or `data.json` file exporting these arrays/objects:

javascript

```
// Skills
skills = [
  { name: "React", icon: "SiReact", level: "Advanced" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", level: "Advanced" },
  { name: "Node.js", icon: "SiNodedotjs", level: "Intermediate" },
  { name: "TypeScript", icon: "SiTypescript", level: "Intermediate" },
  { name: "Python", icon: "SiPython", level: "Beginner" },
  { name: "Git", icon: "SiGit", level: "Advanced" }
]

// Work Experience
workExperience = [
  {
    company: "Tech Corp",
    role: "Frontend Developer",
    period: "2022 - Present",
    description: ["Built responsive components", "Improved performance by 30%"]
  },
  // 2 more similar entries
]

// Projects
projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Analytics dashboard with charts and inventory management",
    tags: ["React", "Tailwind", "Recharts"],
    link: "#"
  },
  // 2 more entries
]
```

---

## **5. COMPONENT BREAKDOWN (For Cursor's Composer)**

Create these components in a `/components` folder:

text

```
src/
├── components/
│   ├── Layout/
│   │   └── Container.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── WorkExperience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── UI/
│       ├── Card.jsx (reusable)
│       ├── Button.jsx (reusable)
│       └── SectionHeading.jsx (reusable heading with underline)
├── data/
│   └── data.js
├── App.jsx
└── index.css (with Tailwind imports)
```

---

## **6. SPECIFIC INSTRUCTIONS FOR CURSOR (READ THIS)**

⚠️ **Optimization prompts to include in your Cursor chat:**

text

```
"Before writing code, analyze this PRD and ask me 3 clarifying questions."

"Use Tailwind CSS utility classes directly. No custom CSS files except for Tailwind base imports."

"Make the website fully responsive. Test mobile-first: stack sections on screens under 768px."

"Add smooth scrolling for anchor links if you implement a nav bar."

"All dummy links should use href='#' and onClick preventDefault."

"Don't add form submission logic. Just console.log('Form submitted') on button click."

"Create a single App.jsx that imports and composes all section components."

"Use React hooks (useState, useEffect) only where necessary (e.g., mobile menu toggle if added)."

"After generating code, provide me with terminal commands to install dependencies and run the dev server."
```

---

## **7. ACCEPTANCE CRITERIA (How You'll Know It's Done)**

- `npm start` or `npm run dev` works without errors
- All 6 sections render correctly with dummy data
- Tailwind styling matches the color spec
- Responsive on: iPhone SE (375px), iPad (768px), Desktop (1280px+)
- No console errors
- Hover effects work on cards and buttons
- Skills display icons (using react-icons)
- Contact form has 3 fields (no actual email sending)

