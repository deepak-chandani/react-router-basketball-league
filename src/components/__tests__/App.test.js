import * as React from 'react'
import {render, screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App Works', () => {
  it('should render', async () => {
     render(<App />)
     await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i), {timeout: 4000})

    //  screen.debug()
    screen.getByTitle(/foxes/i)
    screen.getByTitle(/koalas/i)
  })

  describe('Navigation to different pages works', () => {
    it('should go to team-page when team-logo is clicked', async () => {
      render(<App />)
      await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i))

      userEvent.click(screen.getByTitle(/foxes/i))
      await waitFor(() => expect(screen.getByText('Foxes')).toBeInTheDocument())
      // screen.debug()
    })
  })
})

