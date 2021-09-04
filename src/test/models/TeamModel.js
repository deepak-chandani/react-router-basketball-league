import {teamNames, teams} from './__fake_data__'

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

export {findById, findAll, getNames}