import axios from "axios";

// Create axios instance with base URL
const API = axios.create({
  baseURL: "https://dummyjson.com/", // Base URL for all product-related API calls
});

// Function to fetch product posts
export const fetchPosts = async () => {
  try {
    const response = await API.get("products"); // Calls https://dummyjson.com/products/
    return response.data.products; // Returns product data
  } catch (error) {
    console.error("API fetch error:", error.message);
    throw error;
  }
};
