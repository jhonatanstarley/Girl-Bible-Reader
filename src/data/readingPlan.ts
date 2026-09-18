/**
 * Plano de leitura da Bíblia em 1 ano.
 * Ordem e textos idênticos ao app original — a ordem define o índice de cada
 * dia (dayIndex), que é a chave usada no localStorage (`day{N}`). Alterar a
 * ordem aqui quebraria o progresso já salvo pelos usuários atuais.
 */
export type ReadingPlanData = Record<string, string[]>;

export const readingPlanData: ReadingPlanData = {
  "Os Escritos de Moisés": [
    "Gênesis 1-3", "Gênesis 4-7", "Gênesis 8-11", "Gênesis 12-15 🟥", "Gênesis 16-18 🟥",
    "Gênesis 19-22 🟥", "Gênesis 23-24 🟥", "Gênesis 25-27 🟥", "Gênesis 28-30 🟥", "Gênesis 31-32 🟥",
    "Gênesis 33-34 🟥", "Gênesis 35-37 🟥", "Gênesis 38-40 🟥", "Gênesis 41-42 🟥", "Gênesis 43-45 🟥",
    "Gênesis 46-48 🟥", "Gênesis 49-50 🟥", "Êxodo 1-4 🟥", "Êxodo 5-7 🟥", "Êxodo 8-10 🟥",
    "Êxodo 11-13 🟥", "Êxodo 14-15 🟥", "Êxodo 16-18 🟥", "Êxodo 19-21 🟥", "Êxodo 22-25",
    "Êxodo 26-28", "Êxodo 29-30", "Êxodo 31-33 🟥", "Êxodo 34-35 🟥", "Êxodo 36-38",
    "Êxodo 39-40", "Levítico 1-4", "Levítico 5-7", "Levítico 8-10", "Levítico 11-13",
    "Levítico 14-15", "Levítico 16-18", "Levítico 19-21", "Levítico 22-23", "Levítico 24-25",
    "Levítico 26-27", "Números 1-3", "Números 4-6", "Números 7-9", "Números 10-12 🟥",
    "Números 13-15 🟥", "Números 16-18 🟥", "Números 19-21 🟥", "Números 22-24 🟥", "Números 25-27 🟥",
    "Números 28-30", "Números 31-32 🟥", "Números 33-36 🟥", "Deuteronômio 1-2", "Deuteronômio 3-4 🟥",
    "Deuteronômio 5-7", "Deuteronômio 8-10", "Deuteronômio 11-13", "Deuteronômio 14-16", "Deuteronômio 17-19 🟥",
    "Deuteronômio 20-22", "Deuteronômio 23-26", "Deuteronômio 27-28", "Deuteronômio 29-31 🟥", "Deuteronômio 32 🟥",
    "Deuteronômio 33-34 🟥"
  ],
  "Israel Entra na Terra Prometida": [
    "Josué 1-4 🟥", "Josué 5-7 🟥", "Josué 8-9 🟥", "Josué 10-12 🟥", "Josué 13-15 🟥",
    "Josué 16-18 🟥", "Josué 19-21 🟥", "Josué 22-24 🟥", "Juízes 1-2 🟥", "Juízes 3-5 🟥",
    "Juízes 6-7 🟥", "Juízes 8-9 🟥", "Juízes 10-11 🟥", "Juízes 12-13 🟥", "Juízes 14-16 🟥",
    "Juízes 17-19 🟥", "Juízes 20-21 🟥", "Rute 1-4 🟥"
  ],
  "Quando os Reis Governavam Israel": [
    "1 Samuel 1-2 🟥", "1 Samuel 3-6 🟥", "1 Samuel 7-9 🟥", "1 Samuel 10-12 🟥", "1 Samuel 13-14 🟥",
    "1 Samuel 15-16 🟥", "1 Samuel 17-18 🟥", "1 Samuel 19-21 🟥", "1 Samuel 22-24 🟥", "1 Samuel 25-27 🟥",
    "1 Samuel 28-31 🟥", "2 Samuel 1-2 🟥", "2 Samuel 3-5 🟥", "2 Samuel 6-8 🟥", "2 Samuel 9-12 🟥",
    "2 Samuel 13-14 🟥", "2 Samuel 15-16 🟥", "2 Samuel 17-18 🟥", "2 Samuel 19-20 🟥", "2 Samuel 21-22 🟥",
    "2 Samuel 23-24 🟥", "1 Reis 1-2 🟥", "1 Reis 3-5 🟥", "1 Reis 6-7 🟥", "1 Reis 8 🟥",
    "1 Reis 9-10 🟥", "1 Reis 11-12 🟥", "1 Reis 13-14 🟥", "1 Reis 15-17 🟥", "1 Reis 18-19 🟥",
    "1 Reis 20-21 🟥", "1 Reis 22 🟥", "2 Reis 1-3 🟥", "2 Reis 4-5 🟥", "2 Reis 6-8 🟥",
    "2 Reis 9-10 🟥", "2 Reis 11-13 🟥", "2 Reis 14-15 🟥", "2 Reis 16-17 🟥", "2 Reis 18-19 🟥",
    "2 Reis 20-22 🟥", "2 Reis 23-25 🟥", "1 Crônicas 1-2", "1 Crônicas 3-5", "1 Crônicas 6-7",
    "1 Crônicas 8-10", "1 Crônicas 11-12", "1 Crônicas 13-15", "1 Crônicas 16-17", "1 Crônicas 18-20",
    "1 Crônicas 21-23", "1 Crônicas 24-26", "1 Crônicas 27-29", "2 Crônicas 1-3", "2 Crônicas 4-6",
    "2 Crônicas 7-9", "2 Crônicas 10-14", "2 Crônicas 15-18", "2 Crônicas 19-22", "2 Crônicas 23-25",
    "2 Crônicas 26-28", "2 Crônicas 29-30", "2 Crônicas 31-33", "2 Crônicas 34-36"
  ],
  "Os Judeus Retornam do Exílio": [
    "Esdras 1-3", "Esdras 4-7 🟥", "Esdras 8-10 🟥", "Neemias 1-3 🟥", "Neemias 4-6 🟥",
    "Neemias 7-8 🟥", "Neemias 9-10 🟥", "Neemias 11-13 🟥", "Ester 1-4 🟥", "Ester 5-10 🟥"
  ],
  "Os Escritos de Moisés - Jó": [
    "Jó 1-5", "Jó 6-9", "Jó 10-14", "Jó 15-18", "Jó 19-20",
    "Jó 21-24", "Jó 25-29", "Jó 30-31", "Jó 32-34", "Jó 35-38",
    "Jó 39-42"
  ],
  "Livros de Cânticos e de Sabedoria Prática": [
    "Salmos 1-8", "Salmos 9-16", "Salmos 17-19", "Salmos 20-25", "Salmos 26-31",
    "Salmos 32-35", "Salmos 36-38", "Salmos 39-42", "Salmos 43-47", "Salmos 48-52",
    "Salmos 53-58", "Salmos 59-64", "Salmos 65-68", "Salmos 69-72", "Salmos 73-77",
    "Salmos 78-79", "Salmos 80-86", "Salmos 87-90", "Salmos 91-96", "Salmos 97-103",
    "Salmos 104-105", "Salmos 106-108", "Salmos 109-115", "Salmos 116-119:63", "Salmos 119:64-176",
    "Salmos 120-129", "Salmos 130-138", "Salmos 139-144", "Salmos 145-150", "Provérbios 1-4",
    "Provérbios 5-8", "Provérbios 9-12", "Provérbios 13-16", "Provérbios 17-19", "Provérbios 20-22",
    "Provérbios 23-27", "Provérbios 28-31", "Eclesiastes 1-4", "Eclesiastes 5-8", "Eclesiastes 9-12",
    "Cânticos de Salomão 1-8"
  ],
  "Os Profetas": [
    "Isaías 1-4", "Isaías 5-7", "Isaías 8-10", "Isaías 11-14", "Isaías 15-19",
    "Isaías 20-24", "Isaías 25-28", "Isaías 29-31", "Isaías 32-35", "Isaías 36-37",
    "Isaías 38-40", "Isaías 41-43", "Isaías 44-47", "Isaías 48-50", "Isaías 51-55",
    "Isaías 56-58", "Isaías 59-62", "Isaías 63-66", "Jeremias 1-3", "Jeremias 4-5",
    "Jeremias 6-7", "Jeremias 8-10", "Jeremias 11-13", "Jeremias 14-16", "Jeremias 17-20",
    "Jeremias 21-23", "Jeremias 24-26", "Jeremias 27-29", "Jeremias 30-31", "Jeremias 32-33",
    "Jeremias 34-36", "Jeremias 37-39", "Jeremias 40-42", "Jeremias 43-44", "Jeremias 45-48",
    "Jeremias 49-50", "Jeremias 51-52", "Lamentações 1-2", "Lamentações 3-5", "Ezequiel 1-3",
    "Ezequiel 4-6", "Ezequiel 7-9", "Ezequiel 10-12", "Ezequiel 13-15", "Ezequiel 16",
    "Ezequiel 17-18", "Ezequiel 19-21", "Ezequiel 22-23", "Ezequiel 24-26", "Ezequiel 27-28",
    "Ezequiel 29-31", "Ezequiel 32-33", "Ezequiel 34-36", "Ezequiel 37-38", "Ezequiel 39-40",
    "Ezequiel 41-43", "Ezequiel 44-45", "Ezequiel 46-48", "Daniel 1-2", "Daniel 3-4",
    "Daniel 5-7", "Daniel 8-10", "Daniel 11-12", "Oséias 1-7", "Oséias 8-14",
    "Joel 1-3", "Amós 1-5", "Amós 6-9", "Obadias/Jonas", "Miquéias 1-7",
    "Naum/Habacuque", "Sofonias/Ageu", "Zacarias 1-7", "Zacarias 8-11", "Zacarias 12-14",
    "Malaquias 1-4"
  ],
  "Relatos da Vida e do Ministério de Jesus": [
    "Mateus 1-4", "Mateus 5-7", "Mateus 8-10", "Mateus 11-13", "Mateus 14-17",
    "Mateus 18-20", "Mateus 21-23", "Mateus 24-25", "Mateus 26", "Mateus 27-28",
    "Marcos 1-3 🔵", "Marcos 4-5 🔵", "Marcos 6-8 🔵", "Marcos 9-10 🔵", "Marcos 11-13 🔵",
    "Marcos 14-16 🔵", "Lucas 1-2", "Lucas 3-5", "Lucas 6-7", "Lucas 8-9",
    "Lucas 10-11", "Lucas 12-13", "Lucas 14-17", "Lucas 18-19", "Lucas 20-22",
    "Lucas 23-24", "João 1-3", "João 4-5", "João 6-7", "João 8-9",
    "João 10-12", "João 13-15", "João 16-18", "João 19-21"
  ],
  "Crescimento da Congregação Cristã": [
    "Atos 1-3 🔵", "Atos 4-6 🔵", "Atos 7-8 🔵", "Atos 9-11 🔵", "Atos 12-14 🔵",
    "Atos 15-16 🔵", "Atos 17-19 🔵", "Atos 20-21 🔵", "Atos 22-23 🔵", "Atos 24-26 🔵",
    "Atos 27-28 🔵"
  ],
  "As Cartas de Paulo": [
    "Romanos 1-3", "Romanos 4-7", "Romanos 8-11", "Romanos 12-16", "1 Coríntios 1-6",
    "1 Coríntios 7-10", "1 Coríntios 11-14", "1 Coríntios 15-16", "2 Coríntios 1-6", "2 Coríntios 7-10",
    "2 Coríntios 11-13", "Gálatas 1-6", "Efésios 1-6", "Filipenses 1-4", "Colossenses 1-4",
    "1 Tessalonicenses 1-5", "2 Tessalonicenses 1-3", "1 Timóteo 1-6", "2 Timóteo 1-4", "Tito/Filêmon",
    "Hebreus 1-6", "Hebreus 7-10", "Hebreus 11-13"
  ],
  "Escritos de Outros Apostolos e Discípulos": [
    "Tiago 1-5", "1 Pedro 1-5", "2 Pedro 1-3", "1 João 1-5", "2 João/3 João/Judas",
    "Apocalipse 1-4", "Apocalipse 5-9", "Apocalipse 10-14", "Apocalipse 15-18", "Apocalipse 19-22"
  ]
};
