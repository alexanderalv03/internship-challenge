
# Como Rodar o App

Este projeto possui **frontend React** e **backend Django**. Siga os passos abaixo para rodar localmente.

---

## 1. Pré-requisitos

- **Python** ≥ 3.8  
- **Node.js** ≥ 18 e **npm**  

---

## 2. Rodando o backend (Django)

1. Abra o terminal na pasta `backend`:
    ```bash
    cd backend
    ```

2. Instale Django:
    ```bash
    pip install django
    ```

3. Execute as migrations iniciais:
    ```bash
    python manage.py migrate
    pip install django django-cors-headers

    ```

4. Rode o servidor Django:
    ```bash
    python manage.py runserver 8080
    ```

   - O backend estará disponível em: `http://127.0.0.1:8080`
   - Teste a API diretamente:  
     `http://127.0.0.1:8080/api/lcm/?x=1&y=10`

---

## 3. Rodando o frontend (React)

1. Abra outro terminal na pasta `frontend`:
    ```bash
    cd frontend
    ```

2. Instale as dependências do React:
    ```bash
    npm install
    ```

3. Rode o frontend:
    ```bash
    npm start
    ```

   - O app abrirá automaticamente no navegador em: `http://localhost:3000`

---

## 4. Testando o app

- Certifique-se que o **backend está rodando no 8080**.  
- Certifique-se que o **frontend está rodando no 3000**.  
- Abra o navegador e acesse: `http://localhost:3000`  
- Insira valores no intervalo e clique em **Calcular** para ver o mínimo multiplo comum.

---

## 5. Observações

- O frontend está configurado para chamar o backend no `localhost:8080`.  
- Para rodar ambos simultaneamente, abra dois terminais:
  - Terminal 1: backend (`python manage.py runserver 8080`)  
  - Terminal 2: frontend (`npm start`)
