# Battery_Indicator


# 🔋 Battery Indicator

A modern Battery Indicator web application built using **HTML, CSS, and JavaScript**. It displays the current battery percentage of your device using the **Battery Status API** with a clean glassmorphism interface and supports Light/Dark mode.

---

## 📸 Preview

<img width="500" alt="Battery Indicator Preview" src="preview.png">

> Replace `preview.png` with a screenshot of your project.

---

## ✨ Features

- 🔋 Displays real-time battery percentage
- 🎨 Dynamic battery color based on battery level
  - 🟢 Green – High Battery
  - 🟡 Yellow/Orange – Medium Battery
  - 🔴 Red – Low Battery
- 🌙 Light/Dark mode toggle
- 💎 Glassmorphism UI
- 📱 Responsive design

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Battery Status API
- Font Awesome Icons

---

## 📂 Project Structure

```
Battery-Indicator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/Battery-Indicator.git
```

### 2. Open the project

Simply open `index.html` in your browser.

No installation is required.

---

## ⚙️ How It Works

1. The browser reads the battery information using the Battery Status API.
2. The battery percentage is displayed inside the battery icon.
3. The battery fill width updates according to the current battery level.
4. The fill color changes depending on the battery percentage.
5. Users can switch between Light and Dark themes using the toggle button.

---

## 🎨 Battery Color Levels

| Battery Level | Color |
|--------------|-------|
| Above 50% | 🟢 Green |
| 21% – 50% | 🟡 Yellow/Orange |
| 20% or below | 🔴 Red |

---

## 📌 Browser Support

The Battery Status API is **not supported by all browsers**.

Works mainly in:

- Chromium-based browsers (limited support)
- Some Android browsers

May not work in:

- Google Chrome (recent versions)
- Safari
- Firefox

---

## 📖 Future Improvements

- Charging status indicator
- Battery charging animation
- Estimated battery time remaining
- Low battery notifications
- Circular battery meter
- Animated transitions
- PWA support

---

## 🐞 Known Issue

In `script.js`, the color-changing logic references a variable named `level`, but it is never defined.

Replace:

```javascript
if(level <= 20)
```

with

```javascript
const level = battery.level * 100;

if (level <= 20) {
    ...
}
```

Otherwise, the battery color will not update correctly.

---

## 👨‍💻 Author

**Varshith**

---

## 📄 License

This project is open source and available under the MIT License.
