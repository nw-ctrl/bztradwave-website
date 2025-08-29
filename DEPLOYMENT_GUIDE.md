# bzTradewave.au - Deployment Guide

## 🌟 Project Overview

**bzTradewave.au** is a modern, AI-powered global trade platform featuring:
- Glassmorphic iOS-style design
- Real-time trade statistics and market insights
- Interactive data visualizations
- Partner portal with authentication
- Admin dashboard for trade player management
- Contact form and business communication tools

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom glassmorphic components
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React

### Backend (Flask)
- **Framework**: Flask with SQLAlchemy
- **Database**: SQLite (production-ready for small to medium scale)
- **Authentication**: JWT tokens
- **API**: RESTful endpoints with CORS support

## 🚀 Local Development Setup

### Prerequisites
- Node.js 18+ and npm
- Python 3.11+
- Git

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Access at: http://localhost:5173

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python src/main.py
```
Access at: http://localhost:5000

## 🌐 Production Deployment Options

### Option 1: Free Hosting (Recommended)

#### Frontend - Netlify/Vercel
1. **Build the frontend**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**:
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on push

3. **Deploy to Vercel**:
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel --prod`

#### Backend - Railway/Render
1. **Prepare for deployment**:
   - Ensure `requirements.txt` is updated
   - Set environment variables for production

2. **Deploy to Railway**:
   - Connect GitHub repository
   - Railway auto-detects Flask app
   - Set environment variables in dashboard

3. **Deploy to Render**:
   - Connect GitHub repository
   - Set build command: `pip install -r requirements.txt`
   - Set start command: `python src/main.py`

### Option 2: VPS Deployment

#### Using DigitalOcean/Linode ($5-10/month)
1. **Server Setup**:
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y
   
   # Install dependencies
   sudo apt install python3 python3-pip nodejs npm nginx -y
   
   # Install PM2 for process management
   sudo npm install -g pm2
   ```

2. **Deploy Backend**:
   ```bash
   # Clone repository
   git clone [your-repo-url]
   cd bztradewave/backend
   
   # Setup Python environment
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   
   # Start with PM2
   pm2 start src/main.py --name bztradewave-api --interpreter python3
   ```

3. **Deploy Frontend**:
   ```bash
   cd ../frontend
   npm install
   npm run build
   
   # Copy build files to nginx
   sudo cp -r dist/* /var/www/html/
   ```

4. **Configure Nginx**:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           try_files $uri $uri/ /index.html;
           root /var/www/html;
       }
       
       location /api {
           proxy_pass http://localhost:5000;
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
       }
   }
   ```

## 🔧 Environment Configuration

### Frontend Environment Variables
Create `.env` file in frontend directory:
```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=bzTradewave.au
```

### Backend Environment Variables
Create `.env` file in backend directory:
```env
SECRET_KEY=your-super-secret-key-here
DATABASE_URL=sqlite:///app.db
FLASK_ENV=production
CORS_ORIGINS=https://your-domain.com
```

## 📊 Database Setup

### Development
SQLite database is automatically created on first run.

### Production
For production, consider upgrading to PostgreSQL:
```python
# In main.py, update database URI
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///app.db')
```

## 🔐 Security Considerations

1. **Change default secret key** in production
2. **Use HTTPS** for all production deployments
3. **Set proper CORS origins** (not wildcard *)
4. **Use environment variables** for sensitive data
5. **Regular security updates** for dependencies

## 📈 Performance Optimization

### Frontend
- Images are optimized and properly sized
- Lazy loading implemented for components
- Bundle size optimized with Vite

### Backend
- Database queries optimized
- Caching can be added with Redis
- Rate limiting recommended for production

## 🎯 Domain Setup

1. **Purchase domain** (bztradewave.au)
2. **Configure DNS**:
   - A record pointing to your server IP
   - CNAME for www subdomain
3. **SSL Certificate**:
   - Use Let's Encrypt (free)
   - Or Cloudflare for additional security

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Tablet (768px - 1024px)
- Mobile (320px - 768px)

## 🔍 SEO Optimization

- Meta tags configured
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design
- Structured data ready for implementation

## 🛠️ Maintenance

### Regular Tasks
- Monitor server resources
- Update dependencies monthly
- Backup database regularly
- Monitor error logs
- Performance monitoring

### Scaling Considerations
- Database migration to PostgreSQL
- CDN for static assets
- Load balancer for multiple instances
- Redis for session management

## 📞 Support

For technical support or customization:
- Email: connect@bztradewave.au
- Documentation: This guide
- Repository: [Your GitHub URL]

---

**Built with ❤️ in Australia** 🇦🇺
*Part of the premium website family by NextWave.au*

