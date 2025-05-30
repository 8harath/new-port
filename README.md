# Academic Essay Evaluation Platform

An AI-powered web application designed to automate and enhance the essay grading process for academic institutions.

## 🎯 Purpose & Overview

- **Goal:** Replace manual essay grading with an AI-powered system that evaluates student essays for relevance, coverage, and structure
- **Users:** Faculty (teachers) and Students
- **Main Features:** AI-based essay evaluation, feedback generation, reporting, and easy-to-use dashboards for both user types

## ✨ Key Features

- **User Authentication:** Role-based login for faculty and students, with secure registration and session management
- **Faculty Dashboard:** Create essay questions with reference answers, set word/mark limits, review submissions, and generate detailed PDF reports
- **Student Interface:** Browse available questions, submit essays (with real-time word count feedback), and view AI-generated feedback and scores
- **AI Evaluation:** Uses Google's Gemini 1.5 Pro AI model to automatically assess essays against reference answers
- **Interactive UI:** Incorporates animations (AOS, CSS), dynamic charts (Chart.js), and responsive design (Bootstrap 5)
- **Multiline Text Support:** Ensures proper rendering of paragraphs and line breaks in questions, submissions, feedback, and reports
- **PDF Reports:** Generates comprehensive, well-formatted reports for faculty
- **Database Flexibility:** Works with SQLite for local development and PostgreSQL for production

## 🛠️ Technology Stack

- **Backend:** Python 3 with Flask
- **Database:** SQLite (development)/PostgreSQL (production), handled via SQLAlchemy ORM
- **Authentication:** Flask-Login
- **Forms & Validation:** Flask-WTF, WTForms
- **AI Integration:** Google Gemini API
- **Frontend:** HTML, CSS, JavaScript, Bootstrap 5
- **Data Visualization:** Chart.js
- **Animations:** AOS, CSS animations
- **PDF Generation:** ReportLab

## 🔄 How It Works – Workflow

### Faculty:
1. **Register & Log In** as Faculty
2. **Create Questions:** Set reference answers, word limits, and marks
3. **Review Submissions:** All student essays are visible in the dashboard
4. **AI Evaluation:** Each student submission is sent to Gemini AI, which scores and generates detailed feedback
5. **Reports:** Faculty can download or view PDF reports summarizing scores and feedback

### Students:
1. **Register & Log In** as Student
2. **Browse Questions:** See available essay prompts
3. **Submit Answers:** Essays are submitted with live word count tracking (handled by frontend JS)
4. **Receive Feedback:** Once evaluated, students can view scores and detailed AI-generated feedback

## 🤖 AI Essay Evaluation

- When a student submits an essay, the backend sends the essay and reference answer to the Google Gemini AI API
- The AI evaluates the essay's relevance, coverage, and structure, scores it, and generates written feedback
- This process takes about 10–15 seconds per essay

## 🎨 Frontend & User Experience

- **Animations & Visuals:** Animated statistics, question card transitions, and button hover effects for modern feel
- **Charts:** Display score distributions and performance comparisons
- **Real-Time Word Counter:** JavaScript updates word count and progress bar as students type, helping them stay within limits

## 💾 Database Handling

- **Automatic Detection:** The app checks the `DATABASE_URL` environment variable to decide between SQLite and PostgreSQL
- **SQLite:** Default for local development; easy setup, single file storage
- **PostgreSQL:** Used in production for robustness and scalability

## 📁 Project Structure

```
/static/         # JS (animations, word count), CSS, images
/templates/      # Jinja2 HTML templates (faculty, student, auth, base)
/app.py or main.py # Flask app logic
/requirements.txt # Python dependencies
README.md        # Documentation
```

## 🚀 Setup & Deployment

### Prerequisites
- Python 3.x
- Google Gemini API key
- PostgreSQL (for production)

### Environment Variables
- `GOOGLE_API_KEY`: Your Google Gemini API key
- `DATABASE_URL`: Database connection URL (SQLite or PostgreSQL)
- `SECRET_KEY`: Flask application secret key

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Set up environment variables
4. Run the application:
   ```bash
   python app.py
   ```

## 📊 Performance Notes

- Each evaluation is asynchronous and takes 10–15 seconds
- Best for classes up to 100 students; for larger classes, batch evaluation and performance tuning are recommended

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details. 