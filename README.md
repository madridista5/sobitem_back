<h1>The application works at:</h1>
https://sobitem.tlossy.networkmanager.pl/
<br>
You can create your own account using your email adress, log in and test how it works 🙂
<br>
<br>
If you don't want to create an account you can use the test account:
<br>
email: test@gmail.com
<br>
password: test


<div align="center">

  <a href="https://sobitem.tlossy.networkmanager.pl" target="_blank"><img src="https://raw.githubusercontent.com/madridista5/madridista5/main/1_0_GIF_0.GIF" alt="logo" width="400" height="auto" /></a>
  <h1>SoB item</h1>
 
<h4>
    
  </h4>
</div>

<br />


- [About the Project](#star2-about-the-project)
  * [How the application works](#camera-How-the-application-works)
  * [Tech Stack](#space_invader-tech-stack)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Run Locally](#running-run-locally)


<!-- About the Project -->
## :star2: About the Project


<!-- Screenshots -->
### :camera: How the application works

<p>1. First of all you have to open the appliaction:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/1.png" alt="screenshot" />
</div>

<br>
<p>2. You have to create your account:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/2.png" alt="screenshot" />
</div>

<br>
<p>3. You have to log in:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/3.png" alt="screenshot" />
</div>

<br>
<p>4. Now you can open the menu:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/4.png" alt="screenshot" />
</div>

<br>
<p>5. The menu is on the left:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/5.png" alt="screenshot" />
</div>

<br>
<p>6. You can see a list of the shops:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/6.png" alt="screenshot" />
</div>

<br>
<p>7. You can see a list of the products. You can add each product to your basket using the "Dodaj do koszyka" button:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/7.png" alt="screenshot" />
</div>

<br>
<p>8. You can see each shop on the map. If you write the name of the product you are looking for in the "search bar" you will see only a list of shops where the product is:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/8.png" alt="screenshot" />
</div>

<br>
<p>9. You can see your basket. You can delete product from basket if you do not want to buy it or click "kup teraz" button and buy all the products in your basket:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/9.png" alt="screenshot" />
</div>

<br>
<p>10. You can add your shop:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/10.png" alt="screenshot" />
</div>

<br>
<p>11. You can see all your shops:</p>
<p>Here you can also:</p>
<p> - see all products in your shop </p>
<p> - add product to your shop </p>
<p> - edit your shop </p>
<p> - delete your shop </p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/11.png" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nestjs.com/">Nest.js</a></li>  
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://typeorm.io">TypeORM</a></li>  
  </ul>
</details>

<br>
<p>Database structure:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/sobitem_front/blob/main/db_sobitem.png" alt="screenshot" />
</div>



<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_HOST`

`DB_PORT`

`DB_USERNAME`

`DB_PASSWORD`

`DB_DATABASE`

`SALT`

`SECRET_OR_KEY`

`CORS_ORIGIN`

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager


<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/madridista5/sobitem_back.git
```

Go to the project directory

```bash
  cd sobitem_back
```

Install dependencies

```bash
  npm install
```

Start the application

```bash
  nest start --watch
```
