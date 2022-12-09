# DBCLI

A project that serves to insert, delete, update and list Heroes via Command Line.

### Pré-requisitos

Before starting, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### 🎲 Rodando the project (dbcli)

```bash
# Clone this repository
$ git clone https://github.com/natancs/dbcli

# Access project folder in terminal/cmd
$ cd dbcli

# Install the dependencies
$ npm install
# or
$ yarn
```

### Commands

```bash
# Create a new hero
# -n, --name HeroName
# -p, --power HeroPower
$ npm run dbcli create -n HeroName -p HeroPower

# List heors or hero by id
# -i, --id HeroID
$ npm run dbcli read
$ npm run dbcli read -i HeroID

# Update hero by id
# -i, --id HeroId
# -n, --name HeroName
# -p, --power HeroPower
$ npm run dbcli update -i HeroID -n HeroName -p HeroPower

# Delete the heroes table or hero by id
# -i, --id HeroId
$ npm run dbcli delete
$ npm run dbcli delete -i HeroID

# Run tests
$ npm run test
$ npm run test:watch

# These commands will handle a /src/herois.json file
```

### Libs

- commander
- jest

### 🛠 Tecnologias

The following tools were used in building the project:

- [Node.js](https://nodejs.org/en/)

### Autor

---

![Natanael de Carvalho](https://media-exp1.licdn.com/dms/image/C4E03AQHjAgZP4nD4Fg/profile-displayphoto-shrink_200_200/0/1581989355764?e=1675900800&v=beta&t=edxQ4AoKqC2Z1lJ5RNGy3PaGpJ0ogkDOY-CRm7yIdjU)

Made with ❤️ by Natanael de Carvalho 👋🏽 Get in touch!

[![Linkedin Badge](https://img.shields.io/badge/-Natanael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/natanael-de-carvalho/)

### Credits

Concept learned by this sensational dev
[![Linkedin Badge](https://img.shields.io/badge/-Erick_Wendel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/erickwendel/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
