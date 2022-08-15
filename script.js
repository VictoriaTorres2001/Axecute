/*vItemsv*/

let Slime_Blob = {
    id: 1,
    Name:"Slime Blob",
    Description: "A weird blob of slime, the remnants of a slime, destroyed by your axe.",
    Category: "Material",
    Rarity: 0,
    Amount: 0,
    Have: false
};

let Twig = {
    id: 2,
    Name: "Twig",
    Description: "A long wooden twig, to thin and brittle to use",
    Category: "Material",
    Rarity: 0,
    Amount: 0,
    Have: false
}

let Rock = {
    id: 3,
    Name:"Rock",
    Description: "A rough, round, chunk of stone.",
    Category: "Material",
    Rarity: 0,
    Amount: 0,
    Have: false
}

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

let You = {
    name: "Alex",
    level: 1,
    title: "The Starter",
    strength: 500,
    endurance: 20,
    agility: 500,
    luck: 3,
    EXP: 0,
    EXPneed: "",
    AP: 0
};

You.health = You.endurance*15;
You.current_health = You.health;

let Slime = {
    name: "Slime",
    level: 3,
    title: "Blob",
    health: 900,
    current_health: 900,
    strength: 12,
    endurance: 60,
    agility: 3,
    luck: 0,
    EXP: 10000,
    state: "alive",
    drop: [[Slime_Blob, 2, 2500],
            [Twig, 1, 500],
            [Rock, 1, 250]]
};

Slime.health = Slime.endurance*15;
Slime.current_health = Slime.health;

/*^Entities^*/
/*vLocationsv*/

let Home_Living_Room = {
    name: "Living Room",
    enemies: [none]
}

let Outside_Main = {
    name: "Outside",
    enemies: [none]
}

let Forest = {
    name: "Living Room",
    enemies: [[Slime, 100]]
}

Home_Living_Room = {options: [["Go Outside", Outside_Main]]};
Outside_Main = {options: [["Go to Forest", Forest], ["Go Home", Home_Living_Room]]};
Forest = {options: [["Leave Forest", Outside_Main]]};
/*^Locations^*/

location = Home_Living_Room;
enemy = location.enemies[0];

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

window.onload = function () {
    time();
    InfoReset(You);
    InfoReset(enemy);
    EXP();
    EXPtooltip();
    STRtooltip();
    ENDtooltip();
    AGLtooltip();
    LUCKtooltip();

    document.getElementById("season_weather").innerHTML = "[" + season + "] [" + weather + "]";

    document.getElementById('STR').onclick = STRstatup;
    document.getElementById('END').onclick = ENDstatup;
    document.getElementById('AGL').onclick = AGLstatup;
    document.getElementById('LUCK').onclick = LUCKstatup;

    document.getElementById('Battle_Start').onclick = fight;
    document.getElementById('Heal').onclick = heal;
    
};



async function fight() {
    document.getElementById("Heal").disabled = true;
    document.getElementById("Battle_Start").disabled = true;
    console.log("Fight");
    if (enemy.state == "dead") {
        console.log("Enemy revived");
        enemy.current_health = enemy.health;
        document.getElementById('enemy_health').innerHTML = hp(enemy);
        enemy.state = "alive"
    }
    while (enemy.current_health  > 0 && You.current_health > 0) {
        enemy.current_health = enemy.current_health - hit(You);
        document.getElementById('enemy_health').innerHTML = hp(enemy);
        await sleep(250);
        if (enemy.current_health  > 0) {
        You.current_health = You.current_health - hit(enemy);
        document.getElementById('your_health').innerHTML = hp(You);  
        await sleep(1000);
        } 
    }
    
   
    if (enemy.current_health <= 0) {
        enemy.state = "dead"
        loot(enemy.drop);
        EXPdrop(enemy);
        mbar("You win");
        document.getElementById("Heal").disabled = false;
        document.getElementById("Battle_Start").disabled = false;
    } else if (You.current_health <= 0) {
        mbar("You lose");
        document.getElementById("Heal").disabled = false;
        document.getElementById("Battle_Start").disabled = false;
    } else {
        mbar("ERROR");
        document.getElementById("Heal").disabled = false;
        document.getElementById("Battle_Start").disabled = false;
    }
}

async function heal() {
    document.getElementById("Battle_Start").disabled = true;
    document.getElementById("Heal").disabled = true;
    console.log("heal")
    while (You.current_health < You.health) {
        You.current_health = (You.current_health + You.endurance);
        if (You.current_health > You.health) {
            You.current_health = You.health;
        }
        document.getElementById('your_health').innerHTML = hp(You);
        await sleep(1000);
    }
    document.getElementById("Battle_Start").disabled = false;
    document.getElementById("Heal").disabled = false;
}

function title(entity) {
    return entity.name + " " + "'" + entity.title + "'" + " " + "Lv." + entity.level;
};


function hp(entity) {
    return entity.current_health + " / " + entity.health;
};


function stats(entity) {
    return "STR:" + entity.strength + " END:" + entity.endurance + " AGL:" + entity.agility + " LUCK:" + entity.luck;
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

 function crit(entity) {
    if (entity.luck > 0) {
        if ((Math.random()*100) + entity.luck > 70) {
            return [entity.luck/2, true];
        } else {
            return [1, false];
        }
    } else {
        return [1, false];
    }
 }

 function mbar (msg, css) {
    if (msglogcount >= 19) {
        document.getElementById("msg_log").removeChild(document.getElementById("msg_log").firstElementChild);
        msglogcount --;
    }
    var bar = document.createElement("div");
    bar.innerHTML = msg;
    bar.classList.add("mbar");
    if (css) { bar.classList.add(css); }

    document.getElementById("msg_log").appendChild(bar);
    msglogcount ++;
}

function hit (entity) {
    var critvar = crit(entity);
    var [critdam, critsus] = critvar;
    var dmg = (entity.strength * entity.agility);

    if (critsus === true) {
        dmg = dmg * critdam;
        var msg = entity.name + " > " + "Crit!(" + dmg + ")";
        mbar(msg);
        return dmg;
    } else if (critsus === false) {
        var msg = entity.name + " > " + dmg;
        mbar(msg);
        return dmg;
    }
}

function EXP () {
    You.EXPneed = Math.round(Math.exp(You.level) * 1510);
    while (You.EXP > You.EXPneed) {
        You.EXP = You.EXP - You.EXPneed;
        You.level++;
        You.AP = You.AP + 5;
        You.strength++;
        You.endurance++;
        You.agility++;
        You.EXPneed = Math.round(Math.exp(You.level) * 1510);
        InfoReset(You);
    }
    document.getElementById('EXP_ratio').innerHTML = You.EXP + " / " + You.EXPneed;
    document.getElementById('EXP_bar').style.width = (You.EXP/You.EXPneed*100) + "%";
    
}

function add_inventory (itemTable) {
    var item = itemTable[0];
    var quantity = itemTable[1];
    item.Amount = item.Amount + Math.round(quantity);
    var msg = item.Name + " " + "x" + item.Amount;
    if (bbcount % 2 == 0) {
        column = "backpack_column_2";
    } else if (bbcount % 2 == 1) {
        column = "backpack_column_1";
    }
    if (typeof(document.getElementById(item.id)) != 'undefined' && document.getElementById(item.id) != null) {
        document.getElementById(item.id).innerHTML = msg;
    } else {
        bbcount ++;
        var bar = document.createElement("div");
        bar.innerHTML = msg;
        bar.classList.add("bbar");
        bar.id = item.id;

        document.getElementById(column).appendChild(bar);
    }
    mbar("You got " + quantity + " " + item.Name);
}

function loot (loot) {
    var items = loot.length;
    for (let i = 0; i <= items - 1; i++){
        if (loot[i][2] >= Math.random()*10000) {
            add_inventory(loot[i]);
        }
    }
}

function EXPdrop (entity){
    You.EXP = You.EXP + entity.EXP
    EXP();
}

function fac (n) {
    var ans=1;
             
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

function InfoReset (entity) {
    if (entity == You) {
        document.getElementById('your_title').innerHTML = title(entity);
        document.getElementById('your_health').innerHTML = hp(entity);
        document.getElementById('your_stats').innerHTML = stats(entity);
        document.getElementById('STR').innerHTML = "STR: " + You.strength;
        document.getElementById('END').innerHTML = "END: " + You.endurance;
        document.getElementById('AGL').innerHTML = "AGL: " + You.agility;
        document.getElementById('LUCK').innerHTML = "LUCK: " + You.luck;
        You.health = You.endurance*15;
        document.getElementById('EXP_tooltip').innerHTML = "This is your experience bar as you kill, learn, and create you will gain experience and make yourself stronger. On each level up you will gain ability points that can be used to make any stat stronger. AP:" + You.AP;
            if (You.AP >= 1) {
                document.getElementById('STR').style.border = "4px inset rgb(221 229 84)";
                document.getElementById('END').style.border  = "4px inset rgb(221 229 84)";
                document.getElementById('AGL').style.border  = "4px inset rgb(221 229 84)";
                if (You.AP >= 5) {document.getElementById('LUCK').style.border  = "4px inset rgb(221 229 84)";}
            } 
            if (You.AP < 1) {
                document.getElementById('STR').style.border = "1px solid rgb(4, 43, 65)";
                document.getElementById('END').style.border  = "1px solid rgb(4, 43, 65)";
                document.getElementById('AGL').style.border  = "1px solid rgb(4, 43, 65)";
            }
            if (You.AP < 5) {document.getElementById('LUCK').style.border  = "1px solid rgb(4, 43, 65)";}
        } else {
            document.getElementById('enemy_title').innerHTML = title(entity);
            document.getElementById('enemy_health').innerHTML = hp(entity);
            document.getElementById('enemy_stats').innerHTML = stats(entity)
        }
}

/*EXP Tooltip*/ 
function EXPtooltip () {
document.getElementById('EXP_bar_background').addEventListener("mouseover", function () {
    document.getElementById("EXP_tooltip").style.display = "block";
    document.addEventListener('mousemove', logKey);

    function logKey(e) {
        document.getElementById("EXP_tooltip").style.left = (e.clientX + 15) + "px";
        document.getElementById("EXP_tooltip").style.top = (e.clientY + 15) + "px";
      }
});

document.getElementById('EXP_bar_background').addEventListener("mouseout", function () {document.getElementById("EXP_tooltip").style.display = "none"});
}

/*STR Tooltip*/ 
function STRtooltip () {
    document.getElementById('STR').addEventListener("mouseover", function () {
        document.getElementById("STR_tooltip").style.display = "block";
        document.addEventListener('mousemove', logKey);
    
        function logKey(e) {
            document.getElementById("STR_tooltip").style.left = (e.clientX + 15) + "px";
            document.getElementById("STR_tooltip").style.top = (e.clientY + 15) + "px";
          }
    });
    
    document.getElementById('STR').addEventListener("mouseout", function () {document.getElementById("STR_tooltip").style.display = "none"});
    }

    /*END Tooltip*/ 
function ENDtooltip () {
    document.getElementById('END').addEventListener("mouseover", function () {
        document.getElementById("END_tooltip").style.display = "block";
        document.addEventListener('mousemove', logKey);
    
        function logKey(e) {
            document.getElementById("END_tooltip").style.left = (e.clientX + 15) + "px";
            document.getElementById("END_tooltip").style.top = (e.clientY + 15) + "px";
          }
    });
    
    document.getElementById('END').addEventListener("mouseout", function () {document.getElementById("END_tooltip").style.display = "none"});
    }

    /*AGL Tooltip*/ 
function AGLtooltip () {
    document.getElementById('AGL').addEventListener("mouseover", function () {
        document.getElementById("AGL_tooltip").style.display = "block";
        document.addEventListener('mousemove', logKey);
    
        function logKey(e) {
            document.getElementById("AGL_tooltip").style.left = (e.clientX + 15) + "px";
            document.getElementById("AGL_tooltip").style.top = (e.clientY + 15) + "px";
          }
    });
    
    document.getElementById('AGL').addEventListener("mouseout", function () {document.getElementById("AGL_tooltip").style.display = "none"});
    }

    /*LUCK Tooltip*/ 
function LUCKtooltip () {
    document.getElementById('LUCK').addEventListener("mouseover", function () {
        document.getElementById("LUCK_tooltip").style.display = "block";
        document.addEventListener('mousemove', logKey);
    
        function logKey(e) {
            document.getElementById("LUCK_tooltip").style.left = (e.clientX + 15) + "px";
            document.getElementById("LUCK_tooltip").style.top = (e.clientY + 15) + "px";
          }
    });
    
    document.getElementById('LUCK').addEventListener("mouseout", function () {document.getElementById("LUCK_tooltip").style.display = "none"});
    }


    function statup (stat) {
        switch (stat) {
            default:
                console.log("Statup function Error");
                break;
            case 'STR':
                You.strength ++;
                You.AP --;
                console.log("Strength Up");
                InfoReset(You);
                break;
            case 'END':
                You.endurance ++;
                You.AP --;
                console.log("Endurance Up");
                InfoReset(You);
                break;
            case 'AGL':
                You.agility ++;
                You.AP --;
                console.log("Agility Up");
                InfoReset(You);
                break;
            case 'LUCK':
                You.luck ++;
                You.AP = You.AP - 5;
                console.log("Luck Up");
                InfoReset(You);
                break;
        }
    }

    function STRstatup () {
        if (You.AP >= 1){ 
            statup("STR");
        }
    }

    function ENDstatup () {
        if (You.AP >= 1){ 
            statup("END");
        }
    }

    function AGLstatup () {
        if (You.AP >= 1){ 
            statup("AGL");
        }
    }

    function LUCKstatup () {
        if (You.AP >= 5){ 
            statup("LUCK");
        }
    }

    async function time () {
        while (true) {
            let date = year + "/" + month + "/" + day;
            let clock = ((hour<10?'0':'') + hour) + ':' + ((minute<10?'0':'') + minute);
            let time = date + "|" + clock;
            document.getElementById("time_date").innerHTML = time;
            minute ++;
            if (minute >= 60) {
                minute = 0;
                hour ++;
            } else if (hour >= 24) {
                hour = 0;
                day ++;
                weatherfunc();
                document.getElementById("season_weather").innerHTML = "[" + season + "] [" + weather + "]";
            }
            switch (month) {
                default:
                    console.log("Month switch Error");
                    break;
                case 1:
                    if (day >= 31) {month ++; day = 1;};
                    break;
                case 2:
                    if (year % 4 == 0) {
                    if (day >= 28) {month ++; day = 1; season = "Spring"};
                    } else {
                        if (day >= 29) {month ++; day = 1; season = "Spring"};
                    }
                    break;
                case 3:
                    if (day >= 31) {month ++; day = 1;};
                    break;
                case 4:
                    if (day >= 30) {month ++; day = 1;};
                    break;
                case 5:
                    if (day >= 31) {month ++; day = 1; season = "Summer";};
                    break;
                case 6:
                    if (day >= 30) {month ++; day = 1;};
                    break;
                case 7:
                    if (day >= 31) {month ++; day = 1;};
                    break;
                case 8:
                    if (day >= 31) {month ++; day = 1; season = "Autumn";};
                    break;
                case 9:
                    if (day >= 30) {month ++; day = 1;};
                    break;
                case 10:
                    if (day >= 31) {month ++; day = 1;};
                    break;
                case 11:
                    if (day >= 30) {month ++; day = 1; season = "Winter"};
                    break;
                case 12:
                    if (day >= 31) {year ++; month = 1; day = 1;};
                    break;
            }
            await sleep(1000);
        }       
    }

    function weatherfunc () {
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                            chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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
                        chance = Math.random()*1000;
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