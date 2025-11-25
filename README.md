# 🛒 React Product Catalog App

A simple and clean product catalog application built using **React**, following the folder structure rules defined in the assignment:

- `components/` ➝ Reusable UI components  
- `pages/` ➝ Complete pages rendered through routing  
- `react-router-dom` for page navigation  
- Clean, readable code with search and sorting functionality  

This project fetches product data from a public API and displays them in a user-friendly interface.

---

## 📌 Features Covered

### ✅ **1. Component-Based Architecture**
- Separated reusable UI elements inside `/components`
- Product card and search bar are isolated components

### ✅ **2. Page-Based Routing using React Router**
- Home Page → Lists all products  
- Product Detail Page → Shows selected product  
- 404 Fallback Route  

### Routes:
- `/` → ProductListPage  
- `/product/:id` → ProductDetailPage  

---

## 🧠 **3. Functionalities Implemented**
| Feature | Description |
|--------|-------------|
| **Product List** | Fetches products from fakestore API |
| **Search** | Filter products by title (case-insensitive) |
| **Price Sorting** | Low → High and High → Low |
| **Dynamic Routing** | Unique page for each product |
| **Error Handling** | 404 page + product not found state |
| **Loading State** | Shows loader while fetching |
| **Responsive Grid** | Fully responsive UI |

---

## 📁 Folder Structure

