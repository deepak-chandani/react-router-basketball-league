import {teamNames, teams, articles} from './__fake_data__'

async function findById(id) {
  return teams.find(t => t.id === id)
}

async function findAll(where = {}){
  if(!Object.keys(where).length){
    return teams
  }

  return []
}

async function getNames(){
  return teamNames
}

async function findArticles(teamId){
  return articles
}

export {findById, findAll, getNames, findArticles}