# 🚀 bzTradewave.au - Complete Deployment Guide

## Overview
This guide provides step-by-step instructions to deploy your minimalist bzTradewave.au website using free hosting services:
- **Frontend**: Vercel or Netlify (free tier)
- **Backend**: Render (free tier)
- **Database**: PostgreSQL on Render (free tier)

## 📋 Prerequisites
- GitHub account
- Domain: bztradewave.au (already owned)
- Project files (provided in zip)

---

## 🎯 Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend + Database)
### Option 2: Netlify (Frontend) + Render (Backend + Database)

---

## 📁 Project Structure
```
bztradewave/
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
├── backend/           # Flask API
│   ├── src/
│   ├── requirements.txt
│   └── app.py (deployment entry)
└── README.md
```

---

## 🔧 Step 1: Prepare Your Code

### 1.1 Create GitHub Repository
```bash
# Create new repository on GitHub: bztradewave-website
git clone https://github.com/yourusername/bztradewave-website.git
cd bztradewave-website

# Copy your project files here
# Commit and push
git add .
git commit -m "Initial commit - Minimalist bzTradewave website"
git push origin main
```

### 1.2 Prepare Backend for Deployment
Create `app.py` in the backend root:
```python
import os
from src.main import app

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
```

Update `backend/src/main.py` for production:
```python
import os
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import jwt
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta

app = Flask(__name__)

# Production Configuration
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'your-secret-key-change-this')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///app.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Handle PostgreSQL URL format
if app.config['SQLALCHEMY_DATABASE_URI'].startswith('postgres://'):
    app.config['SQLALCHEMY_DATABASE_URI'] = app.config['SQLALCHEMY_DATABASE_URI'].replace('postgres://', 'postgresql://', 1)

db = SQLAlchemy(app)
CORS(app, origins=["https://bztradewave.au", "https://www.bztradewave.au"])

# Import your models and routes here
# ... (rest of your Flask code)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=False)
```

---

## 🌐 Step 2: Deploy Backend on Render

### 2.1 Create Render Account
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Connect your GitHub account

### 2.2 Create PostgreSQL Database
1. Click "New" → "PostgreSQL"
2. Configure:
   - **Name**: `bztradewave-db`
   - **Database**: `bztradewave`
   - **User**: `bztradewave_user`
   - **Region**: Choose closest to your users
   - **Plan**: Free
3. Click "Create Database"
4. **Save the connection details** (you'll need them)

### 2.3 Deploy Flask Backend
1. Click "New" → "Web Service"
2. Connect your GitHub repository
3. Configure:
   - **Name**: `bztradewave-api`
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Plan**: Free
4. Add Environment Variables:
   ```
   SECRET_KEY=your-super-secret-key-here
   DATABASE_URL=postgresql://username:password@hostname:port/database
   FLASK_ENV=production
   ```
5. Click "Create Web Service"

### 2.4 Get Backend URL
After deployment, you'll get a URL like: `https://bztradewave-api.onrender.com`

---

## 🎨 Step 3A: Deploy Frontend on Vercel

### 3.1 Prepare Frontend
Update `frontend/src/components/Contact.jsx` and other API calls:
```javascript
// Replace localhost with your Render backend URL
const response = await fetch('https://bztradewave-api.onrender.com/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

### 3.2 Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add Environment Variables (if needed):
   ```
   VITE_API_URL=https://bztradewave-api.onrender.com
   ```
7. Click "Deploy"

### 3.3 Configure Custom Domain
1. Go to Project Settings → Domains
2. Add `bztradewave.au` and `www.bztradewave.au`
3. Configure DNS records at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

---

## 🎨 Step 3B: Deploy Frontend on Netlify (Alternative)

### 3.1 Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your GitHub repository
5. Configure:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/dist`
6. Click "Deploy site"

### 3.2 Configure Custom Domain
1. Go to Site Settings → Domain management
2. Add custom domain: `bztradewave.au`
3. Configure DNS records at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

---

## 🔗 Step 4: Connect Frontend and Backend

### 4.1 Update CORS Settings
In your backend `main.py`:
```python
CORS(app, origins=[
    "https://bztradewave.au",
    "https://www.bztradewave.au",
    "http://localhost:5173"  # For development
])
```

### 4.2 Update Frontend API URLs
Create `frontend/src/config.js`:
```javascript
export const API_BASE_URL = import.meta.env.PROD 
  ? 'https://bztradewave-api.onrender.com'
  : 'http://localhost:5000';
```

Update your components to use this config:
```javascript
import { API_BASE_URL } from '../config';

const response = await fetch(`${API_BASE_URL}/api/contact`, {
  // ... rest of your fetch code
});
```

---

## 🗄️ Step 5: Database Setup

### 5.1 Initialize Database
Your Flask app will automatically create tables on first run. To manually initialize:

1. Access Render Shell (in your web service dashboard)
2. Run:
```bash
python -c "from src.main import app, db; app.app_context().push(); db.create_all()"
```

### 5.2 Database Schema
Your database will include these tables:
- `users` - User accounts and authentication
- `trade_players` - Industry contacts and leads
- `partner_notes` - Partner-specific notes
- `contact_submissions` - Contact form submissions

---

## 🔒 Step 6: Security & Environment Variables

### 6.1 Backend Environment Variables (Render)
```
SECRET_KEY=your-super-secret-jwt-key-min-32-chars
DATABASE_URL=postgresql://user:pass@host:port/db
FLASK_ENV=production
CORS_ORIGINS=https://bztradewave.au,https://www.bztradewave.au
```

### 6.2 Frontend Environment Variables (Vercel/Netlify)
```
VITE_API_URL=https://bztradewave-api.onrender.com
VITE_SITE_URL=https://bztradewave.au
```

---

## 🚀 Step 7: Final Deployment Steps

### 7.1 Test Your Deployment
1. Visit your frontend URL
2. Test all functionality:
   - ✅ Navigation works
   - ✅ Contact form submits
   - ✅ API endpoints respond
   - ✅ Database connections work

### 7.2 SSL Certificates
Both Vercel and Netlify provide automatic SSL certificates for custom domains.

### 7.3 Performance Optimization
- Enable gzip compression (automatic on Vercel/Netlify)
- Optimize images (already done)
- Enable caching headers

---

## 📊 Step 8: Monitoring & Maintenance

### 8.1 Monitoring
- **Render**: Built-in logs and metrics
- **Vercel**: Analytics dashboard
- **Netlify**: Site analytics

### 8.2 Backup Strategy
- Database: Render provides automatic backups
- Code: GitHub repository serves as backup
- Assets: Stored in version control

---

## 🔧 Troubleshooting

### Common Issues:

**1. CORS Errors**
```python
# Update backend CORS settings
CORS(app, origins=["https://bztradewave.au"])
```

**2. Database Connection Issues**
```python
# Check DATABASE_URL format
if DATABASE_URL.startswith('postgres://'):
    DATABASE_URL = DATABASE_URL.replace('postgres://', 'postgresql://', 1)
```

**3. Build Failures**
```bash
# Check Node.js version in frontend
"engines": {
  "node": "18.x"
}
```

**4. API Not Responding**
- Check Render service logs
- Verify environment variables
- Test endpoints directly

---

## 💰 Cost Breakdown (All FREE!)

### Vercel Option:
- **Frontend (Vercel)**: Free tier - 100GB bandwidth
- **Backend (Render)**: Free tier - 750 hours/month
- **Database (Render)**: Free PostgreSQL - 1GB storage
- **Total Monthly Cost**: $0

### Netlify Option:
- **Frontend (Netlify)**: Free tier - 100GB bandwidth
- **Backend (Render)**: Free tier - 750 hours/month  
- **Database (Render)**: Free PostgreSQL - 1GB storage
- **Total Monthly Cost**: $0

---

## 🎯 Post-Deployment Checklist

- [ ] Frontend deployed and accessible
- [ ] Backend API responding
- [ ] Database connected and initialized
- [ ] Custom domain configured
- [ ] SSL certificates active
- [ ] Contact form working
- [ ] All navigation links functional
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Monitoring set up

---

## 📞 Support & Updates

### Updating Your Site:
1. Make changes to your local code
2. Push to GitHub
3. Vercel/Netlify will auto-deploy frontend
4. Render will auto-deploy backend

### Getting Help:
- Check service status pages
- Review deployment logs
- Test API endpoints individually
- Verify environment variables

---

## 🌟 Your Website Features

✅ **Clean Minimalist Design** - Professional white background with subtle blue accents  
✅ **Responsive Layout** - Works perfectly on all devices  
✅ **AI-Powered Insights** - Real-time market data and trends  
✅ **Contact System** - Working contact form with email integration  
✅ **Product Showcase** - Three main sectors with detailed information  
✅ **Partner Portal Ready** - Authentication system prepared  
✅ **Admin Dashboard Ready** - Management tools for trade data  
✅ **SEO Optimized** - Clean URLs and meta tags  
✅ **Fast Loading** - Optimized assets and code splitting  
✅ **Secure** - HTTPS, CORS protection, and secure authentication  

Your bzTradewave.au website is now ready for global trade operations! 🚀

