# Smart Contact Manager (SCM-v1)

## Overview

The **Smart Contact Manager** is a modern, web-based application designed to manage personal and professional contacts efficiently. It features an intuitive user interface, secure data handling, and responsive design to ensure smooth usage across various devices.

---

## Features

- **User-Friendly Interface** – Simplifies contact management through an intuitive design.
- **CRUD Operations** – Easily create, Read, Update, and Delete contacts.
- **Advanced Search & Filters** – Locate specific contacts quickly using built-in filtering mechanisms.
- **Secure Data Storage** – Integrated with Spring Security to ensure data privacy and integrity.
- **Responsive Design** – Optimized for desktop, tablet, and mobile devices.

---

## Tech Stack

| Layer         | Technology Used                          |
|---------------|-------------------------------------------|
| **Frontend**  | HTML5, CSS3, JavaScript, React.js         |
| **Backend**   | Java, Spring Boot, Spring MVC             |
| **Database**  | MySQL / Oracle                            |
| **Other Tools** | Maven, Git, Spring Security, REST APIs, Bootstrap |

---

## Installation & Setup

### Prerequisites
- Java (JDK 11 or higher)
- Maven
- Git
- MySQL or Oracle Database

### Steps to Run the Application
1. **Clone the repository**  
   ```bash
   git clone https://github.com/Aquib-git/SCM01.git
Navigate to the project directory

bash
Copy
Edit
cd SCM01
Configure the database
Update the application.properties file in src/main/resources/ with your MySQL or Oracle database credentials.

Build and run the project

bash
Copy
Edit
mvn clean install
mvn spring-boot:run
Access the application
Open your browser and navigate to:
http://localhost:8080
