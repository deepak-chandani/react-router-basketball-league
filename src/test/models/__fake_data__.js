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
    "ankur-singh",
    "deepak-chandani",
    "hirdesh-paliwal",
    "val-head",
    "shiv-sharma",
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
    "gajendra-singh",
    "pradeep-korriya",
    "vijay-jangid",
    "ashok-jangid",
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
    "subodh-sharma",
    "divyang-bhambhani",
    "mateusz-zatorski",
    "ean-platter",
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
    "richard-feldman",
    "kyle-mathews",
    "lin-clark",
    "guillermo-rauch",
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
    "rajat-bansal",
    "raghu-raj",
    "rohan-julka",
    "sawan-kumar",
    "manish-khunteta",
    "tom-occihino",
    "aimee-knight",
    "sophie-alpert",
  ],
  players: [],
};

const teams = [teamBulls, teamFoxes, teamHedgehogs, teamLemurs, teamKoalas];
teams.forEach((t) => {
  t.playerIds.forEach((id) => {
    const player = players.find((p) => p.slug === id);
    if (player) {
      t.players.push(player);
    }
  });
});

export { teams, players, articles, teamNames };
