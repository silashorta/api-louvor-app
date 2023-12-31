'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('repertorios', [
      {
        "titulo": "A benção",
        "subtitulo": "The Blessing",
        "interprete": "Elevation Worship",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=Zp6aygmvzM4",
        "letra": ""
      },
      {
        "titulo": "A Ele a glória",
        "subtitulo": "",
        "interprete": "Diante do Trono",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=Q_MerFW9qA4",
        "letra": ""
      },
      {
        "titulo": "Abundante Graça",
        "subtitulo": "",
        "interprete": "United Tijuca",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "",
        "letra": ""
      },
      {
        "titulo": "Aclame ao Senhor",
        "subtitulo": "",
        "interprete": "Diante do Trono",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 60,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=U4l40DvaeGw",
        "letra": ""
      },
      {
        "titulo": "Agnus Dei",
        "subtitulo": "",
        "interprete": "David Quinlan",
        "tomFeminino": "",
        "tomMasculino": "A",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=p7U27NsuZbc",
        "letra": ""
      },
      {
        "titulo": "Altar",
        "subtitulo": "",
        "interprete": "Brasa Church",
        "tomFeminino": "E",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=gOnp0Kuq-9M",
        "letra": ""
      },
      {
        "titulo": "Aqui como no céu",
        "subtitulo": "Here as in Heaven",
        "interprete": "Elevation Worship",
        "tomFeminino": "A",
        "tomMasculino": "D",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=uxTc98K9OeU",
        "letra": ""
      },
      {
        "titulo": "As trevas estremecem",
        "subtitulo": "Tremble",
        "interprete": "Mariana Valadão",
        "tomFeminino": "Bb",
        "tomMasculino": "",
        "andamento": 75,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=P3SA6fO2_Ng",
        "letra": ""
      },
      {
        "titulo": "Alé que o Senhor venha",
        "subtitulo": "",
        "interprete": "Davi Fernandes + Kaleb e Josh",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=E0F9NvrSoa0",
        "letra": ""
      },
      {
        "titulo": "Atos 2",
        "subtitulo": "",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "Em",
        "tomMasculino": "",
        "andamento": 160,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=WWrU6LC_4ho",
        "letra": ""
      },
      {
        "titulo": "Aviva-nos / A Terra clama",
        "subtitulo": "",
        "interprete": "Davi Fernandes & Cultura do Céu",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "",
        "letra": ""
      },
      {
        "titulo": "Bondade de Deus",
        "subtitulo": "Goodness of God",
        "interprete": "Isaias Saad",
        "tomFeminino": "",
        "tomMasculino": "G",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=mZ9yZYo9Mmk",
        "letra": ""
      },
      {
        "titulo": "Cadeias Quebrar",
        "subtitulo": "Break Every Chain",
        "interprete": "Soraya Moraes",
        "tomFeminino": "C",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=GrL3DlrKAjI",
        "letra": ""
      },
      {
        "titulo": "Caminho no deserto",
        "subtitulo": "Way Maker",
        "interprete": "Leeland",
        "tomFeminino": "E",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=iJCV_2H9xD0",
        "letra": ""
      },
      {
        "titulo": "Canção ao Cordeiro",
        "subtitulo": "",
        "interprete": "Israel Salazar",
        "tomFeminino": "",
        "tomMasculino": "E",
        "andamento": 68,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=bxMzZVfh7zc",
        "letra": ""
      },
      {
        "titulo": "Canção do Apocalipse",
        "subtitulo": "",
        "interprete": "Diante do Trono",
        "tomFeminino": "G",
        "tomMasculino": "",
        "andamento": 60,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=5j0arvaKdqk",
        "letra": ""
      },
      {
        "titulo": "Canção do céu",
        "subtitulo": "",
        "interprete": "Gabriela Rocha + Jéssica Augusto",
        "tomFeminino": "F#",
        "tomMasculino": "A",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=2Z4-1R2GhRQ",
        "letra": ""
      },
      {
        "titulo": "Cercado de Glória",
        "subtitulo": "",
        "interprete": "Be One",
        "tomFeminino": "Em",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=4yZKR1GC8Ck",
        "letra": ""
      },
      {
        "titulo": "Champion",
        "subtitulo": "",
        "interprete": "Maverick City Music",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 73,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=wcDgUIy-lJY",
        "letra": ""
      },
      {
        "titulo": "Creio em Ti",
        "subtitulo": "Still Believe",
        "interprete": "Gabriela Rocha e Fernandinho",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=Ns_YqW_KbTI",
        "letra": ""
      },
      {
        "titulo": "Cultura do Céu",
        "subtitulo": "",
        "interprete": "Davi Fernandes",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 65,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=0Dg3gyZ1MzY",
        "letra": ""
      },
      {
        "titulo": "Deixa Queimar",
        "subtitulo": "",
        "interprete": "Som do Reino",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=951YV69gYaQ",
        "letra": ""
      },
      {
        "titulo": "Deus Poderoso",
        "subtitulo": "",
        "interprete": "Lukas Agostinho",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=zZ4SqOLqBhc",
        "letra": ""
      },
      {
        "titulo": "Digno",
        "subtitulo": "Worthy",
        "interprete": "Elevation Worship",
        "tomFeminino": "D",
        "tomMasculino": "",
        "andamento": 62,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=Ak5WTb-mgeA",
        "letra": ""
      },
      {
        "titulo": "Digno de Glória",
        "subtitulo": "",
        "interprete": "Asaph Borba",
        "tomFeminino": "G",
        "tomMasculino": "",
        "andamento": 45,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=h8tOJIvCM-s",
        "letra": ""
      },
      {
        "titulo": "Digno de Tudo",
        "subtitulo": "",
        "interprete": "Fernanda Ferro",
        "tomFeminino": "E",
        "tomMasculino": "",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=N1fVZ-2qtzQ",
        "letra": ""
      },
      {
        "titulo": "Digno é o Senhor",
        "subtitulo": "Worthy is the Lamb",
        "interprete": "Aline Barros",
        "tomFeminino": "D",
        "tomMasculino": "",
        "andamento": 75,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=stKPXkcW5v8",
        "letra": ""
      },
      {
        "titulo": "Ele cumprirá",
        "subtitulo": "",
        "interprete": "Banda Amém e Julliany Souza",
        "tomFeminino": "G",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=tF6-fjG51tc",
        "letra": ""
      },
      {
        "titulo": "Ele é Exaltado",
        "subtitulo": "",
        "interprete": "Adhemar de Campos",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 172,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=22c5Flzd8Iw",
        "letra": ""
      },
      {
        "titulo": "Ele é o Leão da Tribo de Judá",
        "subtitulo": "",
        "interprete": "Adhemar de Campos",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=vfuFvmoTO1o",
        "letra": ""
      },
      {
        "titulo": "Em nome de Jesus",
        "subtitulo": "In Jesus Name",
        "interprete": "Israel Houghton",
        "tomFeminino": "C#",
        "tomMasculino": "",
        "andamento": 105,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=qehwr2MMTqg",
        "letra": ""
      },
      {
        "titulo": "Em Seu Nome",
        "subtitulo": "",
        "interprete": "André Aquino",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=hA1aGIOGlSI",
        "letra": ""
      },
      {
        "titulo": "Emanuel",
        "subtitulo": "",
        "interprete": "Filipe Hitzschky e Gabriela Figueiredo",
        "tomFeminino": "",
        "tomMasculino": "A",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=ga4aPszZAlc",
        "letra": ""
      },
      {
        "titulo": "Emaús",
        "subtitulo": "",
        "interprete": "Morada",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=d7iMVvuZkyg",
        "letra": ""
      },
      {
        "titulo": "Enche-me",
        "subtitulo": "",
        "interprete": "Gabriela Rocha e Isaias Saad",
        "tomFeminino": "C#m",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=ozBlvwVizXI",
        "letra": ""
      },
      {
        "titulo": "Estamos de pé",
        "subtitulo": "",
        "interprete": "Marcus Salles",
        "tomFeminino": "",
        "tomMasculino": "G",
        "andamento": 50,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=4x-yrCz1D9g",
        "letra": ""
      },
      {
        "titulo": "Eu creio",
        "subtitulo": "Believe For It",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 78,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=2FEMS7p4sXI",
        "letra": ""
      },
      {
        "titulo": "Eu me rendo",
        "subtitulo": "I Surrender",
        "interprete": "Hillsong",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 76,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=gFS2qVMtD6g",
        "letra": ""
      },
      {
        "titulo": "Eu navegarei",
        "subtitulo": "",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=nSvxVCdj_gU",
        "letra": ""
      },
      {
        "titulo": "Eu te vejo em tudo",
        "subtitulo": "",
        "interprete": "Casa Worship",
        "tomFeminino": "G#",
        "tomMasculino": "",
        "andamento": 65,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=SFiu3KLNd34",
        "letra": ""
      },
      {
        "titulo": "Eu vou construir",
        "subtitulo": "",
        "interprete": "Juliano Son",
        "tomFeminino": "D",
        "tomMasculino": "A",
        "andamento": 73,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=1htnqzaKLP8",
        "letra": ""
      },
      {
        "titulo": "Existe um rio",
        "subtitulo": "In The River",
        "interprete": "Ana Nóbrega",
        "tomFeminino": "Dm",
        "tomMasculino": "",
        "andamento": 120,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=tfwVzJAnEHQ",
        "letra": ""
      },
      {
        "titulo": "Extraordinário",
        "subtitulo": "",
        "interprete": "United VP",
        "tomFeminino": "G",
        "tomMasculino": "B",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "#",
        "letra": ""
      },
      {
        "titulo": "Farás outra vez",
        "subtitulo": "Do it Again",
        "interprete": "Elevation Worship",
        "tomFeminino": "E",
        "tomMasculino": "A",
        "andamento": 86,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=ZOBIPb-6PTc",
        "letra": ""
      },
      {
        "titulo": "Filho do Deus Vivo",
        "subtitulo": "",
        "interprete": "Nívea Soares",
        "tomFeminino": "D#m",
        "tomMasculino": "",
        "andamento": 68,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=PdJoTcOgwUA",
        "letra": ""
      },
      {
        "titulo": "Fogo em teus olhos",
        "subtitulo": "",
        "interprete": "Louvor IIR",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=yQbbB-woXfY",
        "letra": ""
      },
      {
        "titulo": "Fogo nunca dorme",
        "subtitulo": "",
        "interprete": "Alessandro Villas Boas",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 65,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=3RLZBfA2ixs",
        "letra": ""
      },
      {
        "titulo": "Grandes coisas Ele fez",
        "subtitulo": "",
        "interprete": "United VP",
        "tomFeminino": "",
        "tomMasculino": "G",
        "andamento": 60,
        "compasso": "4/4",
        "linkYoutube": "#",
        "letra": ""
      },
      {
        "titulo": "Grave into Gradens",
        "subtitulo": "",
        "interprete": "Elevation Worship",
        "tomFeminino": "B",
        "tomMasculino": "E",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=KwX1f2gYKZ4",
        "letra": ""
      },
      {
        "titulo": "Hosana",
        "subtitulo": "",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 152,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=ceCMxv72Uqw",
        "letra": ""
      },
      {
        "titulo": "Já estive em outros lugares",
        "subtitulo": "",
        "interprete": "Alessandro Villas Boas",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 58,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=1OocIh8MLr0",
        "letra": ""
      },
      {
        "titulo": "Jeova Jireh",
        "subtitulo": "",
        "interprete": "Aline Barros",
        "tomFeminino": "G",
        "tomMasculino": "",
        "andamento": 66,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=YyFd_dXy494",
        "letra": ""
      },
      {
        "titulo": "Jesus é o centro",
        "subtitulo": "Jesus at The Center",
        "interprete": "Israel Houghton",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 65,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=cF8IfktCgqk",
        "letra": ""
      },
      {
        "titulo": "Jesus em tua presença",
        "subtitulo": "",
        "interprete": "Morada",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=aMpM68cb5MY",
        "letra": ""
      },
      {
        "titulo": "Jesus filho de Deus",
        "subtitulo": "",
        "interprete": "Fernandinho",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 75,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=mvKNu6mDHZQ",
        "letra": ""
      },
      {
        "titulo": "Leão",
        "subtitulo": "",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=HvVNXnSElrE",
        "letra": ""
      },
      {
        "titulo": "Leão e o Cordeiro",
        "subtitulo": "",
        "interprete": "Marcus Salles",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 90,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=lc8kQHrw2bk",
        "letra": ""
      },
      {
        "titulo": "Lugar Secreto",
        "subtitulo": "",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "C",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=YnrN0o0lubM",
        "letra": ""
      },
      {
        "titulo": "Maravilhoso",
        "subtitulo": "",
        "interprete": "Connect Music",
        "tomFeminino": "",
        "tomMasculino": "A",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=ZHzv-jRztFc",
        "letra": ""
      },
      {
        "titulo": "Me alegro em tua presença",
        "subtitulo": "",
        "interprete": "United VP",
        "tomFeminino": "",
        "tomMasculino": "C",
        "andamento": 75,
        "compasso": "4/4",
        "linkYoutube": "#",
        "letra": ""
      },
      {
        "titulo": "Me ama",
        "subtitulo": "",
        "interprete": "Diante do Trono",
        "tomFeminino": "D",
        "tomMasculino": "",
        "andamento": 75,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=lSwiHA8gymg",
        "letra": ""
      },
      {
        "titulo": "Me aproximou",
        "subtitulo": "",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=pSvE5r68a-o",
        "letra": ""
      },
      {
        "titulo": "Me atraiu",
        "subtitulo": "",
        "interprete": "Gabriela Rocha",
        "tomFeminino": "F",
        "tomMasculino": "",
        "andamento": 62,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=Z6cONvRUFZQ",
        "letra": ""
      },
      {
        "titulo": "Milagres",
        "subtitulo": "",
        "interprete": "Juliano Son",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=P92VCmjzlRU",
        "letra": ""
      },
      {
        "titulo": "Nada além do Sangue",
        "subtitulo": "",
        "interprete": "Fernandinho",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=csPaNdL6ndA",
        "letra": ""
      },
      {
        "titulo": "Nada Mais",
        "subtitulo": "",
        "interprete": "Gabriel Guedes",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=OUyLQ4LwEBE",
        "letra": ""
      },
      {
        "titulo": "Não seremos abalados",
        "subtitulo": "",
        "interprete": "Nívea Soares",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 75,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=db_etVIp1Lg",
        "letra": ""
      },
      {
        "titulo": "Nosso Deus",
        "subtitulo": "",
        "interprete": "Marcus Salles",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=alitGPNzEsI",
        "letra": ""
      },
      {
        "titulo": "Nova porção",
        "subtitulo": "",
        "interprete": "United VP",
        "tomFeminino": "E",
        "tomMasculino": "C",
        "andamento": 150,
        "compasso": "6/8",
        "linkYoutube": "#",
        "letra": ""
      },
      {
        "titulo": "O Espírito de Deus está aqui",
        "subtitulo": "",
        "interprete": "Ariane",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=7ivOU0qJUbQ",
        "letra": ""
      },
      {
        "titulo": "O grande Eu Sou",
        "subtitulo": "",
        "interprete": "Lukas Agostinho",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 77,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=SeTN0NjRvLo",
        "letra": ""
      },
      {
        "titulo": "O nosso general é Cristo",
        "subtitulo": "",
        "interprete": "Adhemar de Campos",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=XKFHXLzsZ5Q",
        "letra": ""
      },
      {
        "titulo": "Oceans",
        "subtitulo": "",
        "interprete": "Hillsong",
        "tomFeminino": "C",
        "tomMasculino": "",
        "andamento": 62,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=HVAR85rorvU",
        "letra": ""
      },
      {
        "titulo": "Oh quão lindo esse nome é",
        "subtitulo": "What a Beautiful Name",
        "interprete": "Kemuel",
        "tomFeminino": "D",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=V-n0FDCT2N4",
        "letra": ""
      },
      {
        "titulo": "Os anjos te louvam",
        "subtitulo": "",
        "interprete": "Eli Soares",
        "tomFeminino": "",
        "tomMasculino": "C#m",
        "andamento": 117,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=nl62W3rnXR8",
        "letra": ""
      },
      {
        "titulo": "Ousado amor",
        "subtitulo": "",
        "interprete": "Isaias Saad",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 168,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=wSKKEAnLTDw",
        "letra": ""
      },
      {
        "titulo": "Para que entre o rei",
        "subtitulo": "",
        "interprete": "Som do Reino",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=7eujlWBhS5Y",
        "letra": ""
      },
      {
        "titulo": "Para Ti eu vou",
        "subtitulo": "",
        "interprete": "Central 3",
        "tomFeminino": "B",
        "tomMasculino": "",
        "andamento": 68,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=tPrXw0oEgrM",
        "letra": ""
      },
      {
        "titulo": "Peace Be Still",
        "subtitulo": "",
        "interprete": "Bethel Worship",
        "tomFeminino": "G",
        "tomMasculino": "",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=dUpKZz0Nm7c",
        "letra": ""
      },
      {
        "titulo": "Pode morar aqui",
        "subtitulo": "",
        "interprete": "Theo Rubia",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 62,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=n0fDvJAyrQ8",
        "letra": ""
      },
      {
        "titulo": "Poderoso Deus",
        "subtitulo": "",
        "interprete": "Ellos",
        "tomFeminino": "",
        "tomMasculino": "D",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=SBFhh1-pvO8",
        "letra": ""
      },
      {
        "titulo": "Pra sempre",
        "subtitulo": "Forever",
        "interprete": "Fernandinho",
        "tomFeminino": "G#",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=DZvBlrJsFag",
        "letra": ""
      },
      {
        "titulo": "Promisses",
        "subtitulo": "",
        "interprete": "Maverick City",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 170,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=q5m09rqOoxE",
        "letra": ""
      },
      {
        "titulo": "Quando Ele vem",
        "subtitulo": "",
        "interprete": "Ana Nóbrega",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=oXwVjJ5XjQU",
        "letra": ""
      },
      {
        "titulo": "Que Ele cresça",
        "subtitulo": "",
        "interprete": "Deigma Marques",
        "tomFeminino": "",
        "tomMasculino": "D",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=pJCl7JnPN64",
        "letra": ""
      },
      {
        "titulo": "Que se abram os céus",
        "subtitulo": "",
        "interprete": "Nívea Soares",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 64,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=kXKwkQk528A",
        "letra": ""
      },
      {
        "titulo": "Quebra o meu vaso",
        "subtitulo": "",
        "interprete": "André Aquino e Luma Elpídio",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 57,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=RXlDfjDg738",
        "letra": ""
      },
      {
        "titulo": "Quem dizes que Eu sou",
        "subtitulo": "Who You Say I Am",
        "interprete": "Hillsong",
        "tomFeminino": "F#",
        "tomMasculino": "",
        "andamento": 174,
        "compasso": "6/8",
        "linkYoutube": "https://www.youtube.com/watch?v=2CeP-CutFiM",
        "letra": ""
      },
      {
        "titulo": "Refiner",
        "subtitulo": "",
        "interprete": "Maverick City",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 62,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=UGFCbmvk0vo",
        "letra": ""
      },
      {
        "titulo": "Rei do meu coração",
        "subtitulo": "King of My Heart",
        "interprete": "Be One",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=GQBJ2rZHAR8",
        "letra": ""
      },
      {
        "titulo": "Rendido estou",
        "subtitulo": "",
        "interprete": "Aline Barros e Fernandinho",
        "tomFeminino": "D",
        "tomMasculino": "",
        "andamento": 85,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=iXTCIBAHq7Q",
        "letra": ""
      },
      {
        "titulo": "Ruja o leão",
        "subtitulo": "",
        "interprete": "FHOP",
        "tomFeminino": "F#m",
        "tomMasculino": "",
        "andamento": 68,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=jtm9HiYZ7UQ",
        "letra": ""
      },
      {
        "titulo": "Senhor Tu És Bom",
        "subtitulo": "You Are Good",
        "interprete": "Israel Houghton",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 130,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=5KiQDoWo5t4",
        "letra": ""
      },
      {
        "titulo": "Seu amor me persegue",
        "subtitulo": "",
        "interprete": "Casa Worship",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 65,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=yJl-kZmONY8",
        "letra": ""
      },
      {
        "titulo": "Sinto Fluir",
        "subtitulo": "",
        "interprete": "Marcelo Markes e Casa Worship",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 60,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=bwUJsH6bVEI",
        "letra": ""
      },
      {
        "titulo": "Só quero ver você",
        "subtitulo": "",
        "interprete": "Dunamis",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 62,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=7BoTTLK1K_4",
        "letra": ""
      },
      {
        "titulo": "Só Tu é Santo",
        "subtitulo": "",
        "interprete": "Morada",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 62,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=Kh14SNPaHco",
        "letra": ""
      },
      {
        "titulo": "Te seguirei até o fim",
        "subtitulo": "",
        "interprete": "Caleb e Josh",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 58,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=PpW1Zcyraq8",
        "letra": ""
      },
      {
        "titulo": "To Good to not Believe",
        "subtitulo": "",
        "interprete": "Elevation Worship",
        "tomFeminino": "",
        "tomMasculino": "C",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=lKVX_XdaP04",
        "letra": ""
      },
      {
        "titulo": "Tu és tudo",
        "subtitulo": "",
        "interprete": "Alessandro Villas Boas",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": "",
        "compasso": "",
        "linkYoutube": "https://www.youtube.com/watch?v=0dZXyJgd_dw",
        "letra": ""
      },
      {
        "titulo": "Tua presença vale mais",
        "subtitulo": "",
        "interprete": "Mateus Brito",
        "tomFeminino": "",
        "tomMasculino": "Bb",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=9PdQkZAf7GE",
        "letra": ""
      },
      {
        "titulo": "Único",
        "subtitulo": "",
        "interprete": "FHOP",
        "tomFeminino": "Bb",
        "tomMasculino": "G",
        "andamento": 65,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=0vCmIKyJPRI",
        "letra": ""
      },
      {
        "titulo": "Vem me buscar",
        "subtitulo": "",
        "interprete": "Jefferson e Suellen",
        "tomFeminino": "",
        "tomMasculino": "",
        "andamento": 67,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=t6Pd8gXIASU",
        "letra": ""
      },
      {
        "titulo": "Vitorioso És",
        "subtitulo": "",
        "interprete": "Gabriel Guedes",
        "tomFeminino": "A",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=k7tGP-vidwc",
        "letra": ""
      },
      {
        "titulo": "Volto os meu olhos + Vem derrama",
        "subtitulo": "",
        "interprete": "Rapha Gonçalves",
        "tomFeminino": "G",
        "tomMasculino": "",
        "andamento": 72,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=q-xrKrybvmc",
        "letra": ""
      },
      {
        "titulo": "Yahweh se manifestará",
        "subtitulo": "",
        "interprete": "Oasis Ministry",
        "tomFeminino": "Em",
        "tomMasculino": "",
        "andamento": 70,
        "compasso": "4/4",
        "linkYoutube": "https://www.youtube.com/watch?v=4GK_PwYnrEs",
        "letra": ""
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
