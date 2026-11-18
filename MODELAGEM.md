# Modelagem de Classes — Pet Shop

## 1. Domínio

O sistema de pet shop permite cadastrar tutores e seus animais de estimação,
além de registrar serviços e agendamentos. O objetivo é organizar os
atendimentos e manter os dados dos animais e seus responsáveis.

## 2. Entidades e relacionamentos

### Tutor
- id: Long
- nome: String
- telefone: String
- email: String

Um tutor pode possuir vários pets.

### Pet
- id: Long
- nome: String
- especie: String
- idade: Integer
- tutorId: Long

Cada pet pertence a um tutor. Um tutor pode ter vários pets.

### Servico
- id: Long
- nome: String
- descricao: String
- preco: Decimal

Um serviço pode estar associado a vários agendamentos.

### Agendamento
- id: Long
- dataHora: DateTime
- status: String
- petId: Long
- servicoId: Long

Cada agendamento está associado a um pet e a um serviço.

## 3. Diagrama de classes

```mermaid
classDiagram
    class Tutor {
        +Long id
        +String nome
        +String telefone
        +String email
    }

    class Pet {
        +Long id
        +String nome
        +String especie
        +Integer idade
        +Long tutorId
    }

    class Servico {
        +Long id
        +String nome
        +String descricao
        +Decimal preco
    }

    class Agendamento {
        +Long id
        +DateTime dataHora
        +String status
        +Long petId
        +Long servicoId
    }

    Tutor "1" --> "0..*" Pet : possui
    Pet "1" --> "0..*" Agendamento : participa
    Servico "1" --> "0..*" Agendamento : corresponde a