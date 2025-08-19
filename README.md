[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

# 🛒 eCommerce Web Application on AWS

> A full-stack cloud-native eCommerce platform built with Angular, Spring Boot, PostgreSQL, and deployed using AWS services including S3, ECS, EC2, RDS, and VPC.

## 🌟 Project Overview

This project demonstrates how to design, build, and deploy a scalable full-stack eCommerce web application using AWS services. Users can:
- Register/login (JWT-secured)
- Browse products
- Add items to a cart
- Place orders
- Make payments (Stripe integrated)

## 🛠️ Technologies Used

| Layer       | Technology                             |
|-------------|----------------------------------------|
| Frontend    | Angular 16 SPA                         |
| Backend     | Spring Boot + REST API + JWT           |
| Database    | PostgreSQL (AWS RDS)                   |
| Container   | Docker + AWS ECR                       |
| Cloud       | AWS S3, ECS (EC2 Launch Type), RDS, VPC|
| Payments    | Stripe API                             |
| Deployment  | Manual via AWS Console + AWS CLI       |

## ⚙️ Architecture Diagram

Below is the cloud architecture showing how different AWS services integrate with the application:

![AWS Architecture Diagram](docs/architecture.png)

*Figure 1. AWS S3 + ECS + RDS architecture overview*

## 🗃️ Database Schema

The application uses a normalized PostgreSQL schema. Here's the logical view:

### Entity-Relationship Model

![ER Diagram](docs/ERDiagram.png)

*Figure 2. Entity-Relationship Diagram*

### Table-Level Schema

![Table Schema](docs/schema.png)

*Figure 3. Table-Level Schema*

## 🗂️ Project Structure
```
ecommerce-project/
├── frontend/ # Angular application
│ └── src/
├── backend/ # Spring Boot backend
│ └── src/
├── docker/ # Dockerfiles and ECS configs
├── docs/ # Diagrams and images
│ ├── architecture.png
│ ├── schema.png
│ └── ERDiagram.png
├── LICENSE
└── README.md
```

## Prerequisites

1. Java JDK ≥17  
2. Maven ≥3.6  
3. Angular CLI ≥16  
4. AWS CLI v2 configured  
5. Docker ≥20.10  
6. PostgreSQL client (psql)  

## 📌 How to Run Locally

### Frontend

cd frontend
npm install
ng serve

### Backend

cd backend
mvn clean package
java -jar target/*.jar

## ☁️ AWS Deployment Workflow

### Frontend (Angular) → Amazon S3

ng build --prod
aws s3 sync dist/your-app-name s3://your-bucket-name --acl public-read

- Hosted as a static website  
- Bucket policy and CORS configured for public access  

### Backend (Spring Boot) → ECS via ECR

docker build -t ecommerce-backend .
docker tag ecommerce-backend <aws_id>.dkr.ecr.us-east-1.amazonaws.com/ecommerce-backend
aws ecr get-login-password | docker login --username AWS --password-stdin ...
docker push <aws_id>.dkr.ecr.us-east-1.amazonaws.com/ecommerce-backend

- Task definition includes environment variables: DB_PASSWORD, JWT_SECRET  
- ECS Task runs on EC2 in public subnet  

### Database → Amazon RDS (PostgreSQL)

- Setup with private subnets  
- Port 5432 open only to ECS Security Group  
- Initialized manually using `psql` via SSH EC2 instance  

## 📚 References

- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)  
- [AWS ECS (EC2 Launch Type)](https://docs.aws.amazon.com/ecs/latest/developerguide/Welcome.html)  
- [AWS RDS PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html)  
- [Spring Boot Docs](https://spring.io/projects/spring-boot)  
- [Stripe API Docs](https://stripe.com/docs/api)  

## License

MIT License – see [LICENSE](LICENSE) for details.  
