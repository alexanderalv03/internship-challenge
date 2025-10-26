# Salutho - Desafio de Estágio para Desenvolvedor de Software 

## Visão Geral
Este desafio consiste em desenvolver uma aplicação em React que interage com uma API Django para calcular o menor número inteiro divisível por todos os números dentro de um intervalo específico. Você deverá demonstrar competência tanto em desenvolvimento frontend com React quanto em backend com Django.

## Requisitos do Projeto

### Funcionalidades
- **Frontend:**
  - [ ] A aplicação deve ter um formulário com dois campos de entrada para que o usuário possa inserir os números que definem o intervalo (x a y).
  - [ ] Os números inseridos devem ser validados para garantir que:
    - [ ] Ambos os números são inteiros positivos.
    - [ ] O valor de x deve ser menor que y.
    - [ ] O intervalo não deve ser menor ou igual a zero.
  - [ ] Após a inserção e validação dos números, o frontend deve fazer uma requisição à API Django para obter o resultado do cálculo.
  - [ ] A resposta deve ser exibida na mesma página.

- **Backend (API Django):**
  - [ ] Desenvolver uma rota que receba dois números (x e y) via solicitação HTTP.
  - [ ] A API deve calcular o menor número inteiro que é divisível por todos os números do intervalo x a y.
  - [ ] Retornar o resultado para o frontend.

### Tecnologias
- **Frontend:** React
- **Backend:** Django
- **Estilização:** Escolha livre entre CSS puro, pré-processadores (como SASS ou LESS) ou bibliotecas de componentes estilizados (como styled-components).

# Como Rodar o App - Desafio LCM

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
- Insira valores no intervalo e clique em **Calcular** para ver o LCM.

---

## 5. Observações

- O frontend está configurado para chamar o backend no `localhost:8080`.  
- Para rodar ambos simultaneamente, abra dois terminais:
  - Terminal 1: backend (`python manage.py runserver 8080`)  
  - Terminal 2: frontend (`npm start`)
