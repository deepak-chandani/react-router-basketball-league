import articles from "./__fake_articles__";
import { players } from "./__players__";
const teamNames = ["bulls", "foxes", "hedgehogs", "lemurs", "koalas"];

const teamBulls = {
  id: "bulls",
  name: "Bulls",
  wins: 80,
  losses: 2,
  established: 1998,
  coach: "Addy Osmani",
  manager: "Todd Motto",
  championships: [1998, 1999, 2001, 2004, 2005, 2008, 2011, 2013, 2014, 2015],
  playerIds: [
    "tyler-mcginnis",
    "jared-palmer",
    "val-head",
    "dan-abramov",
    "bonnie-eisenman",
  ],
  players: [],
};

const teamFoxes = {
  id: "foxes",
  name: "Foxes",
  wins: 75,
  losses: 7,
  established: 2000,
  coach: "Rich Harris",
  manager: "Jem Young",
  championships: [2000, 2002, 2009],
  playerIds: [
    "kevin-lacker",
    "pete-hunt",
    "sarah-drasner",
    "jed-watson",
    "richard-feldman",
  ],
  players: [],
};

const teamHedgehogs = {
  id: "hedgehogs",
  name: "Hedgehogs",
  wins: 72,
  losses: 10,
  established: 2002,
  coach: "Vivian Cromwell",
  manager: "Jafar Husain",
  championships: [2003, 2012],
  playerIds: [
    "preethi-kasireddy",
    "ean-platter",
    "sunil-pai",
    "pam-selle",
    "mateusz-zatorski",
  ],
  players: [],
};

const teamLemurs = {
  id: "lemurs",
  name: "Lemurs",
  wins: 60,
  losses: 22,
  established: 2004,
  coach: "Paul O’Shannessy",
  manager: "Lee Byron",
  championships: [2007, 2009],
  playerIds: [
    "kyle-mathews",
    "lin-clark",
    "guillermo-rauch",
    "michael-chan",
    "rach-smith",
  ],
  players: [],
};

const teamKoalas = {
  id: "koalas",
  name: "Koalas",
  wins: 55,
  losses: 27,
  established: 2005,
  coach: "David Nolen",
  manager: "Tereza Sokol",
  championships: [2006, 2009, 2010],
  playerIds: [
    "tom-occihino",
    "aimee-knight",
    "brian-holt",
    "sophie-alpert",
    "ken-wheeler",
  ],
  players: [],
};


const teams = [teamBulls, teamFoxes, teamHedgehogs, teamLemurs, teamKoalas]
teams.forEach(t => {
  t.playerIds.forEach(id => {
    const player = players.find(p => p.slug === id)
    if(player){
      t.players.push(player)
    }
  })
})

export {teams, players, articles, teamNames }
