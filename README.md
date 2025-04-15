# 🌇 [Real Estate Rental Platform](https://master.d3nadeyy4kwks1.amplifyapp.com/)

##  Overview
This is a real estate rental platform that facilitates the process of finding and renting properties. The platform supports two types of users: tenants and managers. Tenants can browse listings, filter properties, save favorites, and submit rental applications. Managers can add listings, process applications, and manage tenants. Authentication is handled using AWS Cognito.

## ✨ Features

### 🔐 **Authentication & Role Management**
- User registration and login using AWS Cognito.
- Role-based access control for "Tenant" and "Manager".

### **Tenant Features**
- **Interactive Map with Listings** 🗺️
  - View available properties on an interactive map.
  - Click on markers for detailed property information.
- **Property Filtering** 🔍
  - Filter listings by price, bedrooms, bathrooms, amenities and property type.
- **Favorite Listings** ❤️
  - Save preferred listings for easy access.
  - View and manage favorite properties.
- **Rental Application Submission** 📝
  - Submit applications for properties.
  - Track application status (pending, approved, rejected).

### **Manager Features**
- **Listing Management** 🏢
  - Add, edit, and delete property listings.
- **Application Processing** 📑
  - Review rental applications.
  - Approve or reject applications.
- **Tenant Management** 👥
  - View a list of tenants for specific properties.
  - Access tenant contact details.

---

## 🛠 Tech Stack

### **Frontend:**
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white) Next.js
- ![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white) Redux Toolkit
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) Tailwind CSS
- ![Shadcn](https://img.shields.io/badge/Shadcn-000000?style=flat) Shadcn UI
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) TypeScript
- ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=flat&logo=framer&logoColor=white) Framer Motion

### **Backend:**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) Node.js
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) Express.js
- ![AWS EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=flat&logo=amazonaws&logoColor=white) AWS EC2
- ![API Gateway](https://img.shields.io/badge/API%20Gateway-FF4F8B?style=flat&logo=amazonaws&logoColor=white) API Gateway
- ![RDS](https://img.shields.io/badge/AWS%20RDS-527FFF?style=flat&logo=amazonaws&logoColor=white) RDS (Relational Database Service)
- ![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify-FF9900?style=flat&logo=awsamplify&logoColor=white) AWS Amplify

### **Authentication:**
- ![AWS Cognito](https://img.shields.io/badge/AWS%20Cognito-6A359C?style=flat&logo=amazonaws&logoColor=white) AWS Cognito

## ⚙️ Installation & Setup

### **Prerequisites:**
- Node.js
- AWS account with Cognito, EC2, S3, and RDS configured.

### **Frontend Setup:**
1. Clone the repository:
   ```bash
   git clone https://github.com/victoriababala/realEstate.git
   cd realEstate/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### **Backend Setup:**
1. Navigate to the backend directory:
   ```bash
   cd ../backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```


