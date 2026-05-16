# PRD: Neobrutalist Resume Website (React + Tailwind)

## Tech Stack
- React (Vite or CRA)
- Tailwind CSS
- Lucide React or React Icons

---

## Profile Photo (Above Name in Hero)
- Circle shape (`rounded-full`)
- Size: `w-32 h-32 md:w-40 md:h-40`
- Border: `border-4 border-black`
- Shadow: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`
- Dummy image: `https://placehold.co/400/111111/white?text=JD`

---

## Neobrutalism Rules (Strict)

### Colors
- Background: `bg-neutral-50`
- Text: `text-black`
- Accents: `bg-yellow-400`, `bg-red-500`, `bg-blue-600`

### Borders & Corners
- `rounded-none` on EVERYTHING except profile photo
- `border-2 border-black` on cards, buttons, inputs

### Shadows (No blur)
- Default: `shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`
- Hover: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]` + `-translate-x-0.5 -translate-y-0.5`

### Typography
- Headings: `font-black`
- Hero name: `text-5xl md:text-7xl font-black`
- Section titles: `text-3xl md:text-4xl font-bold`

### Buttons
- `rounded-none border-2 border-black px-6 py-3`
- Active: `active:translate-x-[2px] active:translate-y-[2px] active:shadow-none`

### Cards (Skills/Projects/Work)
- `border-2 border-black p-4 bg-white shadow-brutal`

### Form Inputs
- `border-2 border-black rounded-none px-4 py-2 bg-white`
- Focus: `outline-none ring-2 ring-black`

### Forbidden
- No `rounded-lg/md/xl/full` (except profile photo)
- No `shadow-md/lg/xl`
- No gradients, pastels, blur, smooth transitions over 150ms

---

## Page Sections (Same as original PRD)
1. Hero (with profile photo + name/title/bio + CTA buttons)
2. Skills (grid of badges)
3. Work Experience (2-3 jobs)
4. Projects (3 cards)
5. Contact (name, email, message form)
6. Footer (copyright + back-to-top)

---

## Dummy Data Structure

```javascript
// data.js
export const profile = {
  name: "Alex Morgan",
  title: "Frontend Developer",
  bio: "Building brutalist interfaces.",
  avatar: "https://placehold.co/400/111111/white?text=AM"
}

export const skills = [
  { name: "React", level: "Advanced" },
  { name: "Tailwind", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" }
]

export const workExperience = [
  {
    company: "Tech Corp",
    role: "Frontend Dev",
    period: "2022-Present",
    description: ["Built components", "Improved performance"]
  }
]

export const projects = [
  {
    title: "Project One",
    description: "Cool project",
    tags: ["React", "Tailwind"],
    link: "#"
  }
]