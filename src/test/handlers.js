import {rest} from 'msw'
import * as teamModel from './models/TeamModel'

const handlers = []

const apiUrl = 'https://api.ui.dev/hash-history-basketball-league'

const teamsNamesHandler = rest.get(`${apiUrl}/teams`, async (req, res, ctx) => {
   const teams = await teamModel.getNames()
   return res(ctx.json({body: teams}))
})
handlers.push(teamsNamesHandler)

const teamDetailHandler = rest.post(`${apiUrl}/team`, async (req, res, ctx) => {
   const team = await teamModel.findById(req.body.team)
   return res(ctx.json({body: team}))
})
handlers.push(teamDetailHandler)

const teamArticlesHandler = rest.post(`${apiUrl}/articles`, async (req, res, ctx) => {
   const articles = await teamModel.findArticles(req.body.team)
   return res(ctx.json({body: articles}))
})
handlers.push(teamArticlesHandler)

export {handlers}