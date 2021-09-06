import {rest} from 'msw'
import * as teamsDB from './models/teams'
import * as playersDB from './models/players'
import * as articlesDB from './models/articles'

const handlers = []

const apiUrl = 'https://api.ui.dev/hash-history-basketball-league'

const teamsNamesHandler = rest.get(`${apiUrl}/teams`, async (req, res, ctx) => {
   const teams = await teamsDB.getNames()
   return res(ctx.json({body: teams}))
})
handlers.push(teamsNamesHandler)

const teamDetailHandler = rest.post(`${apiUrl}/team`, async (req, res, ctx) => {
   const team = await teamsDB.findById(req.body.team)
   return res(ctx.json({body: team}))
})
handlers.push(teamDetailHandler)

const teamArticlesHandler = rest.post(`${apiUrl}/articles`, async (req, res, ctx) => {
   const articles = await articlesDB.findAll({teamId: req.body.team})
   return res(ctx.json({body: articles}))
})
handlers.push(teamArticlesHandler)

const articleHandler = rest.post(`${apiUrl}/article`, async (req, res, ctx) => {
   const { articleId, teamId} = req.body

   const normalizedArticleId = articleId.replace(new RegExp(teamId+'-'), "")

   const articles = await articlesDB.findAll({articleId: normalizedArticleId, teamId})
   console.log("handler", articles)
   const article = articles.length > 0 ? articles[0] : {}
   return res(ctx.json({body: article}))
})
handlers.push(articleHandler)

const playersHandler = rest.post(`${apiUrl}/players`, async (req, res, ctx) => {
   const teamId = req.body.team
   const players = await playersDB.findAll({teamId})
   return res(ctx.json({body: players}))
})
handlers.push(playersHandler)

export {handlers}