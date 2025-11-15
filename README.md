# CA Compliance Backend

The backend service for the CA Compliance project.  
Structured cleanly for easy development, collaboration, and future scaling.

---

## 🚀 Tech Stack
- **Node.js + Express**
- **MongoDB + Mongoose**
- **dotenv**
- **CORS**
- **Body-Parser**

---

## 📁 Folder Structure
src/
├── config/
├── controllers/
├── middlewares/
├── models/
└── routes/
server.js
.env
package.json
README.md

---

## 🛠️ Setup Instructions

### **1. Clone the repository**
```bash
git clone <repo-url>
cd ca-compliance-backend
```
### **2. Install dependencies**
```bash
npm install
```
### **3. Add a .env file in root**
Add the following keys:
MONGO_URI=mongodb://localhost:27017/your-db-name
PORT=5000
CORS_ORIGIN=http://localhost:5173

## Start the server from root
```bash
npm run dev
```
If everything is correct, you'll see:
MongoDB connected successfully
Server is running on http://localhost:5000

## Development notes
- Local MongoDB for dev (MongoDB Compass)
- MongoDB Atlas for production
- Frontend and backend will remain separate repos
- Follow clean architecture while adding new features
