const data= [
    {
    "Alemania": {
        "pais":"Alemania",
      "opcion_1": {
        "fecha": "21 de Marzo 2025",
        "duracion": "1 semana",
        "pasajeros": {
          "adultos": 2,
          "menores": 2
        },
        "transporte": "Avión y bus",
        "lugares_a_visitar": [
          "Berlín",
          "Potsdam",
          "Múnich",
          "Neuschwanstein",
          "Núremberg"
        ],
        "hospedaje": "Hotel Indigo Berlin - Ku'Damm, 4 Estrellas",
        "valor": "U$D 4999.99"
      },
      "opcion_2": {
        "fecha": "23 de marzo de 2025",
        "duracion": "2 semanas",
        "pasajeros": {
          "adultos": 4,
          "menores":0
        },
        "transporte": "Avión y bus",
        "lugares_a_visitar": [
          "Colonia",
          "Núremberg",
          "Dresde",
          "Leipzig",
          "Stuttgart"
        ],
        "hospedaje": "Hotel Excelsior Ernst, 5 Estrellas",
        "valor": "U$D 8599.99"
      }
    }
  },

  {
    "Italia": {
      "pais": "Italia",
      "opcion_1": {
        "fecha": "10 de junio de 2025",
        "duracion": "5 días",
        "pasajeros": {
          "adultos": 2,
          "menores": 0
        },
        "transporte": "Avión y bus",
        "valor": "U$D 2499.99",
        "lugares_a_visitar": [
          "Nápoles",
          "Ruinas de Pompeya",
          "Monte Vesubio",
          "Herculano",
          "Costa Amalfitana"
        ],
        "hospedaje": "Hotel Forum Pompei, 4 Estrellas"
      },
      "opcion_2": {
        "fecha": "15 de septiembre de 2025",
        "duracion": "4 días",
        "pasajeros": {
          "adultos": 1,
          "menores": 0
        },
        "transporte": "Avión y bus",
        "valor": "U$D 1999.99",
        "lugares_a_visitar": [
          "Nápoles",
          "Ruinas de Pompeya",
          "Casas de los Gladiadores",
          "Anfiteatro de Pompeya",
          "Monte Vesubio"
        ],
        "hospedaje": "Domus Michaeli B&B, 5 Estrellas"
      }
    }
  },
  {
    "Japon": {
      "pais": "Japón",
      "opcion_1": {
        "fecha": "22 de septiembre de 2025",
        "duracion": "1 semana",
        "pasajeros": {
          "adultos": 2,
          "menores": 1
        },
        "transporte": "Avión y bus",
        "valor": "U$D 3499.99",
        "lugares_a_visitar": [
          "Fukushima",
          "Planta Nuclear de Fukushima",
          "Parque Nacional Bandai-Asahi",
          "Aizu-Wakamatsu",
          "Onsen en Iizaka",
          "Región Vinícola de Fukushima"
        ],
        "hospedaje": "Akakura Kanko Hotel, 4 Estrellas"
      },
      "opcion_2": {
        "fecha": "20 de abril de 2025",
        "duracion": "1 semana",
        "pasajeros": {
          "adultos": 2,
          "menores": 0
        },
        "transporte": "Avión y bus",
        "valor": "U$D 5999.99",
        "lugares_a_visitar": [
          "Fukushima",
          "Planta Nuclear de Fukushima",
          "Lago Inawashiro",
          "Shirakawa",
          "Ouchi-juku",
          "Iwaki"
        ],
        "hospedaje": "APA HOTEL JOETSU-MYOKO-EKIMAE, 4 Estrellas"
      }
    }
  },
  {
    "Corea_del_Norte": {
      "pais": "Corea del Norte",
      "opcion_1": {
        "fecha": "22 de septiembre de 2025",
        "duracion": "1 semana",
        "pasajeros": {
          "adultos": 2,
          "menores": 3
        },
        "transporte": "Avión y bus",
        "valor": "U$D 2999.99",
        "lugares_a_visitar": [
          "Pyongyang",
          "Torre Juche",
          "Plaza Kim Il-sung",
          "DMZ - Zona Desmilitarizada",
          "Templo de Pohyon",
          "Kaesong",
          "Presa del Mar Oeste"
        ],
        "hospedaje": "Hotel Pyongyang, 3 Estrellas"
      },
      "opcion_2": {
        "fecha": "20 de abril de 2025",
        "duracion": "1 semana",
        "pasajeros": {
          "adultos": 2,
          "menores": 2
        },
        "transporte": "Avión y bus",
        "valor": "U$D 3999.99",
        "lugares_a_visitar": [
          "Pyongyang",
          "Gran Monumento Mansudae",
          "Museo de la Guerra de la Liberación de la Patria",
          "Panmunjom en la DMZ",
          "Wonsan",
          "Monte Kumgang",
          "Gran Biblioteca del Pueblo"
        ],
        "hospedaje": "Hotel Pyongyang, 3 Estrellas"
      }
    }
  },
  {
    "Ucrania": {
      "pais": "Ucrania",
      "opcion_1": {
        "fecha": "15 de mayo de 2025",
        "duracion": "4 días",
        "pasajeros": {
          "adultos": 2,
          "menores": 1
        },
        "transporte": "Avión y bus",
        "valor": "U$D 1999.99",
        "lugares_a_visitar": [
          "Kiev",
          "Chernobyl",
          "Planta Nuclear de Chernobyl",
          "Pripyat"
        ],
        "hospedaje": "Hotel InterContinental Kiev, 4 Estrellas"
      },
      "opcion_2": {
        "fecha": "20 de septiembre de 2025",
        "duracion": "3 días",
        "pasajeros": {
          "adultos": 2,
          "menores": 0
        },
        "transporte": "Avión y bus",
        "valor": "U$D 1799.99",
        "lugares_a_visitar": [
          "Leópolis",
          "Castillo de Olesko",
          "Castillo de Pidhirtsi",
          "Castillo de Zolochiv"
        ],
        "hospedaje": "Hotel Leopolis, 4 Estrellas"
      }
    }
  },
  {
    "Uruguay": {
      "pais": "Uruguay",
      "opcion_1": {
        "fecha": "5 de marzo de 2025",
        "duracion": "3 días",
        "pasajeros": {
          "adultos": 2,
          "menores": 0
        },
        "transporte": "Bus",
        "valor": "U$D 899.99",
        "lugares_a_visitar": [
          "Montevideo",
          "Salsipuedes",
          "Museo Indígena de Tacuarembó"
        ],
        "hospedaje": "Hotel Carlos Gardel, 3 Estrellas"
      },
      "opcion_2": {
        "fecha": "12 de octubre de 2025",
        "duracion": "4 días",
        "pasajeros": {
          "adultos": 2,
          "menores": 2
        },
        "transporte": "Bus",
        "valor": "U$D 999.99",
        "lugares_a_visitar": [
          "Montevideo",
          "Salsipuedes",
          "Quebrada de los Cuervos"
        ],
        "hospedaje": "Hotel Cottage Puerto Buceo, 5 Estrellas"
      }
    }
  }
  
]

export default data;