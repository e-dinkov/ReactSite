# ⌚ WatchHub

> **WatchHub** is a modern full-stack web application for discovering, managing, and collecting premium watches.  
> Inspired by luxury watch brands, the app combines elegant UI design with secure authentication and clean React architecture.

---

## 🚀 Live Demo
🔗 _Coming soon_  
`https://watchhub.vercel.app`

---

## 🧠 Features

### 🔐 Authentication & Authorization
- User **Register / Login / Logout**
- Route protection with **Auth & Guest Guards**
- Only authenticated users can:
  - Create watches
  - Edit or delete their own watches
- Guests cannot access protected routes

### 🕰️ Watch Catalog
- Luxury **catalog grid (3 watches per row)**
- Smooth hover overlays
- Watch details page
- Fully responsive design

### 📝 Watch Management
- Create new watches
- Edit existing watches
- Delete watches (creator only)
- User-friendly forms with validation

### 💬 Comments System
- Authenticated users can comment
- Optimistic UI updates
- Pending comment states
- Clean and modern comment section

### 🎨 Premium UI / UX
- Dark luxury theme
- Gold accents
- Glassmorphism
- Smooth animations
- Mobile-first responsive layouts

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React**
- 🔀 **React Router**
- 🧠 **Context API**
- 🎨 **Custom CSS (Luxury UI)**
- ⚡ **Vite**

### Backend
- 🌐 **REST API**
- 🔐 **JWT Authentication**
- 🗄️ **CRUD Operations**

> The backend can be replaced with any REST-compatible service.

---

## 📁 Project Structure

```text
watchhub/
├── public/
├── src/
│   ├── components/
│   │   ├── login
│   │   ├── catalog/
│   │   ├── details/
│   │   ├── create/
│   │   ├── edit/
|   |   ├── home/
|   |   ├── header/
|   |   ├── watch-card/
|   |   ├── edit/
│   │   └── register/
│   ├── contexts/
│   │   └── UserContext.jsx
│   ├── hooks/
│   │   └── useForm.js
│   │   └── useRequest.js
│   │   └── usePersistedState.js
│   ├── utils/
│   │   └── request.js
│   │   └── routeGuard.jsx
│   ├── guards/
│   │   └── routeGuards.jsx

│   ├── App.jsx
│   └── main.jsx
└── README.md
---


## 🔒 Route Protection

| Route | Access |
|------|--------|
| `/login` | Guests only |
| `/register` | Guests only |
| `/create` | Authenticated users |
| `/watches/:id/edit` | Authenticated users |
| `/catalog` | Public |
| `/watches/:id/details` | Public |

---

## 🧪 Example Credentials

Use the following test account to explore the application:

```text
Email: test@watchhub.com
Password: 123456
## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/watchhub.git
cd watchhub
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the application
```bash
npm run dev
```

The app will be available at:
```
🌐 http://localhost:5173
```

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
![Home Page](https://via.placeholder.com/800x400/4A90E2/FFFFFF?text=Home+Page)

### 🕰️ Catalog Page
![Catalog Page](https://via.placeholder.com/800x400/7B68EE/FFFFFF?text=Catalog+Page)

### 📄 Watch Details Page
![Details Page](https://via.placeholder.com/800x400/50C878/FFFFFF?text=Watch+Details)

### 🔐 Login / Register
![Auth Page](https://via.placeholder.com/800x400/FF6B6B/FFFFFF?text=Authentication)

### ✏️ Create / Edit Watch
![Edit Page](https://via.placeholder.com/800x400/FFA500/FFFFFF?text=Create+Watch)

</div>

---



---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Show Your Support

<div align="center">

If you like this project:
```yaml
⭐ Star the repository
🍴 Fork it
🧠 Learn from it
```

**Built with passion and precision ⌚**

</div>
