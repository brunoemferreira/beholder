# **Beholder v2.0**

<div align="center">
   <img width="300px" src="https://github.com/brunoemferreira/cs-luiztools-beholder-2-0/blob/main/frontend/public/img/favicon/android-chrome-512x512.png" />
</div>

</br>

<!-- ************************************* Baadges ********************************************* -->
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brunoemferreira/beholder?color=%2304D361">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunoemferreira/beholder">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunoemferreira/beholder">
</p>

## 🚀 **Sobre o Beholder v2.0**
O Beholder 2.0 é um TraderBot de negociação focado no Exchange Binance

## ⚡ **Funcionalidades**

* Monitora a Exchange ( Indicadores / Candle / Book / Tickers )
* Automações
* Compra / Venda
* Alertas
* Relatórios
* Gestão WEB
* Multimoedas
* Near Real-Time

## 🧰 **Tecnologias Utilizadas**

#### Desenvolvimento
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![DBeaver](https://img.shields.io/badge/DBeaver-866f60.svg?style=for-the-badge&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

#### FrontEnd
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

#### BackEnd
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Binance](https://img.shields.io/badge/Binance%20API-FCD535?style=for-the-badge&logo=binance&logoColor=white)

#### Database
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

## **Arquitetura**

### 🧽 **Paradigmas e Princípios**

* Programação Funcional
* Clean Code
* SOLID

### Fluxo Arquitetural 

<div align="center" >
   <img width="544px" src="https://github.com/brunoemferreira/beholder/assets/17993135/16b81c5a-cefc-47d3-8162-e1e2ff8d138d" />
</div>

### Fluxo de Comunicação da Aplicação

<div align="center" >
   <img width="544px" src="https://github.com/brunoemferreira/beholder/assets/17993135/68d43dbd-b536-4c28-8020-caced9873a79" />
</div>

### Fluxo de Autenticação ( JWT )

<div align="center">
   <img width="544px" src="https://github.com/brunoemferreira/beholder/assets/17993135/c0bbeff2-3198-4126-a8c1-6df4be004d53" />
</div>

## 🏦 **FrontEnd**

* SPA( Single Page Application )
* ReactJS 
* Bootstrap ( Biblioteca de Estilização )
* Volt ( Theme )

### **Dependências**

* axios
* react-router-dom 

## 🏗️ **BackEnd**

* Monolítico
* MVC 
* RESTFull
* ORM( Sequelize )

### **Dependências**

* express
* cors
* helmet
* dotenv
* nodemon
* express-async-errors
* jsonwebtoken
* bcryptjs

### **Sequelize**





## 🔨 **Database**



## ⚙️ **Configurações Necessárias**

### **Configuração do Docker para o MySql**
```yaml
# Baixa a imagem do container docker mysql
$ docker pull mysql

# Roda o container docker em segundo plano com o nome de some-server vinculando a
# porta do container a porta da maquina e setando a senha informada para o usuario root
$ docker run -d --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 mysql:8.1.0
```

### **Configuração do MySQL**
```text
# Driver Connection
Server Host : localhost
Port        : 3306
User        : root
Password    : 123456

# Driver Properties
allowPublicKeyRetrieval=TRUE
useSSL=FALSE
```

### Configurações Binance


[Documentação Binance](https://binance-docs.github.io/apidocs/spot/en/#change-log) - Documentação Oficial de implementação das API's Binance.

| Descrição | Spot API URL ( Produção )            | Spot Test Network URL ( Teste )     |
| --------- | ------------------------------------ | ----------------------------------- |
| URL API's | https://api.binance.com/api          | https://testnet.binance.vision/api  |
|           | wss://stream.binance.com:9443/ws     | wss://testnet.binance.vision/ws     |
|           | wss://stream.binance.com:9443/stream | wss://testnet.binance.vision/stream |

## Rodando a Aplicação

```bash
# Rodando app em dev com nodemon
$ npm run dev
```

```bash
# Rodando app em produção
$ npm start
```


## 🔗 Links Úteis

* [Binance](https://www.binance.com/pt-BR)
* [BCrypt Hash Generator](https://bcrypt.online/)
* [Volt Theme](https://themesberg.com/docs/volt-bootstrap-5-dashboard/getting-started/quick-start/)
