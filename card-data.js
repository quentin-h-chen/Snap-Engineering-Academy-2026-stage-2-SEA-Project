// This is an array of card objects
let cards = [
  // Perfect Order Set
  {
    name: "Mega Zygard ex",
    image: "assets/perfect-order/megaZygardeEx.png",
    set: "Perfect Order", 
    cardType: "Pokémon",
    pokemonType: "Fighting",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Yveltal ex",
    image: "assets/perfect-order/yveltalEx.png",
    set: "Perfect Order", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Ultra Rare"
  },
  {
    name: "Clefairy",
    image: "assets/perfect-order/clefairy.png",
    set: "Perfect Order", 
    cardType: "Pokémon",
    pokemonType: "Fairy",
    rarity: "Illustration Rare"
  },
  {
    name: "Gengar",
    image: "assets/perfect-order/gengarPO.png",
    set: "Perfect Order", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Rare"
  },

  // Ascended Heroes Set
  {
    name: "Mega Gengar ex",
    image: "assets/ascended-heroes/megaGengarEx.png",
    set: "Ascended Heroes", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Boss's Orders",
    image: "assets/ascended-heroes/bosssOrders.png",
    set: "Ascended Heroes", 
    cardType: "Trainer",
    pokemonType: null,
    rarity: "Ultra Rare"
  },
  {
    name: "Psyduck",
    image: "assets/ascended-heroes/psyduck.png",
    set: "Ascended Heroes", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Illustration Rare"
  },
  {
    name: "N's Zekrom",
    image: "assets/ascended-heroes/nsZekrom.png",
    set: "Ascended Heroes", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Rare"
  },

  // Phantasmal Flames Set
  {
    name: "Mega Charizard X ex",
    image: "assets/phantasmal-flames/megaCharizardXEx.png",
    set: "Phantasmal Flames", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Mega Sharpedo ex",
    image: "assets/phantasmal-flames/megaSharpedoEx.png",
    set: "phantasmal Flames", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Ultra Rare"
  },
  {
    name: "Piplup",
    image: "assets/phantasmal-flames/piplup.png",
    set: "Phantasmal Flames", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Illustration Rare"
  },
  {
    name: "Suicune",
    image: "assets/phantasmal-flames/suicune.png",
    set: "Phantasmal Flames", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Rare"
  },

  // Mega Evolution
  {
    name: "Mega Latias Ex",
    image: "assets/mega-evolution/megaLatiasEx.png",
    set: "Mega Evolution", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Mega Lucario Ex",
    image: "assets/mega-evolution/megaLucarioEx.png",
    set: "Mega Evolution", 
    cardType: "Pokémon",
    pokemonType: "Fighting",
    rarity: "Ultra Rare"
  },
  {
    name: "Stufful",
    image: "assets/mega-evolution/stufful.png",
    set: "Mega Evolution", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Illustration Rare"
  },
  {
    name: "Meganium",
    image: "assets/mega-evolution/meganium.png",
    set: "Mega Evolution", 
    cardType: "Pokémon",
    pokemonType: "Grass",
    rarity: "Rare"
  },

  // Black Bolt Set
 {
    name: "Zekrom ex",
    image: "assets/black-bolt/zekromEx.png",
    set: "Black Bolt", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Special Illustration Rare"
  },
  {
    name: "N's Plan",
    image: "assets/black-bolt/nsPlan.png",
    set: "Black Bolt", 
    cardType: "Trainer",
    pokemonType: null,
    rarity: "Ultra Rare"
  },
  {
    name: "Haxorus",
    image: "assets/black-bolt/haxorus.png",
    set: "Black Bolt", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Illustration Rare"
  },
  {
    name: "Thundurus",
    image: "assets/black-bolt/thundurus.png",
    set: "Black Bolt", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Rare"
  },

  // White Flare Set
  {
    name: "Reshiram ex",
    image: "assets/white-flare/reshiramEx.png",
    set: "White Flare", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Harlequin",
    image: "assets/white-flare/harlequin.png",
    set: "White Flare", 
    cardType: "Trainer",
    pokemonType: null,
    rarity: "Ultra Rare"
  },
  {
    name: "Samurott",
    image: "assets/white-flare/samurott.png",
    set: "White Flare", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Illustration Rare"
  },
  {
    name: "Archeops",
    image: "assets/white-flare/archeops.png",
    set: "White Flare", 
    cardType: "Pokémon",
    pokemonType: "Fighting",
    rarity: "Rare"
  },

  //Destined Rivals Set
  {
    name: "Team Rocket's Mewtwo ex",
    image: "assets/destined-rivals/teamRocketMewtwoEx.png",
    set: "Destined Rivals", 
    cardType: "Pokémon",
    pokemonType: "Psychic",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Misty's Lapras",
    image: "assets/destined-rivals/mistyLapras.png",
    set: "Destined Rivals", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Ultra Rare"
  },
  {
    name: "Cynthia's Roserade",
    image: "assets/destined-rivals/cynthiaRoserade.png",
    set: "Destined Rivals", 
    cardType: "Pokémon",
    pokemonType: "Grass",
    rarity: "Illustration Rare"
  },
  {
    name: "Team Rocket's Zapdos",
    image: "assets/destined-rivals/teamRocketZapdos.png",
    set: "Destined Rivals", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Rare"
  },

  //Journey Together Set
  {
    name: "Lillie's Clefairy ex",
    image: "assets/journey-together/lilliesClefairyEx.png",
    set: "Journey Together", 
    cardType: "Pokémon",
    pokemonType: "Psychic",
    rarity: "Special Illustration Rare"
  },
  {
    name: "N's Zoroark ex",
    image: "assets/journey-together/nsZoroarkEx.png",
    set: "Journey Together", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Ultra Rare"
  },
  {
    name: "Articuno",
    image: "assets/journey-together/articunoJT.png",
    set: "Journey Together", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Illustration Rare"
  },
  {
    name: "Magmortar",
    image: "assets/journey-together/magmortar.png",
    set: "Journey Together", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Rare"
  },

  // Prismatic Evolutions Set
  {
    name: "Umbreon ex",
    image: "assets/prismatic-evolutions/umbreonEx.png",
    set: "Prismatic Evolutions", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Sylveon ex",
    image: "assets/prismatic-evolutions/sylveonEx.png",
    set: "Prismatic Evolutions", 
    cardType: "Pokémon",
    pokemonType: "Psychic",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Espeon ex",
    image: "assets/prismatic-evolutions/espeonEx.png",
    set: "Prismatic Evolutions", 
    cardType: "Pokémon",
    pokemonType: "Psychic",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Leafeon ex",
    image: "assets/prismatic-evolutions/leafeonEx.png",
    set: "Prismatic Evolutions", 
    cardType: "Pokémon",
    pokemonType: "Grass",
    rarity: "Special Illustration Rare"
  },

  // Surging Sparks Set
  {
    name: "Pikachu ex",
    image: "assets/surging-sparks/pikachuEx.png",
    set: "Surging Sparks", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Black Kyurem ex",
    image: "assets/surging-sparks/blackKyuremEx.png",
    set: "Surging Sparks", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Ultra Rare"
  },
  {
    name: "Latios",
    image: "assets/surging-sparks/latios.png",
    set: "Surging Sparks", 
    cardType: "Pokémon",
    pokemonType: "Psychic",
    rarity: "Illustration Rare"
  },
  {
    name: "Palkia",
    image: "assets/surging-sparks/palkia.png",
    set: "Surging Sparks", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Rare"
  },

  // Temporal Forces Set
  {
    name: "Raging Bolt ex",
    image: "assets/temporal-forces/ragingBoltEx.png",
    set: "Temporal Forces", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Scizor ex",
    image: "assets/temporal-forces/scizorEx.png",
    set: "Temporal Forces", 
    cardType: "Pokémon",
    pokemonType: "Metal",
    rarity: "Ultra Rare"
  },
  {
    name: "Gastly",
    image: "assets/temporal-forces/gastly.png",
    set: "Temporal Forces", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Illustration Rare"
  },
  {
    name: "Melmetal",
    image: "assets/temporal-forces/melmetal.png",
    set: "Temporal Forces", 
    cardType: "Pokémon",
    pokemonType: "Metal",
    rarity: "Rare"
  },

  // Shrouded Fable Set
  {
    name: "Cassiopeia",
    image: "assets/shrouded-fable/cassiopeia.png",
    set: "Shrouded Fable", 
    cardType: "Trainer",
    pokemonType: null,
    rarity: "Special Illustration Rare"
  },
  {
    name: "Janine's Secret Art",
    image: "assets/shrouded-fable/janineSecretArt.png",
    set: "Shrouded Fable", 
    cardType: "Trainer",
    pokemonType: null,
    rarity: "Ultra Rare"
  },
  {
    name: "Persian",
    image: "assets/shrouded-fable/persian.png",
    set: "Shrouded Fable", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Illustration Rare"
  },
  {
    name: "Haxorus",
    image: "assets/shrouded-fable/haxorusSF.png",
    set: "Shrouded Fable", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Rare"
  },

  // Twilight Masquerade Set
  {
    name: "Greninja ex",
    image: "assets/twilight-masquerade/greninjaEx.png",
    set: "Twilight Masquerade", 
    cardType: "Pokémon",
    pokemonType: "Fighting",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Dragapult ex",
    image: "assets/twilight-masquerade/dragapultEx.png",
    set: "Twilight Masquerade", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Ultra Rare"
  },
  {
    name: "Eevee",
    image: "assets/twilight-masquerade/eevee.png",
    set: "Twilight Masquerade", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Illustration Rare"
  },
  {
    name: "Infernape",
    image: "assets/twilight-masquerade/infernape.png",
    set: "Twilight Masquerade", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Rare"
  },

  // Paldean Fates Set
  {
    name: "Mew ex",
    image: "assets/paldean-fates/bubbleMew.png",
    set: "Paldean Fates", 
    cardType: "Pokémon",
    pokemonType: "Psychic",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Charizard ex",
    image: "assets/paldean-fates/charizardExPF.png",
    set: "Paldean Fates", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Pawmi",
    image: "assets/paldean-fates/pawmi.png",
    set: "Paldean Fates", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Illustration Rare"
  },
  {
    name: "Gholdengo",
    image: "assets/paldean-fates/gholdengo.png",
    set: "Paldean Fates", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Rare"
  },

  // Paradox Rift Set
  {
    name: "Altaria ex",
    image: "assets/paradox-rift/altariaEx.png",
    set: "Paradox Rift", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Minun",
    image: "assets/paradox-rift/minun.png",
    set: "Paradox Rift", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Illustration Rare"
  },
  {
    name: "Plusle",
    image: "assets/paradox-rift/plusle.png",
    set: "Paradox Rift", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Illustration Rare"
  },
  {
    name: "Volcanion",
    image: "assets/paradox-rift/volcanion.png",
    set: "Paradox Rift", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Rare"
  },
  
  // 151 Set
  {
    name: "Charizard ex",
    image: "assets/151/charizardEx151.png",
    set: "151", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Blastoise ex",
    image: "assets/151/blastoiseEx151.png",
    set: "151", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Ultra Rare"
  },
  {
    name: "Bulbasaur",
    image: "assets/151/bulbasaur151.png",
    set: "151", 
    cardType: "Pokémon",
    pokemonType: "Grass",
    rarity: "Illustration Rare"
  },
  {
    name: "Chansey",
    image: "assets/151/chansey151.png",
    set: "151", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Rare"
  },

  // Obsidian FLames Set
  {
    name: "Charizard ex",
    image: "assets/obsidian-flames/charizardEx.png",
    set: "Obsidian Flames", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Tyranitar ex",
    image: "assets/obsidian-flames/tyranitarEx.png",
    set: "Obsidian Flames", 
    cardType: "Pokémon",
    pokemonType: "Lightning",
    rarity: "Ultra Rare"
  },
  {
    name: "Cleffa",
    image: "assets/obsidian-flames/cleffa.png",
    set: "Obsidian Flames", 
    cardType: "Pokémon",
    pokemonType: "Psychic",
    rarity: "Illustration Rare"
  },
  {
    name: "Scizor",
    image: "assets/obsidian-flames/scizor.png",
    set: "Obsidian Flames", 
    cardType: "Pokémon",
    pokemonType: "Metal",
    rarity: "Rare"
  },

  // Paldea Evolved Set
  {
    name: "Magikarp",
    image: "assets/paldea-evolved/magikarp.png",
    set: "Paldea Evolved", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Boss's Orders",
    image: "assets/paldea-evolved/bosssOrdersPE.png",
    set: "Paldea Evolved", 
    cardType: "Trainer",
    pokemonType: null,
    rarity: "Ultra Rare"
  },
  {
    name: "Maushold",
    image: "assets/paldea-evolved/maushold.png",
    set: "Paldea Evolved", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Illustration Rare"
  },
  {
    name: "Weavile",
    image: "assets/paldea-evolved/weavile.png",
    set: "Paldea Evolved", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Rare"
  },

  // Scarlet & Violet Set
  {
    name: "Miraidon ex",
    image: "assets/scarlet-violet/miraidonEx.png",
    set: "Scarlet & Violet", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Special Illustration Rare"
  },
  {
    name: "Gyarados ex",
    image: "assets/scarlet-violet/gyaradosEx.png",
    set: "Scarlet & Violet", 
    cardType: "Pokémon",
    pokemonType: "Water",
    rarity: "Ultra Rare"
  },
  {
    name: "Toedscool",
    image: "assets/scarlet-violet/toedscool.png",
    set: "Scarlet & Violet", 
    cardType: "Pokémon",
    pokemonType: "Grass",
    rarity: "Illustration Rare"
  },
  {
    name: "Armarouge",
    image: "assets/scarlet-violet/armarouge.png",
    set: "Scarlet & Violet", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Rare"
  },

  // Crown Zenith Set
  {
    name: "Pikachu",
    image: "assets/crown-zenith/pikachuCZ.png",
    set: "Crown Zenith", 
    cardType: "Pokémon",
    pokemonType: "Electric",
    rarity: "Ultra Rare"
  },
  {
    name: "Darkrai VSTAR",
    image: "assets/crown-zenith/darkraiVSTAR.png",
    set: "Crown Zenith", 
    cardType: "Pokémon",
    pokemonType: "Dark",
    rarity: "Ultra Rare"
  },
  {
    name: "Tauros",
    image: "assets/crown-zenith/taurosCZ.png",
    set: "Crown Zenith", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Rare"
  },

  // Silver Tempest Set
  {
    name: "Lugia V (Alternate Full Art)",
    image: "assets/silver-tempest/altLugiaV.png",
    set: "Silver Tempest", 
    cardType: "Pokémon",
    pokemonType: "Normal",
    rarity: "Ultra Rare"
  },
  {
    name: "Rayquaza VMAX",
    image: "assets/silver-tempest/RayquazaVMAX.png",
    set: "Silver Tempest", 
    cardType: "Pokémon",
    pokemonType: "Dragon",
    rarity: "Ultra Rare"
  },
  {
    name: "Arcanine",
    image: "assets/silver-tempest/Arcanine.png",
    set: "Silver Tempest", 
    cardType: "Pokémon",
    pokemonType: "Fire",
    rarity: "Rare"
  },
];