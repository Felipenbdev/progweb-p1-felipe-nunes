# Testes da API Pet Shop

## 1. Verificar funcionamento da API

- Método: GET
- URL: /health
- Status observado: 200 OK
- Resultado: API funcionando corretamente.

## 2. Cadastrar tutor

- Método: POST
- URL: /tutores
- Body:
  {
    "nome": "Felipe Nunes",
    "telefone": "83999999999",
    "email": "felipe@email.com"
  }
- Status observado: 201 Created
- Resultado: Tutor cadastrado com sucesso.

## 3. Listar tutores

- Método: GET
- URL: /tutores
- Status observado: 200 OK
- Resultado: Lista de tutores retornada com sucesso.

## 4. Buscar tutor por ID

- Método: GET
- URL: /tutores/1
- Status observado: 200 OK
- Resultado: Dados do tutor retornados com sucesso.

## 5. Impedir e-mail duplicado

- Método: POST
- URL: /tutores
- Body:
  {
    "nome": "Outro Tutor",
    "telefone": "83988888888",
    "email": "felipe@email.com"
  }
- Status observado: 409 Conflict
- Resultado: Cadastro impedido por e-mail duplicado.

## 6. Cadastrar pet

- Método: POST
- URL: /pets
- Body:
  {
    "nome": "Nayuta",
    "especie": "Gato",
    "idade": 2,
    "tutorId": 1
  }
- Status observado: 201 Created
- Resultado: Pet cadastrado com sucesso.

## 7. Listar pets

- Método: GET
- URL: /pets
- Status observado: 200 OK
- Resultado: Lista de pets retornada com sucesso.

## 8. Impedir cadastro com tutor inexistente

- Método: POST
- URL: /pets
- Body:
  {
    "nome": "Rex",
    "especie": "Cachorro",
    "idade": 3,
    "tutorId": 999
  }
- Status observado: 422 Unprocessable Entity
- Resultado: Cadastro impedido porque o tutor não existe.

## 9. Buscar tutor inexistente

- Método: GET
- URL: /tutores/999
- Status observado: 404 Not Found
- Resultado: Tutor não encontrado.

## 10. Atualizar pet

- Método: PUT
- URL: /pets/1
- Body:
  {
    "nome": "Nayuta",
    "especie": "Gato",
    "idade": 3,
    "tutorId": 1
  }
- Status observado: 200 OK
- Resultado: Pet atualizado com sucesso.

## 11. Remover pet

- Método: DELETE
- URL: /pets/1
- Status observado: 204 No Content
- Resultado: Pet removido com sucesso.