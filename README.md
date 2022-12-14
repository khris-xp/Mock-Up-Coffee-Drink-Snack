<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/khris-xp/Mock-Up-Coffee-Drink-Snack">
    <img src="./image/README/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Mock Up Coffee Project</h3>

  <p align="center">
    This is my project to make an Ecommerce website in the form of MERN Stack.
    <br />
    <a href="https://github.com/khris-xp/Mock-Up-Coffee-Drink-Snack"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/khris-xp/Mock-Up-Coffee-Drink-Snack">View Source Code</a>
    ·
    <a href="https://www.youtube.com/watch?v=HwftjOr0eqQ">View Usage</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

This is my Project on ECommerce topic in the form of MERN Stack to submit KMITL's SAIG Lab.I was very inspired by the fact that I went to have a coffee at my uncle's shop that I was quite respected before came to study here. And I mad a promise to make a Website related to your store, and now I have fulfilled that promise.

Overview of this project :
* Unregistered  Users
   * You can see the Home page that is the main page.
   * Can view the list of products but cannot buy.
* Registered Users
   * You can see the Home page that is the main page.
   * Can view and purchase products.
   * You can view your order history for yourself.
* Admin
   * You can see the Home page that is the main page.
   * Can edit and delete the product list.
   * Can edit and delete the list of product types.
   * Admin can create a new product list.
   * Admin can create a new product category list.
   * Admin can view the order history of all users.

In this project, there is an error during Deploy, therefore unable to Deploy this project, but I have recorded all the usage videos on Youtube which can be viewed by following the link above below.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

In this project I mainly use Javascript language and other frameworks are used to do both frontend and backend as follows.

* Frontend
  * React
  * Tailwind css
* Backend
  * Nodejs
  * MongoDB
  * Express

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Requirement Web Session

The requiremnet part as I got it and I put it in this project as follows.

* Form validation (regex)
* Responsive Design
* Tailwind
* File Upload
* Pagination
* Authentication (email/password - jwt) 
* Secure api with jwt
* Refresh token / Access token
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started
The installation and implementation requirements of the Mock Up Coffee Drink & Snack Source Code can be installed and used in the following sections.

### Installation

_The steps to install Project include any add-ons that should be installed before installing this Project._

1.  Detailed topics to be prepared before installing this project.
     * Cloundinary Account
     * Generate Access & Refresh Token


2. Clone the repo
   ```sh
   git clone https://github.com/khris-xp/Mock-Up-Coffee-Drink-Snack.git
   ```
3. Install client & server with concurrently
   ```sh
   npm install-all
   ```
4. Enter your SECRET_KEY  in `.env`

   ```js
   MONGODB_URL = //YOUR_MONGODB_URL
   ACCESS_TOKEN_SECRET = //YOUR_ACCESS_TOKEN_SECRET
   REFRESH_TOKEN_SECRET = //YOUR_REFRESH_TOKEN_SECRET

   CLOUD_NAME = //YOUR_CLOUD_NAME
   CLOUD_API_KEY = //YOUR_CLOUD_API_KEY
   CLOUD_API_SECRET = //YOUR_CLOUD_API_SECRET
   ```
5. Run the client & server with concurrently

   ```sh
   npm run build
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

* Usage Video

[![Watch the video](./image/README/usage.png)](https://www.youtube.com/watch?v=HwftjOr0eqQ)

* Unregistered  Users

![unregister-user][unregister-user]

* Registered Users

![register-user][registered-user]

* Admin

![Admin][admin]
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Author : 65010107 นายคริษฐ์ พราหมโณ

Facebook : [Khris Bharmmano](https://web.facebook.com/khris.bharmmano)

Instagram : [khris_xp](https://www.instagram.com/khris_xp/)

Github : [khris_xp](https://github.com/khris-xp)

Other Projects : [https://github.com/khris-xp?tab=repositories](https://github.com/khris-xp?tab=repositories)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[product-screenshot]: ./image/README/about_project.png
[unregister-user]: ./image/README/noregister_user.png
[registered-user]: ./image/README/register_user.png
[admin]: ./image/README/admin.png