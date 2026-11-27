# BrolfTech

A responsive, multi-page e-commerce marketplace UI built with HTML, CSS, and JavaScript. It includes a customer storefront and a separate admin dashboard interface.

## Features

- Storefront pages for the home page, shop, product details, cart, checkout, account, and order history.
- Supporting pages for About, Contact, Refund Policy, and Terms & Conditions.
- Admin interface pages for the dashboard, products, categories, orders, and stock.
- Responsive layouts, Roboto typography, and product-image lightbox support with FancyBox.

## Pages

### Storefront

`index.html` · `shop.html` · `product.html` · `cart.html` · `checkout.html` · `account.html` · `orders.html` · `change-password.html` · `about.html` · `contact.html` · `refund.html` · `terms.html`

### Admin

`admin/index.html` · `admin/product.html` · `admin/category.html` · `admin/order.html` · `admin/stock.html`

## Project structure

```text
.
├── index.html
├── *.html                    # Storefront pages
├── admin/
│   ├── *.html                # Admin pages
│   └── css/style.css         # Admin styles
└── assets/
    ├── css/style.css         # Storefront styles
    ├── fonts/Roboto/         # Roboto font files
    ├── images/               # Icons, product, slider, and other images
    ├── js/                   # Site scripts and jQuery
    └── vendor/fancybox/      # FancyBox files
```

## Run locally

Clone the repository and open `index.html` in a browser. Alternatively, start a local static server from the project directory:

```bash
python -m http.server 8000
```

On Windows, you can use `py -m http.server 8000` if `python` is not available. Then visit [http://localhost:8000](http://localhost:8000).

## Deploy with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and the `/(root)` folder, then save.
4. Open the published URL shown on the Pages settings screen after deployment completes.

The storefront pages stay at the repository root so their relative links and GitHub Pages URLs work as expected.

## Scope

This repository contains the front-end interface only. Forms and admin screens are visual template pages; no backend, database, authentication, order processing, or payment integration is included.
