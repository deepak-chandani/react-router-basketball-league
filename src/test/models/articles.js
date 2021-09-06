import {articles} from './__fake_data__'

async function findById(id) {
  return articles.find(p => p.id === id)
}

async function findAll(where = {}){
  if(!Object.keys(where).length){
    return articles
  }

  let filteredArticles = articles
  const {teamId, articleId} = where
  console.log(where)
  if(articleId){
    filteredArticles = filteredArticles.filter(a => a.id === articleId)
  } else if(teamId){
    // filteredArticles = filteredArticles.filter(a => a.teamId === teamId)
  }

  if(!teamId){
    return filteredArticles
  }

  return prefixTeamName(filteredArticles, teamId.toProperCase())
}

export {findById, findAll}

function prefixTeamName(input, teamName){
  let articles = input
  if(!Array.isArray(input)){
    articles = [input]
  }

  return articles.map(a => {
    const clone = {...a}
    clone.title = teamName+' '+a.title
    clone.body = teamName+' '+a.body
    return clone
  })
}
