from flask import Blueprint, jsonify, request
from src.models.user import ContactSubmission, db
import random
from datetime import datetime, timedelta

api_bp = Blueprint('api', __name__)

@api_bp.route('/contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        
        if not data or not data.get('name') or not data.get('email') or not data.get('message'):
            return jsonify({'message': 'Name, email, and message are required'}), 400
        
        # Create contact submission
        contact = ContactSubmission(
            name=data['name'],
            email=data['email'],
            message=data['message']
        )
        
        db.session.add(contact)
        db.session.commit()
        
        return jsonify({
            'message': 'Contact form submitted successfully',
            'submission_id': contact.id
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'message': 'Submission failed', 'error': str(e)}), 500

@api_bp.route('/trade-stats', methods=['GET'])
def get_trade_stats():
    """Get current trade statistics"""
    try:
        # Simulate real-time trade data
        base_stats = {
            'agriculture': 2450,
            'electronics': 8920,
            'clothing': 5670
        }
        
        # Add some random variation to simulate real-time updates
        current_stats = {}
        for sector, base_value in base_stats.items():
            variation = random.randint(-50, 100)
            current_stats[sector] = base_value + variation
        
        return jsonify({
            'timestamp': datetime.utcnow().isoformat(),
            'stats': current_stats,
            'currency': 'USD',
            'unit': 'millions'
        }), 200
        
    except Exception as e:
        return jsonify({'message': 'Failed to fetch trade stats', 'error': str(e)}), 500

@api_bp.route('/market-insights', methods=['GET'])
def get_market_insights():
    """Get AI-powered market insights"""
    try:
        insights = [
            {
                'id': 1,
                'type': 'positive',
                'title': 'Market Opportunity',
                'message': 'Electronics demand in Asia up 15% this quarter',
                'sector': 'electronics',
                'timestamp': (datetime.utcnow() - timedelta(minutes=2)).isoformat()
            },
            {
                'id': 2,
                'type': 'warning',
                'title': 'Supply Chain Alert',
                'message': 'Potential delays in clothing shipments from Europe',
                'sector': 'clothing',
                'timestamp': (datetime.utcnow() - timedelta(minutes=5)).isoformat()
            },
            {
                'id': 3,
                'type': 'info',
                'title': 'New Market',
                'message': 'Agriculture exports to Southeast Asia showing growth',
                'sector': 'agriculture',
                'timestamp': (datetime.utcnow() - timedelta(minutes=8)).isoformat()
            },
            {
                'id': 4,
                'type': 'positive',
                'title': 'AI Recommendation',
                'message': 'Optimal time to increase electronics inventory',
                'sector': 'electronics',
                'timestamp': (datetime.utcnow() - timedelta(minutes=12)).isoformat()
            }
        ]
        
        return jsonify({
            'insights': insights,
            'last_updated': datetime.utcnow().isoformat()
        }), 200
        
    except Exception as e:
        return jsonify({'message': 'Failed to fetch market insights', 'error': str(e)}), 500

@api_bp.route('/trade-trends', methods=['GET'])
def get_trade_trends():
    """Get historical trade trends data"""
    try:
        # Generate sample trade trends data for the last 6 months
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        trends_data = []
        
        base_values = {
            'agriculture': 2400,
            'electronics': 8800,
            'clothing': 5600
        }
        
        for i, month in enumerate(months):
            # Add some variation to simulate real trends
            agriculture_var = random.randint(-200, 300)
            electronics_var = random.randint(-300, 500)
            clothing_var = random.randint(-150, 200)
            
            trends_data.append({
                'month': month,
                'agriculture': base_values['agriculture'] + agriculture_var + (i * 20),
                'electronics': base_values['electronics'] + electronics_var + (i * 50),
                'clothing': base_values['clothing'] + clothing_var + (i * 25)
            })
        
        return jsonify({
            'trends': trends_data,
            'period': '6_months',
            'currency': 'USD',
            'unit': 'millions'
        }), 200
        
    except Exception as e:
        return jsonify({'message': 'Failed to fetch trade trends', 'error': str(e)}), 500

@api_bp.route('/market-share', methods=['GET'])
def get_market_share():
    """Get market share distribution"""
    try:
        market_share = [
            {'name': 'Agriculture', 'value': 25, 'color': '#10b981'},
            {'name': 'Electronics', 'value': 45, 'color': '#1e3a8a'},
            {'name': 'Clothing', 'value': 30, 'color': '#8b5cf6'}
        ]
        
        return jsonify({
            'market_share': market_share,
            'total_percentage': 100,
            'last_updated': datetime.utcnow().isoformat()
        }), 200
        
    except Exception as e:
        return jsonify({'message': 'Failed to fetch market share', 'error': str(e)}), 500

