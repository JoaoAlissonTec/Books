const books = [
    {
        "id": 1,
        "title": "O Segredo do Passado",
        "author_id": 1,
        "ano_de_publicacao": 2010
    },
    {
        "id": 2,
        "title": "A Máquina do Tempo",
        "author_id": 2,
        "ano_de_publicacao": 2005
    },
    {
        "id": 3,
        "title": "Aventuras no Jardim Encantado",
        "author_id": 3,
        "ano_de_publicacao": 2018
    },
    {
        "id": 4,
        "title": "À Beira do Abismo",
        "author_id": 4,
        "ano_de_publicacao": 2012
    },
    {
        "id": 5,
        "title": "A Luta pela Justiça",
        "author_id": 5,
        "ano_de_publicacao": 2016
    },
    {
        "id": 6,
        "title": "O Enigma do Espelho",
        "author_id": 6,
        "ano_de_publicacao": 2008
    },
    {
        "id": 7,
        "title": "Caminho para o Sucesso",
        "author_id": 7,
        "ano_de_publicacao": 2014
    },
    {
        "id": 8,
        "title": "Segredos Perdidos da História",
        "author_id": 8,
        "ano_de_publicacao": 2020
    },
    {
        "id": 9,
        "title": "Paixão à Primeira Vista",
        "author_id": 9,
        "ano_de_publicacao": 2007
    },
    {
        "id": 10,
        "title": "Memórias do Passado",
        "author_id": 10,
        "ano_de_publicacao": 2011
    },
    {
        "id": 11,
        "title": "Versos de Amor",
        "author_id": 11,
        "ano_de_publicacao": 2019
    },
    {
        "id": 12,
        "title": "Pesadelos Noturnos",
        "author_id": 12,
        "ano_de_publicacao": 2009
    },
    {
        "id": 13,
        "title": "Um Amor para Recordar",
        "author_id": 13,
        "ano_de_publicacao": 2013
    },
    {
        "id": 14,
        "title": "A Ciência dos Planetas",
        "author_id": 14,
        "ano_de_publicacao": 2017
    },
    {
        "id": 15,
        "title": "Equilíbrio Interior",
        "author_id": 15,
        "ano_de_publicacao": 2015
    },
    {
        "id": 16,
        "title": "Caminhos Perdidos",
        "author_id": 16,
        "ano_de_publicacao": 2010
    },
    {
        "id": 17,
        "title": "No Limite da Loucura",
        "author_id": 17,
        "ano_de_publicacao": 2012
    },
    {
        "id": 18,
        "title": "Estratégias para o Sucesso",
        "author_id": 18,
        "ano_de_publicacao": 2014
    },
    {
        "id": 19,
        "title": "A Jornada do Herói",
        "author_id": 19,
        "ano_de_publicacao": 2008
    },
    {
        "id": 20,
        "title": "Segredos do Crime",
        "author_id": 20,
        "ano_de_publicacao": 2016
    },
    {
        "id": 21,
        "title": "Sombras do Passado",
        "author_id": 1,
        "ano_de_publicacao": 2006
    },
    {
        "id": 22,
        "title": "A Ilha Misteriosa",
        "author_id": 2,
        "ano_de_publicacao": 2011
    },
    {
        "id": 23,
        "title": "O Mistério do Anel Encantado",
        "author_id": 3,
        "ano_de_publicacao": 2013
    },
    {
        "id": 24,
        "title": "O Lado Sombrio da Alma",
        "author_id": 4,
        "ano_de_publicacao": 2017
    },
    {
        "id": 25,
        "title": "Revolução Social",
        "author_id": 5,
        "ano_de_publicacao": 2019
    },
    {
        "id": 26,
        "title": "O Assassinato na Villa",
        "author_id": 6,
        "ano_de_publicacao": 2007
    },
    {
        "id": 27,
        "title": "O Poder da Mente",
        "author_id": 7,
        "ano_de_publicacao": 2015
    },
    {
        "id": 28,
        "title": "Grandes Conspirações",
        "author_id": 8,
        "ano_de_publicacao": 2018
    },
    {
        "id": 29,
        "title": "Almas Gêmeas",
        "author_id": 9,
        "ano_de_publicacao": 2009
    },
    {
        "id": 30,
        "title": "O Segredo da Pirâmide",
        "author_id": 10,
        "ano_de_publicacao": 2010
    },
    {
        "id": 31,
        "title": "Poemas da Natureza",
        "author_id": 11,
        "ano_de_publicacao": 2012
    },
    {
        "id": 32,
        "title": "A Mansão Abandonada",
        "author_id": 12,
        "ano_de_publicacao": 2014
    },
    {
        "id": 33,
        "title": "Destino Traçado",
        "author_id": 13,
        "ano_de_publicacao": 2016
    },
    {
        "id": 34,
        "title": "O Universo em Números",
        "author_id": 14,
        "ano_de_publicacao": 2018
    },
    {
        "id": 35,
        "title": "Equilíbrio Emocional",
        "author_id": 15,
        "ano_de_publicacao": 2020
    },
    {
        "id": 36,
        "title": "Uma Volta ao Mundo",
        "author_id": 16,
        "ano_de_publicacao": 2011
    },
    {
        "id": 37,
        "title": "O Segredo do Abismo",
        "author_id": 17,
        "ano_de_publicacao": 2013
    },
    {
        "id": 38,
        "title": "Negócios de Sucesso",
        "author_id": 18,
        "ano_de_publicacao": 2015
    },
    {
        "id": 39,
        "title": "Aventuras na Floresta Encantada",
        "author_id": 19,
        "ano_de_publicacao": 2017
    },
    {
        "id": 40,
        "title": "O Mistério da Mansão Assombrada",
        "author_id": 20,
        "ano_de_publicacao": 2019
    }
]



export default books;