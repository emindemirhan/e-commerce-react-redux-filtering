# E-commerce with Filtering and Redux

## About

This project is a React-based e-commerce store with advanced filtering features implemented using TypeScript. The technology stack includes React.js, Redux, react-router-dom, and SASS libraries. The application follows a structured architecture, utilizing Redux for state management and react-router-dom for navigation. The MainLayout component encapsulates pages, ensuring a consistent layout with a header containing a shopping cart and a link to the product listings.

## Features

- **Product Listing:** Display a comprehensive list of products with images, names, prices, and other relevant details.
- **Advanced Filtering:** Incorporate versatile filtering options, enabling users to:
  - Perform a general search within the product name, brand, and description.
  - Classify products by category.
  - Filter products based on category, brand, scores, and price range.
- **Dynamic Updates:** Experience real-time updates of product listings as users apply various filter options.
- **Responsive Design:** Ensure a seamless and user-friendly design that adapts to both desktop and mobile devices.

## Data Flow

The application utilizes Redux for managing the state. The MainLayout component encompasses the header and pages, providing a structured flow of data and actions.

## API Usage

#### Fetch all items

```http
  GET / https://dummyjson.com/products/search
```

| Path             | Query | type     | Purpose of usage       |
| :--------------- | :---- | :------- | :--------------------- |
| /products        |       |          | All products fetched.  |
| /products/search | `?q=` | `string` | All products searched. |

#### Fetch item detail

```http
  GET https://dummyjson.com/product/${id}
```

| Path     | Paramater | Query    | Purpose of usage            |
| :------- | :-------- | :------- | :-------------------------- |
| /product | `id`      | `string` | Product detail was fetched. |

## Route Structure

The project consists of 3 pages:

- The main products page is accessible at [http://localhost:3000](http://localhost:3000).
- Product details are available in the detail page under the path `detail/{id}`, for example, [http://localhost:3000/detail/1](http://localhost:3000/detail/1).
- For invalid paths, there is a Page404 page that is displayed. This page does not include a button that directs users to the main directory.

```jsx
<Routes>
  <Route path="/" element={<ProductsPage />} />
  <Route path="/detail/:id" element={<ProductDetailPage />} />
  <Route path="*" element={<Page404 />} />
</Routes>
```
