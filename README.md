<div align="center">

# 🌿 توزان · Tawazon

### *A calm-first wellness prototype with Arabic RTL support*

![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![MediaPipe](https://img.shields.io/badge/MediaPipe-0097A7?style=for-the-badge&logo=google&logoColor=white)

> *Answer a few questions, get a balance score, then follow guided movement tracked by your webcam.*

</div>

---

## ✨ عن المشروع

نموذج أولي لتطبيق عافية: شاشات متتابعة تقيس «توازن» المستخدم من خلال أسئلة قصيرة، ثم تقترح تمارين وتتابع تنفيذها عبر كاميرا الجهاز باستخدام **MediaPipe Pose / Face Mesh**.

- واجهة عربية RTL بالكامل من أول شاشة
- تدفق واضح: ترحيب → تسجيل → أسئلة → اختبار التوازن → النتائج → التمرين
- تتبّع حركة داخل المتصفح — لا يوجد رفع للفيديو لأي سيرفر

---

## 🚀 التشغيل

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يطبعه Vite (عادة `http://localhost:5173`).

```bash
npm run build      # نسخة الإنتاج
npm run preview    # معاينة نسخة الإنتاج
```

> التمرين يحتاج إذن الكاميرا في المتصفح، ويفضّل Chrome أو Edge.

---

## 📂 البنية

```text
src/
  ├── screens/
  │   ├── WelcomeScreen.jsx
  │   ├── LoginScreen.jsx
  │   ├── QuestionScreen.jsx
  │   ├── BalanceTestScreen.jsx
  │   ├── ResultsScreen.jsx
  │   └── ExerciseScreen.jsx
  ├── data/questions.js
  ├── App.jsx
  ├── main.jsx
  └── index.css
```

---

## 🛠️ التقنيات

| الأداة | الدور |
| :--- | :--- |
| **React 18** | بناء الشاشات وإدارة الحالة |
| **Vite** | dev server وبناء سريع |
| **Tailwind CSS** | التنسيق والاتجاه RTL |
| **Lucide React** | الأيقونات |
| **MediaPipe** | تتبّع الوجه والجسم عبر الكاميرا |

---

<div align="center">

<sub>Built by <b>Abdullah Aljuaid</b> · <a href="https://github.com/CipherS88">@CipherS88</a></sub>

</div>
