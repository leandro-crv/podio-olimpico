const codigos = [
  {
    "nomeBandeira": "Afeganistão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Afghanistan.svg",
    "coi": "AFG",
    "fifa": "AFG",
    "iso3": "AFG",
    "iso2": "AF",
    "nomePais": "Afeganistão"
  },
  {
    "nomeBandeira": "África do Sul",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    "coi": "RSA",
    "fifa": "RSA",
    "iso3": "ZAF",
    "iso2": "ZA",
    "nomePais": "África do Sul"
  },
  {
    "nomeBandeira": "Ilhas Åland",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/52/Flag_of_%C3%85land.svg",
    "coi": "",
    "fifa": "",
    "iso3": "ALA",
    "iso2": "AX",
    "nomePais": "Ilhas Alanda"
  },
  {
    "nomeBandeira": "Albânia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
    "coi": "ALB",
    "fifa": "ALB",
    "iso3": "ALB",
    "iso2": "AL",
    "nomePais": "Albânia"
  },
  {
    "nomeBandeira": "Alemanha",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    "coi": "GER",
    "fifa": "GER",
    "iso3": "DEU",
    "iso2": "DE",
    "nomePais": "Alemanha"
  },
  {
    "nomeBandeira": "Alemanha Ocidental",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
    "coi": "FRG",
    "fifa": "",
    "iso3": "",
    "iso2": "",
    "nomePais": "Alemanha Ocidental"
  },
  {
    "nomeBandeira": "Alemanha Oriental",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Flag_of_the_German_Democratic_Republic.svg/125px-Flag_of_the_German_Democratic_Republic.svg.png",
    "coi": "GDR",
    "fifa": "",
    "iso3": "",
    "iso2": "",
    "nomePais": "Alemanha Oriental"
  },
  {
    "nomeBandeira": "Andorra",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg",
    "coi": "AND",
    "fifa": "AND",
    "iso3": "AND",
    "iso2": "AD",
    "nomePais": "Andorra"
  },
  {
    "nomeBandeira": "Angola",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
    "coi": "ANG",
    "fifa": "ANG",
    "iso3": "AGO",
    "iso2": "AO",
    "nomePais": "Angola"
  },
  {
    "nomeBandeira": "Anguilla",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",
    "coi": "",
    "fifa": "AIA",
    "iso3": "AIA",
    "iso2": "AI",
    "nomePais": "Anguilla"
  },
  {
    "nomeBandeira": "Antártida",
    "bandeira": "",
    "coi": "",
    "fifa": "",
    "iso3": "ATA",
    "iso2": "AQ",
    "nomePais": "Antárctida"
  },
  {
    "nomeBandeira": "Antígua e Barbuda",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg",
    "coi": "ANT",
    "fifa": "ATG",
    "iso3": "ATG",
    "iso2": "AG",
    "nomePais": "Antígua e Barbuda"
  },
  {
    "nomeBandeira": "Antilhas Holandesas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Flag_of_the_Netherlands_Antilles_(1959%E2%80%931986).svg",
    "coi": "AHO",
    "fifa": "ANT",
    "iso3": "ANT",
    "iso2": "AN",
    "nomePais": "Antilhas Holandesas"
  },
  {
    "nomeBandeira": "Arábia Saudita",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg",
    "coi": "KSA",
    "fifa": "KSA",
    "iso3": "SAU",
    "iso2": "SA",
    "nomePais": "Arábia Saudita"
  },
  {
    "nomeBandeira": "Argélia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg",
    "coi": "ALG",
    "fifa": "ALG",
    "iso3": "DZA",
    "iso2": "DZ",
    "nomePais": "Argélia"
  },
  {
    "nomeBandeira": "Argentina",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
    "coi": "ARG",
    "fifa": "ARG",
    "iso3": "ARG",
    "iso2": "AR",
    "nomePais": "Argentina"
  },
  {
    "nomeBandeira": "Armênia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
    "coi": "ARM",
    "fifa": "ARM",
    "iso3": "ARM",
    "iso2": "AM",
    "nomePais": "Arménia"
  },
  {
    "nomeBandeira": "Aruba",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Aruba.svg",
    "coi": "ARU",
    "fifa": "ARU",
    "iso3": "ABW",
    "iso2": "AW",
    "nomePais": "Aruba"
  },
  {
    "nomeBandeira": "Austrália",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg",
    "coi": "AUS",
    "fifa": "AUS",
    "iso3": "AUS",
    "iso2": "AU",
    "nomePais": "Austrália"
  },
  {
    "nomeBandeira": "Áustria",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
    "coi": "AUT",
    "fifa": "AUT",
    "iso3": "AUT",
    "iso2": "AT",
    "nomePais": "Austria"
  },
  {
    "nomeBandeira": "Azerbaijão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
    "coi": "AZE",
    "fifa": "AZE",
    "iso3": "AZE",
    "iso2": "AZ",
    "nomePais": "Azerbaijão"
  },
  {
    "nomeBandeira": "Bahamas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg",
    "coi": "BAH",
    "fifa": "BAH",
    "iso3": "BHS",
    "iso2": "BS",
    "nomePais": "Bahamas"
  },
  {
    "nomeBandeira": "Bahrein",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg",
    "coi": "BRN",
    "fifa": "BHR",
    "iso3": "BHR",
    "iso2": "BH",
    "nomePais": "Bahrein"
  },
  {
    "nomeBandeira": "Bangladesh",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
    "coi": "BAN",
    "fifa": "BAN",
    "iso3": "BGD",
    "iso2": "BD",
    "nomePais": "Bangladesh"
  },
  {
    "nomeBandeira": "Barbados",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg",
    "coi": "BAR",
    "fifa": "BRB",
    "iso3": "BRB",
    "iso2": "BB",
    "nomePais": "Barbados"
  },
  {
    "nomeBandeira": "Bélgica",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
    "coi": "BEL",
    "fifa": "BEL",
    "iso3": "BEL",
    "iso2": "BE",
    "nomePais": "Bélgica"
  },
  {
    "nomeBandeira": "Belize",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
    "coi": "BIZ",
    "fifa": "BLZ",
    "iso3": "BLZ",
    "iso2": "BZ",
    "nomePais": "Belize"
  },
  {
    "nomeBandeira": "Benim",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg",
    "coi": "BEN",
    "fifa": "BEN",
    "iso3": "BEN",
    "iso2": "BJ",
    "nomePais": "Benim"
  },
  {
    "nomeBandeira": "Bermudas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bermuda.svg",
    "coi": "BER",
    "fifa": "BER",
    "iso3": "BMU",
    "iso2": "BM",
    "nomePais": "Bermudas"
  },
  {
    "nomeBandeira": "Bielorrússia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg",
    "coi": "BLR",
    "fifa": "BLR",
    "iso3": "BLR",
    "iso2": "BY",
    "nomePais": "Bielorrússia"
  },
  {
    "nomeBandeira": "Butão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
    "coi": "BHU",
    "fifa": "BHU",
    "iso3": "BTN",
    "iso2": "BT",
    "nomePais": "Butão"
  },
  {
    "nomeBandeira": "Bolívia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bolivia_Flag.svg",
    "coi": "BOL",
    "fifa": "BOL",
    "iso3": "BOL",
    "iso2": "BO",
    "nomePais": "Bolívia"
  },
  {
    "nomeBandeira": "Bósnia e Herzegovina",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg",
    "coi": "BIH",
    "fifa": "BIH",
    "iso3": "BIH",
    "iso2": "BA",
    "nomePais": "Bósnia e Herzegovina"
  },
  {
    "nomeBandeira": "Botswana",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg",
    "coi": "BOT",
    "fifa": "BOT",
    "iso3": "BWA",
    "iso2": "BW",
    "nomePais": "Botsuana"
  },
  {
    "nomeBandeira": "Ilha Bouvet",
    "bandeira": "",
    "coi": "",
    "fifa": "",
    "iso3": "BVT",
    "iso2": "BV",
    "nomePais": "Ilha Bouvet"
  },
  {
    "nomeBandeira": "Brasil",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    "coi": "BRA",
    "fifa": "BRA",
    "iso3": "BRA",
    "iso2": "BR",
    "nomePais": "Brasil"
  },
  {
    "nomeBandeira": "Brunei",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg",
    "coi": "BRU",
    "fifa": "BRU",
    "iso3": "BRN",
    "iso2": "BN",
    "nomePais": "Brunei"
  },
  {
    "nomeBandeira": "Bulgária",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
    "coi": "BUL",
    "fifa": "BUL",
    "iso3": "BGR",
    "iso2": "BG",
    "nomePais": "Bulgária"
  },
  {
    "nomeBandeira": "Burkina Faso",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg",
    "coi": "BUR",
    "fifa": "BFA",
    "iso3": "BFA",
    "iso2": "BF",
    "nomePais": "Burkina Faso"
  },
  {
    "nomeBandeira": "Burundi",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg",
    "coi": "BDI",
    "fifa": "BDI",
    "iso3": "BDI",
    "iso2": "BI",
    "nomePais": "Burundi"
  },
  {
    "nomeBandeira": "Camboja",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg",
    "coi": "CAM",
    "fifa": "CAM",
    "iso3": "KHM",
    "iso2": "KH",
    "nomePais": "Camboja"
  },
  {
    "nomeBandeira": "Camarões",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg",
    "coi": "CMR",
    "fifa": "CMR",
    "iso3": "CMR",
    "iso2": "CM",
    "nomePais": "Camarões"
  },
  {
    "nomeBandeira": "Canadá",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_(Pantone).svg",
    "coi": "CAN",
    "fifa": "CAN",
    "iso3": "CAN",
    "iso2": "CA",
    "nomePais": "Canadá"
  },
  {
    "nomeBandeira": "",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg",
    "coi": "CPV",
    "fifa": "CPV",
    "iso3": "CPV",
    "iso2": "CV",
    "nomePais": "Cabo Verde"
  },
  {
    "nomeBandeira": "Ilhas Cayman",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_the_Cayman_Islands.svg",
    "coi": "CAY",
    "fifa": "CAY",
    "iso3": "CYM",
    "iso2": "KY",
    "nomePais": "Ilhas Cayman"
  },
  {
    "nomeBandeira": "Cazaquistão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg",
    "coi": "KAZ",
    "fifa": "KAZ",
    "iso3": "KAZ",
    "iso2": "KZ",
    "nomePais": "Cazaquistão"
  },
  {
    "nomeBandeira": "Chade",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg",
    "coi": "CHA",
    "fifa": "CHA",
    "iso3": "TCD",
    "iso2": "TD",
    "nomePais": "Chade"
  },
  {
    "nomeBandeira": "Chile",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
    "coi": "CHI",
    "fifa": "CHI",
    "iso3": "CHL",
    "iso2": "CL",
    "nomePais": "Chile"
  },
  {
    "nomeBandeira": "China",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    "coi": "CHN",
    "fifa": "CHN",
    "iso3": "CHN",
    "iso2": "CN",
    "nomePais": "China"
  },
  {
    "nomeBandeira": "Chipre",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg",
    "coi": "CYP",
    "fifa": "CYP",
    "iso3": "CYP",
    "iso2": "CY",
    "nomePais": "Chipre"
  },
  {
    "nomeBandeira": "Ilha do Natal",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/67/Flag_of_Christmas_Island.svg",
    "coi": "",
    "fifa": "",
    "iso3": "CXR",
    "iso2": "CX",
    "nomePais": "Ilha Christmas"
  },
  {
    "nomeBandeira": "Ilhas Cocos (Keeling)",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Cocos_(Keeling)_Islands.svg",
    "coi": "",
    "fifa": "",
    "iso3": "CCK",
    "iso2": "CC",
    "nomePais": "Ilhas Cocos"
  },
  {
    "nomeBandeira": "Colômbia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
    "coi": "COL",
    "fifa": "COL",
    "iso3": "COL",
    "iso2": "CO",
    "nomePais": "Colômbia"
  },
  {
    "nomeBandeira": "Comores",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/df/Flag_of_the_Comoros_(3-2).svg",
    "coi": "COM",
    "fifa": "COM",
    "iso3": "COM",
    "iso2": "KM",
    "nomePais": "Comores"
  },
  {
    "nomeBandeira": "República do Congo",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg",
    "coi": "CGO",
    "fifa": "CGO",
    "iso3": "COG",
    "iso2": "CG",
    "nomePais": "Congo"
  },
  {
    "nomeBandeira": "Ilhas Cook",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/35/Flag_of_the_Cook_Islands.svg",
    "coi": "COK",
    "fifa": "COK",
    "iso3": "COK",
    "iso2": "CK",
    "nomePais": "Ilhas Cook"
  },
  {
    "nomeBandeira": "Coreia do Norte",
    "bandeira": "",
    "coi": "PRK",
    "fifa": "PRK",
    "iso3": "PRK\n",
    "iso2": "KP",
    "nomePais": "Coreia do Norte"
  },
  {
    "nomeBandeira": "Coreia do Sul",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
    "coi": "KOR",
    "fifa": "KOR",
    "iso3": "KOR",
    "iso2": "KR",
    "nomePais": "Coreia do Sul"
  },
  {
    "nomeBandeira": "Costa Rica",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_(state).svg",
    "coi": "CRC",
    "fifa": "CRC",
    "iso3": "CRI",
    "iso2": "CR",
    "nomePais": "Costa Rica"
  },
  {
    "nomeBandeira": "Costa do Marfim",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Côte_d%27Ivoire.svg",
    "coi": "CIV",
    "fifa": "CIV",
    "iso3": "CIV",
    "iso2": "CI",
    "nomePais": "Costa do Marfim"
  },
  {
    "nomeBandeira": "Croácia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
    "coi": "CRO",
    "fifa": "CRO",
    "iso3": "HRV",
    "iso2": "HR",
    "nomePais": "Croácia"
  },
  {
    "nomeBandeira": "Cuba",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg",
    "coi": "CUB",
    "fifa": "CUB",
    "iso3": "CUB",
    "iso2": "CU",
    "nomePais": "Cuba"
  },
  {
    "nomeBandeira": "Dinamarca",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
    "coi": "DEN",
    "fifa": "DEN",
    "iso3": "DNK",
    "iso2": "DK",
    "nomePais": "Dinamarca"
  },
  {
    "nomeBandeira": "Djibouti",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg",
    "coi": "DJI",
    "fifa": "DJI",
    "iso3": "DJI",
    "iso2": "DJ",
    "nomePais": "Djibouti"
  },
  {
    "nomeBandeira": "Dominica",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg",
    "coi": "DMA",
    "fifa": "DMA",
    "iso3": "DMA",
    "iso2": "DM",
    "nomePais": "Dominica"
  },
  {
    "nomeBandeira": "Equador",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
    "coi": "ECU",
    "fifa": "ECU",
    "iso3": "ECU",
    "iso2": "EC",
    "nomePais": "Equador"
  },
  {
    "nomeBandeira": "Equipe Unificada da Alemanha",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/German_Olympic_flag_%281959-1968%29.svg/200px-German_Olympic_flag_%281959-1968%29.svg.png",
    "coi": "EUA",
    "fifa": "",
    "iso3": "",
    "iso2": "",
    "nomePais": "Equipe Unificada da Alemanha"
  },

  {
    "nomeBandeira": "Egito",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg",
    "coi": "EGY",
    "fifa": "EGY",
    "iso3": "EGY",
    "iso2": "EG",
    "nomePais": "Egito"
  },
  {
    "nomeBandeira": "El Salvador",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg",
    "coi": "ESA",
    "fifa": "SLV",
    "iso3": "SLV",
    "iso2": "SV",
    "nomePais": "El Salvador"
  },
  {
    "nomeBandeira": "Emirados Árabes Unidos",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
    "coi": "UAE",
    "fifa": "UAE",
    "iso3": "ARE",
    "iso2": "AE",
    "nomePais": "Emirados Árabes Unidos"
  },
  {
    "nomeBandeira": "Eritreia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg",
    "coi": "ERI",
    "fifa": "ERI",
    "iso3": "ERI",
    "iso2": "ER",
    "nomePais": "Eritreia"
  },
  {
    "nomeBandeira": "Escócia",
    "bandeira": "",
    "coi": "",
    "fifa": "SCO",
    "iso3": "SCO",
    "iso2": "",
    "nomePais": "Escócia"
  },
  {
    "nomeBandeira": "Eslováquia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
    "coi": "SVK",
    "fifa": "SVK",
    "iso3": "SVK",
    "iso2": "SK",
    "nomePais": "Eslováquia"
  },
  {
    "nomeBandeira": "Eslovênia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg",
    "coi": "SLO",
    "fifa": "SVN",
    "iso3": "SVN",
    "iso2": "SI",
    "nomePais": "Eslovênia"
  },
  {
    "nomeBandeira": "Espanha",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
    "coi": "ESP",
    "fifa": "ESP",
    "iso3": "ESP",
    "iso2": "ES",
    "nomePais": "Espanha"
  },
  {
    "nomeBandeira": "Estados Unidos",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    "coi": "USA",
    "fifa": "USA",
    "iso3": "USA",
    "iso2": "US",
    "nomePais": "Estados Unidos"
  },
  {
    "nomeBandeira": "Equipe Unificada",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Olympic_flag.svg/150px-Olympic_flag.svg.png",
    "coi": "EUN",
    "fifa": "",
    "iso3": "",
    "iso2": "",
    "nomePais": "Equipe Unificada"
  },

  {
    "nomeBandeira": "Ilhas Menores Distantes dos Estados Unidos",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_the_U.S..svg",
    "coi": "",
    "fifa": "",
    "iso3": "UMI",
    "iso2": "UM",
    "nomePais": "Ilhas Menores Distantes dos Estados Unidos"
  },
  {
    "nomeBandeira": "Estónia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg",
    "coi": "EST",
    "fifa": "EST",
    "iso3": "EST",
    "iso2": "EE",
    "nomePais": "Estônia"
  },
  {
    "nomeBandeira": "Etiópia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg",
    "coi": "ETH",
    "fifa": "ETH",
    "iso3": "ETH",
    "iso2": "ET",
    "nomePais": "Etiópia"
  },
  {
    "nomeBandeira": "Ilhas Feroé",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flag_of_the_Faroe_Islands.svg",
    "coi": "",
    "fifa": "FRO",
    "iso3": "FRO",
    "iso2": "FO",
    "nomePais": "Ilhas Feroé"
  },
  {
    "nomeBandeira": "Fiji",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg",
    "coi": "FIJ",
    "fifa": "FIJ",
    "iso3": "FJI",
    "iso2": "FJ",
    "nomePais": "Fiji"
  },
  {
    "nomeBandeira": "Filipinas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
    "coi": "PHI",
    "fifa": "PHI",
    "iso3": "PHL",
    "iso2": "PH",
    "nomePais": "Filipinas"
  },
  {
    "nomeBandeira": "Finlândia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
    "coi": "FIN",
    "fifa": "FIN",
    "iso3": "FIN",
    "iso2": "FI",
    "nomePais": "Finlândia"
  },
  {
    "nomeBandeira": "França",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    "coi": "FRA",
    "fifa": "FRA",
    "iso3": "FRA",
    "iso2": "FR",
    "nomePais": "França"
  },
  {
    "nomeBandeira": "Terras Austrais e Antárticas Francesas",
    "bandeira": "",
    "coi": "",
    "fifa": "",
    "iso3": "ATF",
    "iso2": "TF",
    "nomePais": "Terras Austrais e Antárticas Francesas"
  },
  {
    "nomeBandeira": "Gabão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg",
    "coi": "GAB",
    "fifa": "GAB",
    "iso3": "GAB",
    "iso2": "GA",
    "nomePais": "Gabão"
  },
  {
    "nomeBandeira": "Gana",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
    "coi": "GHA",
    "fifa": "GHA",
    "iso3": "GHA",
    "iso2": "GH",
    "nomePais": "Gana"
  },
  {
    "nomeBandeira": "Gâmbia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg",
    "coi": "GAM",
    "fifa": "GAM",
    "iso3": "GMB",
    "iso2": "GM",
    "nomePais": "Gâmbia"
  },
  {
    "nomeBandeira": "Geórgia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
    "coi": "GEO",
    "fifa": "GEO",
    "iso3": "GEO",
    "iso2": "GE",
    "nomePais": "Geórgia"
  },
  {
    "nomeBandeira": "Ilhas Geórgia do Sul e Sandwich do Sul",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg",
    "coi": "",
    "fifa": "",
    "iso3": "SGS",
    "iso2": "GS",
    "nomePais": "Ilhas Geórgia do Sul e Sandwich do Sul"
  },
  {
    "nomeBandeira": "Gibraltar",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/02/Flag_of_Gibraltar.svg",
    "coi": "",
    "fifa": "",
    "iso3": "GIB",
    "iso2": "GI",
    "nomePais": "Gibraltar"
  },
  {
    "nomeBandeira": "Granada",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg",
    "coi": "GRN",
    "fifa": "GRN",
    "iso3": "GRD",
    "iso2": "GD",
    "nomePais": "Granada"
  },
  {
    "nomeBandeira": "Grécia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
    "coi": "GRE",
    "fifa": "GRE",
    "iso3": "GRC",
    "iso2": "GR",
    "nomePais": "Grécia"
  },
  {
    "nomeBandeira": "Gronelândia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg",
    "coi": "",
    "fifa": "",
    "iso3": "GRL",
    "iso2": "GL",
    "nomePais": "Gronelândia"
  },
  {
    "nomeBandeira": "Guadalupe",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_France_%287x10%29.svg",
    "coi": "",
    "fifa": "GPE",
    "iso3": "GLP",
    "iso2": "GP",
    "nomePais": "Guadalupe"
  },
  {
    "nomeBandeira": "Guam",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/07/Flag_of_Guam.svg",
    "coi": "GUM",
    "fifa": "GUM",
    "iso3": "GUM",
    "iso2": "GU",
    "nomePais": "Guam"
  },
  {
    "nomeBandeira": "Guatemala",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
    "coi": "GUA",
    "fifa": "GUA",
    "iso3": "GTM",
    "iso2": "GT",
    "nomePais": "Guatemala"
  },
  {
    "nomeBandeira": "Guernsey",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Guernsey.svg",
    "coi": "",
    "fifa": "",
    "iso3": "GGY",
    "iso2": "GG",
    "nomePais": "Guernsey"
  },
  {
    "nomeBandeira": "Guiné",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg",
    "coi": "GUI",
    "fifa": "GUI",
    "iso3": "GIN",
    "iso2": "GN",
    "nomePais": "Guiné"
  },
  {
    "nomeBandeira": "Guiné-Bissau",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg",
    "coi": "GBS",
    "fifa": "GNB",
    "iso3": "GNB",
    "iso2": "GW",
    "nomePais": "Guiné-Bissau"
  },
  {
    "nomeBandeira": "Guiné Equatorial",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg",
    "coi": "GEQ",
    "fifa": "EQG",
    "iso3": "GNQ",
    "iso2": "GQ",
    "nomePais": "Guiné Equatorial"
  },
  {
    "nomeBandeira": "Guiana",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg",
    "coi": "GUY",
    "fifa": "GUY",
    "iso3": "GUY",
    "iso2": "GY",
    "nomePais": "Guiana"
  },
  {
    "nomeBandeira": "Guiana Francesa",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_France_%28Pantone%29.svg",
    "coi": "",
    "fifa": "FGU",
    "iso3": "GUF",
    "iso2": "GF",
    "nomePais": "Guiana Francesa"
  },
  {
    "nomeBandeira": "Haiti",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg",
    "coi": "HAI",
    "fifa": "HAI",
    "iso3": "HTI",
    "iso2": "HT",
    "nomePais": "Haiti"
  },
  {
    "nomeBandeira": "Ilha Heard e Ilhas McDonald",
    "bandeira": "",
    "coi": "",
    "fifa": "",
    "iso3": "HMD",
    "iso2": "HM",
    "nomePais": "Ilha Heard e Ilhas McDonald"
  },
  {
    "nomeBandeira": "Honduras",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Honduras_(darker_variant).svg",
    "coi": "HON",
    "fifa": "HON",
    "iso3": "HND",
    "iso2": "HN",
    "nomePais": "Honduras"
  },
  {
    "nomeBandeira": "Hong Kong",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg",
    "coi": "HKG",
    "fifa": "HKG",
    "iso3": "HKG",
    "iso2": "HK",
    "nomePais": "Hong Kong"
  },
  {
    "nomeBandeira": "Hungria",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
    "coi": "HUN",
    "fifa": "HUN",
    "iso3": "HUN",
    "iso2": "HU",
    "nomePais": "Hungria"
  },
  {
    "nomeBandeira": "Iêmen",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg",
    "coi": "YEM",
    "fifa": "YEM",
    "iso3": "YEM",
    "iso2": "YE",
    "nomePais": "Iémen"
  },
  {
    "nomeBandeira": "Índia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    "coi": "IND",
    "fifa": "IND",
    "iso3": "IND",
    "iso2": "IN",
    "nomePais": "Índia"
  },
  {
    "nomeBandeira": "Indonésia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
    "coi": "INA",
    "fifa": "IDN",
    "iso3": "IDN",
    "iso2": "ID",
    "nomePais": "Indonésia"
  },
  {
    "nomeBandeira": "Inglaterra",
    "bandeira": "",
    "coi": "",
    "fifa": "ENG",
    "iso3": "ENG",
    "iso2": "",
    "nomePais": "Inglaterra"
  },
  {
    "nomeBandeira": "Irão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg",
    "coi": "IRI",
    "fifa": "IRN",
    "iso3": "IRN",
    "iso2": "IR",
    "nomePais": "Irã"
  },
  {
    "nomeBandeira": "Iraque",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
    "coi": "IRQ",
    "fifa": "IRQ",
    "iso3": "IRQ",
    "iso2": "IQ",
    "nomePais": "Iraque"
  },
  {
    "nomeBandeira": "Irlanda",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Republic_of_Ireland_Flag.svg",
    "coi": "IRL",
    "fifa": "IRL",
    "iso3": "IRL",
    "iso2": "IE",
    "nomePais": "Irlanda"
  },
  {
    "nomeBandeira": "Irlanda do Norte",
    "bandeira": "",
    "coi": "",
    "fifa": "NIR",
    "iso3": "NIR",
    "iso2": "",
    "nomePais": "Irlanda do Norte"
  },
  {
    "nomeBandeira": "Ilha de Man",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_the_Isle_of_Man.svg",
    "coi": "",
    "fifa": "",
    "iso3": "IMN",
    "iso2": "IM",
    "nomePais": "Ilha de Man"
  },
  {
    "nomeBandeira": "Islândia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
    "coi": "ISL",
    "fifa": "ISL",
    "iso3": "ISL",
    "iso2": "IS",
    "nomePais": "Islândia"
  },
  {
    "nomeBandeira": "Israel",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg",
    "coi": "ISR",
    "fifa": "ISR",
    "iso3": "ISR",
    "iso2": "IL",
    "nomePais": "Israel"
  },
  {
    "nomeBandeira": "Itália",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
    "coi": "ITA",
    "fifa": "ITA",
    "iso3": "ITA",
    "iso2": "IT",
    "nomePais": "Itália"
  },
  {
    "nomeBandeira": "Iugoslávia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flag_of_Yugoslavia_%281918%E2%80%931941%29.svg/220px-Flag_of_Yugoslavia_%281918%E2%80%931941%29.svg.png",
    "coi": "YUG",
    "fifa": "",
    "iso3": "",
    "iso2": "",
    "nomePais": "Iugoslávia"
  },
  {
    "nomeBandeira": "Jamaica",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg",
    "coi": "JAM",
    "fifa": "JAM",
    "iso3": "JAM",
    "iso2": "JM",
    "nomePais": "Jamaica"
  },
  {
    "nomeBandeira": "Japão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Japan%28bordered%29.svg",
    "coi": "JPN",
    "fifa": "JPN",
    "iso3": "JPN",
    "iso2": "JP",
    "nomePais": "Japão"
  },
  {
    "nomeBandeira": "Jersey",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Jersey.svg",
    "coi": "",
    "fifa": "",
    "iso3": "JEY",
    "iso2": "JE",
    "nomePais": "Jersey"
  },
  {
    "nomeBandeira": "Jordânia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
    "coi": "JOR",
    "fifa": "JOR",
    "iso3": "JOR",
    "iso2": "JO",
    "nomePais": "Jordânia"
  },
  {
    "nomeBandeira": "Kiribati",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg",
    "coi": "KIR",
    "fifa": "",
    "iso3": "KIR",
    "iso2": "KI",
    "nomePais": "Kiribati"
  },
  {
    "nomeBandeira": "Kosovo",
    "bandeira": "",
    "coi": "KOS",
    "fifa": "KVX",
    "iso3": "",
    "iso2": "",
    "nomePais": "Kosovo"
  },
  {
    "nomeBandeira": "Kuwait",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg",
    "coi": "KUW",
    "fifa": "KUW",
    "iso3": "KWT",
    "iso2": "KW",
    "nomePais": "Kuwait"
  },
  {
    "nomeBandeira": "Laos",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg",
    "coi": "LAO",
    "fifa": "LAO",
    "iso3": "LAO",
    "iso2": "LA",
    "nomePais": "Laos"
  },
  {
    "nomeBandeira": "Letônia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
    "coi": "LAT",
    "fifa": "LVA",
    "iso3": "LVA",
    "iso2": "LV",
    "nomePais": "Letônia"
  },
  {
    "nomeBandeira": "Lesoto",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg",
    "coi": "LES",
    "fifa": "LES",
    "iso3": "LSO",
    "iso2": "LS",
    "nomePais": "Lesoto"
  },
  {
    "nomeBandeira": "Líbano",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg",
    "coi": "LBN",
    "fifa": "LIB",
    "iso3": "LBN",
    "iso2": "LB",
    "nomePais": "Líbano"
  },
  {
    "nomeBandeira": "Libéria",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg",
    "coi": "LBR",
    "fifa": "LBR",
    "iso3": "LBR",
    "iso2": "LR",
    "nomePais": "Libéria"
  },
  {
    "nomeBandeira": "Líbia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg",
    "coi": "LBA",
    "fifa": "LBY",
    "iso3": "LBY",
    "iso2": "LY",
    "nomePais": "Líbia"
  },
  {
    "nomeBandeira": "Liechtenstein",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg",
    "coi": "LIE",
    "fifa": "LIE",
    "iso3": "LIE",
    "iso2": "LI",
    "nomePais": "Liechtenstein"
  },
  {
    "nomeBandeira": "Lituânia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg",
    "coi": "LTU",
    "fifa": "LTU",
    "iso3": "LTU",
    "iso2": "LT",
    "nomePais": "Lituânia"
  },
  {
    "nomeBandeira": "Luxemburgo",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg",
    "coi": "LUX",
    "fifa": "LUX",
    "iso3": "LUX",
    "iso2": "LU",
    "nomePais": "Luxemburgo"
  },
  {
    "nomeBandeira": "Macau",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg",
    "coi": "",
    "fifa": "MAC",
    "iso3": "MAC",
    "iso2": "MO",
    "nomePais": "Macau"
  },
  {
    "nomeBandeira": "",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg",
    "coi": "MKD",
    "fifa": "MKD",
    "iso3": "MKD",
    "iso2": "MK",
    "nomePais": "Macedónia"
  },
  {
    "nomeBandeira": "Madagáscar",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg",
    "coi": "MAD",
    "fifa": "MAD",
    "iso3": "MDG",
    "iso2": "MG",
    "nomePais": "Madagáscar"
  },
  {
    "nomeBandeira": "Malásia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
    "coi": "MAS",
    "fifa": "MAS",
    "iso3": "MYS",
    "iso2": "MY",
    "nomePais": "Malásia"
  },
  {
    "nomeBandeira": "Malawi",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg",
    "coi": "MAW",
    "fifa": "MWI",
    "iso3": "MWI",
    "iso2": "MW",
    "nomePais": "Malaui"
  },
  {
    "nomeBandeira": "Maldivas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg",
    "coi": "MDV",
    "fifa": "MDV",
    "iso3": "MDV",
    "iso2": "MV",
    "nomePais": "Maldivas"
  },
  {
    "nomeBandeira": "Mali",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg",
    "coi": "MLI",
    "fifa": "MLI",
    "iso3": "MLI",
    "iso2": "ML",
    "nomePais": "Mali"
  },
  {
    "nomeBandeira": "Malta",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg",
    "coi": "MLT",
    "fifa": "MLT",
    "iso3": "MLT",
    "iso2": "MT",
    "nomePais": "Malta"
  },
  {
    "nomeBandeira": "Ilhas Malvinas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_Falkland_Islands.svg",
    "coi": "FLK",
    "fifa": "FLK",
    "iso3": "FLK",
    "iso2": "FK",
    "nomePais": "Ilhas Malvinas"
  },
  {
    "nomeBandeira": "Ilhas Marshall",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg",
    "coi": "MHL",
    "fifa": "",
    "iso3": "MHL",
    "iso2": "MH",
    "nomePais": "Ilhas Marshall"
  },
  {
    "nomeBandeira": "Marianas Setentrionais",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Flag_of_the_Northern_Mariana_Islands.svg",
    "coi": "",
    "fifa": "",
    "iso3": "MNP",
    "iso2": "MP",
    "nomePais": "Marianas Setentrionais"
  },
  {
    "nomeBandeira": "Marrocos",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
    "coi": "MAR",
    "fifa": "MAR",
    "iso3": "MAR",
    "iso2": "MA",
    "nomePais": "Marrocos"
  },
  {
    "nomeBandeira": "Martinica",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_the_Territorial_Collectivity_of_Martinique.svg",
    "coi": "",
    "fifa": "MTQ",
    "iso3": "MTQ",
    "iso2": "MQ",
    "nomePais": "Martinica"
  },
  {
    "nomeBandeira": "Mauritânia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg",
    "coi": "MTN",
    "fifa": "MTN",
    "iso3": "MRT",
    "iso2": "MR",
    "nomePais": "Mauritânia"
  },
  {
    "nomeBandeira": "Maurícia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg",
    "coi": "MRI",
    "fifa": "MRI",
    "iso3": "MUS",
    "iso2": "MU",
    "nomePais": "Maurícia"
  },
  {
    "nomeBandeira": "Mayotte",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    "coi": "",
    "fifa": "",
    "iso3": "MYT",
    "iso2": "YT",
    "nomePais": "Mayotte"
  },
  {
    "nomeBandeira": "México",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
    "coi": "MEX",
    "fifa": "MEX",
    "iso3": "MEX",
    "iso2": "MX",
    "nomePais": "México"
  },
  {
    "nomeBandeira": "Mianmar",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
    "coi": "MYA",
    "fifa": "MYA",
    "iso3": "MMR",
    "iso2": "MM",
    "nomePais": "Mianmar"
  },
  {
    "nomeBandeira": "Estados Federados da Micronésia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg",
    "coi": "FSM",
    "fifa": "FSM",
    "iso3": "FSM",
    "iso2": "FM",
    "nomePais": "Estados Federados da Micronésia"
  },
  {
    "nomeBandeira": "Moldávia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
    "coi": "MDA",
    "fifa": "MDA",
    "iso3": "MDA",
    "iso2": "MD",
    "nomePais": "Moldávia"
  },
  {
    "nomeBandeira": "Mónaco",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg",
    "coi": "MON",
    "fifa": "",
    "iso3": "MCO",
    "iso2": "MC",
    "nomePais": "Mónaco"
  },
  {
    "nomeBandeira": "Mongólia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
    "coi": "MGL",
    "fifa": "MNG",
    "iso3": "MNG",
    "iso2": "MN",
    "nomePais": "Mongólia"
  },
  {
    "nomeBandeira": "Montenegro",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg",
    "coi": "MNE",
    "fifa": "MNE",
    "iso3": "MNE",
    "iso2": "ME",
    "nomePais": "Montenegro"
  },
  {
    "nomeBandeira": "Montserrat",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Montserrat.svg",
    "coi": "",
    "fifa": "MSR",
    "iso3": "MSR",
    "iso2": "MS",
    "nomePais": "Montserrat"
  },
  {
    "nomeBandeira": "Moçambique",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
    "coi": "MOZ",
    "fifa": "MOZ",
    "iso3": "MOZ",
    "iso2": "MZ",
    "nomePais": "Moçambique"
  },
  {
    "nomeBandeira": "Namíbia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg",
    "coi": "NAM",
    "fifa": "NAM",
    "iso3": "NAM",
    "iso2": "NA",
    "nomePais": "Namíbia"
  },
  {
    "nomeBandeira": "Nauru",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
    "coi": "NRU",
    "fifa": "",
    "iso3": "NRU",
    "iso2": "NR",
    "nomePais": "Nauru"
  },
  {
    "nomeBandeira": "",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg",
    "coi": "NEP",
    "fifa": "NEP",
    "iso3": "NPL",
    "iso2": "NP",
    "nomePais": "Nepal"
  },
  {
    "nomeBandeira": "Nova Caledônia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_FLNKS.svg",
    "coi": "",
    "fifa": "NCL",
    "iso3": "NCL",
    "iso2": "NC",
    "nomePais": "Nova Caledônia"
  },
  {
    "nomeBandeira": "Nova Zelândia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
    "coi": "NZL",
    "fifa": "NZL",
    "iso3": "NZL",
    "iso2": "NZ",
    "nomePais": "Nova Zelândia"
  },
  {
    "nomeBandeira": "Nicarágua",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
    "coi": "NCA",
    "fifa": "NCA",
    "iso3": "NIC",
    "iso2": "NI",
    "nomePais": "Nicarágua"
  },
  {
    "nomeBandeira": "Níger",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg",
    "coi": "NIG",
    "fifa": "NIG",
    "iso3": "NER",
    "iso2": "NE",
    "nomePais": "Níger"
  },
  {
    "nomeBandeira": "Nigéria",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
    "coi": "NGR",
    "fifa": "NGA",
    "iso3": "NGA",
    "iso2": "NG",
    "nomePais": "Nigéria"
  },
  {
    "nomeBandeira": "Niue",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Niue.svg",
    "coi": "",
    "fifa": "",
    "iso3": "NIU",
    "iso2": "NU",
    "nomePais": "Niue"
  },
  {
    "nomeBandeira": "Ilha Norfolk",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",
    "coi": "",
    "fifa": "",
    "iso3": "NFK",
    "iso2": "NF",
    "nomePais": "Ilha Norfolk"
  },
  {
    "nomeBandeira": "Noruega",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    "coi": "NOR",
    "fifa": "NOR",
    "iso3": "NOR",
    "iso2": "NO",
    "nomePais": "Noruega"
  },
  {
    "nomeBandeira": "Omã",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg",
    "coi": "OMA",
    "fifa": "OMA",
    "iso3": "OMN",
    "iso2": "OM",
    "nomePais": "Omã"
  },
  {
    "nomeBandeira": "País de Gales",
    "bandeira": "",
    "coi": "",
    "fifa": "WAL",
    "iso3": "WAL",
    "iso2": "",
    "nomePais": "País de Gales"
  },
  {
    "nomeBandeira": "Países Baixos",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
    "coi": "NED",
    "fifa": "NED",
    "iso3": "NLD",
    "iso2": "NL",
    "nomePais": "Países Baixos"
  },
  {
    "nomeBandeira": "Palau",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
    "coi": "PLW",
    "fifa": "",
    "iso3": "PLW",
    "iso2": "PW",
    "nomePais": "Palau"
  },
  {
    "nomeBandeira": "Palestina",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Palestine_Flag.svg",
    "coi": "PLE",
    "fifa": "PLE",
    "iso3": "PSE",
    "iso2": "PS",
    "nomePais": "Palestina"
  },
  {
    "nomeBandeira": "Panamá",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
    "coi": "PAN",
    "fifa": "PAN",
    "iso3": "PAN",
    "iso2": "PA",
    "nomePais": "Panamá"
  },
  {
    "nomeBandeira": "Papua-Nova Guiné",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg",
    "coi": "PNG",
    "fifa": "PNG",
    "iso3": "PNG",
    "iso2": "PG",
    "nomePais": "Papua-Nova Guiné"
  },
  {
    "nomeBandeira": "Paquistão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    "coi": "PAK",
    "fifa": "PAK",
    "iso3": "PAK",
    "iso2": "PK",
    "nomePais": "Paquistão"
  },
  {
    "nomeBandeira": "Paraguai",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg",
    "coi": "PAR",
    "fifa": "PAR",
    "iso3": "PRY",
    "iso2": "PY",
    "nomePais": "Paraguai"
  },
  {
    "nomeBandeira": "Peru",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
    "coi": "PER",
    "fifa": "PER",
    "iso3": "PER",
    "iso2": "PE",
    "nomePais": "Peru"
  },
  {
    "nomeBandeira": "Pitcairn",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",
    "coi": "",
    "fifa": "",
    "iso3": "PCN",
    "iso2": "PN",
    "nomePais": "Pitcairn"
  },
  {
    "nomeBandeira": "Polinésia Francesa",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/db/Flag_of_French_Polynesia.svg",
    "coi": "",
    "fifa": "TAH",
    "iso3": "PYF",
    "iso2": "PF",
    "nomePais": "Polinésia Francesa"
  },
  {
    "nomeBandeira": "Polónia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
    "coi": "POL",
    "fifa": "POL",
    "iso3": "POL",
    "iso2": "PL",
    "nomePais": "Polónia"
  },
  {
    "nomeBandeira": "Portugal",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg",
    "coi": "POR",
    "fifa": "POR",
    "iso3": "PRT",
    "iso2": "PT",
    "nomePais": "Portugal"
  },
  {
    "nomeBandeira": "Porto Rico",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/28/Flag_of_Puerto_Rico.svg",
    "coi": "PUR",
    "fifa": "PUR",
    "iso3": "PRI",
    "iso2": "PR",
    "nomePais": "Porto Rico"
  },
  {
    "nomeBandeira": "Catar",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg",
    "coi": "QAT",
    "fifa": "QAT",
    "iso3": "QAT",
    "iso2": "QA",
    "nomePais": "Qatar"
  },
  {
    "nomeBandeira": "Quênia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
    "coi": "KEN",
    "fifa": "KEN",
    "iso3": "KEN",
    "iso2": "KE",
    "nomePais": "Quênia"
  },
  {
    "nomeBandeira": "Quirguistão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg",
    "coi": "KGZ",
    "fifa": "KGZ",
    "iso3": "KGZ",
    "iso2": "KG",
    "nomePais": "Quirguistão"
  },
  {
    "nomeBandeira": "Reino Unido",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg",
    "coi": "GBR",
    "fifa": "",
    "iso3": "GBR",
    "iso2": "GB",
    "nomePais": "Reino Unido"
  },
  {
    "nomeBandeira": "Território Britânico do Oceano Índico",
    "bandeira": "",
    "coi": "",
    "fifa": "",
    "iso3": "IOT",
    "iso2": "IO",
    "nomePais": "Território Britânico do Oceano Índico"
  },
  {
    "nomeBandeira": "Ilhas Virgens Britânicas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_British_Virgin_Islands.svg",
    "coi": "IVB",
    "fifa": "VGB",
    "iso3": "VGB",
    "iso2": "VG",
    "nomePais": "Ilhas Virgens Britânicas"
  },
  {
    "nomeBandeira": "República Centro-Africana",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg",
    "coi": "CAF",
    "fifa": "CTA",
    "iso3": "CAF",
    "iso2": "CF",
    "nomePais": "República Centro-Africana"
  },
  {
    "nomeBandeira": "Chéquia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
    "coi": "CZE",
    "fifa": "CZE",
    "iso3": "CZE",
    "iso2": "CZ",
    "nomePais": "República Checa"
  },
  {
    "nomeBandeira": "República Democrática do Congo",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_the_Democratic_Republic_of_the_Congo_(3-2).svg",
    "coi": "COD",
    "fifa": "COD",
    "iso3": "COD",
    "iso2": "CD",
    "nomePais": "República Democrática do Congo"
  },
  {
    "nomeBandeira": "República Dominicana",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg",
    "coi": "DOM",
    "fifa": "DOM",
    "iso3": "DOM",
    "iso2": "DO",
    "nomePais": "República Dominicana"
  },
  {
    "nomeBandeira": "Taiwan",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg",
    "coi": "TPE",
    "fifa": "TPE",
    "iso3": "TWN",
    "iso2": "TW",
    "nomePais": "Taiwan"
  },
  {
    "nomeBandeira": "Reunião",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Réunion.svg",
    "coi": "",
    "fifa": "",
    "iso3": "REU",
    "iso2": "RE",
    "nomePais": "Reunião"
  },
  {
    "nomeBandeira": "Roménia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
    "coi": "ROU",
    "fifa": "ROU",
    "iso3": "ROU",
    "iso2": "RO",
    "nomePais": "Romênia"
  },
  {
    "nomeBandeira": "Rússia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    "coi": "RUS",
    "fifa": "RUS",
    "iso3": "RUS",
    "iso2": "RU",
    "nomePais": "Rússia"
  },
  {
    "nomeBandeira": "Ruanda",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
    "coi": "RWA",
    "fifa": "RWA",
    "iso3": "RWA",
    "iso2": "RW",
    "nomePais": "Ruanda"
  },
  {
    "nomeBandeira": "Saara Ocidental",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_the_Sahrawi_Arab_Democratic_Republic.svg",
    "coi": "",
    "fifa": "",
    "iso3": "ESH",
    "iso2": "EH",
    "nomePais": "Saara Ocidental"
  },
  {
    "nomeBandeira": "Ilhas Salomão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg",
    "coi": "SOL",
    "fifa": "SOL",
    "iso3": "SLB",
    "iso2": "SB",
    "nomePais": "Ilhas Salomão"
  },
  {
    "nomeBandeira": "Samoa",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg",
    "coi": "SAM",
    "fifa": "SAM",
    "iso3": "WSM",
    "iso2": "WS",
    "nomePais": "Samoa"
  },
  {
    "nomeBandeira": "Samoa Americana",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/87/Flag_of_American_Samoa.svg",
    "coi": "ASA",
    "fifa": "ASA",
    "iso3": "ASM",
    "iso2": "AS",
    "nomePais": "Samoa Americana"
  },
  {
    "nomeBandeira": "São Bartolomeu",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/03/Saint-Barthelémy_Icône.svg",
    "coi": "",
    "fifa": "",
    "iso3": "BLM",
    "iso2": "BL",
    "nomePais": "Saint-Barthélemy"
  },
  {
    "nomeBandeira": "Santa Helena, Ascensão e Tristão da Cunha",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Saint_Helena.svg",
    "coi": "",
    "fifa": "",
    "iso3": "SHN",
    "iso2": "SH",
    "nomePais": "Santa Helena (território)"
  },
  {
    "nomeBandeira": "Santa Lúcia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg",
    "coi": "LCA",
    "fifa": "LCA",
    "iso3": "LCA",
    "iso2": "LC",
    "nomePais": "Santa Lúcia"
  },
  {
    "nomeBandeira": "São Martinho",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Saint-Martin_%28fictional%29.svg",
    "coi": "",
    "fifa": "",
    "iso3": "MAF",
    "iso2": "MF",
    "nomePais": "Saint Martin"
  },
  {
    "nomeBandeira": "São Cristóvão e Névis",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg",
    "coi": "SKN",
    "fifa": "SKN",
    "iso3": "KNA",
    "iso2": "KN",
    "nomePais": "São Cristóvão e Névis"
  },
  {
    "nomeBandeira": "Saint-Pierre e Miquelon",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_Saint-Pierre_and_Miquelon.svg",
    "coi": "",
    "fifa": "",
    "iso3": "SPM",
    "iso2": "PM",
    "nomePais": "São Pedro e Miquelão"
  },
  {
    "nomeBandeira": "São Vicente e Granadinas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg",
    "coi": "VIN",
    "fifa": "VIN",
    "iso3": "VCT",
    "iso2": "VC",
    "nomePais": "São Vicente e Granadinas"
  },
  {
    "nomeBandeira": "San Marino",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg",
    "coi": "SMR",
    "fifa": "SMR",
    "iso3": "SMR",
    "iso2": "SM",
    "nomePais": "São Marinho"
  },
  {
    "nomeBandeira": "São Tomé e Príncipe",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg",
    "coi": "STP",
    "fifa": "STP",
    "iso3": "STP",
    "iso2": "ST",
    "nomePais": "São Tomé e Príncipe"
  },
  {
    "nomeBandeira": "Senegal",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
    "coi": "SEN",
    "fifa": "SEN",
    "iso3": "SEN",
    "iso2": "SN",
    "nomePais": "Senegal"
  },
  {
    "nomeBandeira": "Serra Leoa",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg",
    "coi": "SLE",
    "fifa": "SLE",
    "iso3": "SLE",
    "iso2": "SL",
    "nomePais": "Serra Leoa"
  },
  {
    "nomeBandeira": "Sérvia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg",
    "coi": "SRB",
    "fifa": "SRB",
    "iso3": "SRB",
    "iso2": "RS",
    "nomePais": "Sérvia"
  },
  {
    "nomeBandeira": "Seicheles",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg",
    "coi": "SEY",
    "fifa": "SEY",
    "iso3": "SYC",
    "iso2": "SC",
    "nomePais": "Seychelles"
  },
  {
    "nomeBandeira": "Singapura",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
    "coi": "SGP",
    "fifa": "SIN",
    "iso3": "SGP",
    "iso2": "SG",
    "nomePais": "Singapura"
  },
  {
    "nomeBandeira": "Síria",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg",
    "coi": "SYR",
    "fifa": "SYR",
    "iso3": "SYR",
    "iso2": "SY",
    "nomePais": "Síria"
  },
  {
    "nomeBandeira": "Somália",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg",
    "coi": "SOM",
    "fifa": "SOM",
    "iso3": "SOM",
    "iso2": "SO",
    "nomePais": "Somália"
  },
  {
    "nomeBandeira": "Sri Lanka",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
    "coi": "SRI",
    "fifa": "SRI",
    "iso3": "LKA",
    "iso2": "LK",
    "nomePais": "Sri Lanka"
  },
  {
    "nomeBandeira": "Sudão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg",
    "coi": "SUD",
    "fifa": "SDN",
    "iso3": "SDN",
    "iso2": "SD",
    "nomePais": "Sudão"
  },
  {
    "nomeBandeira": "Sudão do Sul",
    "bandeira": "",
    "coi": "\n",
    "fifa": "\n",
    "iso3": "SSD\n",
    "iso2": "SS\n",
    "nomePais": "Sudão do Sul"
  },
  {
    "nomeBandeira": "Suécia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
    "coi": "SWE",
    "fifa": "SWE",
    "iso3": "SWE",
    "iso2": "SE",
    "nomePais": "Suécia"
  },
  {
    "nomeBandeira": "Essuatíni",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg",
    "coi": "SWZ",
    "fifa": "SWZ",
    "iso3": "SWZ",
    "iso2": "SZ",
    "nomePais": "Suazilândia"
  },
  {
    "nomeBandeira": "Suíça",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
    "coi": "SUI",
    "fifa": "SUI",
    "iso3": "CHE",
    "iso2": "CH",
    "nomePais": "Suíça"
  },
  {
    "nomeBandeira": "Suriname",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg",
    "coi": "SUR",
    "fifa": "SUR",
    "iso3": "SUR",
    "iso2": "SR",
    "nomePais": "Suriname"
  },
  {
    "nomeBandeira": "Svalbard",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
    "coi": "",
    "fifa": "",
    "iso3": "SJM",
    "iso2": "SJ",
    "nomePais": "Svalbard"
  },
  {
    "nomeBandeira": "Tajiquistão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg",
    "coi": "TJK",
    "fifa": "TJK",
    "iso3": "TJK",
    "iso2": "TJ",
    "nomePais": "Tadjiquistão"
  },
  {
    "nomeBandeira": "Tailândia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
    "coi": "THA",
    "fifa": "THA",
    "iso3": "THA",
    "iso2": "TH",
    "nomePais": "Tailândia"
  },
  {
    "nomeBandeira": "Tanzânia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
    "coi": "TAN",
    "fifa": "TAN",
    "iso3": "TZA",
    "iso2": "TZ",
    "nomePais": "Tanzânia"
  },
  {
    "nomeBandeira": "Tchecoslováquia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/125px-Flag_of_the_Czech_Republic.svg.png",
    "coi": "TCH",
    "fifa": "",
    "iso3": "",
    "iso2": "",
    "nomePais": "Tchecoslováquia"
  },
  {
    "nomeBandeira": "Timor-Leste",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg",
    "coi": "TLS",
    "fifa": "TLS",
    "iso3": "TLS",
    "iso2": "TL",
    "nomePais": "Timor-Leste"
  },
  {
    "nomeBandeira": "Togo",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg",
    "coi": "TOG",
    "fifa": "TOG",
    "iso3": "TGO",
    "iso2": "TG",
    "nomePais": "Togo"
  },
  {
    "nomeBandeira": "Toquelau",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Flag_of_Tokelau.svg",
    "coi": "",
    "fifa": "",
    "iso3": "TKL",
    "iso2": "TK",
    "nomePais": "Toquelau"
  },
  {
    "nomeBandeira": "Tonga",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg",
    "coi": "TGA",
    "fifa": "TGA",
    "iso3": "TON",
    "iso2": "TO",
    "nomePais": "Tonga"
  },
  {
    "nomeBandeira": "Trinidad e Tobago",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
    "coi": "TTO",
    "fifa": "TRI",
    "iso3": "TTO",
    "iso2": "TT",
    "nomePais": "Trinidad e Tobago"
  },
  {
    "nomeBandeira": "Tunísia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
    "coi": "TUN",
    "fifa": "TUN",
    "iso3": "TUN",
    "iso2": "TN",
    "nomePais": "Tunísia"
  },
  {
    "nomeBandeira": "Turquemenistão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg",
    "coi": "TKM",
    "fifa": "TKM",
    "iso3": "TKM",
    "iso2": "TM",
    "nomePais": "Turcomenistão"
  },
  {
    "nomeBandeira": "Turquia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
    "coi": "TUR",
    "fifa": "TUR",
    "iso3": "TUR",
    "iso2": "TR",
    "nomePais": "Turquia"
  },
  {
    "nomeBandeira": "",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg",
    "coi": "",
    "fifa": "TCA",
    "iso3": "TCA",
    "iso2": "TC",
    "nomePais": "Turcas e Caicos"
  },
  {
    "nomeBandeira": "Tuvalu",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
    "coi": "TUV",
    "fifa": "",
    "iso3": "TUV",
    "iso2": "TV",
    "nomePais": "Tuvalu"
  },
  {
    "nomeBandeira": "União Soviética",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_Soviet_Union.svg/1200px-Flag_of_the_Soviet_Union.svg.png",
    "coi": "URS",
    "fifa": "",
    "iso3": "",
    "iso2": "",
    "nomePais": "União Soviética"
  },
  {
    "nomeBandeira": "Ucrânia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
    "coi": "UKR",
    "fifa": "UKR",
    "iso3": "UKR",
    "iso2": "UA",
    "nomePais": "Ucrânia"
  },
  {
    "nomeBandeira": "Uganda",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
    "coi": "UGA",
    "fifa": "UGA",
    "iso3": "UGA",
    "iso2": "UG",
    "nomePais": "Uganda"
  },
  {
    "nomeBandeira": "Ilhas Virgens Americanas",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/f8/Flag_of_the_United_States_Virgin_Islands.svg",
    "coi": "ISV",
    "fifa": "VIR",
    "iso3": "VIR",
    "iso2": "VI",
    "nomePais": "Ilhas Virgens Americanas"
  },
  {
    "nomeBandeira": "Uruguai",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg",
    "coi": "URU",
    "fifa": "URU",
    "iso3": "URY",
    "iso2": "UY",
    "nomePais": "Uruguai"
  },
  {
    "nomeBandeira": "Uzbequistão",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
    "coi": "UZB",
    "fifa": "UZB",
    "iso3": "UZB",
    "iso2": "UZ",
    "nomePais": "Uzbequistão"
  },
  {
    "nomeBandeira": "Vanuatu",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_(official).svg",
    "coi": "VAN",
    "fifa": "VAN",
    "iso3": "VUT",
    "iso2": "VU",
    "nomePais": "Vanuatu"
  },
  {
    "nomeBandeira": "Vaticano",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg",
    "coi": "",
    "fifa": "",
    "iso3": "VAT",
    "iso2": "VA",
    "nomePais": "Vaticano"
  },
  {
    "nomeBandeira": "Venezuela",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Flag_of_Venezuela_(state).svg",
    "coi": "VEN",
    "fifa": "VEN",
    "iso3": "VEN",
    "iso2": "VE",
    "nomePais": "Venezuela"
  },
  {
    "nomeBandeira": "Vietnã",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
    "coi": "VIE",
    "fifa": "VIE",
    "iso3": "VNM",
    "iso2": "VN",
    "nomePais": "Vietname"
  },
  {
    "nomeBandeira": "Wallis e Futuna",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Flag_of_Wallis_and_Futuna.svg",
    "coi": "",
    "fifa": "",
    "iso3": "WLF",
    "iso2": "WF",
    "nomePais": "Wallis e Futuna"
  },
  {
    "nomeBandeira": "Zâmbia",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg",
    "coi": "ZAM",
    "fifa": "ZAM",
    "iso3": "ZMB",
    "iso2": "ZM",
    "nomePais": "Zâmbia"
  },
  {
    "nomeBandeira": "Zimbabwe",
    "bandeira": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
    "coi": "ZIM",
    "fifa": "ZIM",
    "iso3": "ZWE",
    "iso2": "ZW",
    "nomePais": "Zimbábue"
  }
]

module.exports = codigos;