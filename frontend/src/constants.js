// export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
// If we are in development mode, use localhost:5000 as the base URL. Otherwise, use an empty string.

export const BASE_URL = '';
export const PRODUCTS_URL = `/api/products`;
export const ORDERS_URL = `/api/orders`;
export const USERS_URL = `/api/users`;
export const PAYPAL_URL = `/api/config/paypal`;

// These are the URLs for the backend API. We use the proxy setting in frontend/package.json
// to proxy requests to these URLs to the backend server. This is only necessary in development mode.