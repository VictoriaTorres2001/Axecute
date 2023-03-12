/*vItemsv*/
let Item_table = [
    Slime_Blob = {
        id: 0,
        Name: "Slime Blob",
        Description: "A weird blob of slime, the remnants of a slime, destroyed by your axe.",
        Category: "Material",
        Type: ["adhesive"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1.5,
        Attribute: "Slimy"
    },

    Twig = {
        id: 1,
        Name: "Twig",
        Description: "A long wooden twig, to thin and brittle to use",
        Category: "Material",
        Type: ["wood", "solid"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1,
        Attribute: "Woody"
    },

    Rock = {
        id: 2,
        Name: "Rock",
        Description: "A rough, round, chunk of stone.",
        Category: "Material",
        Type: ["stone", "solid"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1.2,
        Attribute: "Tough"
    },

    R_Berries = {
        id: 3,
        Name: "Red Berries",
        Description: "Round, bright red, and sweet.",
        Category: "Material",
        Type: ["berry"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1,
        Attribute: "Red"
    },

    B_Berries = {
        id: 4,
        Name: "Blue Berries",
        Description: "Round, dull blue, and sour.",
        Category: "Material",
        Type: ["berry"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1,
        Attribute: "Blue"
    },

    P_Berries = {
        id: 5,
        Name: "Purple Berries",
        Description: "Round, deep purple, and sickening to eat.",
        Category: "Material",
        Type: ["berry"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1,
        Attribute: "Poisonous"
    },

    BL_Berries = {
        id: 6,
        Name: "Black Berries",
        Description: "Round, dark black, and bitter.",
        Category: "Material",
        Type: ["berry"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1,
        Attribute: "Black"
    },

    Twine = {
        id: 7,
        Name: "Twine",
        Description: "Like string, too weak to really use.",
        Category: "Material",
        Type: ["strips", "flexible"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 1,
        Attribute: "Weak"
    },

    Leech_Blood = {
        id: 8,
        Name: "Leech Blood",
        Description: "It's gross, it's icky, but may be of some use",
        Category: "Material",
        Type: ["liquid"],
        Rarity: 1,
        Amount: 0,
        Have: false,
        Quality: 2.5,
        Attribute: "Life Stealing"
    },

    Flower = {
        id: 9,
        Name: "Flowers",
        Description: "They smell nice",
        Category: "Gift",
        Type: ["floral", "simple"],
        Rarity: 0,
        Amount: 0,
        Have: false,
        Quality: 0.1,
        Attribute: "Pretty"
    },

    R_Jam = {
        id: 10,
        Name: "Red Jam",
        Description: "Red and yummy",
        Category: "Useable",
        Type: ["red", "food"],
        Rarity: 1,
        Amount: 0,
        Have: false,
        Quality: 5,
        Attribute: "Healing"
    },

    B_Jam = {
        id: 11,
        Name: "Blue Jam",
        Description: "Blue and tasty",
        Category: "Useable",
        Type: ["blue", "food"],
        Rarity: 1,
        Amount: 0,
        Have: false,
        Quality: 5,
        Attribute: "Defense"
    },

    P_Jam = {
        id: 12,
        Name: "Poison Jam",
        Description: "Purple and deadly",
        Category: "Useable",
        Type: ["poison", "food"],
        Rarity: 1,
        Amount: 0,
        Have: false,
        Quality: 5,
        Attribute: "Poisonous"
    },

    BL_Jam = {
        id: 13,
        Name: "Black Jam",
        Description: "Black and nasty",
        Category: "Useable",
        Type: ["black", "food"],
        Rarity: 1,
        Amount: 0,
        Have: false,
        Quality: 5,
        Attribute: "Sluggish"
    },

    Royal_Jam = {
        id: 14,
        Name: "Royal Jam",
        Description: "Best thing you've had",
        Category: "Useable",
        Type: ["Royal", "food"],
        Rarity: 2,
        Amount: 0,
        Have: false,
        Quality: 50,
        Attribute: "Euphoria"
    },

    Sharpening_Stone = {
        id: 15,
        Name: "Sharpening Stone",
        Description: "Makes that Axe Head sharper",
        Category: "Useable",
        Type: ["Sharp", "weapon_enhancer"],
        Rarity: 1,
        Amount: 0,
        Have: false,
        Quality: 2,
        Attribute: "Attack"
    },

    Gate_Key = {
        id: 16,
        Name: "Gate_Key",
        Description: "Freedom",
        Category: "Story_Item",
        Type: ["Story", "Unique"],
        Rarity: 99,
        Amount: 0,
        Have: false,
        Quality: 0,
        Attribute: "Unlock"
    },

    Iron = {
        id: 17,
        Name: "Iron",
        Description: "A chunk of iron, well mostly Iron.",
        Category: "Material",
        Type: ["metal", "solid"],
        Rarity: 3,
        Amount: 0,
        Have: false,
        Quality: 6,
        Attribute: "Hard"
    },

    Cloth = {
        id: 18,
        Name: "Cloth",
        Description: "Neat strips of fabric.",
        Category: "Material",
        Type: ["strips", "flexible"],
        Rarity: 2,
        Amount: 0,
        Have: false,
        Quality: 3,
        Attribute: "Plain"
    },

    Beta_Item = {
        id: 19,
        Name: "Beta Goal Item",
        Description: "To learn from our mistakes",
        Category: "Test_Item",
        Type: ["Test", "Unique"],
        Rarity: -1,
        Amount: 0,
        Have: false,
        Quality: -1,
        Attribute: "Test"
    },

    Slime_Egg = {
        id: 20,
        Name: "Slime Egg",
        Description: "You Monster",
        Category: "Material",
        Type: ["egg", "slimy"],
        Rarity: 5,
        Amount: 0,
        Have: false,
        Quality: 20,
        Attribute: "Egg"
    }
]
/*^Items^*/
/*vEntitiesv*/

let none = {
    name: "Nothing",
    level: 1,
    title: "The Void",
    strength: 1,
    endurance: 1,
    agility: 1,
    luck: 1
}

none.health = none.endurance * 15;
none.current_health = none.health;

let You = {
    name: "Victoria",
    level: 1,
    title: "The Starter",
    strength: 15,
    endurance: 20,
    agility: 5,
    luck: 3,
    dmgIn: 0,
    defenseIn: 0,
    blockIn: 0,
    EXP: 0,
    EXPneed: "",
    AP: 0,
    dead: false
};

You.health = You.endurance * 15;
You.current_health = You.health;
TitleArray = ["The Starter"];

let Slime = {
    name: "Slime",
    level: 3,
    title: "Blob",
    health: 450,
    current_health: 450,
    strength: 6,
    endurance: 30,
    agility: 2,
    luck: 0,
    dmgIn: 5,
    defenseIn: 50,
    blockIn: 3,
    EXP: 150,
    state: "alive",
};

let Rock_Slime = {
    name: "Rock Slime",
    level: 5,
    title: "Blob",
    health: 900,
    current_health: 900,
    strength: 12,
    endurance: 60,
    agility: 3,
    luck: 0,
    dmgIn: 10,
    defenseIn: 100,
    blockIn: 5,
    EXP: 300,
    state: "alive",
};

let Mother_Slime = {
    name: "Mother Slime",
    level: 10,
    title: "Blob",
    health: 2000,
    current_health: 2000,
    strength: 24,
    endurance: 120,
    agility: 4,
    luck: 3,
    dmgIn: 25,
    defenseIn: 250,
    blockIn: 10,
    EXP: 750,
    state: "alive",
};

let Leech = {
    name: "Leech",
    level: 1,
    title: "Sucker",
    health: 15,
    current_health: 15,
    strength: 1,
    endurance: 10,
    agility: 1,
    luck: 0,
    dmgIn: 1,
    defenseIn: 0,
    blockIn: 0,
    EXP: 10,
    state: "alive",
};

/*^Entities^*/
/*vSkillsv*/
let SKdmg = 0;
let SKdef = 0;
let SKbl = 0;
let SKqua = 0;
let SKAmount = 0;

let SK_array = [
    SK_Axe = {
        name: "Axing",
        desc: "With a sturdy axe in hand you can do anything, so you should proabably be skilled with an axe first. This skill will grow as you do most anything since almost everything you do requires an axe or gives you insight on the art of axes. Sure it might be a while till you learn something, but at some point you have to learn something!",
        LV: 0,
        EXP: 0,
        EXPneed: 750,
        EXPMULTI: 5.4321,
        LVMSG: "LV.1 Damage??? Quality???",
        LVRE: function () {
            mbar(`You leveled up ${this.name} to LV.${this.LV}`)
            switch (this.LV) {
                case 1:
                    SKdmg += 1;
                    SKqua += 1;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense??? Quality???";
                    break;
                case 2:
                    SKdef += 2;
                    SKqua += 2;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block??? Quality???";
                    break;
                case 3:
                    SKbl += 3;
                    SKqua += 3;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage??? Quality???";
                    break;
                case 4:
                    SKdmg += 4;
                    SKqua += 4;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR??? END??? AGL??? LUCK???";
                    break;
                case 5:
                    TitleArray.push("Getting better");
                    You.strength += 1;
                    You.endurance += 1;
                    You.agility += 1;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense??? Quality???";
                    break;
                case 6:
                    SKdef += 6;
                    SKqua += 6;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block??? Quality???";
                    break;
                case 7:
                    SKbl += 7;
                    SKqua += 7;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage??? Quality???";
                    break;
                case 8:
                    SKdmg += 8;
                    SKqua += 8;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense??? Quality???";
                    break;
                case 9:
                    SKdef += 9;
                    SKqua += 9;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense + 9 Quality + 9<br>LV.10 STR??? END??? AGL??? LUCK???";
                    break;
                case 10:
                    TitleArray.push("A bit Sharp");
                    You.strength += 1;
                    You.endurance += 1;
                    You.agility += 1;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense + 9 Quality + 9<br>LV.10 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.11 Block??? Quality???";
                    break;
                case 11:
                    SKbl += 11;
                    SKqua += 11;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense + 9 Quality + 9<br>LV.10 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.11 Block + 11 Quality + 11<br>LV.12 Damage??? Quality???";
                    break;
                case 12:
                    SKdmg += 12;
                    SKqua += 12;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense + 9 Quality + 9<br>LV.10 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.11 Block + 11 Quality + 11<br>LV.12 Damage + 12 Quality + 12<br>LV.13 Defense??? Quality???";
                    break;
                case 13:
                    SKdef += 13;
                    SKqua += 13;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense + 9 Quality + 9<br>LV.10 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.11 Block + 11 Quality + 11<br>LV.12 Damage + 12 Quality + 12<br>LV.13 Defense + 13 Quality + 13<br>LV.14 Block??? Quality???";
                    break;
                case 14:
                    SKbl += 14;
                    SKqua += 14;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense + 9 Quality + 9<br>LV.10 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.11 Block + 11 Quality + 11<br>LV.12 Damage + 12 Quality + 12<br>LV.13 Defense + 13 Quality + 13<br>LV.14 Block + 14 Quality + 14<br>LV.15 STR??? END??? AGL??? LUCK???";
                    break;
                case 15:
                    TitleArray.push("Better than a hammer");
                    You.strength += 2;
                    You.endurance += 2;
                    You.agility += 2;
                    You.luck += 2;
                    this.LVMSG = "LV.1 Damage + 1 Quality + 1<br> LV.2 Defense + 2 Quality + 2<br> LV.3 Block + 3 Quality + 3<br>LV.4 Damage + 4 Quality + 4<br>LV.5 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.6 Defense + 6 Quality + 6<br>LV.7 Block + 7 Quality + 7 <br> LV.8 Damage + 8 Quality + 8 <br>LV.9 Defense + 9 Quality + 9<br>LV.10 STR + 1 END + 1 AGL + 1 LUCK + 1<br>LV.11 Block + 11 Quality + 11<br>LV.12 Damage + 12 Quality + 12<br>LV.13 Defense + 13 Quality + 13<br>LV.14 Block + 14 Quality + 14<br>LV.15 STR + 2 END + 2 AGL + 2 LUCK + 2";
                    break;
                default:
                    console.log(this.level);
                    break;
            }
        }
    },

    SK_Attack = {
        name: "Fighting",
        desc: "There are countless monsters that have resources you need, and to get them you need to fight, you need to fight harder then your enemies, without mercy or fear. The more you fight the better you get, you learn where to hit, how to get more out of your swing, and how to not wince when your axe goes into your enemies bodies, steel your heart, harden your weapon.",
        LV: 0,
        EXP: 0,
        EXPneed: 500,
        EXPMULTI: 3.2,
        LVMSG: "LV.1 Damage???",
        LVRE: function () {
            mbar(`You leveled up ${this.name} to LV.${this.LV}`)
            switch (this.LV) {
                case 1:
                    SKdmg += 5;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage???";
                    break;
                case 2:
                    SKdmg += 5;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage???";
                    break;
                case 3:
                    SKdmg += 5;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage???";
                    break;
                case 4:
                    SKdmg += 5;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR??? LUCK???";
                    break;
                case 5:
                    TitleArray.push("Holding Back");
                    You.strength += 1;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6 Damage???";
                    break;
                case 6:
                    SKdmg += 10;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7 Damage???";
                    break;
                case 7:
                    SKdmg += 10;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8 Damage???";
                    break;
                case 8:
                    SKdmg += 10;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9 Damage???";
                    break;
                case 9:
                    SKdmg += 10;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9  Damage + 10<br>LV.10 STR??? LUCK???";
                    break;
                case 10:
                    TitleArray.push("Stick breaker");
                    You.strength += 2;
                    You.luck += 2;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9  Damage + 10<br>LV.10 STR + 2 LUCK + 2<br>LV.11 Damage???";
                    break;
                case 11:
                    SKdmg += 15;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9  Damage + 10<br>LV.10 STR + 2 LUCK + 2<br>LV.11  Damage + 15<br>LV.12 Damage???";
                    break;
                case 12:
                    SKdmg += 15;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9  Damage + 10<br>LV.10 STR + 2 LUCK + 2<br>LV.11  Damage + 15<br>LV.12  Damage + 15<br>LV.13 Damage???";
                    break;
                case 13:
                    SKdmg += 15;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9  Damage + 10<br>LV.10 STR + 2 LUCK + 2<br>LV.11  Damage + 15<br>LV.12  Damage + 15<br>LV.13  Damage + 15<br>LV.14 Damage???";
                    break;
                case 14:
                    SKdmg += 15;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9  Damage + 10<br>LV.10 STR + 2 LUCK + 2<br>LV.11  Damage + 15<br>LV.12  Damage + 15<br>LV.13  Damage + 15<br>LV.14  Damage + 15<br>LV.15 STR??? LUCK???";
                    break;
                case 15:
                    TitleArray.push("Rock puncher");
                    You.strength += 3;
                    You.luck += 3;
                    this.LVMSG = "LV.1 Damage + 5<br> LV.2 Damage + 5<br> LV.3 Damage + 5<br>LV.4 Damage + 5<br>LV.5 STR + 1 LUCK + 1<br>LV.6  Damage + 10<br>LV.7  Damage + 10 <br> LV.8  Damage + 10 <br>LV.9  Damage + 10<br>LV.10 STR + 2 LUCK + 2<br>LV.11  Damage + 15<br>LV.12  Damage + 15<br>LV.13  Damage + 15<br>LV.14  Damage + 15<br>LV.15 STR + 3 LUCK + 3";
                    break;
                default:
                    console.log(this.level);
                    break;
            }
        }
    },

    SK_Gather = {
        name: "Gathering",
        desc: "Collecting materials is a must for you, you need to collect food, collect materials, collect all you need to survive and grow. Every prick from a bush, every lucky find, all will help you find more faster, maybe even find things you never thought were there.",
        LV: 0,
        EXP: 0,
        EXPneed: 500,
        EXPMULTI: 3.2,
        LVMSG: "LV.1 Quality???",
        LVRE: function () {
            mbar(`You leveled up ${this.name} to LV.${this.LV}`)
            switch (this.LV) {
                case 1:
                    SKqua += 1;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality???";
                    break;
                case 2:
                    SKqua += 2;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality???";
                    break;
                case 3:
                    SKqua += 3;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br>LV.4 Quality???";
                    break;
                case 4:
                    SKqua += 4;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br>LV.5 ??? LUCK???";
                    break;
                case 5:
                    TitleArray.push("Not Blind");
                    SKAmount += 1;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br> LV.6 Quality???";
                    break;
                case 6:
                    SKqua += 6;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality???";
                    break;
                case 7:
                    SKqua += 7;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality???";
                    break;
                case 8:
                    SKqua += 8;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality???";
                    break;
                case 9:
                    SKqua += 9;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality + 9<br>LV.10 ??? LUCK???";
                    break;
                case 10:
                    TitleArray.push("Bush Whisperer");
                    SKAmount += 2;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality + 9<br>LV.10 Find even more! LUCK + 1<br>LV.11 Quality???";
                    break;
                case 11:
                    SKqua += 11;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality + 9<br>LV.10 Find even more! LUCK + 1<br>LV.11 Quality + 11<br>LV.12 Quality???";
                    break;
                case 12:
                    SKqua += 12;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality + 9<br>LV.10 Find even more! LUCK + 1<br>LV.11 Quality + 11<br>LV.12 Quality + 12<br>LV.13 Quality???";
                    break;
                case 13:
                    SKqua += 13;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality + 9<br>LV.10 Find even more! LUCK + 1<br>LV.11 Quality + 11<br>LV.12 Quality + 12<br>LV.13 Quality + 13<br> Quality???";
                    break;
                case 14:
                    SKqua += 14;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4 Quality + 4<br> LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality + 9<br>LV.10 Find even more! LUCK + 1<br>LV.11 Quality + 11<br>LV.12 Quality + 12<br>LV.13 Quality + 13<br>LV.14 Quality + 14<br>LV.15 ??? LUCK???";
                    break;
                case 15:
                    TitleArray.push("Sharp Eyes");
                    SKAmount += 3;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Quality + 1<br> LV.2 Quality + 2<br> LV.3 Quality + 3<br> LV.4  Quality + 4<br>LV.5 Find More! Luck + 1<br>LV.6 Quality + 6<br>LV.7 Quality + 7 <br> LV.8 Quality + 8 <br>LV.9 Quality + 9<br>LV.10 Find even more! LUCK + 1<br>LV.11 Quality + 11<br>LV.12 Quality + 12<br>LV.13 Quality + 13<br>LV.14 Quality + 14<br>LV.15 Find so much! LUCK + 1";
                    break;
                default:
                    console.log(this.level);
                    break;
            }
        }
    },

    SK_Defend = {
        name: "Defense",
        desc: "You are going to get hit a lot, so you need to learn how to take hits better, or else you're gonna die. So get some thicker still, learn to block better, each time your hit you learn how to take them a little better.",
        LV: 0,
        EXP: 0,
        EXPneed: 500,
        EXPMULTI: 3.2,
        LVMSG: "LV.1 Defense???",
        LVRE: function () {
            mbar(`You leveled up ${this.name} to LV.${this.LV}`)
            switch (this.LV) {
                case 1:
                    SKdef += 5;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense???";
                    break;
                case 2:
                    SKdef += 5;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense???";
                    break;
                case 3:
                    SKdef += 5;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense???";
                    break;
                case 4:
                    SKdef += 5;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END???";
                    break;
                case 5:
                    TitleArray.push("Battered and Bruised");
                    You.endurance += 1;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense???";
                    break;
                case 6:
                    SKdef += 10;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense???";
                    break;
                case 7:
                    SKdef += 10;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense???";
                    break;
                case 8:
                    SKdef += 10;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense???";
                    break;
                case 9:
                    SKdef += 10;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense + 10<br>LV.10 END???";
                    break;
                case 10:
                    TitleArray.push("Thicker Skinned");
                    You.endurance += 1;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense + 10<br>LV.10 END + 1<br>LV.11 Defense???";
                    break;
                case 11:
                    SKdef += 15;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense + 10<br>LV.10 END + 1<br>LV.11 Defense + 15<br>LV.12 Defense???";
                    break;
                case 12:
                    SKdef += 15;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense + 10<br>LV.10 END + 1<br>LV.11 Defense + 15<br>LV.12 Defense + 15<br>LV.13 Defense???";
                    break;
                case 13:
                    SKdef += 15;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense + 10<br>LV.10 END + 1<br>LV.11 Defense + 15<br>LV.12 Defense + 15<br>LV.13 Defense + 15<br>LV.14 Defense???";
                    break;
                case 14:
                    SKdef += 15;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense + 10<br>LV.10 END + 1<br>LV.11 Defense + 15<br>LV.12 Defense + 15<br>LV.13 Defense + 15<br>LV.14 Defense + 15<br>LV.15 END???";
                    break;
                case 15:
                    TitleArray.push("Hardened Bones");
                    You.endurance += 2;
                    this.LVMSG = "LV.1 Defense + 5<br> LV.2 Defense + 5<br> LV.3 Defense + 5<br>LV.4 Defense + 5<br>LV.5 END + 1<br>LV.6 Defense + 10<br>LV.7 Defense + 10<br> LV.8 Defense + 10 <br>LV.9 Defense + 10<br>LV.10 END + 1<br>LV.11 Defense + 15<br>LV.12 Defense + 15<br>LV.13 Defense + 15<br>LV.14 Defense + 15<br>LV.15 END + 2";
                    break;
                default:
                    console.log(this.level);
                    break;
            }
        }
    },
    SK_Craft = {
        name: "Crafting",
        desc: "You remember ever since you were a little kid, your dad brought you into the forge, you would watch day in and day out, melting metal, the loud sounds of the hammer bashing metal into it's place, the sound of the grind stone sharpening axe heads. You were able to help make handels, shape the rods the axes would be made of, got real good making bindings. You're alone now, doing it all yourself. It's gonna take a bit to get as good as your pops, but you have to, for him.",
        LV: 0,
        EXP: 0,
        EXPneed: 500,
        EXPMULTI: 3.2,
        LVMSG: "LV.1 Quality???",
        LVRE: function () {
            mbar(`You leveled up ${this.name} to LV.${this.LV}`)
            switch (this.LV) {
                case 1:
                    SKqua += 5;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality???";
                    break;
                case 2:
                    SKqua += 5;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality???";
                    break;
                case 3:
                    SKqua += 5;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br>LV.4 Quality???";
                    break;
                case 4:
                    SKqua += 5;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br>LV.5 Quality??? LUCK???";
                    break;
                case 5:
                    TitleArray.push("Stick Carver");
                    SKqua += 25;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br> LV.6 Quality???";
                    break;
                case 6:
                    SKqua += 10;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality???";
                    break;
                case 7:
                    SKqua += 10;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality???";
                    break;
                case 8:
                    SKqua += 10;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality???";
                    break;
                case 9:
                    SKqua += 10;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality + 10<br>LV.10 Quality??? LUCK???";
                    break;
                case 10:
                    TitleArray.push("Rock Sharpener");
                    SKqua += 50;
                    You.luck += 1;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality + 10<br>LV.10 Quality + 50 LUCK + 1<br>LV.11 Quality???";
                    break;
                case 11:
                    SKqua += 15;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality + 10<br>LV.10 Quality + 50 LUCK + 1<br>LV.11 Quality + 15<br>LV.12 Quality???";
                    break;
                case 12:
                    SKqua += 15;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality + 10<br>LV.10 Quality + 50 LUCK + 1<br>LV.11 Quality + 15<br>LV.12 Quality + 15<br>LV.13 Quality???";
                    break;
                case 13:
                    SKqua += 15;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality + 10<br>LV.10 Quality + 50 LUCK + 1<br>LV.11 Quality + 15<br>LV.12 Quality + 15<br>LV.13 Quality + 15<br> Quality???";
                    break;
                case 14:
                    SKqua += 15;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4 Quality + 5<br> LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality + 10<br>LV.10 Quality + 50 LUCK + 1<br>LV.11 Quality + 15<br>LV.12 Quality + 12<br>LV.13 Quality + 15<br>LV.14 Quality + 15<br>LV.15 Quality??? LUCK???";
                    break;
                case 15:
                    TitleArray.push("Crafty Binder");
                    SKqua += 100;
                    You.luck += 2;
                    this.LVMSG = "LV.1 Quality + 5<br> LV.2 Quality + 5<br> LV.3 Quality + 5<br> LV.4  Quality + 5<br>LV.5 Quality + 25 Luck + 1<br>LV.6 Quality + 10<br>LV.7 Quality + 10<br> LV.8 Quality + 10<br>LV.9 Quality + 10<br>LV.10 Quality + 50 LUCK + 1<br>LV.11 Quality + 15<br>LV.12 Quality + 12<br>LV.13 Quality + 15<br>LV.14 Quality + 15<br>LV.15 Quality + 100 LUCK + 1";
                    break;
                default:
                    console.log(this.level);
                    break;
            }
        }
    }
]
/*^Skills^*/
/*vLocationsv*/
let Bed = {
    name: "Bed - Home",
    options: [["Wake up", "Awaken"]],
    description: "zzz"
}

let Home_Bedroom = {
    name: "Bedroom - Home",
    options: [["Leave Bedroom", "Home"], ["Go to bed", "Sleep"]],
    description: "Your small little bedroom, a nice bed and well not much, yet. Your personal bookcase sits in the corner."
}

let Home_Living_Room = {
    name: "Living Room - Home",
    options: [["Go Outside", "Village"], ["Grab your books", "Books"], ["Go to Bedroom", "Home Bedroom"]],
    description: "The Living room to your home, there's a nice comfy chair and a book case."
}

let Village_center = {
    name: "Village Center",
    options: [["Go to Forest", "Forest"], ["Go Home", "Home"], ["Go to Church", "Chruch"], ["Go to Store", "Shop"], ["Go get some grub", "Cook"], ["Visit the Graveyard", "Graveyard"],],
    description: "The center of your little village. People moving quickly to do their jobs to eat another day."
}

let Church = {
    name: "Church",
    options: [["Go Outside", "Village"], ["Speak with Priest", "Preist"]],
    description: "A holy place, you never felt right here, the Priest is nice at least."
}

let Shop = {
    name: "Shop",
    options: [["Go Outside", "Village"], ["Speak with Salesman", "Salesman"]],
    description: "You enter the large shop, it's shiny, clean, and the salesman sit with his unending smile. Somewthing is wrong with him."
}

let Cook = {
    name: "Kitchen",
    options: [["Go Outside", "Village"], ["Speak with Chef", "Chef"]],
    description: "The smell of spices, cooked meats, and whatever the chef is making fills the air, you get hungrier by the second."
}

let Graveyard = {
    name: "Graveyard",
    options: [["Go Outside", "Village"], ["Visit Mom's grave", "Mom"]],
    description: "It's quiet. You tread lightly, avoiding the graves. You look out to rows of graves."
}

let Mom = {
    name: "Mom's Grave",
    options: [["Head back", "Graveyard"], ["Leave flowers", "Flowers"]],
    description: "Forever in your heart, you may never have gotten to met her, but it still hurts all the same."
}

let Shed = {
    name: "Shed",
    options: [["Head back", "Graveyard"]],
    description: "There's nothing to do in here yet."
}

let Forest_Entrance = {
    name: "Forest Entrance",
    options: [["Leave Forest", "Village"], ["Forage for resources", "Forest-gather-easy"], ["A rusty gate", "Forest-key-check"]],
    description: "The Entrance to the forest surrounding your village."
}

let Forest_Gathering = {
    name: "Forest Foilage",
    options: [["Stop Gathering", "Forest-gather-easy-end"]],
    description: "Foilage surrounds you as you gather, you hear noises"
}

let Forest_Deep = {
    name: "Forest Thicket",
    options: [["Forage for resources", "Forest-gather-med"], ["Head back", "Forest"]],
    description: "The trees are thicker, the bushes bigger, it's hard to see but you can tell there is more to be found."
}

let Forest_Deep_Gathering = {
    name: "Berry Thicket",
    options: [["Stop Gathering", "Forest-gather-med-end"]],
    description: "It's hard to avoid all the thorns in these bushes, and all sorts of things live in these bushes, but it's all worth it."
}

let Slime_Cave = {
    name: "Slime Cave",
    options: [["Stop Fighting", "Slime-cave-end"]],
    description: "The sounds of squelching surround you. Every step you take is sticky."
}

/*^Locations^*/
/*vRecipiesv*/
let Rec_R_Jam = {
    name: "Red Jam",
    ingredients: [[R_Berries, 5]],
    description: "A candy red jam, it tastes sweet and seem to make some of your pain slip away.",
    output: R_Jam
}

let Rec_B_Jam = {
    name: "Blue Jam",
    ingredients: [[B_Berries, 5]],
    description: "A deep blue jam, your skin gets a little rougher and is harder to damage.",
    output: B_Jam
}

let Rec_P_Jam = {
    name: "Poisonous Jam",
    ingredients: [[P_Berries, 5]],
    description: "A soiled smelling, deep purple jam, instead of eating this you put it on your weapon and it will do some more damage to your enemies.",
    output: P_Jam
}

let Rec_BL_Jam = {
    name: "Black Jam",
    ingredients: [[BL_Berries, 5]],
    description: "A thick, tar black jam. It smells awful and feels horrbile to eat, it's super sticky and seems to just make you slow. No good on your tools or in your belly.",
    output: BL_Jam
}

let Rec_Royal_Jam = {
    name: "Royal Jam",
    ingredients: [[R_Jam, 10], [B_Jam, 10], [P_Jam, 10], [BL_Jam, 10]],
    description: "Big C's special. It is amazing. Eating it makes you feel like a queen, super hard to make, but so worth it. It's a deep gold color, it seems to shine a little, and tastes like a honey dipped apple wrapped chocolate.",
    output: Royal_Jam
}

let recipe_array = [Rec_R_Jam, Rec_B_Jam, Rec_P_Jam, Rec_BL_Jam, Rec_Royal_Jam];
/*^Recipies^*/
/*vEffect Declarationv*/
let SL_active = false;
let SL_time = 0;
let HE_active = false;
let HE_time = 0;
let POI_active = false;
let POI_time = 0;
let DEF_active = false;
let DEF_time = 0;
let EP_active = false;
let EP_time = 0;
let ATT_active = false;
let ATT_time = 0;
/*^Effect Declaration^*/

const version = "v 0.1.2";

let x;
let y;

char_location = Home_Bedroom;
char_event = "Home Bedroom";
enemy = none;

let introplayed = false;
let autosaving = false;
let gotbooks = false;

let msglogcount = 0;
let bbcount = 1;
let column = 0;

let season = "Autumn";
let weather = "Sunny";

let year = 201;
let month = 10;
let day = 16;
let hour = 0;
let minute = 0;

let gathering = false;
let fighting = false;
let healing = false;

let displaypartspage = 0;
let displayequippage = 0;

let purecoins = 0;
let formatcoins = purecoins.toString().padStart(7, '0');
let amountdonated = 0;
let saleamount;

let shopstock = [[Item_table[15], 5000, 25, 25], [Item_table[16], 50000000, 1, 1], [Item_table[17], 25000, 10, 10], [Item_table[18], 10000, 15, 15], [Item_table[19], 1000000, 1, 1]]

let graveyardshedUL = false;
let momprayUL = false;
let rustygateUL = false;
let rustygateprogress = 0;
let slimecaveUL = false;
let slimecaveprogress = 0;

let Weapon_Name = "none";
let Sheild_Name = "none";
let Hands_Name = "none";
let Accessory_Name = "none";
let Head_Name = "none";
let Chest_Name = "none";
let Legs_Name = "none";
let Feet_Name = "none";
let PartArray = [];
let EquipArray = [];
let GreatNameArray = ['Aback',
    'Abaft',
    'Abandoned',
    'Abashed',
    'Aberrant',
    'Abhorrent',
    'Abiding',
    'Abject',
    'Ablaze',
    'Able',
    'Abnormal',
    'Aboriginal',
    'Abortive',
    'Abounding',
    'Abrasive',
    'Abrupt',
    'Absent',
    'Absorbed',
    'Absorbing',
    'Abstracted',
    'Absurd',
    'Abundant',
    'Abusive',
    'Acceptable',
    'Accessible',
    'Accidental',
    'Accurate',
    'Acid',
    'Acidic',
    'Acoustic',
    'Acrid',
    'Adamant',
    'Adaptable',
    'Addicted',
    'Adhesive',
    'Adjoining',
    'Adorable',
    'Adventurous',
    'Afraid',
    'Aggressive',
    'Agonizing',
    'Agreeable',
    'Ahead',
    'Ajar',
    'Alert',
    'Alike',
    'Alive',
    'Alleged',
    'Alluring',
    'Aloof',
    'Amazing',
    'Ambiguous',
    'Ambitious',
    'Amuck',
    'Amused',
    'Amusing',
    'Ancient',
    'Angry',
    'Animated',
    'Annoyed',
    'Annoying',
    'Anxious',
    'Apathetic',
    'Aquatic',
    'Aromatic',
    'Arrogant',
    'Ashamed',
    'Aspiring',
    'Assorted',
    'Astonishing',
    'Attractive',
    'Auspicious',
    'Automatic',
    'Available',
    'Average',
    'Aware',
    'Awesome',
    'Axiomatic',
    'Bad',
    'Barbarous',
    'Bashful',
    'Bawdy',
    'Beautiful',
    'Befitting',
    'Belligerent',
    'Beneficial',
    'Bent',
    'Berserk',
    'Bewildered',
    'Big',
    'Billowy',
    'Bite-sized',
    'Bitter',
    'Bizarre',
    'Black',
    'Black-and-white',
    'Bloody',
    'Blue',
    'Blue-eyed',
    'Blushing',
    'Boiling',
    'Boorish',
    'Bored',
    'Boring',
    'Bouncy',
    'Boundless',
    'Brainy',
    'Brash',
    'Brave',
    'Brawny',
    'Breakable',
    'Breezy',
    'Brief',
    'Bright',
    'Broad',
    'Broken',
    'Brown',
    'Bumpy',
    'Burly',
    'Bustling',
    'Busy',
    'Cagey',
    'Calculating',
    'Callous',
    'Calm',
    'Capable',
    'Capricious',
    'Careful',
    'Careless',
    'Caring',
    'Cautious',
    'Ceaseless',
    'Certain',
    'Changeable',
    'Charming',
    'Cheap',
    'Cheerful',
    'Chemical',
    'Chief',
    'Childlike',
    'Chilly',
    'Chivalrous',
    'Chubby',
    'Chunky',
    'Clammy',
    'Classy',
    'Clean',
    'Clear',
    'Clever',
    'Cloistered',
    'Cloudy',
    'Closed',
    'Clumsy',
    'Cluttered',
    'Coherent',
    'Cold',
    'Colorful',
    'Colossal',
    'Combative',
    'Comfortable',
    'Common',
    'Complete',
    'Complex',
    'Concerned',
    'Condemned',
    'Confused',
    'Conscious',
    'Cooing',
    'Cool',
    'Cooperative',
    'Coordinated',
    'Courageous',
    'Cowardly',
    'Crabby',
    'Craven',
    'Crazy',
    'Creepy',
    'Crooked',
    'Crowded',
    'Cruel',
    'Cuddly',
    'Cultured',
    'Cumbersome',
    'Curious',
    'Curly',
    'Curved',
    'Curvy',
    'Cut',
    'Cute',
    'Cynical',
    'Daffy',
    'Daily',
    'Damaged',
    'Damaging',
    'Damp',
    'Dangerous',
    'Dapper',
    'Dark',
    'Dashing',
    'Dazzling',
    'Dead',
    'Deadpan',
    'Deafening',
    'Dear',
    'Debonair',
    'Decisive',
    'Decorous',
    'Deep',
    'Deeply',
    'Defeated',
    'Defective',
    'Defiant',
    'Delicate',
    'Delicious',
    'Delightful',
    'Demonic',
    'Delirious',
    'Dependent',
    'Depressed',
    'Deranged',
    'Descriptive',
    'Deserted',
    'Detailed',
    'Determined',
    'Devilish',
    'Didactic',
    'Different',
    'Difficult',
    'Diligent',
    'Direful',
    'Dirty',
    'Disagreeable',
    'Disastrous',
    'Discreet',
    'Disgusted',
    'Disgusting',
    'Disillusioned',
    'Dispensable',
    'Distinct',
    'Disturbed',
    'Divergent',
    'Dizzy',
    'Domineering',
    'Doubtful',
    'Drab',
    'Draconian',
    'Dramatic',
    'Dreary',
    'Drunk',
    'Dry',
    'Dull',
    'Dusty',
    'Dynamic',
    'Dysfunctional'];



window.onload = function () {
    /*localStorage.clear();*/
    if (localStorage.getItem('introplayed') == 'true') {
        document.getElementById('blackscreen').remove();
        document.getElementById('intro_message_box').remove();
    } else {
        intro();
    }


    if (localStorage.getItem('save') == 'true') {
        introplayed = localStorage.getItem('introplayed');
        gotbooks = localStorage.getItem('Books');

        You.name = localStorage.getItem("Name");
        You.current_health = parseInt(localStorage.getItem("health"));
        You.level = parseInt(localStorage.getItem("level"));
        You.title = localStorage.getItem("title");
        TitleArray = JSON.parse(localStorage.getItem("TitleArray"));
        You.strength = parseInt(localStorage.getItem("strength"));
        You.endurance = parseInt(localStorage.getItem("endurance"));
        You.agility = parseInt(localStorage.getItem("agility"));
        You.luck = parseInt(localStorage.getItem("luck"));
        SKdmg = parseInt(localStorage.getItem("SKdmg"));
        SKdef = parseInt(localStorage.getItem("SKdef"));
        SKbl = parseInt(localStorage.getItem("SKbl"));
        SKqua = parseInt(localStorage.getItem("SKqua"));
        SKAmount = parseInt(localStorage.getItem("SKAmount"));
        You.EXP = parseInt(localStorage.getItem("exp"));
        You.AP = parseInt(localStorage.getItem("ap"));

        char_event = JSON.parse(localStorage.getItem("event"));
        doact(char_event);

        year = parseInt(localStorage.getItem("year"));
        month = parseInt(localStorage.getItem("month"));
        day = parseInt(localStorage.getItem("day"));
        hour = parseInt(localStorage.getItem("hour"));
        minute = parseInt(localStorage.getItem("minute"));
        season = localStorage.getItem("season");
        weather = localStorage.getItem("weather");

        for (i = 0; i < Item_table.length; i++) {
            if (localStorage.getItem(`item ${i}`) != null) {
                Item_table[i] = JSON.parse(localStorage.getItem(`item ${i}`));
            }
        }
        reload_inventory();

        purecoins = parseInt(localStorage.getItem("coins"));
        amountdonated = parseInt(localStorage.getItem("donation"));

        shopstock = JSON.parse(localStorage.getItem("shopstock"));

        graveyardshedUL = localStorage.getItem("GYUL");
        momprayUL = localStorage.getItem("MPUL");
        rustygateprogress = parseInt(localStorage.getItem("RGP"));
        rustygateUL = localStorage.getItem("RGUL");
        slimecaveprogress = parseInt(localStorage.getItem("SCP"));
        slimecaveUL = localStorage.getItem("SCUL");
        if (graveyardshedUL = true) {
            graveyardshed();
        }
        if (momprayUL = true) {
            mompray();
        }
        if (slimecaveUL = true) {
            slimecave();
        }

        for (let i = 0; i < SK_array.length; i++) {
            SK_array[i].LV = parseInt(localStorage.getItem(`${SK_array[i].name}LV`));
            SK_array[i].EXP = parseInt(localStorage.getItem(`${SK_array[i].name}EXP`));
            SK_array[i].EXPneed = parseInt(localStorage.getItem(`${SK_array[i].name}EXPneed`));
            SK_array[i].LVMSG = localStorage.getItem(`${SK_array[i].name}LVMSG`);
        }

        Weapon_Name = localStorage.getItem("Weapon");
        Sheild_Name = localStorage.getItem("Sheild");
        Hands_Name = localStorage.getItem("Hands");
        Accessory_Name = localStorage.getItem("Accessory");
        Head_Name = localStorage.getItem("Head");
        Chest_Name = localStorage.getItem("Chest");
        Legs_Name = localStorage.getItem("Legs");
        Feet_Name = localStorage.getItem("Feet");
        PartArray = JSON.parse(localStorage.getItem("PartArray"));
        EquipArray = JSON.parse(localStorage.getItem("EquipArray"));

        if (localStorage.getItem('Books') == 'true') {
            document.getElementById('MAP').style.visibility = 'visible';
            document.getElementById('SKILLS').style.visibility = 'visible';
            document.getElementById('CRAFTING').style.visibility = 'visible';
            document.getElementById('SMITHING').style.visibility = 'visible';
            document.getElementById('PARTS').style.visibility = 'visible';
            document.getElementById('EQUIPMENT').style.visibility = 'visible';
            Home_Living_Room.options = Home_Living_Room.options.filter(el => el[1] != "Books");
            document.getElementById('MAP').addEventListener('click', () => { pages("MAP"); });
            document.getElementById('SKILLS').addEventListener('click', () => { pages("SKILLS"); });
            document.getElementById('CRAFTING').addEventListener('click', () => { pages("CRAFTING"); });
            document.getElementById('SMITHING').addEventListener('click', () => { pages("SMITHING"); });
            document.getElementById('PARTS').addEventListener('click', () => { pages("PARTS"); });
            document.getElementById('EQUIPMENT').addEventListener('click', () => { pages("EQUIPMENT"); });
        }

        if (localStorage.getItem('autosaving') == 'true') {
            document.getElementById('auto_save').checked = true;
        }
    }
    time();
    InfoReset(You);
    InfoReset(enemy);
    EXP();
    EXPtooltip();
    STRtooltip();
    ENDtooltip();
    AGLtooltip();
    LUCKtooltip();
    equipstats()

    equipment_hover();

    document.addEventListener('mousemove', logKey);
    function logKey(e) {
        x = e.clientX;
        y = e.clientY;
    }

    document.getElementById("season_weather").innerHTML = "[" + season + "] [" + weather + "]";
    document.getElementById("Location").innerHTML = char_location.name;

    document.getElementById('craftbt').addEventListener('click', () => { craftPart(); funClick("Crafted!", "90%", "15%", "craftbt"); });
    document.getElementById('smithbt').addEventListener('click', () => { craftEquip(); funClick("Smithed!", "90%", "15%", "smithbt"); });
    chooseopt();

    document.getElementById('STR').onclick = STRstatup;
    document.getElementById('END').onclick = ENDstatup;
    document.getElementById('AGL').onclick = AGLstatup;
    document.getElementById('LUCK').onclick = LUCKstatup;

    document.getElementById('save').addEventListener('click', () => { save(); });
    autosave();
    document.getElementById('auto_save').addEventListener('change', async function () {
        autosave();
    });
    document.getElementById('delete_save').addEventListener('click', () => { localStorage.clear(); });

    document.getElementById('version').innerHTML = version;

    document.getElementById('part_forward_arrow').addEventListener("click", () => { if (displaypartspage < Math.round(PartArray.length / 6)) { displaypartspage++ }; displayparts(displaypartspage); });
    document.getElementById('part_back_arrow').addEventListener("click", () => { if (displaypartspage > 0) { displaypartspage-- }; displayparts(displaypartspage); });
    document.getElementById('equip_forward_arrow').addEventListener("click", () => { if (displayequippage < Math.round(EquipArray.length / 6)) { displayequippage++ }; displayequip(displayequippage); });
    document.getElementById('equip_back_arrow').addEventListener("click", () => { if (displayequippage > 0) { displayequippage-- }; displayequip(displayequippage); });

    document.getElementById('coins').innerHTML = `<span style="color:#E5E1E6">&#9679</span>${formatcoins.slice(0, -6)} <span style="color:gold">&#9679</span>${formatcoins.slice(-6, -4)} <span style="color:silver">&#9679</span>${formatcoins.slice(-4, -2)} <span style="color:#B77729">&#9679</span>${formatcoins.slice(-2)}`
};



async function fight() {
    if (enemy == none) { return; }
    enemy.current_health = enemy.health;
    InfoReset(enemy);
    console.log("Fight");
    await sleep(2500);
    while (enemy.current_health > 0 && You.current_health > 0 && fighting == true) {
        enemy.current_health = enemy.current_health - hit(You, enemy);
        document.getElementById('enemy_health').innerHTML = hp(enemy);
        await sleep(250);
        if (enemy.current_health > 0) {
            You.current_health = You.current_health - hit(enemy, You);
            document.getElementById('your_health').innerHTML = hp(You);
            await sleep(1000);
        }
    }

    if (fighting == false) {
        enemy = none;
        InfoReset(enemy);
        return;
    } else if (enemy.current_health <= 0) {
        enemy.state = "dead"
        loot(enemy.drop);
        EXPdrop(enemy);
        mbar("You win");
        fighting = false;
        return;
    } else if (You.current_health <= 0) {
        mbar("You lose");
        doact("Sleep")
        You.dead = true;
        fighting = false;
        enemy = none;
        InfoReset(enemy);
        return;
    } else {
        mbar("ERROR");
        fighting = false;
        return;
    }
}

async function heal() {
    console.log("heal")
    while (You.current_health < You.health && healing == true) {
        if (You.current_health > 0) { You.dead = false };
        You.current_health = (parseInt(You.current_health) + parseInt(You.endurance));
        if (You.current_health > You.health) {
            You.current_health = You.health;
        }
        document.getElementById('your_health').innerHTML = hp(You);
        await sleep(1000);
    }
}

function title(entity) {
    return entity.name + " " + "'" + entity.title + "'" + " " + "Lv." + entity.level;
}

function hp(entity) {
    return entity.current_health + " / " + entity.health;
}

function stats(entity) {
    return "STR:" + entity.strength + " END:" + entity.endurance + " AGL:" + entity.agility + " LUCK:" + entity.luck;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function crit(entity) {
    if (entity.luck > 0) {
        if ((Math.random() * 100) + entity.luck > 70) {
            return [entity.luck / 2, true];
        } else {
            return [1, false];
        }
    } else {
        return [1, false];
    }
}

function mbar(msg, css) {
    if (msglogcount >= 15) {
        document.getElementById("msg_log").removeChild(document.getElementById("msg_log").firstElementChild);
        msglogcount--;
    }
    var bar = document.createElement("div");
    bar.innerHTML = msg;
    bar.classList.add("mbar");
    if (css) { bar.classList.add(css); }

    document.getElementById("msg_log").appendChild(bar);
    msglogcount++;
}

function hit(cobber, opponent) {
    var crit = false;
    var dmg = 0;
    var cchit = cobber.agility * cobber.luck;
    var edodge = opponent.agility * opponent.luck + opponent.blockIn;
    if ((100 - (edodge - cchit) > Math.random() * 100)) {
        dmg = cobber.strength * (cobber.dmgIn + 1);
        if (cobber.luck > Math.random() * 100) { dmg = (dmg * cobber.luck); crit = true }
        dmg = dmg - opponent.blockIn;
        if (crit === true) {
            mbar(`${cobber.name} --> CRIT!(${dmg})`)
        } else {
            mbar(`${cobber.name} --> ${dmg}`)
        }
    } else { mbar(`${cobber.name} --> MISS`) }
    addSKexp(SK_Axe, 1);
    addSKexp(SK_Attack, Math.round(Math.random() * 7));
    addSKexp(SK_Defend, Math.round(Math.random() * 7));
    Math.round(dmg);
    return (dmg);
}

function EXP() {
    You.EXPneed = Math.round(Math.exp(You.level) * 1510);
    while (You.EXP > You.EXPneed) {
        You.EXP = parseFloat(You.EXP) - parseFloat(You.EXPneed);
        You.level++;
        You.AP = parseFloat(You.AP) + 5;
        You.strength++;
        You.endurance++;
        You.agility++;
        You.EXPneed = Math.round(Math.exp(You.level) * 1510);
        InfoReset(You);
    }
    document.getElementById('EXP_ratio').innerHTML = You.EXP + " / " + You.EXPneed;
    document.getElementById('EXP_bar').style.width = (You.EXP / You.EXPneed * 100) + "%";

}

function add_inventory(itemInfo, type) {
    var item = Item_table[Item_table.findIndex((n) => n.Name === itemInfo[0].Name)];
    if (type == "dir") {
        var quantity = parseInt(itemInfo[1]);
    } else {
        var quantity = Math.round(Math.random() * (itemInfo[1]));
        if (quantity < 1) {
            quantity = 1;
        }
    }
    item.Amount = item.Amount + quantity;
    var msg = "&nbsp;" + item.Name + " " + "x" + item.Amount;
    if (bbcount % 2 === 0) {
        column = "backpack_column_2";
    } else if (bbcount % 2 === 1) {
        column = "backpack_column_1";
    }
    if (typeof (document.getElementById(item.id)) != 'undefined' && document.getElementById(item.id) != null) {
        reload_inventory();
    } else {
        bbcount++;
        var bar = document.createElement("div");
        bar.innerHTML = msg;
        bar.classList.add("bbar");
        bar.id = item.id;

        document.getElementById(column).appendChild(bar);
        item.Have = true;
        itemusecheck(item, bar);
    }
    mbar("You got " + quantity + " " + item.Name);
}

function reload_inventory() {
    bbcount = 1;
    while (backpack_column_1.lastChild) {
        backpack_column_1.removeChild(backpack_column_1.lastChild);
    }
    while (backpack_column_2.lastChild) {
        backpack_column_2.removeChild(backpack_column_2.lastChild);
    }
    for (let i = 0; i < Item_table.length; i++) {
        item = Item_table[i];
        if (item.Have === true) {
            var msg = "&nbsp;" + item.Name + " " + "x" + item.Amount;
            if (bbcount % 2 === 0) {
                column = "backpack_column_2";
            } else if (bbcount % 2 === 1) {
                column = "backpack_column_1";
            }
            ++bbcount;
            var bar = document.createElement("div");
            bar.innerHTML = msg;
            bar.classList.add("bbar");
            bar.id = item.id;

            document.getElementById(column).appendChild(bar);
            itemusecheck(item, bar);
        }
    }
}

function remove_inventory(iitem) {
    let name = iitem[0];
    let amount = iitem[1];
    let item = Item_table[Item_table.findIndex((n) => n.Name === name)]
    item.Amount -= amount;
    if (item.Amount <= 0) {
        item.Have = false;
    }
    reload_inventory();
}


function loot(loot) {
    var items = loot.length;
    for (let i = 0; i <= items - 1; i++) {
        if (loot[i][2] >= Math.random() * 10000) {
            add_inventory(loot[i]);
        }
    }
}

function EXPdrop(entity) {
    You.EXP = parseFloat(You.EXP) + parseFloat(entity.EXP);
    EXP();
}

function fac(n) {
    var ans = 1;

    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

function InfoReset(entity) {
    if (entity == You) {
        You.health = You.endurance * 15;
        document.getElementById('your_title').innerHTML = title(entity);
        document.getElementById('your_health').innerHTML = hp(entity);
        document.getElementById('your_stats').innerHTML = stats(entity);
        document.getElementById('STR').innerHTML = "STR: " + You.strength;
        document.getElementById('END').innerHTML = "END: " + You.endurance;
        document.getElementById('AGL').innerHTML = "AGL: " + You.agility;
        document.getElementById('LUCK').innerHTML = "LUCK: " + You.luck;
        document.getElementById('EXP_tooltip').innerHTML = "This is your experience bar as you kill, learn, and create you will gain experience and make yourself stronger. On each level up you will gain ability points that can be used to make any stat stronger. AP:" + You.AP;
        if (You.AP >= 1) {
            document.getElementById('STR').style.border = "4px inset rgb(221 229 84)";
            document.getElementById('END').style.border = "4px inset rgb(221 229 84)";
            document.getElementById('AGL').style.border = "4px inset rgb(221 229 84)";
            if (You.AP >= 5) { document.getElementById('LUCK').style.border = "4px inset rgb(221 229 84)"; }
        }
        if (You.AP < 1) {
            document.getElementById('STR').style.border = "1px solid rgb(4, 43, 65)";
            document.getElementById('END').style.border = "1px solid rgb(4, 43, 65)";
            document.getElementById('AGL').style.border = "1px solid rgb(4, 43, 65)";
        }
        if (You.AP < 5) { document.getElementById('LUCK').style.border = "1px solid rgb(4, 43, 65)"; }
    } else {
        document.getElementById('enemy_title').innerHTML = title(entity);
        document.getElementById('enemy_health').innerHTML = hp(entity);
        document.getElementById('enemy_stats').innerHTML = stats(entity)
    }
}

/*EXP Tooltip*/
function EXPtooltip() {
    document.getElementById('EXP_bar_background').addEventListener("mousemove", function () {
        document.getElementById("EXP_tooltip").style.display = "block";
        document.getElementById("EXP_tooltip").style.left = (x + 15) + "px";
        document.getElementById("EXP_tooltip").style.top = (y + 15) + "px";
    });

    document.getElementById('EXP_bar_background').addEventListener("mouseout", function () { document.getElementById("EXP_tooltip").style.display = "none" });
}

/*STR Tooltip*/
function STRtooltip() {
    document.getElementById('STR').addEventListener("mousemove", function () {
        document.getElementById("STR_tooltip").style.display = "block";
        document.getElementById("STR_tooltip").style.left = (x + 15) + "px";
        document.getElementById("STR_tooltip").style.top = (y + 15) + "px";
    });
    document.getElementById('STR').addEventListener("mouseout", function () { document.getElementById("STR_tooltip").style.display = "none" });
}

/*END Tooltip*/
function ENDtooltip() {
    document.getElementById('END').addEventListener("mousemove", function () {
        document.getElementById("END_tooltip").style.display = "block";
        document.getElementById("END_tooltip").style.left = (x + 15) + "px";
        document.getElementById("END_tooltip").style.top = (y + 15) + "px";
    });

    document.getElementById('END').addEventListener("mouseout", function () { document.getElementById("END_tooltip").style.display = "none" });
}

/*AGL Tooltip*/
function AGLtooltip() {
    document.getElementById('AGL').addEventListener("mousemove", function () {
        document.getElementById("AGL_tooltip").style.display = "block";
        document.getElementById("AGL_tooltip").style.left = (x + 15) + "px";
        document.getElementById("AGL_tooltip").style.top = (y + 15) + "px";
    });

    document.getElementById('AGL').addEventListener("mouseout", function () { document.getElementById("AGL_tooltip").style.display = "none" });
}

/*LUCK Tooltip*/
function LUCKtooltip() {
    document.getElementById('LUCK').addEventListener("mousemove", function () {
        document.getElementById("LUCK_tooltip").style.display = "block";
        document.getElementById("LUCK_tooltip").style.left = (x + 15) + "px";
        document.getElementById("LUCK_tooltip").style.top = (y + 15) + "px";
    });

    document.getElementById('LUCK').addEventListener("mouseout", function () { document.getElementById("LUCK_tooltip").style.display = "none" });
}

function statup(stat) {
    switch (stat) {
        default:
            console.log("Statup function Error");
            break;
        case 'STR':
            You.strength++;
            You.AP--;
            console.log("Strength Up");
            InfoReset(You);
            break;
        case 'END':
            You.endurance++;
            You.AP--;
            console.log("Endurance Up");
            InfoReset(You);
            break;
        case 'AGL':
            You.agility++;
            You.AP--;
            console.log("Agility Up");
            InfoReset(You);
            break;
        case 'LUCK':
            You.luck++;
            You.AP = You.AP - 5;
            console.log("Luck Up");
            InfoReset(You);
            break;
    }
}

function STRstatup() {
    if (You.AP >= 1) {
        statup("STR");
    }
}

function ENDstatup() {
    if (You.AP >= 1) {
        statup("END");
    }
}

function AGLstatup() {
    if (You.AP >= 1) {
        statup("AGL");
    }
}

function LUCKstatup() {
    if (You.AP >= 5) {
        statup("LUCK");
    }
}

async function time() {
    while (true) {
        let date = year + "/" + month + "/" + day;
        let clock = ((hour < 10 ? '0' : '') + hour) + ':' + ((minute < 10 ? '0' : '') + minute);
        let time = date + "|" + clock;
        document.getElementById("time_date").innerHTML = time;
        minute++;
        if (minute >= 60) {
            minute = 0;
            hour++;
        } else if (hour >= 24) {
            hour = 0;
            day++;
            weatherfunc();
            for (let i = 0; i < shopstock.length; i++) {
                shopstock[i][2] = shopstock[i][3];
            }
            document.getElementById("season_weather").innerHTML = "[" + season + "] [" + weather + "]";
        }
        switch (month) {
            default:
                console.log(month);
                console.log("Month switch Error");
                break;
            case 1:
                if (day >= 31) { month++; day = 1; };
                break;
            case 2:
                if (year % 4 == 0) {
                    if (day >= 28) { month++; day = 1; season = "Spring" };
                } else {
                    if (day >= 29) { month++; day = 1; season = "Spring" };
                }
                break;
            case 3:
                if (day >= 31) { month++; day = 1; };
                break;
            case 4:
                if (day >= 30) { month++; day = 1; };
                break;
            case 5:
                if (day >= 31) { month++; day = 1; season = "Summer"; };
                break;
            case 6:
                if (day >= 30) { month++; day = 1; };
                break;
            case 7:
                if (day >= 31) { month++; day = 1; };
                break;
            case 8:
                if (day >= 31) { month++; day = 1; season = "Autumn"; };
                break;
            case 9:
                if (day >= 30) { month++; day = 1; };
                break;
            case 10:
                if (day >= 31) { month++; day = 1; };
                break;
            case 11:
                if (day >= 30) { month++; day = 1; season = "Winter" };
                break;
            case 12:
                if (day >= 31) { year++; month = 1; day = 1; };
                break;
        }
        await sleep(1000);
    }
}

function weatherfunc() {
    let chance;
    switch (season) {
        default:
            console.log("Season switch Error");
            break;
        case 'Spring':
            switch (weather) {
                default:
                    console.log("Weather switch Error");
                    break;
                case "Sunny":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 500):
                            weather = "Sunny";
                            break;
                        case (chance <= 650 && chance > 500):
                            weather = "Cloudy";
                            break;
                        case (chance <= 850 && chance > 650):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Overcast";
                            break;
                        case (chance <= 910 && chance > 900):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 915 && chance > 910):
                            weather = "Foggy";
                            break;
                        case (chance <= 918 && chance > 915):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 918):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 200):
                            weather = "Sunny";
                            break;
                        case (chance <= 500 && chance > 200):
                            weather = "Cloudy";
                            break;
                        case (chance <= 600 && chance > 500):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 750 && chance > 600):
                            weather = "Overcast";
                            break;
                        case (chance <= 850 && chance > 750):
                            weather = "Raining";
                            break;
                        case (chance > 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 860 && chance > 850):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 860):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Partly Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 200):
                            weather = "Sunny";
                            break;
                        case (chance <= 350 && chance > 200):
                            weather = "Cloudy";
                            break;
                        case (chance <= 650 && chance > 350):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 850 && chance > 650):
                            weather = "Overcast";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Raining";
                            break;
                        case (chance > 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 910 && chance > 900):
                            weather = "Foggy";
                            break;
                        case (chance <= 960 && chance > 910):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 960):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Overcast":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 100):
                            weather = "Sunny";
                            break;
                        case (chance <= 300 && chance > 100):
                            weather = "Cloudy";
                            break;
                        case (chance <= 350 && chance > 300):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 500 && chance > 350):
                            weather = "Overcast";
                            break;
                        case (chance <= 800 && chance > 500):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 810 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 810):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Raining":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 150):
                            weather = "Sunny";
                            break;
                        case (chance <= 300 && chance > 150):
                            weather = "Cloudy";
                            break;
                        case (chance <= 500 && chance > 300):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 600 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 650 && chance > 600):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 800 && chance > 650):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Snowing":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 50):
                            weather = "Sunny";
                            break;
                        case (chance <= 200 && chance > 50):
                            weather = "Cloudy";
                            break;
                        case (chance <= 250 && chance > 200):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 350 && chance > 250):
                            weather = "Overcast";
                            break;
                        case (chance <= 500 && chance > 350):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 800 && chance > 500):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Foggy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 600 && chance > 500):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 650 && chance > 600):
                            weather = "Overcast";
                            break;
                        case (chance <= 700 && chance > 650):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 700):
                            weather = "Foggy";
                            break;
                        case (chance <= 901 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 901):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Lightning Storm":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 50):
                            weather = "Sunny";
                            break;
                        case (chance <= 150 && chance > 50):
                            weather = "Cloudy";
                            break;
                        case (chance <= 250 && chance > 150):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 300 && chance > 250):
                            weather = "Overcast";
                            break;
                        case (chance <= 600 && chance > 300):
                            weather = "Raining";
                            break;
                        case (chance <= 250):
                            weather = "Snowing";
                            break;
                        case (chance <= 750 && chance > 600):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 750):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Windy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 500):
                            weather = "Sunny";
                            break;
                        case (chance <= 550 && chance > 500):
                            weather = "Cloudy";
                            break;
                        case (chance <= 600 && chance > 550):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 650 && chance > 600):
                            weather = "Overcast";
                            break;
                        case (chance <= 700 && chance > 650):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 750 && chance > 700):
                            weather = "Foggy";
                            break;
                        case (chance <= 800 && chance > 750):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 800):
                            weather = "Windy";
                            break;
                    }
                    break;
            }
            break;
        case 'Summer':
            switch (weather) {
                default:
                    console.log("Weather switch Error");
                    break;
                case "Sunny":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 750):
                            weather = "Sunny";
                            break;
                        case (chance <= 800 && chance > 750):
                            weather = "Cloudy";
                            break;
                        case (chance <= 875 && chance > 800):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 885 && chance > 875):
                            weather = "Overcast";
                            break;
                        case (chance <= 890 && chance > 885):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance <= 891 && chance > 890):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 891):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 700):
                            weather = "Sunny";
                            break;
                        case (chance <= 800 && chance > 700):
                            weather = "Cloudy";
                            break;
                        case (chance <= 850 && chance > 800):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Overcast";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance <= 975 && chance > 950):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 975):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Partly Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 700):
                            weather = "Sunny";
                            break;
                        case (chance <= 750 && chance > 700):
                            weather = "Cloudy";
                            break;
                        case (chance <= 850 && chance > 750):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Overcast";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance <= 975 && chance > 950):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 975):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Overcast":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 600):
                            weather = "Sunny";
                            break;
                        case (chance <= 650 && chance > 600):
                            weather = "Cloudy";
                            break;
                        case (chance <= 700 && chance > 650):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 800 && chance > 700):
                            weather = "Overcast";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Raining":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 500):
                            weather = "Sunny";
                            break;
                        case (chance <= 550 && chance > 500):
                            weather = "Cloudy";
                            break;
                        case (chance <= 600 && chance > 550):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 700 && chance > 600):
                            weather = "Overcast";
                            break;
                        case (chance <= 850 && chance > 700):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 850):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Snowing":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 500):
                            weather = "Sunny";
                            break;
                        case (chance < 0):
                            weather = "Cloudy";
                            break;
                        case (chance < 0):
                            weather = "Partly Cloudy";
                            break;
                        case (chance < 0):
                            weather = "Overcast";
                            break;
                        case (chance < 0):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance < 0):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 500):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Foggy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 750):
                            weather = "Sunny";
                            break;
                        case (chance <= 800 && chance > 750):
                            weather = "Cloudy";
                            break;
                        case (chance <= 850 && chance > 800):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 875 && chance > 850):
                            weather = "Overcast";
                            break;
                        case (chance <= 880 && chance > 875):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 880):
                            weather = "Foggy";
                            break;
                        case (chance <= 905 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 905):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Lightning Storm":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 500):
                            weather = "Sunny";
                            break;
                        case (chance <= 550 && chance > 500):
                            weather = "Cloudy";
                            break;
                        case (chance <= 600 && chance > 550):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 700 && chance > 600):
                            weather = "Overcast";
                            break;
                        case (chance <= 850 && chance > 700):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 850):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Windy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 450 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 500 && chance > 450):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 525 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 540 && chance > 525):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 545 && chance > 540):
                            weather = "Foggy";
                            break;
                        case (chance <= 550 && chance > 545):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 550):
                            weather = "Windy";
                            break;
                    }
                    break;
            }
            break;
        case 'Autumn':
            switch (weather) {
                default:
                    console.log("Weather switch Error");
                    break;
                case "Sunny":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 450 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 500 && chance > 450):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 550 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 600 && chance > 550):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 650 && chance > 600):
                            weather = "Foggy";
                            break;
                        case (chance <= 700 && chance > 650):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 700):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 550 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 600 && chance > 550):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 750 && chance > 600):
                            weather = "Overcast";
                            break;
                        case (chance <= 800 && chance > 750):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 850 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Partly Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 650 && chance > 500):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 750 && chance > 650):
                            weather = "Overcast";
                            break;
                        case (chance <= 775 && chance > 750):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 850 && chance > 775):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Overcast":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 600 && chance > 500):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 750 && chance > 600):
                            weather = "Overcast";
                            break;
                        case (chance <= 850 && chance > 750):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Raining":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 300):
                            weather = "Sunny";
                            break;
                        case (chance <= 400 && chance > 300):
                            weather = "Cloudy";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 650 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 750 && chance > 650):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 850 && chance > 750):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 850):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Snowing":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 500):
                            weather = "Sunny";
                            break;
                        case (chance < 0):
                            weather = "Cloudy";
                            break;
                        case (chance < 0):
                            weather = "Partly Cloudy";
                            break;
                        case (chance < 0):
                            weather = "Overcast";
                            break;
                        case (chance < 0):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance < 0):
                            weather = "Foggy";
                            break;
                        case (chance < 0):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 500):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Foggy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 425 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 450 && chance > 425):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 475 && chance > 450):
                            weather = "Overcast";
                            break;
                        case (chance <= 500 && chance > 475):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 800 && chance > 500):
                            weather = "Foggy";
                            break;
                        case (chance <= 825 && chance > 800):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 825):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Lightning Storm":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 300):
                            weather = "Sunny";
                            break;
                        case (chance <= 400 && chance > 300):
                            weather = "Cloudy";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 650 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 750 && chance > 650):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 850 && chance > 750):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 850):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Windy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 400):
                            weather = "Sunny";
                            break;
                        case (chance <= 450 && chance > 400):
                            weather = "Cloudy";
                            break;
                        case (chance <= 475 && chance > 450):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 525 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 550 && chance > 525):
                            weather = "Raining";
                            break;
                        case (chance < 0):
                            weather = "Snowing";
                            break;
                        case (chance <= 575 && chance > 550):
                            weather = "Foggy";
                            break;
                        case (chance <= 600 && chance > 575):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 600):
                            weather = "Windy";
                            break;
                    }
                    break;
            }
            break;
        case 'Winter':
            switch (weather) {
                default:
                    console.log("Weather switch Error");
                    break;
                case "Sunny":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 300):
                            weather = "Sunny";
                            break;
                        case (chance <= 400 && chance > 300):
                            weather = "Cloudy";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 600 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 700 && chance > 600):
                            weather = "Raining";
                            break;
                        case (chance <= 800 && chance > 700):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 200):
                            weather = "Sunny";
                            break;
                        case (chance <= 350 && chance > 200):
                            weather = "Cloudy";
                            break;
                        case (chance <= 400 && chance > 350):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 550 && chance > 400):
                            weather = "Overcast";
                            break;
                        case (chance <= 650 && chance > 550):
                            weather = "Raining";
                            break;
                        case (chance <= 800 && chance > 650):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Partly Cloudy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 300):
                            weather = "Sunny";
                            break;
                        case (chance <= 400 && chance > 300):
                            weather = "Cloudy";
                            break;
                        case (chance <= 550 && chance > 400):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 600 && chance > 550):
                            weather = "Overcast";
                            break;
                        case (chance <= 650 && chance > 600):
                            weather = "Raining";
                            break;
                        case (chance <= 750 && chance > 650):
                            weather = "Snowing";
                            break;
                        case (chance <= 850 && chance > 750):
                            weather = "Foggy";
                            break;
                        case (chance <= 900 && chance > 850):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 900):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Overcast":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 200):
                            weather = "Sunny";
                            break;
                        case (chance <= 350 && chance > 200):
                            weather = "Cloudy";
                            break;
                        case (chance <= 400 && chance > 350):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 550 && chance > 400):
                            weather = "Overcast";
                            break;
                        case (chance <= 650 && chance > 550):
                            weather = "Raining";
                            break;
                        case (chance <= 800 && chance > 650):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Raining":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 200):
                            weather = "Sunny";
                            break;
                        case (chance <= 350 && chance > 200):
                            weather = "Cloudy";
                            break;
                        case (chance <= 400 && chance > 350):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Overcast";
                            break;
                        case (chance <= 650 && chance > 500):
                            weather = "Raining";
                            break;
                        case (chance <= 800 && chance > 650):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Snowing":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 100):
                            weather = "Sunny";
                            break;
                        case (chance <= 250 && chance > 100):
                            weather = "Cloudy";
                            break;
                        case (chance <= 300 && chance > 250):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 450 && chance > 300):
                            weather = "Overcast";
                            break;
                        case (chance <= 550 && chance > 450):
                            weather = "Raining";
                            break;
                        case (chance <= 800 && chance > 550):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Foggy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 300):
                            weather = "Sunny";
                            break;
                        case (chance <= 400 && chance > 300):
                            weather = "Cloudy";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 550 && chance > 500):
                            weather = "Overcast";
                            break;
                        case (chance <= 650 && chance > 550):
                            weather = "Raining";
                            break;
                        case (chance <= 750 && chance > 650):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 750):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Lightning Storm":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 200):
                            weather = "Sunny";
                            break;
                        case (chance <= 350 && chance > 200):
                            weather = "Cloudy";
                            break;
                        case (chance <= 400 && chance > 350):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Overcast";
                            break;
                        case (chance <= 650 && chance > 500):
                            weather = "Raining";
                            break;
                        case (chance <= 800 && chance > 650):
                            weather = "Snowing";
                            break;
                        case (chance <= 900 && chance > 800):
                            weather = "Foggy";
                            break;
                        case (chance <= 950 && chance > 900):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 950):
                            weather = "Windy";
                            break;
                    }
                    break;
                case "Windy":
                    chance = Math.random() * 1000;
                    switch (true) {
                        default:
                            console.log("Chance switch Error");
                            break;
                        case (chance <= 100):
                            weather = "Sunny";
                            break;
                        case (chance <= 200 && chance > 100):
                            weather = "Cloudy";
                            break;
                        case (chance <= 300 && chance > 200):
                            weather = "Partly Cloudy";
                            break;
                        case (chance <= 350 && chance > 300):
                            weather = "Overcast";
                            break;
                        case (chance <= 400 && chance > 350):
                            weather = "Raining";
                            break;
                        case (chance <= 500 && chance > 400):
                            weather = "Snowing";
                            break;
                        case (chance <= 600 && chance > 500):
                            weather = "Foggy";
                            break;
                        case (chance <= 625 && chance > 600):
                            weather = "Lightning Storm";
                            break;
                        case (chance > 625):
                            weather = "Windy";
                            break;
                    }
                    break;
            }
            break;
    }
}

function chooseopt() {
    document.getElementById("header_action_box").innerHTML = char_location.description;
    var options_amount = char_location.options.length;
    while (document.getElementById("action_main_box").firstChild) {
        document.getElementById("action_main_box").removeChild(document.getElementById("action_main_box").firstChild);
    }
    for (let i = 0; i <= options_amount - 1; i++) {
        var bar = document.createElement("button");
        bar.innerHTML = char_location.options[i][0];
        bar.classList.add("abar");
        bar.id = "a_butt"
        bar.value = char_location.options[i][1];
        document.getElementById("action_main_box").appendChild(bar);
    }

    document.querySelectorAll(".abar").forEach(box => {
        box.addEventListener('click', (e) => {
            char_event = e.target.value;
            doact(e.target.value)
        });
    });
}

async function doact(value) {
    switch (value) {
        default:
            console.log("Do action error code: " + value);
            break;
        case "Village":
            char_location = Village_center;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Home":
            char_location = Home_Living_Room;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Forest":
            char_location = Forest_Entrance;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Books":
            document.getElementById('MAP').style.visibility = 'visible';
            document.getElementById('SKILLS').style.visibility = 'visible';
            document.getElementById('CRAFTING').style.visibility = 'visible';
            document.getElementById('SMITHING').style.visibility = 'visible';
            document.getElementById('PARTS').style.visibility = 'visible';
            document.getElementById('EQUIPMENT').style.visibility = 'visible';
            Home_Living_Room.options = Home_Living_Room.options.filter(el => el[1] != "Books");
            document.getElementById('MAP').addEventListener('click', () => { pages("MAP"); console.log("MAP"); });
            document.getElementById('SKILLS').addEventListener('click', () => { pages("SKILLS"); console.log("SKILLS"); });
            document.getElementById('CRAFTING').addEventListener('click', () => { pages("CRAFTING"); console.log("CRAFTING"); });
            document.getElementById('SMITHING').addEventListener('click', () => { pages("SMITHING"); console.log("SMITHING"); });
            document.getElementById('PARTS').addEventListener('click', () => { pages("PARTS"); console.log("PARTS"); });
            document.getElementById('EQUIPMENT').addEventListener('click', () => { pages("EQUIPMENT"); });
            mbar("You found your books!")
            chooseopt();
            gotbooks = true;
            break;
        case "Forest-gather-easy":
            char_location = Forest_Gathering;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            while (char_location == Forest_Gathering) {
                Gathering([[Item_table[9], 3, 500], [Item_table[7], 5, 350], [Item_table[1], 4, 300], [Item_table[2], 5, 250], [Item_table[3], 1, 200], [Item_table[4], 1, 150], [Item_table[6], 1, 100], [Item_table[5], 1, 50]]);
                while (gathering == true) {
                    if (rustygateUL == false) {
                        rustygateprogress++;
                        if (rustygateprogress >= 100000) {
                            rustygateUL = true;
                            mbar("You have found a key")
                        }
                    }
                    if (Math.random() * 100 > 99) {
                        gathering = false;
                        Leech.drop = [[Item_table[8], 1, 2500], [Item_table[2], 1, 250]];
                        enemy = Leech;
                        enemy.state = 'alive';
                        fighting = true;
                        fight();
                        while (enemy.state == "alive" && You.dead == false) {
                            await sleep(1000);
                        }
                        console.log("not sleeping");
                    }
                    await sleep(1500);
                    addSKexp(SK_Axe, 1);
                }
                if (enemy.state == "dead") {
                    enemy = none;
                    gathering = true;
                    InfoReset(enemy)
                }
                await sleep(1500);
            }
            break;
        case "Forest-gather-easy-end":
            char_location = Forest_Entrance;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            gathering = false;
            fighting = false;
            break;
        case "Sleep":
            char_location = Bed;
            gathering = false;
            fighting = false;
            healing = true;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            heal();
            break;
        case "Awaken":
            char_location = Home_Bedroom;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            healing = false;
            break;
        case "Home Bedroom":
            char_location = Home_Bedroom;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Chruch":
            char_location = Church;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Shop":
            char_location = Shop;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Cook":
            char_location = Cook;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Graveyard":
            char_location = Graveyard;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Mom":
            char_location = Mom;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Pray":
            mbar("You prayed for your mom")
            break;
        case "Shed":
            char_location = Shed;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            break;
        case "Preist":
            NPC_Chat_Box("visible", "Priest");
            Priest_Tree(0);
            break;
        case "Salesman":
            NPC_Chat_Box("visible", "Salesman");
            storefill();
            break;
        case "Chef":
            NPC_Chat_Box("visible", "Chef");
            fillrecipies();
            break;
        case "Flowers":
            if (Flower.Amount >= 5) {
                remove_inventory(["Flowers", 5])
                addSKexp(SK_Axe, 20);
                You.EXP += 20;
                EXP();
            } else {
                mbar("Not enough flowers");
            }
            break;
        case "Forest-key-check":
            if (rustygateUL == true) {
                char_location = Forest_Deep;
                document.getElementById("Location").innerHTML = char_location.name;
                chooseopt();
            } else {
                mbar("The gate is locked.")
            }
            break;
        case "Forest-gather-med":
            char_location = Forest_Deep_Gathering;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            while (char_location == Forest_Deep_Gathering) {
                Gathering([[Item_table[9], 5, 2500], [Item_table[7], 7, 1750], [Item_table[1], 6, 1500], [Item_table[2], 7, 1250], [Item_table[3], 3, 1000], [Item_table[4], 3, 750], [Item_table[6], 3, 500], [Item_table[5], 3, 250]]);
                while (gathering == true) {
                    if (Math.random() * 50 > 49) {
                        gathering = false;
                        if (Math.random() * 4 > 1) {
                            Leech.drop = [[Item_table[8], 2, 2500], [Item_table[2], 1, 500], [Item_table[3], 1, 500]];
                            enemy = Leech;
                        } else {
                            Slime.drop = [[Item_table[0], 3, 2500], [Item_table[1], 5, 1000], [Item_table[2], 5, 1000], [Item_table[17], 1, 10]];
                            enemy = Slime;
                            slimecaveprogress++;
                            if (slimecaveprogress >= 100) {
                                slimecaveUL = true;
                                slimecave();
                            }
                        }
                        enemy.state = 'alive';
                        fighting = true;
                        fight();
                        while (enemy.state == "alive" && You.dead == false) {
                            await sleep(1000);
                        }
                        console.log("not sleeping");
                    }
                    await sleep(1500);
                    addSKexp(SK_Axe, 1);
                }
                if (enemy.state == "dead") {
                    enemy = none;
                    gathering = true;
                    InfoReset(enemy)
                }
                await sleep(1500);
            }
            break;
        case "Forest-gather-med-end":
            char_location = Forest_Deep;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            gathering = false;
            fighting = false;
            break;
        case "Slime-cave":
            char_location = Slime_Cave;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            while (char_location == Slime_Cave) {
                if (Math.random() * 100 > 99) {
                    Mother_Slime.drop = [[Item_table[0], 10, 10000], [Item_table[18], 5, 1000], [Item_table[20], 1, 500]];
                    enemy = Mother_Slime;
                } else if (Math.random() * 25 > 24) {
                    Rock_Slime.drop = [[Item_table[0], 5, 5000], [Item_table[2], 1, 2000], [Item_table[15], 1, 100], [Item_table[15], 3, 100]];
                    enemy = Rock_Slime;
                } else {
                    Slime.drop = [[Item_table[0], 3, 2500], [Item_table[1], 5, 1000], [Item_table[2], 5, 1000], [Item_table[17], 1, 10]];
                    enemy = Slime;
                }
                enemy.state = 'alive';
                fighting = true;
                fight();
                while (enemy.state == "alive" && You.dead == false) {
                    await sleep(1000);
                }
                console.log("not sleeping");
                await sleep(1500);
                addSKexp(SK_Axe, 1);
                if (enemy.state == "dead") {
                    enemy = none;
                    InfoReset(enemy)
                }
            }
            break;
        case "Slime-cave-end":
            char_location = Forest_Deep;
            document.getElementById("Location").innerHTML = char_location.name;
            chooseopt();
            gathering = false;
            fighting = false;
            break;
    }
}

async function Gathering(loot) {
    gathering = true;
    while (gathering == true) {
        var items = loot.length;
        for (let i = 0; i <= items - 1; i++) {
            if (loot[i][2] >= Math.random() * 10000) {
                loot[i][1] += SKAmount;
                add_inventory(loot[i]);
            }
        }
        addSKexp(SK_Gather, 1);
        await sleep(1500);
    }

}

function togglealloff() {
    document.getElementById('header').style.visibility = 'hidden';
    document.getElementById('inv').style.visibility = 'hidden';
    document.getElementById('combat_box').style.visibility = 'hidden';
    document.getElementById('enemy_box').style.visibility = 'hidden';
    document.getElementById('the_log').style.visibility = 'hidden';
    document.getElementById('action_box').style.visibility = 'hidden';
    document.getElementById('bookshelf').style.visibility = 'hidden';
}

async function intro_message(message) {
    let msg;
    switch (message) {
        default:
            return;
        case 1:
            msg = "You wake up from a deep sleep.<br><br> After working at your father's forge for so long you have learned to sleep through anything.<br><br> But this was hard to sleep through, yesterday you came home with some groceries your dad had you get.<br><br> You came home and he was gone, the place a mess, no note, nothing...<br><br> You cannot dwell on this for too long.<br><br> You have to survive, you have to get stronger, and you have to find him.<br><br> One small problem.<br><br> You only know how to make and use axes.<br><br> Guess you better get to work.";
            document.getElementById('intro_message_box').style.height = 'auto';
            document.getElementById('intro_message_box').innerHTML = msg;
            break;
        case 2:
            msg = "You get up check yourself and grab your bag.";
            document.getElementById('inv').style.visibility = 'visible';
            document.getElementById('intro_message_box').innerHTML = msg;
            break;
        case 3:
            msg = "You jump a little, and punch the air, getting loosened up.";
            document.getElementById('combat_box').style.visibility = 'visible';
            document.getElementById('enemy_box').style.visibility = 'visible';
            document.getElementById('intro_message_box').innerHTML = msg;
            break;
        case 4:
            msg = "Your mind clears as you begin to remember what is happening.";
            document.getElementById('the_log').style.visibility = 'visible';
            document.getElementById('intro_message_box').innerHTML = msg;
            break;
        case 5:
            msg = "You look to the wall seeing an empty bookshelf. Your father always said reading and books were the best way to learn and store what you know.";
            document.getElementById('bookshelf').style.visibility = 'visible';
            document.getElementById('intro_message_box').innerHTML = msg;
            break;
        case 6:
            msg = "You blink and look around your room as you feel yourself ready to go.";
            document.getElementById('intro_message_box').innerHTML = msg;
            document.getElementById('action_box').style.visibility = 'visible';
            document.getElementById('header').style.visibility = 'visible';
            document.getElementById('intro_message_box').style.opacity = '0';
            await sleep(5000)
            document.getElementById('intro_message_box').remove();
            break;
    }
}

async function intro() {
    togglealloff();
    var message_numb = 1;
    document.getElementById('blackscreen').style.opacity = '0';
    document.getElementById('intro_message_box').style.opacity = '1';
    await sleep(5000)
    document.getElementById('blackscreen').remove();
    intro_message(message_numb);
    document.getElementById('intro_message_box').addEventListener('click', () => { message_numb++; intro_message(message_numb); });
    introplayed = true;
}

function save() {
    console.log("save")
    mbar("Game saved!");

    localStorage.setItem("save", true);

    localStorage.setItem("Books", gotbooks);
    localStorage.setItem('introplayed', introplayed);

    localStorage.setItem("Name", You.name);
    localStorage.setItem("health", You.current_health);
    localStorage.setItem("level", You.level);
    localStorage.setItem("title", You.title);
    localStorage.setItem("TitleArray", JSON.stringify(TitleArray));
    localStorage.setItem("strength", You.strength);
    localStorage.setItem("endurance", You.endurance);
    localStorage.setItem("agility", You.agility);
    localStorage.setItem("luck", You.luck);
    localStorage.setItem("SKdmg", SKdmg);
    localStorage.setItem("SKdef", SKdef);
    localStorage.setItem("SKbl", SKbl);
    localStorage.setItem("SKqua", SKqua);
    localStorage.setItem("SKAmount", SKAmount);
    localStorage.setItem("exp", You.EXP);
    localStorage.setItem("ap", You.AP);

    localStorage.setItem("event", JSON.stringify(char_event));

    localStorage.setItem("autosaving", autosaving);

    localStorage.setItem("year", year);
    localStorage.setItem("month", month);
    localStorage.setItem("day", day);
    localStorage.setItem("hour", hour);
    localStorage.setItem("minute", minute);
    localStorage.setItem("season", season);
    localStorage.setItem("weather", weather);

    for (i = 0; i < Item_table.length; i++) {
        let obj = Item_table.find(o => o.id === i);
        if (obj.Have == true) {
            localStorage.setItem(`item ${i}`, JSON.stringify(obj));
        }
    }

    localStorage.setItem("coins", purecoins);
    localStorage.setItem("donation", amountdonated);

    localStorage.setItem("shopstock", JSON.stringify(shopstock));

    localStorage.setItem("GYUL", graveyardshedUL);
    localStorage.setItem("MPUL", momprayUL);
    localStorage.setItem("RGP", rustygateprogress);
    localStorage.setItem("RGUL", rustygateUL);
    localStorage.setItem("SCP", slimecaveprogress);
    localStorage.setItem("SCUL", slimecaveUL);

    for (let i = 0; i < SK_array.length; i++) {
        localStorage.setItem(`${SK_array[i].name}LV`, SK_array[i].LV);
        localStorage.setItem(`${SK_array[i].name}EXP`, SK_array[i].EXP);
        localStorage.setItem(`${SK_array[i].name}EXPneed`, SK_array[i].EXPneed);
        localStorage.setItem(`${SK_array[i].name}LVMSG`, SK_array[i].LVMSG);
    }

    localStorage.setItem("Weapon", Weapon_Name);
    localStorage.setItem("Sheild", Sheild_Name);
    localStorage.setItem("Hands", Hands_Name);
    localStorage.setItem("Accessory", Accessory_Name);
    localStorage.setItem("Head", Head_Name);
    localStorage.setItem("Chest", Chest_Name);
    localStorage.setItem("Legs", Legs_Name);
    localStorage.setItem("Feet", Feet_Name);
    localStorage.setItem("PartArray", JSON.stringify(PartArray));
    localStorage.setItem("EquipArray", JSON.stringify(EquipArray));

}

async function autosave() {
    if (document.getElementById('auto_save').checked == true) {
        autosaving = true;
    } else {
        autosaving = false;
        localStorage.setItem("autosaving", autosaving);
    }
    while (document.getElementById('auto_save').checked == true) {
        save();
        await sleep(60000);
    }
};


function pages(pass) {
    document.getElementById('book_pages').style.visibility = 'visible';
    document.getElementById('book_exit_butt').style.visibility = 'visible';
    book_visible(pass, "visible")
    document.getElementById('book_exit_butt').addEventListener('click', () => {
        document.getElementById('book_pages').style.visibility = 'hidden';
        document.getElementById('book_exit_butt').style.visibility = 'hidden';
        crafting_recipe([false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "reset");
        book_visible(pass, "hidden")
    });
}

function book_visible(value, state) {
    switch (value) {
        default:
            console.log("Book Error: " + value)
            break;
        case "MAP":
            break;
        case "SKILLS":
            document.getElementById("Skills_Header").style.visibility = state;
            document.getElementById("Skills_Description").style.visibility = state;
            document.getElementById("Skills_Report").style.visibility = state;
            document.getElementById("Skills_List").style.visibility = state;
            document.getElementById("Skills_Header").innerHTML = "Skills";
            document.getElementById("Skills_Description").innerHTML = "Each action, each strike, whether it's hammer or axe (Mostly axe) can teach you something. Repetition and practice of activites is the best way to learn them your papa always said. Here you can see that progress, what you have learned, how much more you can learn.";
            document.getElementById("Skills_Report").innerHTML = '';
            while (document.getElementById("Skills_List").lastChild) {
                document.getElementById("Skills_List").removeChild(document.getElementById("Skills_List").lastChild);
            }
            for (let i = 0; i < SK_array.length; i++) {
                let Skill = SK_array[i];
                if (Skill.EXP > 0 || Skill.LV > 0) {
                    var block = document.createElement("div");
                    var outl = document.createElement("div");
                    var prog = document.createElement("div");
                    var ratio = document.createElement("div");
                    block.classList.add("Skills_Blocks");
                    outl.classList.add("Skills_Lvpro_Out");
                    prog.classList.add("Skills_Lvpro");
                    ratio.classList.add("Skills_LVratio");
                    block.id = `${Skill.name}_Skill`;
                    outl.id = `${Skill.name}outl`;
                    prog.id = `${Skill.name}pro`;
                    ratio.id = `${Skill.name}ratio`;
                    block.innerHTML = `${Skill.name} Skill lv.${Skill.LV}`
                    ratio.innerHTML = `${Skill.EXP}/${Skill.EXPneed}`
                    prog.style.width = (Skill.EXP / Skill.EXPneed * 100) + "%"
                    document.getElementById("Skills_List").appendChild(block);
                    document.getElementById(`${Skill.name}_Skill`).appendChild(outl);
                    document.getElementById(`${Skill.name}outl`).appendChild(prog);
                    document.getElementById(`${Skill.name}outl`).appendChild(ratio);
                    document.getElementById(`${Skill.name}_Skill`).addEventListener('click', () => {
                        document.getElementById("Skills_Header").innerHTML = Skill.name;
                        document.getElementById("Skills_Description").innerHTML = Skill.desc;
                        document.getElementById("Skills_Report").innerHTML = Skill.LVMSG;
                    })
                }
            }
            break;
        case "CRAFTING":
            document.getElementById("Crafting_Header").style.visibility = state;
            document.getElementById("Crafting_Tabs").style.visibility = state;
            document.getElementById("Crafting_Description").style.visibility = state;
            document.getElementById("Crafting_Area").style.visibility = state;
            document.getElementById("craftbt").style.visibility = state;
            document.getElementById("output").style.visibility = state;
            document.getElementById('Axe_Head').addEventListener("click", () => { crafting("Axe_Head"); });
            document.getElementById('Rod_Part').addEventListener("click", () => { crafting("Rod_Part"); });
            document.getElementById('Binding').addEventListener("click", () => { crafting("Binding"); });
            document.getElementById('Handle').addEventListener("click", () => { crafting("Handle"); });
            document.getElementById('Axe_Plate').addEventListener("click", () => { crafting("Axe_Plate"); });
            document.getElementById('Pick_Head').addEventListener("click", () => { crafting("Pick_Head"); });
            document.getElementById('Hammer_Head').addEventListener("click", () => { crafting("Hammer_Head"); });
            document.getElementById('Shovel_Head').addEventListener("click", () => { crafting("Shovel_Head"); });
            document.getElementById("out_desc").innerHTML = "";
            document.getElementById("Crafting_Header").innerHTML = "Crafting";
            document.getElementById("Crafting_Description").innerHTML = "Select a crafting recipe to begin crafting!";
            if (state == "hidden") {
                for (i = 0; i <= 20; i++) {
                    if (document.getElementById(`dropdownbt_${i + 1}`) != null) {
                        document.getElementById(`dropdownbt_${i + 1}`).value = null;
                    }
                }
            }
            break;
        case "SMITHING":
            document.getElementById("Smithing_Header").style.visibility = state;
            document.getElementById("Smithing_Tabs").style.visibility = state;
            document.getElementById("Smithing_Description").style.visibility = state;
            document.getElementById("Crafting_Area").style.visibility = state;
            document.getElementById("smithbt").style.visibility = state;
            document.getElementById("output").style.visibility = state;
            document.getElementById('Axe').addEventListener("click", () => { crafting("Axe"); });
            document.getElementById('Head').addEventListener("click", () => { crafting("Head"); });
            document.getElementById('Sheild').addEventListener("click", () => { crafting("Sheild"); });
            document.getElementById('Chest').addEventListener("click", () => { crafting("Chest"); });
            document.getElementById('Hands').addEventListener("click", () => { crafting("Hands"); });
            document.getElementById('Legs').addEventListener("click", () => { crafting("Legs"); });
            document.getElementById('Feet').addEventListener("click", () => { crafting("Feet"); });
            document.getElementById('Pickaxe').addEventListener("click", () => { crafting("Pickaxe"); });
            document.getElementById('Wood_Axe').addEventListener("click", () => { crafting("Wood_Axe"); });
            document.getElementById('Axife').addEventListener("click", () => { crafting("Axife"); });
            document.getElementById('Hammaxe').addEventListener("click", () => { crafting("Hammaxe"); });
            document.getElementById('Shovaxe').addEventListener("click", () => { crafting("Shovaxe"); });
            document.getElementById('Faxing_Axe').addEventListener("click", () => { crafting("Faxing_Axe"); });
            document.getElementById("out_desc").innerHTML = "";
            document.getElementById("Smithing_Header").innerHTML = "Smithing";
            document.getElementById("Smithing_Description").innerHTML = "Select a smithing recipe to begin smithing!";
            if (state == "hidden") {
                for (i = 0; i <= 20; i++) {
                    if (document.getElementById(`dropdownbt_${i + 1}`) != null) {
                        document.getElementById(`dropdownbt_${i + 1}`).value = null;
                    }
                }
            }
            break;
        case "PARTS":
            document.getElementById("parts_slots_page").style.visibility = state;
            document.getElementById("part_slot_1").style.visibility = state;
            document.getElementById("part_slot_2").style.visibility = state;
            document.getElementById("part_slot_3").style.visibility = state;
            document.getElementById("ppage_numb_1").style.visibility = state;
            document.getElementById("part_slot_4").style.visibility = state;
            document.getElementById("part_slot_5").style.visibility = state;
            document.getElementById("part_slot_6").style.visibility = state;
            document.getElementById("ppage_numb_2").style.visibility = state;
            displayparts(displaypartspage);
            break;
        case "EQUIPMENT":
            document.getElementById("equip_slots_page").style.visibility = state;
            document.getElementById("equip_slot_1").style.visibility = state;
            document.getElementById("equip_slot_2").style.visibility = state;
            document.getElementById("equip_slot_3").style.visibility = state;
            document.getElementById("epage_numb_1").style.visibility = state;
            document.getElementById("equip_slot_4").style.visibility = state;
            document.getElementById("equip_slot_5").style.visibility = state;
            document.getElementById("equip_slot_6").style.visibility = state;
            document.getElementById("epage_numb_2").style.visibility = state;
            displayequip(displayequippage);
            break;
    }
}

function equipment_hover() {
    document.getElementById('weapon').addEventListener("mouseover", function () { document.getElementById("weapon").innerHTML = Weapon_Name });
    document.getElementById('weapon').addEventListener("mouseout", function () { document.getElementById("weapon").innerHTML = "Weapon" });
    document.getElementById('sheild').addEventListener("mouseover", function () { document.getElementById("sheild").innerHTML = Sheild_Name });
    document.getElementById('sheild').addEventListener("mouseout", function () { document.getElementById("sheild").innerHTML = "Sheild" });
    document.getElementById('hands').addEventListener("mouseover", function () { document.getElementById("hands").innerHTML = Hands_Name });
    document.getElementById('hands').addEventListener("mouseout", function () { document.getElementById("hands").innerHTML = "Hands" });
    document.getElementById('accessory').addEventListener("mouseover", function () { document.getElementById("accessory").innerHTML = Accessory_Name });
    document.getElementById('accessory').addEventListener("mouseout", function () { document.getElementById("accessory").innerHTML = "Accessory" });
    document.getElementById('head').addEventListener("mouseover", function () { document.getElementById("head").innerHTML = Head_Name });
    document.getElementById('head').addEventListener("mouseout", function () { document.getElementById("head").innerHTML = "Head" });
    document.getElementById('chest').addEventListener("mouseover", function () { document.getElementById("chest").innerHTML = Chest_Name });
    document.getElementById('chest').addEventListener("mouseout", function () { document.getElementById("chest").innerHTML = "Chest" });
    document.getElementById('legs').addEventListener("mouseover", function () { document.getElementById("legs").innerHTML = Legs_Name });
    document.getElementById('legs').addEventListener("mouseout", function () { document.getElementById("legs").innerHTML = "Legs" });
    document.getElementById('feet').addEventListener("mouseover", function () { document.getElementById("feet").innerHTML = Feet_Name });
    document.getElementById('feet').addEventListener("mouseout", function () { document.getElementById("feet").innerHTML = "Feet" });
}

function crafting(value) {
    switch (value) {
        default:
            console.log("Crafting Error: " + value);
            break;
        /*Crafting*/
        case "Axe_Head":
            document.getElementById('Crafting_Header').innerHTML = "Axe Head";
            document.getElementById('Crafting_Header').value = "Axe_Head";
            document.getElementById('Crafting_Description').innerHTML = "The head for you next axe! Needs to be solid and sharp.";
            crafting_recipe([true, "solid"], [true, "solid"], [true, "solid"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        case "Rod_Part":
            document.getElementById('Crafting_Header').innerHTML = "Rod Part";
            document.getElementById('Crafting_Header').value = "Rod_Part";
            document.getElementById('Crafting_Description').innerHTML = "The long rod that give your equipment length and rigidness! Needs to be strong, solid, and smooth.";
            crafting_recipe([true, "solid"], [true, "solid"], [true, "solid"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        case "Binding":
            document.getElementById('Crafting_Header').innerHTML = "Binding";
            document.getElementById('Crafting_Header').value = "Binding";
            document.getElementById('Crafting_Description').innerHTML = "A good binding keeps your equipment together without it say goodbye to your axe head! Needs to be strong but flexible, maybe a little adhesive can help."
            crafting_recipe([true, "flexible"], [true, "flexible"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        case "Handle":
            document.getElementById('Crafting_Header').innerHTML = "Handle";
            document.getElementById('Crafting_Header').value = "Handle";
            document.getElementById('Crafting_Description').innerHTML = "The handle for your equipment, meant to act as a good place for you to grip, but it also covers sharp edges to protect yourself! Needs to be grippable and comfortable, adhesive could help with gripping."
            crafting_recipe([true, "flexible", "solid"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        case "Axe_Plate":
            document.getElementById('Crafting_Header').innerHTML = "Axe Plate";
            document.getElementById('Crafting_Header').value = "Axe_Plate";
            document.getElementById('Crafting_Description').innerHTML = "A solid plate in the shape in an axe head, the only shape you can think of... Should be strong and solid, it will be probably taking hits."
            crafting_recipe([true, "solid"], [true, "solid"], [true, "solid"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        case "Pick_Head":
            document.getElementById('Crafting_Header').innerHTML = "Pick Head";
            document.getElementById('Crafting_Header').value = "Pick_Head";
            document.getElementById('Crafting_Description').innerHTML = "The head for a pick, it kinda looks like a half of a really thin axe head. Strong with a sharp tip should do."
            crafting_recipe([true, "solid"], [true, "solid"], [true, "solid"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        case "Hammer_Head":
            document.getElementById('Crafting_Header').innerHTML = "Hammer Head";
            document.getElementById('Crafting_Header').value = "Hammer_Head";
            document.getElementById('Crafting_Description').innerHTML = "A big hammer head! Like a really flat axe head, also really dull, luckily you can just make something that looks like your father's old smithing hammer. Should be strong, heavy, and blunt."
            crafting_recipe([true, "solid"], [true, "solid"], [true, "solid"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        case "Shovel_Head":
            document.getElementById('Crafting_Header').innerHTML = "Shovel Head";
            document.getElementById('Crafting_Header').value = "Shovel_Head";
            document.getElementById('Crafting_Description').innerHTML = "The head of a shovel, pretty easy it's mostly just half of an axe head you dented in the center then smoothed! Needs to be strong and sharp, the ground won't know what hit it!"
            crafting_recipe([true, "solid"], [true, "solid"], [true, "solid"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Crafting");
            craftingCheck();
            break;
        /*Smithing*/
        case "Axe":
            document.getElementById('Smithing_Header').innerHTML = "Axe";
            document.getElementById('Smithing_Header').value = "Axe";
            document.getElementById('Smithing_Description').innerHTML = "A mighty axe! Double sided and sharp, ready to mow down your enemies. The only weapon you need!"
            crafting_recipe([true, "Axe_Head"], [true, "Axe_Head"], [true, "Binding"], [true, "Rod_Part"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Head":
            document.getElementById('Smithing_Header').innerHTML = "Head";
            document.getElementById('Smithing_Header').value = "Head";
            document.getElementById('Smithing_Description').innerHTML = "Is it a helmet? A hat? A cap? You are not sure but it goes on your head and protects it."
            crafting_recipe([true, "Axe_Plate"], [true, "Axe_Plate"], [true, "Binding"], [true, "Binding"], [true, "Handle"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Sheild":
            document.getElementById('Smithing_Header').innerHTML = "Sheild";
            document.getElementById('Smithing_Header').value = "Sheild";
            document.getElementById('Smithing_Description').innerHTML = "Looks like the head of your axe, but far bigger, and with a handle! It protects you from blows, you hope..."
            crafting_recipe([true, "Axe_Plate"], [true, "Binding"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Chest":
            document.getElementById('Smithing_Header').innerHTML = "Chest";
            document.getElementById('Smithing_Header').value = "Chest";
            document.getElementById('Smithing_Description').innerHTML = "Your chest piece! It fits, mostly, you can never get any chest pieces to fit around your chest right, but at least you can make it big enough so it doesn't hurt!"
            crafting_recipe([true, "Axe_Plate"], [true, "Axe_Plate"], [true, "Axe_Plate"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Rod_Part"], [true, "Rod_Part"], [true, "Rod_Part"], [true, "Rod_Part"], [true, "Rod_Part"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [false], "Smithing");
            smithingCheck();
            break;
        case "Hands":
            document.getElementById('Smithing_Header').innerHTML = "Hands";
            document.getElementById('Smithing_Header').value = "Hands";
            document.getElementById('Smithing_Description').innerHTML = "Part gauntlets, part gloves these puppies will protect your hands and make sure you keep a grip on your weapon and tools!"
            crafting_recipe([true, "Axe_Plate"], [true, "Axe_Plate"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Legs":
            document.getElementById('Smithing_Header').innerHTML = "Legs";
            document.getElementById('Smithing_Header').value = "Legs";
            document.getElementById('Smithing_Description').innerHTML = "Long and protective, some solid leggings to keep your legs intact!"
            crafting_recipe([true, "Axe_Plate"], [true, "Axe_Plate"], [true, "Axe_Plate"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Binding"], [true, "Rod_Part"], [true, "Rod_Part"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [true, "Handle"], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Feet":
            document.getElementById('Smithing_Header').innerHTML = "Feet";
            document.getElementById('Smithing_Header').value = "Feet";
            document.getElementById('Smithing_Description').innerHTML = "Some solid boots to cover your feet and keep them warm!"
            crafting_recipe([true, "Axe_Plate"], [true, "Axe_Plate"], [true, "Binding"], [true, "Binding"], [true, "Handle"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Pickaxe":
            document.getElementById('Smithing_Header').innerHTML = "Pickaxe";
            document.getElementById('Smithing_Header').value = "Pickaxe";
            document.getElementById('Smithing_Description').innerHTML = "A weapon to use against the earth! Rocks will fear you with a solid pickaxe!"
            crafting_recipe([true, "Pick_Head"], [true, "Axe_Head"], [true, "Binding"], [true, "Rod_Part"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Wood_Axe":
            document.getElementById('Smithing_Header').innerHTML = "Wood Cutting Axe";
            document.getElementById('Smithing_Header').value = "Wood_Axe";
            document.getElementById('Smithing_Description').innerHTML = "An axe! Made to take down trees! One axe head that is sharp, with some good percision you might have more tree then saw dust when you are done!"
            crafting_recipe([true, "Axe_Head"], [true, "Binding"], [true, "Rod_Part"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Axife":
            document.getElementById('Smithing_Header').innerHTML = "Axife";
            document.getElementById('Smithing_Header').value = "Axife";
            document.getElementById('Smithing_Description').innerHTML = "It's a knife! But honestly it's just a stretched out axe head wrapped to a stick. Works as a knife though!"
            crafting_recipe([true, "Axe_Head"], [true, "Binding"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Hammaxe":
            document.getElementById('Smithing_Header').innerHTML = "Hammaxe";
            document.getElementById('Smithing_Header').value = "Hammaxe";
            document.getElementById('Smithing_Description').innerHTML = "A hammer that is also mostly an axe, has good weight and can be used for crushing or just putting a lot of force into something."
            crafting_recipe([true, "Hammer_Head"], [true, "Axe_Head"], [true, "Binding"], [true, "Rod_Part"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Shovaxe":
            document.getElementById('Smithing_Header').innerHTML = "Shovaxe";
            document.getElementById('Smithing_Header').value = "Shovaxe";
            document.getElementById('Smithing_Description').innerHTML = "A really sharp shovel, great of piercing the dirt!"
            crafting_recipe([true, "Shovel_Head"], [true, "Axe_Head"], [true, "Binding"], [true, "Rod_Part"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
        case "Faxing_Axe":
            document.getElementById('Smithing_Header').innerHTML = "Faxing Axe";
            document.getElementById('Smithing_Header').value = "Faxing_Axe";
            document.getElementById('Smithing_Description').innerHTML = "An amalgamation of axe heads all made to act as a multi-farming tool, your own invention!"
            crafting_recipe([true, "Shovel_Head"], [true, "Pick_Head"], [true, "Hammer_Head"], [true, "Axe_Head"], [true, "Binding"], [true, "Binding"], [true, "Rod_Part"], [true, "Handle"], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], [false], "Smithing");
            smithingCheck();
            break;
    }
}

function crafting_recipe(array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12, array13, array14, array15, array16, array17, array18, array19, array20, type) {
    GreatArray = [array1, array2, array3, array4, array5, array6, array7, array8, array9, array10, array11, array12, array13, array14, array15, array16, array17, array18, array19, array20];
    for (let i = 0; i < GreatArray.length - 1; i++) {
        let slot = `slot_${i + 1}`;
        if (type == "Crafting") {
            if (GreatArray[i][0] == true) {
                document.getElementById(slot).style.visibility = 'visible';
                let type = GreatArray[i][1];
                let dropdownSlot = `dropdown_${i + 1}`;
                let dropdownbt = `dropdownbt_${i + 1}`;
                document.getElementById(dropdownbt).innerHTML = "Choose an item";
                document.getElementById(dropdownbt).value = null;
                while (document.getElementById(dropdownSlot).lastChild) {
                    document.getElementById(dropdownSlot).removeChild(document.getElementById(dropdownSlot).lastChild);
                }
                for (let i = 0; i < Item_table.length; i++) {
                    if (Object.values(Item_table[i].Type).includes(type) && Item_table[i].Have == true) {
                        var bar = document.createElement("a");
                        bar.innerHTML = Item_table[i].Name;
                        bar.id = `${dropdownSlot}_${Item_table[i].Name}`

                        document.getElementById(dropdownSlot).appendChild(bar);
                        document.getElementById(bar.id).addEventListener('click', function () { document.getElementById(dropdownbt).innerHTML = this.innerHTML; document.getElementById(dropdownbt).value = this.innerHTML; craftingCheck(); });
                    }
                }
                if (document.getElementById(dropdownSlot).lastChild == null) {
                    var bar = document.createElement("a");
                    bar.innerHTML = "None";
                    document.getElementById(dropdownSlot).appendChild(bar);
                }
            } else {
                document.getElementById(slot).style.visibility = 'hidden';
            }
        } else if (type == "Smithing") {
            if (GreatArray[i][0] == true) {
                document.getElementById(slot).style.visibility = 'visible';
                let type = GreatArray[i][1];
                let dropdownSlot = `dropdown_${i + 1}`;
                let dropdownbt = `dropdownbt_${i + 1}`;
                document.getElementById(dropdownbt).innerHTML = `Choose an ${type.replace("_", " ")}`;
                while (document.getElementById(dropdownSlot).lastChild) {
                    document.getElementById(dropdownSlot).removeChild(document.getElementById(dropdownSlot).lastChild);
                }
                for (let i = 0; i < PartArray.length; i++) {
                    if (PartArray[i].Type.includes(type)) {
                        var bar = document.createElement("a");
                        bar.innerHTML = PartArray[i].Name;
                        bar.value = PartArray[i].Name;
                        bar.id = `${dropdownSlot}_${PartArray[i].Name}`

                        document.getElementById(dropdownSlot).appendChild(bar);
                        document.getElementById(bar.id).addEventListener('click', function () { document.getElementById(dropdownbt).innerHTML = this.innerHTML; document.getElementById(dropdownbt).value = this.innerHTML; smithingCheck(); });
                    }
                }
                if (document.getElementById(dropdownSlot).lastChild == null) {
                    var bar = document.createElement("a");
                    bar.innerHTML = "None";
                    document.getElementById(dropdownSlot).appendChild(bar);
                }
            } else {
                document.getElementById(slot).style.visibility = 'hidden';
            }
        } else {
            document.getElementById(slot).style.visibility = 'hidden';
        }
    }
}

function craftingCheck() {
    let helpfularray = craftInfo("crafting");
    let trueslot = helpfularray[0];
    let slotfill = helpfularray[1];
    let craftslotsfill = helpfularray[2];
    let gotenough = helpfularray[3];
    let qualitymin = helpfularray[4];
    let qualitymax = helpfularray[5];
    let attributes = helpfularray[6];
    if (slotfill == trueslot && gotenough >= craftslotsfill.length) {
        document.getElementById("craftbt").disabled = false;
    } else {
        document.getElementById("craftbt").disabled = true;
    }

    let msg = `With your current items you can craft an item with a quality between ${qualitymin.toFixed(2)} - ${qualitymax.toFixed(2)} <br />
    <br />
               You're item will also have one of these attributes:${attributes}`
    document.getElementById("out_desc").innerHTML = msg;
}

function craftInfo(mode) {
    let trueslot = 0;
    for (let i = 0; i < 20; i++) {
        if (document.getElementById("Crafting_Area").children[i].style.visibility == 'visible') {
            trueslot++;
        }
    }
    let slotfill = 0;
    let craftslotsfill = [];
    let ingredients = [];
    if (mode == "crafting") {
        for (let i = 0; i < trueslot; i++) {
            if (document.getElementById(`dropdownbt_${i + 1}`).value != "null") {
                slotfill++;
                if (craftslotsfill.indexOf(craftslotsfill.find(({ 0: n }) => n === document.getElementById(`dropdownbt_${i + 1}`).value)) != -1) {
                    craftslotsfill[craftslotsfill.indexOf(craftslotsfill.find(({ 0: n }) => n === document.getElementById(`dropdownbt_${i + 1}`).value))][1]++;
                } else {
                    craftslotsfill.push([document.getElementById(`dropdownbt_${i + 1}`).value, 1]);
                }
            }
        }
    } else if (mode == "smithing") {
        for (let i = 0; i < trueslot; i++) {
            if (document.getElementById(`dropdownbt_${i + 1}`).value != "null") {
                slotfill++;
                if (craftslotsfill.find(({ 0: n }) => n === (PartArray[PartArray.findIndex((n) => n.Name === (document.getElementById(`dropdownbt_${i + 1}`).value))].Attribute)) != undefined) {
                    for (let j = 0; j <= craftslotsfill.length; j++) {
                        if (craftslotsfill[j].indexOf(PartArray[PartArray.findIndex((n) => n.Name === (document.getElementById(`dropdownbt_${i + 1}`).value))].Attribute) != -1) {
                            craftslotsfill[j][1]++;
                            break;
                        }
                    }
                } else {
                    craftslotsfill.push([PartArray[PartArray.findIndex((n) => n.Name === (document.getElementById(`dropdownbt_${i + 1}`).value))].Attribute, 1]);
                }
                ingredients.push(document.getElementById(`dropdownbt_${i + 1}`).value);
            }
        }
    }

    let gotenough = 0;
    let qualitymin = 0;
    let qualitymax = 0;
    let attributes = [];
    let attributeslong = [];
    if (mode == "crafting") {
        for (let i = 0; i < craftslotsfill.length; i++) {
            if (craftslotsfill[i][1] <= Item_table[Item_table.indexOf(Item_table.find(n => n.Name === craftslotsfill[i][0]))].Amount) {
                gotenough++;
                qualitymin += (Item_table[Item_table.indexOf(Item_table.find(n => n.Name === craftslotsfill[i][0]))].Quality * craftslotsfill[i][1]);
                qualitymax += (Item_table[Item_table.indexOf(Item_table.find(n => n.Name === craftslotsfill[i][0]))].Quality * craftslotsfill[i][1]) ** 1.7;
                attributes.push([` ${Item_table[Item_table.indexOf(Item_table.find(n => n.Name === craftslotsfill[i][0]))].Attribute} * ${craftslotsfill[i][1]}`])
            }
        }
        for (let i = 0; i < trueslot; i++) {
            if (document.getElementById(`dropdownbt_${i + 1}`).value != "null") {
                attributeslong.push([Item_table[Item_table.indexOf(Item_table.find(n => n.Name === document.getElementById(`dropdownbt_${i + 1}`).value))].Attribute]);
            }
        }
    } else if (mode == "smithing") {
        for (let i = 0; i < craftslotsfill.length; i++) {
            if (undefined != PartArray[PartArray.indexOf(PartArray.find(n => n.Attribute === craftslotsfill[i][0]))]) {
                qualitymin += (PartArray[PartArray.indexOf(PartArray.find(n => n.Attribute === craftslotsfill[i][0]))].Quality * craftslotsfill[i][1]);
                qualitymax += (PartArray[PartArray.indexOf(PartArray.find(n => n.Attribute === craftslotsfill[i][0]))].Quality * craftslotsfill[i][1]) ** 1.3;
                attributes.push([` ${PartArray[PartArray.indexOf(PartArray.find(n => n.Attribute === craftslotsfill[i][0]))].Attribute} * ${craftslotsfill[i][1]}`])
            }
        }
        for (let i = 0; i < trueslot; i++) {
            if (document.getElementById(`dropdownbt_${i + 1}`).value != "null") {
                attributeslong.push([PartArray[PartArray.indexOf(PartArray.find(n => n.Name === document.getElementById(`dropdownbt_${i + 1}`).value))].Attribute]);
            }
            let dropvalarray = [document.getElementById(`dropdownbt_1`).value, document.getElementById(`dropdownbt_2`).value, document.getElementById(`dropdownbt_3`).value, document.getElementById(`dropdownbt_4`).value, document.getElementById(`dropdownbt_5`).value, document.getElementById(`dropdownbt_6`).value, document.getElementById(`dropdownbt_7`).value, document.getElementById(`dropdownbt_8`).value, document.getElementById(`dropdownbt_9`).value, document.getElementById(`dropdownbt_10`).value, document.getElementById(`dropdownbt_11`).value, document.getElementById(`dropdownbt_12`).value, document.getElementById(`dropdownbt_13`).value, document.getElementById(`dropdownbt_14`).value, document.getElementById(`dropdownbt_15`).value, document.getElementById(`dropdownbt_16`).value, document.getElementById(`dropdownbt_17`).value, document.getElementById(`dropdownbt_18`).value, document.getElementById(`dropdownbt_19`).value, document.getElementById(`dropdownbt_20`).value]
            let t = 0;
            dropvalarray.forEach(element => { if (document.getElementById(`dropdownbt_${i + 1}`).value == element) { t++ } })
            if (t <= 1) { gotenough++ };
        }

    }
    return ([trueslot, slotfill, craftslotsfill, gotenough, qualitymin, qualitymax, attributes, attributeslong, ingredients]);
}

function craftPart() {
    let helpfularray = craftInfo("crafting");
    let qualitymin = helpfularray[4];
    let qualitymax = helpfularray[5];
    let attributeslong = helpfularray[7];
    let ingredients = helpfularray[2];

    const newitem = new Object();
    newitem.Name = `${GreatNameArray[Math.round(Math.random() * 253)]} ${document.getElementById('Crafting_Header').innerHTML}`
    newitem.Quality = Math.round(((Math.random() * (qualitymax - qualitymin)) + qualitymin) * 100) / 100
    newitem.Attribute = (attributeslong[Math.round(Math.random() * (attributeslong.length - 1))]).toString();
    newitem.Type = document.getElementById('Crafting_Header').value;
    newitem.Amount = 1;
    PartArray.push(newitem);
    
    for (let i = 0; i < ingredients.length; i++) {
        remove_inventory(ingredients[i]);
    }
    crafting(document.getElementById('Crafting_Header').value);
    addSKexp(SK_Axe, 1);
    addSKexp(SK_Craft, Math.round(Math.random() * 7));
}

function displayparts(numb) {
    let pagenumb = numb * 2;
    let partnumb = numb * 6;
    document.getElementById("ppage_numb_1").innerHTML = `${pagenumb + 1}`
    document.getElementById("ppage_numb_2").innerHTML = `${pagenumb + 2}`
    if (PartArray[partnumb] != undefined) { document.getElementById("part_slot_1").innerHTML = `${PartArray[partnumb].Name}<br /><br /> Quality: ${PartArray[partnumb].Quality}<br /><br /> Attribute: ${PartArray[partnumb].Attribute}<br /><br />` } else { document.getElementById("part_slot_1").innerHTML = '' }
    if (PartArray[partnumb + 1] != undefined) { document.getElementById("part_slot_2").innerHTML = `${PartArray[partnumb + 1].Name}<br /><br /> Quality: ${PartArray[partnumb + 1].Quality}<br /><br /> Attribute: ${PartArray[partnumb + 1].Attribute}<br /><br />` } else { document.getElementById("part_slot_2").innerHTML = '' }
    if (PartArray[partnumb + 2] != undefined) { document.getElementById("part_slot_3").innerHTML = `${PartArray[partnumb + 2].Name}<br /><br /> Quality: ${PartArray[partnumb + 2].Quality}<br /><br /> Attribute: ${PartArray[partnumb + 2].Attribute}<br /><br />` } else { document.getElementById("part_slot_3").innerHTML = '' }
    if (PartArray[partnumb + 3] != undefined) { document.getElementById("part_slot_4").innerHTML = `${PartArray[partnumb + 3].Name}<br /><br /> Quality: ${PartArray[partnumb + 3].Quality}<br /><br /> Attribute: ${PartArray[partnumb + 3].Attribute}<br /><br />` } else { document.getElementById("part_slot_4").innerHTML = '' }
    if (PartArray[partnumb + 4] != undefined) { document.getElementById("part_slot_5").innerHTML = `${PartArray[partnumb + 4].Name}<br /><br /> Quality: ${PartArray[partnumb + 4].Quality}<br /><br /> Attribute: ${PartArray[partnumb + 4].Attribute}<br /><br />` } else { document.getElementById("part_slot_5").innerHTML = '' }
    if (PartArray[partnumb + 5] != undefined) { document.getElementById("part_slot_6").innerHTML = `${PartArray[partnumb + 5].Name}<br /><br /> Quality: ${PartArray[partnumb + 5].Quality}<br /><br /> Attribute: ${PartArray[partnumb + 5].Attribute}<br /><br />` } else { document.getElementById("part_slot_6").innerHTML = '' }
}

function removeparts(parts) {
    for (let i = 0; i < parts.length; i++) {
        PartArray.splice([PartArray.indexOf(PartArray.find(n => n.Name === parts[i]))], 1);
    }
}

function smithingCheck() {
    let helpfularray = craftInfo("smithing");
    let trueslot = helpfularray[0];
    let slotfill = helpfularray[1];
    let craftslotsfill = helpfularray[2];
    let gotenough = helpfularray[3];
    let qualitymin = helpfularray[4];
    let qualitymax = helpfularray[5];
    let attributes = helpfularray[6];
    if (slotfill == trueslot && gotenough >= slotfill) {
        document.getElementById("smithbt").disabled = false;
    } else {
        document.getElementById("smithbt").disabled = true;
    }

    let msg = `With your current items you can craft an item with a quality between ${qualitymin.toFixed(2)} - ${qualitymax.toFixed(2)} <br />
    <br />
               You're item will also have one of these attributes:${attributes}`
    document.getElementById("out_desc").innerHTML = msg;
}

function craftEquip() {
    let helpfularray = craftInfo("smithing");
    let qualitymin = helpfularray[4];
    let qualitymax = helpfularray[5];
    let attributeslong = helpfularray[7];
    let ingredients = helpfularray[8];

    const newitem = new Object();
    newitem.Name = `${GreatNameArray[Math.round(Math.random() * 255)]} ${document.getElementById('Smithing_Header').innerHTML}`
    newitem.Quality = Math.round(((Math.random() * (qualitymax - qualitymin)) + qualitymin) * 100) / 100
    newitem.Attribute = (attributeslong[Math.round(Math.random() * (attributeslong.length - 1))]).toString();
    newitem.Type = document.getElementById('Smithing_Header').value;
    newitem.Equipped = false;
    switch (newitem.Attribute) {
        case "Woody":
            newitem.Quality = Math.round((newitem.Quality * 1.2) * 100) / 100
            break;
        case "Tough":
            newitem.Quality = Math.round((newitem.Quality * 1.5) * 100) / 100
            break;
        case "Weak":
            newitem.Quality = Math.round((newitem.Quality * 0.9) * 100) / 100
            break;
        default:
            console.log("No Attribute Found")
            break;
    }
    EquipArray.push(newitem);
    removeparts(ingredients);
    crafting(document.getElementById('Smithing_Header').value);
    addSKexp(SK_Axe, 1);
    addSKexp(SK_Craft, Math.round(Math.random() * 7));
}

function displayequip(numb) {
    var equipable = document.createElement("button");
    equipable.id = "Equipable";
    equipable.innerHTML = "Equip";
    var unequip = document.createElement("button");
    unequip.id = "Unequip";
    unequip.innerHTML = "Unequip";
    var unequipable = document.createElement("button");
    unequipable.id = "Unequipable";
    unequipable.innerHTML = "Unequipable";
    var dismantle = document.createElement("button");
    dismantle.id = "Dismantle";
    dismantle.innerHTML = "Dismantle";
    let pagenumb = numb * 2;
    let equipnumb = numb * 6;
    document.getElementById("epage_numb_1").innerHTML = `${pagenumb + 1}`
    document.getElementById("epage_numb_2").innerHTML = `${pagenumb + 2}`
    if (EquipArray[equipnumb] != undefined) { document.getElementById("equip_slot_1").innerHTML = `${EquipArray[equipnumb].Name}<br /><br /> Quality: ${EquipArray[equipnumb].Quality}<br /><br /> Attribute: ${EquipArray[equipnumb].Attribute}<br /><br />` } else { document.getElementById("equip_slot_1").innerHTML = '' }
    if (EquipArray[equipnumb + 1] != undefined) { document.getElementById("equip_slot_2").innerHTML = `${EquipArray[equipnumb + 1].Name}<br /><br /> Quality: ${EquipArray[equipnumb + 1].Quality}<br /><br /> Attribute: ${EquipArray[equipnumb + 1].Attribute}<br /><br />` } else { document.getElementById("equip_slot_2").innerHTML = '' }
    if (EquipArray[equipnumb + 2] != undefined) { document.getElementById("equip_slot_3").innerHTML = `${EquipArray[equipnumb + 2].Name}<br /><br /> Quality: ${EquipArray[equipnumb + 2].Quality}<br /><br /> Attribute: ${EquipArray[equipnumb + 2].Attribute}<br /><br />` } else { document.getElementById("equip_slot_3").innerHTML = '' }
    if (EquipArray[equipnumb + 3] != undefined) { document.getElementById("equip_slot_4").innerHTML = `${EquipArray[equipnumb + 3].Name}<br /><br /> Quality: ${EquipArray[equipnumb + 3].Quality}<br /><br /> Attribute: ${EquipArray[equipnumb + 3].Attribute}<br /><br />` } else { document.getElementById("equip_slot_4").innerHTML = '' }
    if (EquipArray[equipnumb + 4] != undefined) { document.getElementById("equip_slot_5").innerHTML = `${EquipArray[equipnumb + 4].Name}<br /><br /> Quality: ${EquipArray[equipnumb + 4].Quality}<br /><br /> Attribute: ${EquipArray[equipnumb + 4].Attribute}<br /><br />` } else { document.getElementById("equip_slot_5").innerHTML = '' }
    if (EquipArray[equipnumb + 5] != undefined) { document.getElementById("equip_slot_6").innerHTML = `${EquipArray[equipnumb + 5].Name}<br /><br /> Quality: ${EquipArray[equipnumb + 5].Quality}<br /><br /> Attribute: ${EquipArray[equipnumb + 5].Attribute}<br /><br />` } else { document.getElementById("equip_slot_6").innerHTML = '' }
    for (let i = 0; i <= 5; i++) {
        var analeq = EquipArray[equipnumb + i];
        if (analeq != undefined) {
            switch (analeq.Type) {
                case "Axe":
                    switch (Weapon_Name) {
                        case "none":
                            equipable.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(equipable.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('weapon').innerHTML = EquipArray[equipnumb + i].Name; Weapon_Name = EquipArray[equipnumb + i].Name; displayequip(displayequippage); equipstats(); })
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                        case EquipArray[equipnumb + i].Name:
                            unequip.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequip.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('weapon').innerHTML = "none"; Weapon_Name = "none"; displayequip(displayequippage); equipstats(); })
                            break;
                        default:
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequipable.cloneNode(true));
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                    }
                    break;
                case "Head":
                    switch (Head_Name) {
                        case "none":
                            equipable.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(equipable.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('head').innerHTML = EquipArray[equipnumb + i].Name; Head_Name = EquipArray[equipnumb + i].Name; displayequip(displayequippage); equipstats(); })
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                        case EquipArray[equipnumb + i].Name:
                            unequip.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequip.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('head').innerHTML = "none"; Head_Name = "none"; displayequip(displayequippage); equipstats(); })
                            break;
                        default:
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequipable.cloneNode(true));
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                    }
                    break;
                case "Sheild":
                    switch (Sheild_Name) {
                        case "none":
                            equipable.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(equipable.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('sheild').innerHTML = EquipArray[equipnumb + i].Name; Sheild_Name = EquipArray[equipnumb + i].Name; displayequip(displayequippage); equipstats(); })
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                        case EquipArray[equipnumb + i].Name:
                            unequip.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequip.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('sheild').innerHTML = "none"; Sheild_Name = "none"; displayequip(displayequippage); equipstats(); })
                            break;
                        default:
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequipable.cloneNode(true));
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                    }
                    break;
                case "Chest":
                    switch (Chest_Name) {
                        case "none":
                            equipable.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(equipable.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('chest').innerHTML = EquipArray[equipnumb + i].Name; Chest_Name = EquipArray[equipnumb + i].Name; displayequip(displayequippage); equipstats(); })
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                        case EquipArray[equipnumb + i].Name:
                            unequip.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequip.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('chest').innerHTML = "none"; Chest_Name = "none"; displayequip(displayequippage); equipstats(); })
                            break;
                        default:
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequipable.cloneNode(true));
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                    }
                    break;
                case "Hands":
                    switch (Hands_Name) {
                        case "none":
                            equipable.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(equipable.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('hands').innerHTML = EquipArray[equipnumb + i].Name; Hands_Name = EquipArray[equipnumb + i].Name; displayequip(displayequippage); equipstats(); })
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                        case EquipArray[equipnumb + i].Name:
                            unequip.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequip.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('hands').innerHTML = "none"; Hands_Name = "none"; displayequip(displayequippage); equipstats(); })
                            break;
                        default:
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequipable.cloneNode(true));
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                    }
                    break;
                case "Legs":
                    switch (Legs_Name) {
                        case "none":
                            equipable.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(equipable.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('legs').innerHTML = EquipArray[equipnumb + i].Name; Legs_Name = EquipArray[equipnumb + i].Name; displayequip(displayequippage); equipstats(); })
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                        case EquipArray[equipnumb + i].Name:
                            unequip.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequip.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('legs').innerHTML = "none"; Legs_Name = "none"; displayequip(displayequippage); equipstats(); })
                            break;
                        default:
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequipable.cloneNode(true));
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                    }
                    break;
                case "Feet":
                    switch (Feet_Name) {
                        case "none":
                            equipable.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(equipable.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('feet').innerHTML = EquipArray[equipnumb + i].Name; Feet_Name = EquipArray[equipnumb + i].Name; displayequip(displayequippage); equipstats(); })
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                        case EquipArray[equipnumb + i].Name:
                            unequip.value = EquipArray[equipnumb + i].Name;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequip.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}"]`).addEventListener("click", () => { document.getElementById('feet').innerHTML = "none"; Feet_Name = "none"; displayequip(displayequippage); equipstats(); })
                            break;
                        default:
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(unequipable.cloneNode(true));
                            dismantle.value = `${EquipArray[equipnumb + i].Name}_dismantle`;
                            document.getElementById(`equip_slot_${i + 1}`).appendChild(dismantle.cloneNode(true));
                            document.querySelector(`[value="${EquipArray[equipnumb + i].Name}_dismantle"]`).addEventListener("click", () => { EquipArray.splice(equipnumb + i, 1); displayequip(displayequippage); })
                            break;
                    }
                    break;
                case "Pickaxe",
                    "Wood Cutting Axe",
                    "Axife",
                    "Hammaxe",
                    "Shovaxe",
                    "Faxing Axe":
                    break;
                default:
                    break;
            }
        }
    }
}

function equipstats() {
    var tempdi;
    var tempdefi;
    var tempblocki;
    if (Weapon_Name != "none") {
        tempdi += EquipArray[EquipArray.indexOf(EquipArray.find(n => n.Name === Weapon_Name))].Quality;
    }
    if (Sheild_Name != "none") {
        tempblocki += EquipArray[EquipArray.indexOf(EquipArray.find(n => n.Name === Sheild_Name))].Quality;
    }
    if (Hands_Name != "none") {
        tempdefi += EquipArray[EquipArray.indexOf(EquipArray.find(n => n.Name === Hands_Name))].Quality;
    }
    if (Head_Name != "none") {
        tempdefi += EquipArray[EquipArray.indexOf(EquipArray.find(n => n.Name === Head_Name))].Quality;
    }
    if (Chest_Name != "none") {
        tempdefi += EquipArray[EquipArray.indexOf(EquipArray.find(n => n.Name === Chest_Name))].Quality;
    }
    if (Legs_Name != "none") {
        tempdefi += EquipArray[EquipArray.indexOf(EquipArray.find(n => n.Name === Legs_Name))].Quality;
    }
    if (Feet_Name != "none") {
        tempdefi += EquipArray[EquipArray.indexOf(EquipArray.find(n => n.Name === Feet_Name))].Quality;
    }
    tempdi += SKdmg;
    tempdefi += SKdef;
    tempblocki += SKbl;
    dmgIn = tempdi;
    defenseIn = tempdefi;
    blockIn = tempblocki;
}

async function funClick(term, posx, posy, bt) {
    var bar = document.createElement("p");
    bar.innerHTML = term;
    bar.id = "funClick";
    bar.style.right = posx;
    bar.style.bottom = posy;
    document.getElementById(bt).appendChild(bar);
    await sleep(2000);
    document.getElementById("funClick").remove();
}

function addSKexp(Skill, amount) {
    Skill.EXP += amount;
    if (Skill.EXP >= Skill.EXPneed) {
        Skill.EXP -= Skill.EXPneed;
        Skill.LV += 1;
        Skill.LVRE(Skill.LV);
        Skill.EXPneed = Math.round(Skill.EXPneed * Skill.EXPMULTI);
        InfoReset(You)
    }
}

function NPC_Chat_Box(state, NPC) {
    document.getElementById("NPC_chat_box").style.visibility = state;
    document.getElementById("NPC_chat_eb").style.visibility = state;
    switch (NPC) {
        case "Priest":
            Array.prototype.forEach.call(document.getElementsByClassName("Priest_chat"), element => { element.style.visibility = state });
            document.getElementById("NPC_chat_eb").addEventListener('click', () => { NPC_Chat_Box("hidden", "Priest"); });
            break;
        case "Salesman":
            Array.prototype.forEach.call(document.getElementsByClassName("Salesman_chat"), element => { element.style.visibility = state });
            document.getElementById("NPC_chat_eb").addEventListener('click', () => { NPC_Chat_Box("hidden", "Salesman"); });
            break;
        case "Chef":
            Array.prototype.forEach.call(document.getElementsByClassName("Cook_chat"), element => { element.style.visibility = state });
            document.getElementById("NPC_chat_eb").addEventListener('click', () => { NPC_Chat_Box("hidden", "Chef"); });
            break;

        default:
            break;
    }
    document.getElementById("NPC_chat_eb").addEventListener('click', () => { NPC_Chat_Box("hidden"); });
}

function Priest_Tree(state) {
    elementReplace("OP_box_1");
    elementReplace("OP_box_2");
    elementReplace("OP_box_3");
    elementReplace("OP_box_4");
    switch (state) {
        case 0:
            document.getElementById("Priest_text_box").innerHTML = "Welcome child, welcome to our humble church. We understand your father has recently gone missing, we pray for his return. If there is anything I can do for you please just ask, the church is here for you child.";
            document.getElementById("OP_box_1").innerHTML = "I wish to ask about the Church";
            document.getElementById("OP_box_2").innerHTML = "I wish to ask how I can help";
            document.getElementById("OP_box_3").innerHTML = "I wish to speak about my Mother";
            document.getElementById("OP_box_4").innerHTML = "I am hurt";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(1); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(2); });
            document.getElementById("OP_box_3").addEventListener('click', () => { Priest_Tree(3); });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(4); });
            break;
        case 1:
            document.getElementById("Priest_text_box").innerHTML = "The church is very old. It is said to be here longer than the town itself. Placed here by god. The church's history and knowledge is long and plentiful, please ask away child, we will answer what we can.";
            document.getElementById("OP_box_1").innerHTML = "Who do you worship?";
            document.getElementById("OP_box_2").innerHTML = "What does the church do?";
            document.getElementById("OP_box_3").innerHTML = "Who are you?";
            document.getElementById("OP_box_4").innerHTML = "Nevermind";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(5); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(6); });
            document.getElementById("OP_box_3").addEventListener('click', () => { Priest_Tree(7); });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(0); });
            break;
        case 2:
            document.getElementById("Priest_text_box").innerHTML = "Ah another kind soul who wishes to aid our community. There is plenty if help needed and plenty of work available. The Church is always in need of more funds, donations are greatly needed. The graveyard can always use more love, to keep it tidy for those who mourn. And sometimes we have quests needed to be taken care of.";
            document.getElementById("OP_box_1").innerHTML = "I would like to donate.";
            document.getElementById("OP_box_2").innerHTML = "How can I help take care of the graveyard?";
            document.getElementById("OP_box_3").innerHTML = "Do you have any quests for me?";
            document.getElementById("OP_box_4").innerHTML = "Nevermind";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(17); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(18); });
            document.getElementById("OP_box_3").addEventListener('click', () => { Priest_Tree(19); });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(0); });
            break;
        case 3:
            document.getElementById("Priest_text_box").innerHTML = "Your mother... we rememember her well here. Please ask away, the best way to keep our close ones close is too keep them in our mind and hearts.";
            document.getElementById("OP_box_1").innerHTML = "Who was she?";
            document.getElementById("OP_box_2").innerHTML = "What did she do?";
            document.getElementById("OP_box_3").innerHTML = "How can I pay my respects to her?";
            document.getElementById("OP_box_4").innerHTML = "I want to talk about something else....";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(20); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(21); });
            document.getElementById("OP_box_3").addEventListener('click', () => { Priest_Tree(22); });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(0); });
            break;
        case 4:
            document.getElementById("Priest_text_box").innerHTML = "Ah let me heal you child.";
            document.getElementById("OP_box_1").innerHTML = "Thank you I need something else.";
            document.getElementById("OP_box_2").innerHTML = "";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(0); });
            document.getElementById("OP_box_2").addEventListener('click', () => { });
            document.getElementById("OP_box_3").addEventListener('click', () => { });
            document.getElementById("OP_box_4").addEventListener('click', () => { });
            You.current_health = You.health;
            document.getElementById('your_health').innerHTML = hp(You);
            mbar("You are healed");
            break;
        case 5:
            document.getElementById("Priest_text_box").innerHTML = "Our god is The Great Gaia, for it is all of creation, all of our world and universe. From it's power we can be one with our souls, the Earth, and the universe. With the help of The Great Gaia, any mortal can find there way in its world.";
            document.getElementById("OP_box_1").innerHTML = "What does 'The Great Gaia' look like?";
            document.getElementById("OP_box_2").innerHTML = "What is my way then?";
            document.getElementById("OP_box_3").innerHTML = "Why not call it GG? The Great Gaia is super wordy?";
            document.getElementById("OP_box_4").innerHTML = "I had a different question about the Church.";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(8); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(9); });
            document.getElementById("OP_box_3").addEventListener('click', () => { Priest_Tree(10); });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 6:
            document.getElementById("Priest_text_box").innerHTML = "We spread the word of The Great Gaia. Helping it's people in any way we can. We do community work as well as help gather funds for local projects. We also take care of the graveyard and provide countless services to our congregation.";
            document.getElementById("OP_box_1").innerHTML = "How are funds gathered, and for what?";
            document.getElementById("OP_box_2").innerHTML = "How do you take care of the graveyard?";
            document.getElementById("OP_box_3").innerHTML = "What services do you provide?";
            document.getElementById("OP_box_4").innerHTML = "I had a different question about the Church.";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(11); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(12); });
            document.getElementById("OP_box_3").addEventListener('click', () => { Priest_Tree(13); });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 7:
            document.getElementById("Priest_text_box").innerHTML = "I am pastor Greg. Servant to The Great Gaia. I spread it's word through me and do what I can to fufill it's will and to aid my brothers and sisters. I am but a vessel in this world.";
            document.getElementById("OP_box_1").innerHTML = "How did you become a Pastor?";
            document.getElementById("OP_box_2").innerHTML = "Do you do or enjoy anything outside of the church?";
            document.getElementById("OP_box_3").innerHTML = "Vessel seems a bit duhumanizing don't you think?";
            document.getElementById("OP_box_4").innerHTML = "I had a different question about the Church.";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(14); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(15); });
            document.getElementById("OP_box_3").addEventListener('click', () => { Priest_Tree(16); });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 8:
            document.getElementById("Priest_text_box").innerHTML = "The Great Gaia has no form, except for the universe itself. However we do have a symbol to represent The Great Gaia. The First Calamity. A world corrupted and broken existed long ago. The Great Gaia destroyed that world, that universe, tearing it apart, and in the ashes, the destruction, and the death our world was born. Our universe created from ash. Now we must follow The Great Gaia so our world can prosper. Else it will be destroyed once again, and others will have to take our place.";
            document.getElementById("OP_box_1").innerHTML = "I had a different question about Gaia.";
            document.getElementById("OP_box_2").innerHTML = "Okaaaaaaaayyyyyyy. Diffrent question.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(5); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 9:
            document.getElementById("Priest_text_box").innerHTML = "The Great Gaia does not determine your way. That is for you to decide. The Great Gaia helps us acheive our way.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about Gaia?";
            document.getElementById("OP_box_2").innerHTML = "Great so no help. Anyways I had something different to ask.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(5); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 10:
            document.getElementById("Priest_text_box").innerHTML = "... Please do not abbreviate The Great Gaia's name. It is offensive to all it has done for us and all it does. The least us mortals can do is refer to it's whole name.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about Gaia?";
            document.getElementById("OP_box_2").innerHTML = "It's just a- nevemind. I have a different question.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(5); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 11:
            document.getElementById("Priest_text_box").innerHTML = "Through the kind donations of our community and congregation. With it we buy supplies for buildings, we buy the ingredients to help our charitable chef make food for our community, as well as medicine to help our sick and poor.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about what the church does.";
            document.getElementById("OP_box_2").innerHTML = "That's nice. I have a different question.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(6); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 12:
            document.getElementById("Priest_text_box").innerHTML = "The church waters the plants, digs new plots, and care for the plots that are there. The younger of our congregation wash down and care for the tombstones. There is a shed in the grave yard. If you wish to help I am sure we all would be thankful.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about what the church does.";
            document.getElementById("OP_box_2").innerHTML = "Oh! I might do that! Thanks, however right now I have other questions!";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(6); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 13:
            document.getElementById("Priest_text_box").innerHTML = "We provide spiritual consoling, weekly service, as well as healing. If you are intrested in any of these you may speak with me or join us weekly.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about what the church does.";
            document.getElementById("OP_box_2").innerHTML = "Healing? Now that is something I can use! I got a different question real quick.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(6); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 14:
            document.getElementById("Priest_text_box").innerHTML = "I took an intrest to The Great Gaia as a child, my parents would bring me to the church. Pastor Chanclor saw my intrest when I was a child. He would let me stay late, he would teach me... console me after I lost my parents. Gave me a path and support when I needed it. When he preached it felt like The Great Gaia was talking to me directly. I knew I had to be a pastor, to spread that message.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about you.";
            document.getElementById("OP_box_2").innerHTML = "Wow... that's... um... I have a different question.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(7); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 15:
            document.getElementById("Priest_text_box").innerHTML = "Hmm outside of the church... not really I am almost always here or leading church activites. Though once a year I do take a rest, it's a three day fast and metitation. It allows me keep up every year without fail no matter my age.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about you.";
            document.getElementById("OP_box_2").innerHTML = "I wish I could rest like that... another question.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(7); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 16:
            document.getElementById("Priest_text_box").innerHTML = "It is an accurate descriptor. I am meant to funnel the will of The Great Gaia through my words and actions. The Great Gaia needs mortal vessels to help spread it's will and message.";
            document.getElementById("OP_box_1").innerHTML = "I have a different question about you.";
            document.getElementById("OP_box_2").innerHTML = "I guess.. okay.... different question.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(7); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(1); });
            break;
        case 17:
            document.getElementById("Priest_text_box").innerHTML = "What would you like to donate today?";
            document.getElementById("OP_box_1").innerHTML = "Copper";
            document.getElementById("OP_box_2").innerHTML = "Silver";
            document.getElementById("OP_box_3").innerHTML = "Gold";
            document.getElementById("OP_box_4").innerHTML = "Nevermind";
            document.getElementById("OP_box_1").addEventListener('click', () => { donate("Copper") });
            document.getElementById("OP_box_2").addEventListener('click', () => { donate("Silver") });
            document.getElementById("OP_box_3").addEventListener('click', () => { donate("Gold") });
            document.getElementById("OP_box_4").addEventListener('click', () => { Priest_Tree(2); });
            break;
        case 18:
            if (graveyardshedUL == false) {
                document.getElementById("Priest_text_box").innerHTML = "Yes the graveyard. If you wish to help maintain the graveyard simply use the key under the mat to eneter, in there will be a list of tasks and the supplies needed to do them, we would all be thankful for your efforts.";
                document.getElementById("OP_box_1").innerHTML = "Alright I will see what I can do.";
                document.getElementById("OP_box_2").innerHTML = "";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
                graveyardshedUL = true;
                graveyardshed();
            } else {
                document.getElementById("Priest_text_box").innerHTML = "As I said the Shed has everything you will need when it comes to info and supplies.";
                document.getElementById("OP_box_1").innerHTML = "Oh, right.";
                document.getElementById("OP_box_2").innerHTML = "";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            }
            break;
        case 19:
            document.getElementById("Priest_text_box").innerHTML = "As of now we do not have any quests for you, I am sure we will have some soon.";
            document.getElementById("OP_box_1").innerHTML = "Dang okay, anything else I can help with?";
            document.getElementById("OP_box_2").innerHTML = "Alright I have something else I am wondering about.";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(0); });
            document.getElementById("OP_box_3").addEventListener('click', () => { });
            document.getElementById("OP_box_4").addEventListener('click', () => { });
            break;
        case 20:
            document.getElementById("Priest_text_box").innerHTML = "Your mother was a wonderful woman, she was... a lot like you, you have her eyes. She was an adventurer, she married your father after she shopped at his blacksmith for years. It was adorable She was more proficient with swords, but after years with axes, she became feared by all tha opposed her. She helped this community grow. She was a hero.";
            document.getElementById("OP_box_1").innerHTML = "Wow, she sounds amazing I have more questions about her.";
            document.getElementById("OP_box_2").innerHTML = "I wish to talk about a different topic...";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(3); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(0); });
            document.getElementById("OP_box_3").addEventListener('click', () => { });
            document.getElementById("OP_box_4").addEventListener('click', () => { });
            break;
        case 21:
            document.getElementById("Priest_text_box").innerHTML = "She was an adventurer. She would do quests, hunt monsters, and fulfill bounties. With those resources she would return here and help us build and grow... Do not let the devil hear this, but I fear she also protected us from that salesman... It never showed up till she passed. Be careful around that thing.";
            document.getElementById("OP_box_1").innerHTML = "I guess I am growing up to be a lot like my mother, I have another question about her.";
            document.getElementById("OP_box_2").innerHTML = "I wish to talk about a different topic...";
            document.getElementById("OP_box_3").innerHTML = "";
            document.getElementById("OP_box_4").innerHTML = "";
            document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(3); });
            document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(0); });
            document.getElementById("OP_box_3").addEventListener('click', () => { });
            document.getElementById("OP_box_4").addEventListener('click', () => { });
            break;
        case 22:
            if (momprayUL == false) {
                document.getElementById("Priest_text_box").innerHTML = "Ah yes. Paying respects to those who have passed away. We suggest you pray, for The Great Gaia will hear your prayers, and the more you pray the more The Great Gaia will do to aid our loved ones in the after life.";
                document.getElementById("OP_box_1").innerHTML = "Thank you I will try that, I have another question about her.";
                document.getElementById("OP_box_2").innerHTML = "I wish to talk about a different topic...";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(3); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(0); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
                mompray();
                momprayUL = true;
            } else if (momprayUL == true) {
                document.getElementById("Priest_text_box").innerHTML = "Our suggestion of praying is the best I can offer. I wish you luck.";
                document.getElementById("OP_box_1").innerHTML = "Oh, right, I have another question about her.";
                document.getElementById("OP_box_2").innerHTML = "I wish to talk about a different topic...";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(3); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(0); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            }
            break;
        default:
            console.log(`ERROR INPUT ${state}`)
            break;
    }

}

function elementReplace(element) {
    var old_element = document.getElementById(element);
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}

function donate(c) {
    elementReplace("OP_box_1");
    elementReplace("OP_box_2");
    elementReplace("OP_box_3");
    elementReplace("OP_box_4");
    switch (c) {
        case "Copper":
            let cdonation = prompt("How much would you like to donate?", "0");
            if (cdonation > 0 && cdonation <= purecoins) {
                purecoins -= cdonation;
                amountdonated += cdonation;
                document.getElementById("Priest_text_box").innerHTML = `Thank you for donating ${cdonation} copper.`;
                document.getElementById("OP_box_1").innerHTML = "You're welcome.";
                document.getElementById("OP_box_2").innerHTML = "I would like to donate more.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else if (cdonation > purecoins) {
                document.getElementById("Priest_text_box").innerHTML = `You don't seem to have enough to donate that amount.`;
                document.getElementById("OP_box_1").innerHTML = "I- I am going to come back later.";
                document.getElementById("OP_box_2").innerHTML = "I meant to donate this.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else if (cdonation <= 0 || typeof cdonation != "number") {
                document.getElementById("Priest_text_box").innerHTML = `Haha, funny, you need to donate something if you wish to donate.`;
                document.getElementById("OP_box_1").innerHTML = "Alright, i will be back to donate something.";
                document.getElementById("OP_box_2").innerHTML = "Alright here is what I wish to donate.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else {
                console.log(cdonation);
            }
            break;
        case "Silver":
            let sdonation = prompt("How much would you like to donate?", "0");
            if (sdonation > 0 && sdonation * 100 <= purecoins) {
                purecoins -= sdonation * 100;
                amountdonated += sdonation * 100;
                document.getElementById("Priest_text_box").innerHTML = `Thank you for donating ${sdonation} silver.`;
                document.getElementById("OP_box_1").innerHTML = "You're welcome.";
                document.getElementById("OP_box_2").innerHTML = "I would like to donate more.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else if (sdonation > purecoins) {
                document.getElementById("Priest_text_box").innerHTML = `You don't seem to have enough to donate that amount.`;
                document.getElementById("OP_box_1").innerHTML = "I- I am going to come back later.";
                document.getElementById("OP_box_2").innerHTML = "I meant to donate this.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else if (sdonation <= 0 || typeof sdonation != "number") {
                document.getElementById("Priest_text_box").innerHTML = `Haha, funny, you need to donate something if you wish to donate.`;
                document.getElementById("OP_box_1").innerHTML = "Alright, i will be back to donate something.";
                document.getElementById("OP_box_2").innerHTML = "Alright here is what I wish to donate.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else {
                console.log(sdonation);
            }
            break;
        case "Gold":
            let gdonation = prompt("How much would you like to donate?", "0");
            if (gdonation > 0 && gdonation * 10000 <= purecoins) {
                purecoins -= gdonation * 10000;
                amountdonated += gdonation * 10000;
                document.getElementById("Priest_text_box").innerHTML = `Thank you for donating ${gdonation} gold.`;
                document.getElementById("OP_box_1").innerHTML = "You're welcome.";
                document.getElementById("OP_box_2").innerHTML = "I would like to donate more.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else if (gdonation > purecoins) {
                document.getElementById("Priest_text_box").innerHTML = `You don't seem to have enough to donate that amount.`;
                document.getElementById("OP_box_1").innerHTML = "I- I am going to come back later.";
                document.getElementById("OP_box_2").innerHTML = "I meant to donate this.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else if (gdonation <= 0 || typeof gdonation != "number") {
                document.getElementById("Priest_text_box").innerHTML = `Haha, funny, you need to donate something if you wish to donate.`;
                document.getElementById("OP_box_1").innerHTML = "Alright, i will be back to donate something.";
                document.getElementById("OP_box_2").innerHTML = "Alright here is what I wish to donate.";
                document.getElementById("OP_box_3").innerHTML = "";
                document.getElementById("OP_box_4").innerHTML = "";
                document.getElementById("OP_box_1").addEventListener('click', () => { Priest_Tree(2); });
                document.getElementById("OP_box_2").addEventListener('click', () => { Priest_Tree(17); });
                document.getElementById("OP_box_3").addEventListener('click', () => { });
                document.getElementById("OP_box_4").addEventListener('click', () => { });
            } else {
                console.log(gdonation);
            }
            break;

        default:
            break;
    }
}

function graveyardshed() {
    Graveyard.options.push(["Enter the Shed", "Shed"]);
}

function mompray() {
    Mom.options.push(["Pray for your Mother", "Pray"]);
}

function slimecave() {
    Forest_Deep.options.push(["Enter the slime cave", "Slime-cave"]);
}

function fillrecipies() {
    document.getElementById("cook_button").style.opacity = 0.5;
    document.getElementById("recipe_description").innerHTML = "";
    while (document.getElementById("recipe_ingredients").firstChild) {
        document.getElementById("recipe_ingredients").removeChild(document.getElementById("recipe_ingredients").firstChild);
    }
    while (document.getElementById("recipe_selection").firstChild) {
        document.getElementById("recipe_selection").removeChild(document.getElementById("recipe_selection").firstChild);
    }
    for (let i = 0; i < recipe_array.length; i++) {
        let cur_rec = recipe_array[i];
        var bar = document.createElement("div");
        bar.innerHTML = cur_rec.name;
        bar.classList.add("rec_bar");
        bar.addEventListener('click', () => {
            while (document.getElementById("recipe_ingredients").firstChild) {
                document.getElementById("recipe_ingredients").removeChild(document.getElementById("recipe_ingredients").firstChild);
            }
            document.getElementById("recipe_description").innerHTML = cur_rec.description;
            for (let i = 0; i < cur_rec.ingredients.length; i++) {
                let cur_ing = cur_rec.ingredients[i];
                var ing = document.createElement("p");
                ing.innerHTML = `&nbsp; ${cur_ing[0].Name} * ${cur_ing[1]}`
                document.getElementById("recipe_ingredients").appendChild(ing);
            }
            cook(cur_rec.ingredients, cur_rec.output)
        });
        document.getElementById("recipe_selection").appendChild(bar);

    }
}

function cook(ingredients, output) {
    elementReplace("cook_button");
    let have_enough = 0;
    for (let i = 0; i < ingredients.length; i++) {
        if (Item_table[Item_table.findIndex((n) => n.Name === ingredients[i][0].Name)].Amount >= ingredients[i][1]) { have_enough++ }
    }
    if (have_enough == ingredients.length) {
        document.getElementById("cook_button").style.opacity = 1;
        document.getElementById("cook_button").addEventListener("click", () => {
            for (let i = 0; i < ingredients.length; i++) {
                remove_inventory([ingredients[i][0].Name, ingredients[i][1]])
            }
            add_inventory([output, 1], "dir");
            funClick("Cook!", 100, 100, "cook_button")
            fillrecipies();
        })
    }
}

function itemusecheck(item, bar) {
    if (item.Category == "Useable") {
        let ibutt = document.createElement("button");
        ibutt.innerHTML = "&#9982;";
        ibutt.classList.add("usebutt");
        ibutt.id = item.Attribute;
        ibutt.addEventListener('click', () => {
            effect(ibutt.id)
            remove_inventory([item.Name, 1]);
        })
        bar.appendChild(ibutt);
    }
}

async function effect(effect) {
    switch (effect) {
        case "Sluggish":
            if (SL_active == false) {
                var SLbar = document.createElement("div");
                SLbar.id = "Sluggish_effect";
                SLbar.classList.add("effects");
                document.getElementById("character").appendChild(SLbar);
                var SLbar_TT = document.createElement("div");
                SLbar_TT.id = "Sluggish_effect_TT";
                SLbar_TT.style.width = "22em";
                SLbar_TT.classList.add("popup");
                document.body.appendChild(SLbar_TT);
                document.getElementById("Sluggish_effect").addEventListener("mousemove", function () {
                    document.getElementById("Sluggish_effect_TT").style.display = "block";
                    document.getElementById("Sluggish_effect_TT").style.left = (x + 15) + "px";
                    document.getElementById("Sluggish_effect_TT").style.top = (y + 15) + "px";
                });
                document.getElementById('Sluggish_effect').addEventListener("mouseout", function () { document.getElementById("Sluggish_effect_TT").style.display = "none" });
                SL_time += 60;
                SLbar_TT.innerHTML = `You struggle to move, you feel like a slug. <br> ${SL_time}s`
                SL_active = true;
                You.agility -= 5;
                InfoReset(You);
                console.log(SL_active)
                while (SL_time > 0) {
                    SL_time--;
                    await sleep(1000);
                    console.log(SL_active)
                    SLbar_TT.innerHTML = `You struggle to move, you feel like a slug. <br> ${SL_time}s`
                }
                SL_active = false;
                You.agility += 5;
                InfoReset(You);
                document.getElementById("Sluggish_effect").remove();
                document.getElementById("Sluggish_effect_TT").remove();
                console.log(SL_active)
            } else {
                SL_time += 60;
            }
            break;
        case "Healing":
            if (HE_active == false) {
                var HEbar = document.createElement("div");
                HEbar.id = "Healing_effect";
                HEbar.classList.add("effects");
                document.getElementById("character").appendChild(HEbar);
                var HEbar_TT = document.createElement("div");
                HEbar_TT.id = "Healing_effect_TT";
                HEbar_TT.style.width = "22em";
                HEbar_TT.classList.add("popup");
                document.body.appendChild(HEbar_TT);
                document.getElementById("Healing_effect").addEventListener("mousemove", function () {
                    document.getElementById("Healing_effect_TT").style.display = "block";
                    document.getElementById("Healing_effect_TT").style.left = (x + 15) + "px";
                    document.getElementById("Healing_effect_TT").style.top = (y + 15) + "px";
                });
                document.getElementById('Healing_effect').addEventListener("mouseout", function () { document.getElementById("Healing_effect_TT").style.display = "none" });
                HE_time += 10;
                HEbar_TT.innerHTML = `Tasty you can feel the pain drain away. <br> ${HE_time}s`
                HE_active = true;
                while (HE_time > 0) {
                    HE_time--;
                    await sleep(1000);
                    if (You.current_health <= You.health) {
                        You.current_health = (Number(You.current_health) + 20);
                        if (You.current_health > You.health) {
                            You.current_health = You.health;
                        }
                    }
                    InfoReset(You);
                    HEbar_TT.innerHTML = `Tasty you can feel the pain drain away. <br> ${HE_time}s`
                }
                HE_active = false;
                InfoReset(You);
                document.getElementById("Healing_effect").remove();
                document.getElementById("Healing_effect_TT").remove();
            } else {
                HE_time += 10;
            }
            break;
        case "Defense":
            if (DEF_active == false) {
                var DEFbar = document.createElement("div");
                DEFbar.id = "Defense_effect";
                DEFbar.classList.add("effects");
                document.getElementById("character").appendChild(DEFbar);
                var DEFbar_TT = document.createElement("div");
                DEFbar_TT.id = "Defense_effect_TT";
                DEFbar_TT.style.width = "22em";
                DEFbar_TT.classList.add("popup");
                document.body.appendChild(DEFbar_TT);
                document.getElementById("Defense_effect").addEventListener("mousemove", function () {
                    document.getElementById("Defense_effect_TT").style.display = "block";
                    document.getElementById("Defense_effect_TT").style.left = (x + 15) + "px";
                    document.getElementById("Defense_effect_TT").style.top = (y + 15) + "px";
                });
                document.getElementById('Defense_effect').addEventListener("mouseout", function () { document.getElementById("Defense_effect_TT").style.display = "none" });
                DEF_time += 60;
                DEFbar_TT.innerHTML = `Your skin hardens becoming hard to split. <br> ${DEF_time}s`
                DEF_active = true;
                You.endurance = Number(You.endurance) + 10;
                InfoReset(You);
                while (DEF_time > 0) {
                    DEF_time--;
                    await sleep(1000);
                    DEFbar_TT.innerHTML = `Your skin hardens becoming hard to split. <br> ${DEF_time}s`
                }
                DEF_active = false;
                You.endurance -= 10;
                InfoReset(You);
                document.getElementById("Defense_effect").remove();
                document.getElementById("Defense_effect_TT").remove();
            } else {
                DEF_time += 60;
            }
            break;
        case "Poisonous":
            if (POI_active == false) {
                var POIbar = document.createElement("div");
                POIbar.id = "Poison_effect";
                POIbar.classList.add("effects");
                document.getElementById("character").appendChild(POIbar);
                var POIbar_TT = document.createElement("div");
                POIbar_TT.id = "Poison_effect_TT";
                POIbar_TT.style.width = "22em";
                POIbar_TT.classList.add("popup");
                document.body.appendChild(POIbar_TT);
                document.getElementById("Poison_effect").addEventListener("mousemove", function () {
                    document.getElementById("Poison_effect_TT").style.display = "block";
                    document.getElementById("Poison_effect_TT").style.left = (x + 15) + "px";
                    document.getElementById("Poison_effect_TT").style.top = (y + 15) + "px";
                });
                document.getElementById('Poison_effect').addEventListener("mouseout", function () { document.getElementById("Poison_effect_TT").style.display = "none" });
                POI_time += 60;
                POIbar_TT.innerHTML = `Your axe is covered in purple, enemies die faster with this. <br> ${POI_time}s`
                POI_active = true;
                while (POI_time > 0) {
                    POI_time--;
                    if (fighting = true) {
                        enemy.current_health -= 10;
                    }
                    await sleep(1000);
                    POIbar_TT.innerHTML = `Your axe is covered in purple, enemies die faster with this. <br> ${POI_time}s`
                }
                POI_active = false;
                document.getElementById("Poison_effect").remove();
                document.getElementById("Poison_effect_TT").remove();
            } else {
                POI_time += 60;
            }
            break;
        case "Euphoria":
            if (EP_active == false) {
                var EPbar = document.createElement("div");
                EPbar.id = "Euphoria_effect";
                EPbar.classList.add("effects");
                document.getElementById("character").appendChild(EPbar);
                var EPbar_TT = document.createElement("div");
                EPbar_TT.id = "Euphoria_effect_TT";
                EPbar_TT.style.width = "22em";
                EPbar_TT.classList.add("popup");
                document.body.appendChild(EPbar_TT);
                document.getElementById("Euphoria_effect").addEventListener("mousemove", function () {
                    document.getElementById("Euphoria_effect_TT").style.display = "block";
                    document.getElementById("Euphoria_effect_TT").style.left = (x + 15) + "px";
                    document.getElementById("Euphoria_effect_TT").style.top = (y + 15) + "px";
                });
                document.getElementById('Euphoria_effect').addEventListener("mouseout", function () { document.getElementById("Euphoria_effect_TT").style.display = "none" });
                EP_time += 300;
                EPbar_TT.innerHTML = `You feel amazing the world is yours. <br> ${EP_time}s`
                EP_active = true;
                You.strength = Number(You.strength) + 20;
                You.endurance = Number(You.endurance) + 20;
                You.agility = Number(You.agility) + 20;
                You.luck = Number(You.luck) + 20;
                InfoReset(You);
                while (EP_time > 0) {
                    EP_time--;
                    await sleep(1000);
                    EPbar_TT.innerHTML = `You feel amazing the world is yours. <br> ${EP_time}s`
                }
                EP_active = false;
                You.strength -= 20;
                You.endurance -= 20;
                You.agility -= 20;
                You.luck -= 20;;
                InfoReset(You);
                document.getElementById("Euphoria_effect").remove();
                document.getElementById("Euphoria_effect_TT").remove();
            } else {
                EP_time += 120;
            }
            break;
        case "Attack":
            if (ATT_active == false) {
                var ATTbar = document.createElement("div");
                ATTbar.id = "Attack_effect";
                ATTbar.classList.add("effects");
                document.getElementById("character").appendChild(ATTbar);
                var ATTbar_TT = document.createElement("div");
                ATTbar_TT.id = "Attack_effect_TT";
                ATTbar_TT.style.width = "22em";
                ATTbar_TT.classList.add("popup");
                document.body.appendChild(ATTbar_TT);
                document.getElementById("Attack_effect").addEventListener("mousemove", function () {
                    document.getElementById("Attack_effect_TT").style.display = "block";
                    document.getElementById("Attack_effect_TT").style.left = (x + 15) + "px";
                    document.getElementById("Attack_effect_TT").style.top = (y + 15) + "px";
                });
                document.getElementById('Attack_effect').addEventListener("mouseout", function () { document.getElementById("Attack_effect_TT").style.display = "none" });
                ATT_time += 60;
                ATTbar_TT.innerHTML = `You sharpen your weapon. May all your foes fall to your sharp blade. <br> ${ATT_time}s`
                ATT_active = true;
                SKdmg += 10;
                InfoReset(You);
                while (ATT_time > 0) {
                    ATT_time--;
                    await sleep(1000);
                    ATTbar_TT.innerHTML = `You sharpen your weapon. May all your foes fall to your sharp blade. <br> ${ATT_time}s`
                }
                ATT_active = false;
                SKdmg -= 10;
                InfoReset(You);
                document.getElementById("Attack_effect").remove();
                document.getElementById("Attack_effect_TT").remove();
            } else {
                ATT_time += 60;
            }
            break;
        default:
            console.log(`Effect Error: ${effect}`)
            break;
    }
}

function storefill() {
    document.getElementById("transact_button").style.opacity = 0.5;
    document.getElementById("transact_amount").innerHTML = `Amount:<br><span style="color:#E5E1E6">&#9679</span>0<br><span style="color:gold">&#9679</span>0<br><span style="color:silver">&#9679</span>0<br><span style="color:#B77729">&#9679</span>0`;
    while (document.getElementById("Sales_sell").firstChild) {
        document.getElementById("Sales_sell").removeChild(document.getElementById("Sales_sell").firstChild);
    }
    while (document.getElementById("Sales_buy").firstChild) {
        document.getElementById("Sales_buy").removeChild(document.getElementById("Sales_buy").firstChild);
    }
    for (let i = 0; i < Item_table.length; i++) {
        if (Item_table[i].Have == true && Item_table[i].Type.find(element => element == "Unique") == undefined) {
            var bar = document.createElement("div");
            var amo_sel = document.createElement("input");
            var nam_p = document.createElement("p");
            nam_p.style.margin = '0 auto 0 0';
            let cp_a = document.createElement("p");
            let sp_a = document.createElement("p");
            let gp_a = document.createElement("p");
            let pp_a = document.createElement("p");
            let cur_item = Item_table[i];
            let worth = cur_item.Quality;
            pp_a.classList.add("coins");
            gp_a.classList.add("coins");
            sp_a.classList.add("coins");
            cp_a.classList.add("coins");
            worth *= 640;
            worth = Math.round(worth);
            let format_worth = worth.toString().padStart(7, '0');
            if (format_worth.slice(0, -6) > 0) {
                pp_a.innerHTML = `<span style="color:#E5E1E6">&#9679</span>${format_worth.slice(0, -6).replace(/^[0]+/g, "")}`
                gp_a.innerHTML = `<span style="color:gold">&#9679</span>${format_worth.slice(-6, -4)}`
                sp_a.innerHTML = `<span style="color:silver">&#9679</span>${format_worth.slice(-4, -2)}`
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2)}`
            }
            else if (format_worth.slice(-6, -4) > 0) {
                gp_a.innerHTML = `<span style="color:gold">&#9679</span>${format_worth.slice(-6, -4).replace(/^[0]+/g, "")}`
                sp_a.innerHTML = `<span style="color:silver">&#9679</span>${format_worth.slice(-4, -2)}`
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2)}`
            }
            else if (format_worth.slice(-4, -2) > 0) {
                sp_a.innerHTML = `<span style="color:silver">&#9679</span>${format_worth.slice(-4, -2).replace(/^[0]+/g, "")}`
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2)}`
            }
            else if (format_worth.slice(-2) > 0) {
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2).replace(/^[0]+/g, "")}`
            }
            amo_sel.type = "number";
            amo_sel.min = "0"
            amo_sel.max = cur_item.Amount;
            amo_sel.style.width = "10%";
            amo_sel.style.margin = '0 0 0 1%';
            amo_sel.wvalue = worth;
            amo_sel.itemT = cur_item.Name;
            nam_p.innerHTML = `&nbsp; ${cur_item.Name}`;
            bar.classList.add("sale_bar");
            document.getElementById("Sales_sell").appendChild(bar);
            bar.appendChild(nam_p);
            bar.appendChild(pp_a);
            bar.appendChild(gp_a);
            bar.appendChild(sp_a);
            bar.appendChild(cp_a);
            bar.appendChild(amo_sel);
            amo_sel.addEventListener("input", () => { amountestimate() });
        }
    }
    for (let i = 0; i < shopstock.length; i++) {
        if (shopstock[i][1] > 0) {
            var bar = document.createElement("div");
            var amo_sel = document.createElement("input");
            var nam_p = document.createElement("p");
            nam_p.style.margin = '0 auto 0 0';
            let cp_a = document.createElement("p");
            let sp_a = document.createElement("p");
            let gp_a = document.createElement("p");
            let pp_a = document.createElement("p");
            let cur_item = shopstock[i];
            let worth = cur_item[1];
            pp_a.classList.add("coins");
            gp_a.classList.add("coins");
            sp_a.classList.add("coins");
            cp_a.classList.add("coins");
            let format_worth = worth.toString().padStart(7, '0');
            if (format_worth.slice(0, -6) > 0) {
                pp_a.innerHTML = `<span style="color:#E5E1E6">&#9679</span>${format_worth.slice(0, -6).replace(/^[0]+/g, "")}`
                gp_a.innerHTML = `<span style="color:gold">&#9679</span>${format_worth.slice(-6, -4)}`
                sp_a.innerHTML = `<span style="color:silver">&#9679</span>${format_worth.slice(-4, -2)}`
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2)}`
            }
            else if (format_worth.slice(-6, -4) > 0) {
                gp_a.innerHTML = `<span style="color:gold">&#9679</span>${format_worth.slice(-6, -4).replace(/^[0]+/g, "")}`
                sp_a.innerHTML = `<span style="color:silver">&#9679</span>${format_worth.slice(-4, -2)}`
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2)}`
            }
            else if (format_worth.slice(-4, -2) > 0) {
                sp_a.innerHTML = `<span style="color:silver">&#9679</span>${format_worth.slice(-4, -2).replace(/^[0]+/g, "")}`
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2)}`
            }
            else if (format_worth.slice(-2) > 0) {
                cp_a.innerHTML = `<span style="color:#B77729">&#9679</span>${format_worth.slice(-2).replace(/^[0]+/g, "")}`
            }
            amo_sel.type = "number";
            amo_sel.min = "0"
            amo_sel.max = cur_item[2];
            amo_sel.style.width = "10%";
            amo_sel.style.margin = '0 0 0 1%';
            amo_sel.wvalue = worth;
            amo_sel.itemT = cur_item[0].Name;
            nam_p.innerHTML = `&nbsp; ${cur_item[0].Name}`;
            bar.classList.add("sale_bar");
            document.getElementById("Sales_buy").appendChild(bar);
            bar.appendChild(nam_p);
            bar.appendChild(pp_a);
            bar.appendChild(gp_a);
            bar.appendChild(sp_a);
            bar.appendChild(cp_a);
            bar.appendChild(amo_sel);
            amo_sel.addEventListener("input", () => { amountestimate() });
        }
    }
}

function amountestimate() {
    saleamount = 0;
    let who;
    for (i = 0; i < document.getElementById("Sales_sell").children.length; i++) {
        let curchid = document.getElementById("Sales_sell").children[i].lastChild;
        if (curchid.value > curchid.max) { curchid.value = curchid.max }
        saleamount += (curchid.value * curchid.wvalue);
    }
    for (i = 0; i < document.getElementById("Sales_buy").children.length; i++) {
        let curchid = document.getElementById("Sales_buy").children[i].lastChild;
        if (curchid.value > curchid.max) { curchid.value = curchid.max }
        saleamount -= (curchid.value * curchid.wvalue);
    }
    if (saleamount > 0) {
        who = "Salesman owes"
    } else if (saleamount < 0) {
        who = "You owe"
    } else {
        who = "Amount"
    }
    saleamount = saleamount.toString().padStart(7, '0');
    document.getElementById("transact_amount").innerHTML = `${who}:<br> <span style="color:#E5E1E6">&#9679</span>${saleamount.slice(0, -6).replace("-", "").padStart(2, '0')}<br> <span style="color:gold">&#9679</span>${saleamount.slice(-6, -4).replace("-", "0")}<br> <span style="color:silver">&#9679</span>${saleamount.slice(-4, -2).replace("-", "0")}<br> <span style="color:#B77729">&#9679</span>${saleamount.slice(-2).replace("-", "0")}`;
    if (purecoins > (saleamount.replace(/^[0]+/g, "") * -1)) {
        elementReplace("transact_button");
        document.getElementById("transact_button").style.opacity = 1;
        document.getElementById("transact_button").addEventListener("click", () => {
            purecoins += parseInt(saleamount.replace(/^[0]+/g, ""));
            formatcoins = purecoins.toString().padStart(7, '0');
            document.getElementById('coins').innerHTML = `<span style="color:#E5E1E6">&#9679</span>${formatcoins.slice(0, -6)} <span style="color:gold">&#9679</span>${formatcoins.slice(-6, -4)} <span style="color:silver">&#9679</span>${formatcoins.slice(-4, -2)} <span style="color:#B77729">&#9679</span>${formatcoins.slice(-2)}`
            for (i = 0; i < document.getElementById("Sales_sell").children.length; i++) {
                if (document.getElementById("Sales_sell").children[i].lastChild.value > 0) {
                    remove_inventory([document.getElementById("Sales_sell").children[i].lastChild.itemT, document.getElementById("Sales_sell").children[i].lastChild.value])
                }
            }
            for (i = 0; i < document.getElementById("Sales_buy").children.length; i++) {
                if (document.getElementById("Sales_buy").children[i].lastChild.value > 0) {
                    add_inventory([Item_table[Item_table.findIndex((n) => n.Name === document.getElementById("Sales_buy").children[i].lastChild.itemT)], document.getElementById("Sales_buy").children[i].lastChild.value], "dir")
                    shopstock[i][2] -= document.getElementById("Sales_buy").children[i].lastChild.value;
                }
            }
            let itemfs = document.getElementById("Sales_buy").children.length;
            for (i = 0; i < itemfs; i++) {
                if (shopstock[i][0].Type.find(element => element == "Unique") != undefined && shopstock[i][2] <= 0) {
                    shopstock.splice(i, 1);
                    i = 0;
                    itemfs--;
                }
            }
            storefill();
        })
    } else {
        elementReplace("transact_button");
        document.getElementById("transact_button").style.opacity = 0.5;
    }
}
