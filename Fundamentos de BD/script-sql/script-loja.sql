CREATE DATABASE loja;

USE loja;

CREATE TABLE Usuario(
cpf VARCHAR(20) PRIMARY KEY,
nome VARCHAR(255),
email VARCHAR(100) UNIQUE,
celular VARCHAR(20),
data_nasc DATE,
ts_criacao DATETIME,
ts_alteracao DATETIME
);

CREATE TABLE Endereco(
id INT PRIMARY KEY AUTO_INCREMENT,
cpf VARCHAR(20),
rua VARCHAR(100),
numero INT,
bairro VARCHAR(100),
cep INT,
FOREIGN KEY(cpf) REFERENCES Usuario(cpf)
);

CREATE TABLE Pagamento(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(50) UNIQUE
);

CREATE TABLE Categoria(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(50) UNIQUE
);

CREATE TABLE Subcategoria(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(50) UNIQUE
);

CREATE TABLE Modelo(
id INT PRIMARY KEY AUTO_INCREMENT,
tipo VARCHAR(50) UNIQUE
);

CREATE TABLE Num_serie_modelo(
numero_serie INT PRIMARY KEY,
id_modelo INT,
FOREIGN KEY (id_modelo) REFERENCES Modelo(id)
);

CREATE TABLE produto(
id INT PRIMARY KEY AUTO_INCREMENT,
id_modelo INT,
id_categoria INT,
fabricante VARCHAR(150),
preco_base INT,
estoque INT,
ts_criacao DATETIME,
ts_alteracao DATETIME,
FOREIGN KEY (id_modelo) REFERENCES Modelo(id),
FOREIGN KEY (id_categoria) REFERENCES Categoria(id)
);

CREATE TABLE Subcategoria_produto(
id_produto INT,
id_subcategoria INT,
FOREIGN KEY (id_produto) REFERENCES Produto(id),
FOREIGN KEY (id_subcategoria) REFERENCES Subcategoria(id),
PRIMARY KEY (id_produto, id_subcategoria)
);

CREATE TABLE Pedido(
id INT PRIMARY KEY AUTO_INCREMENT,
cpf VARCHAR(20),
id_endereco INT,
id_pagamento INT,
desconto INT, 
total INT, 
ts_criacao DATETIME,
FOREIGN KEY(cpf) REFERENCES Usuario(cpf),
FOREIGN KEY(id_endereco) REFERENCES Endereco(id),
FOREIGN KEY(id_pagamento) REFERENCES Pagamento(id)
); 

CREATE TABLE Pedido_produto(
id_produto INT,
id_pedido INT,
quantidade INT,
FOREIGN KEY(id_produto) REFERENCES Produto(id),
FOREIGN KEY(id_pedido) REFERENCES Pedido(id)
);











