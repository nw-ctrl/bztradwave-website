# bzTradewave.au Technical Architecture

## Project Overview
A modern trade website with glassmorphic iOS-style design featuring:
- Public homepage with AI-powered insights
- Partner portal with secure login
- Hidden admin dashboard
- Real-time trade statistics and analytics

## Technology Stack

### Frontend (React + Vite)
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS + Custom glassmorphic components
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Routing**: React Router DOM

### Backend (Flask)
- **Framework**: Flask with SQLite
- **Authentication**: JWT tokens
- **File Upload**: Flask file handling
- **CORS**: Flask-CORS for cross-origin requests
- **Database**: SQLite (included in template)

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'partner', -- 'partner' or 'admin'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);
```

### Partner Notes Table
```sql
CREATE TABLE partner_notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
```

### Documents Table
```sql
CREATE TABLE documents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size INTEGER,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
```

### Chat Messages Table
```sql
CREATE TABLE chat_messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    message TEXT NOT NULL,
    sender_type VARCHAR(50) NOT NULL, -- 'partner' or 'admin'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
```

### Trade Players Table (Admin)
```sql
CREATE TABLE trade_players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    contact_email VARCHAR(255),
    contact_phone VARCHAR(255),
    sector VARCHAR(100), -- 'agriculture', 'electronics', 'clothing'
    is_active BOOLEAN DEFAULT TRUE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new' -- 'new', 'read', 'responded'
);
```

## API Endpoints

### Public Endpoints
- `GET /` - Serve homepage
- `POST /api/contact` - Submit contact form
- `GET /api/trade-stats` - Get public trade statistics
- `GET /api/market-insights` - Get AI-powered market insights

### Authentication Endpoints
- `POST /api/auth/login` - Partner/Admin login
- `POST /api/auth/register` - Partner registration
- `POST /api/auth/logout` - Logout
- `GET /api/auth/verify` - Verify JWT token

### Partner Portal Endpoints
- `GET /api/partner/dashboard` - Get dashboard data
- `GET /api/partner/notes` - Get partner notes
- `PUT /api/partner/notes` - Update partner notes
- `POST /api/partner/upload` - Upload document
- `GET /api/partner/documents` - List documents
- `DELETE /api/partner/documents/:id` - Delete document
- `GET /api/partner/chat` - Get chat messages
- `POST /api/partner/chat` - Send chat message

### Admin Portal Endpoints
- `GET /api/admin/dashboard` - Get admin dashboard data
- `GET /api/admin/players` - List all trade players
- `POST /api/admin/players` - Add new trade player
- `PUT /api/admin/players/:id` - Update trade player
- `DELETE /api/admin/players/:id` - Delete trade player
- `GET /api/admin/analytics` - Get market analytics
- `GET /api/admin/contacts` - Get contact submissions

## Frontend Route Structure

### Public Routes
- `/` - Homepage
- `/about` - About page
- `/products` - Products overview
- `/products/agriculture` - Agriculture products
- `/products/electronics` - Electronics products
- `/products/clothing` - Clothing products
- `/news` - News & Insights
- `/partners` - Partners information
- `/contact` - Contact page

### Protected Routes
- `/partner/login` - Partner login
- `/partner/dashboard` - Partner dashboard
- `/partner/documents` - Document management
- `/partner/chat` - Chat with company

### Admin Routes (Hidden)
- `/admin` - Admin login
- `/admin/dashboard` - Admin dashboard
- `/admin/players` - Trade players management
- `/admin/analytics` - Analytics dashboard

## Design System

### Color Palette
- **Primary**: Deep Blue (#1e3a8a)
- **Secondary**: Silver (#e5e7eb)
- **Accent**: Neon Green (#10b981)
- **Background**: White (#ffffff)
- **Glass**: rgba(255, 255, 255, 0.1)

### Glassmorphic Components
- Backdrop blur: 10px
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Background: rgba(255, 255, 255, 0.1)
- Box shadow: 0 8px 32px rgba(31, 38, 135, 0.37)

### Typography
- **Headings**: Inter, bold
- **Body**: Inter, regular
- **Code**: JetBrains Mono

## AI Integration Plan

### Trade Statistics API
- Use free trade data APIs (e.g., UN Comtrade, World Bank)
- Cache data to reduce API calls
- Update statistics every 24 hours

### Market Insights
- Generate insights using OpenAI API
- Analyze trade trends and patterns
- Provide recommendations based on data

### Real-time Updates
- WebSocket connection for live updates
- Animated counters for statistics
- Auto-refresh charts and graphs

## Security Considerations

### Authentication
- JWT tokens with expiration
- Password hashing with bcrypt
- Role-based access control

### File Upload Security
- File type validation
- File size limits
- Secure file storage
- Virus scanning (if needed)

### Data Protection
- Input validation and sanitization
- SQL injection prevention
- XSS protection
- CSRF protection

## Deployment Strategy

### Development
- Frontend: Vite dev server on port 5173
- Backend: Flask dev server on port 5000
- Database: SQLite file

### Production
- Frontend: Built and served by Flask
- Backend: Flask with production WSGI server
- Database: SQLite (can be upgraded to PostgreSQL)
- Static files: Served by Flask

## Performance Optimization

### Frontend
- Code splitting with React.lazy
- Image optimization and lazy loading
- Minification and compression
- CDN for static assets

### Backend
- Database query optimization
- Caching for frequently accessed data
- Gzip compression
- Rate limiting for API endpoints

## Monitoring and Analytics

### Application Monitoring
- Error tracking and logging
- Performance monitoring
- User activity tracking

### Business Analytics
- Trade statistics dashboard
- User engagement metrics
- Market trend analysis

