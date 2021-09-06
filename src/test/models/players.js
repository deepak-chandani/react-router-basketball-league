import {teamNames, players} from './__fake_data__'

async function findById(id) {
  return players.find(p => p.slug === id)
}

async function findAll(where = {}){
  if(!Object.keys(where).length){
    return players
  }

  const {teamId} = where
  if(teamId){
    return players.filter(p => p.teamId === teamId)
  }

  return players
}

async function getNames(){
  return players.map(p => p.name)
}

export {findById, findAll, getNames}