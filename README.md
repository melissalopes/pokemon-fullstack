# 🖥️ Installation

1. Clone this repo
```bash
git clone https://github.com/melissalopes/pokemon-fullstack.git
```

## Backend

### Environments

1. Make .env.example into .env

### Config

1. Go to the API folder

```bash
cd pokemon-fullstack
cd backend
```

2. Install dependencies
```bash
npm install
```

3. Run build
```bash
npm run build
```

4. Run docker compose
```bash
docker-compose up -d 
```

### You can run

1. Test
```bash
npm run test
```

2. Lint
```bash
npm run lint
```

3. Run local server in Docker, just accessing 'api.http' file in root of backend project (You will need 'REST Client' extension installed on your VSCode)

## Frontend

### Environments

1. Make .env.example into .env

### Config

1. Go to the project folder
```bash
cd pokemon-fullstack
cd frontend
```

2. Install dependencies
```bash
npm install
```

3. Run Frontend
```bash
npm run dev
```

4. Acess url
```bash
http://localhost:3000/
```

## Q&A 

1. "Why is Database there if it is not used?"
- Just to demonstrate how to set up a Database. In the future the code can be updated and receive Models

2. "Which main technologies were used in this project?"

Backend: 
- Typescrip
- Express
- Nodemon
- Docker
- Jest and Supestest
- Winston
- Joi
- Axios
- Mongoose
- Eslint
- Prettier
- Husky

Frontend:
- Typescript
- Next
- Styled Components
- Zod
- Hookform/Resolvers
- Axios
- Context
- React Hook Form