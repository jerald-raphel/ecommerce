# E-Commerce Website

A modern e-commerce website built with React.js, CSS, and MongoDB.

## Features

- Responsive design
- Product listing with grid view
- Product detail pages
- Shopping cart functionality
- Smooth animations and transitions
- MongoDB database integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ecommerce
```

2. Install dependencies for both client and server:
```bash
# Install client dependencies
npm install

# Install server dependencies
cd server
npm install
```

3. Start MongoDB:
```bash
# Make sure MongoDB is running on localhost:27017
```

4. Start the server:
```bash
cd server
npm start
```

5. Start the client:
```bash
# In a new terminal
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Project Structure

```
ecommerce/
├── src/                    # React application source
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── styles/            # CSS styles
│   └── App.js             # Main application component
├── server/                # Backend server
│   ├── models/            # MongoDB models
│   ├── db.js             # Database connection
│   └── server.js         # Express server
└── package.json          # Project dependencies
```

## Technologies Used

- React.js
- CSS (no frameworks)
- MongoDB
- Express.js
- Node.js

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 