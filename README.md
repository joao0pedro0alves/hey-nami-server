# Hey Nami Server

<p>
Aplicativo para controle de despesas, alimentação, 
medicação obrigatória, passeios, banhos e demais informações dos seus animais de estimação.
</p>

### ANIMAL

* Deve ser possivel direcionar tarefas especificas de cada familiar para cada animal.
* Iniciar com suporte para Cachorros e Gatos
* Deve guardar as informações basicas do seu animal de estimação como:

  - Nome
  - Sexo
  - Idade
  - Especie
  - Peso
  - Altura
  - Foto: futuramente criar um modelo 3D do animal, usando pelagens pré montadas
  - Conexão com o rastrador instalado no animal

* Criar um cadastro de exames e remedios obrigatórios por especie, como o vermifogo, vacina de raiva, castração e etc.

* Criar lembretes para os exames e doses de ração diárias, além de um lembrete mensal para a compra de ração.

### FAMILIAR

* Cadastrar membros da familia, guardando informações de:

- Nome
- Email, além das notificações, será enviado um email para o familiar associado ao Animal
- Avatar

<br/>


# Tecnologies

<p align="center">
    Setup backend Node usando princípios de SOLID<br>
    <br><strong>Veja as principais tecnologias abaixo</strong>
<table>
    <thead>
        <tr>
            <th align="center">
                <img width="20" height="1"> 
                <p>
                    <small>#</small>
                </p>
            </th>
            <th align="center">
                <img width="300" height="1"> 
                <p> 
                    <small>
                        NAME
                    </small>
                </p>
            </th>
            <th align="left">
                <img width="140" height="1">
                <p align="left"> 
                    <small>
                    VERSION
                    </small>
                </p>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>01</td>
            <td>Prisma</td>
            <td>@4.10.1</td>
        </tr>
        <tr>
            <td>02</td>
            <td>Fastify</td>
            <td>@4.13.3</td>
        </tr>
        <tr>
            <td>03</td>
            <td>Zod</td>
            <td>@3.20.6</td>
        </tr>
        <tr>
            <td>04</td>
            <td>Husky</td>
            <td>@8.0.3</td>
        </tr>
        <tr>
            <td>05</td>
            <td>Vitest</td>
            <td>@0.26.5</td>
        </tr>
    </tbody>
</table>

<br>
<hr>
<p align="left">
    Veja o arquivo <a href="package.json">package.json</a>
</p>
</p>