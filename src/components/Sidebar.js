import * as React from 'react'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'
import slug from 'slug'

function Sidebar({heading, items = [] }){
  const {url} = useRouteMatch()
  const {pathname, search} = useLocation()

  return (
    <aside className="">
      <h3 className="header">{heading}</h3>
      <ul className="sidebar-list">
          {items.map((t) => {
            const urlSlug = slug(t)
            const to = `${url}/${urlSlug}` + search
            return (
              <li key={t} className={pathname.includes(urlSlug) ? 'active' : ''}>
                <Link to={to}>{t.toUpperCase()}</Link>
              </li>
            )
          })}
        </ul>
    </aside>
  )
}

export default Sidebar