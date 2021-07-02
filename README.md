<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/yu1Tivm.png" alt="Project logo"></a>
</p>

<h3 align="center">Melissa Mondot - Portfolio</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/melissa-mondot/portfolio)](https://github.com/melissa-mondot/portfolio/issues)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> A simple three page site with some highlights of my work and resume.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

My purpose with this project is two-fold: present my work history while providing an interesting UI that does not distract from the purpose of the site.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Firebase CLI: npm i -g firebase-tools
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Install the app

```
npm i
npx eslint init
```

Firebase connection

```
firebase login
firebase init (domain and Firestore)
```

Firebase secrets environment

##### copy from .env.example

```
touch .env
```

## 🎈 Usage <a name="usage"></a>

All messages submitted are written in Firestore.
Uses Google Analytics for visitor tracking.

## 🚀 Deployment <a name = "deployment"></a>

```
npm run build
firebase deploy
```

## ⛏️ Built Using <a name = "built_using"></a>

- [Firestore](https://firebase.google.com/docs/firestore/) - Database
- [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup) - Server Framework
- [React](https://reactjs.org/) - Web Framework
- [Styled Components](https://styled-components.com/) - CSS in template literals
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@melissa-mondot](https://github.com/melissa-mondot) - Idea & Initial work

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
