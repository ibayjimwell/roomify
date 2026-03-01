import React from 'react'
import { Box } from 'lucide-react'
import Button from './ui/Button'

const Navbar = () => {
  const isSignedIn = false
  const username = 'John Doe'
  const handleAuthClick = async () => {
    console.log('auth')
  }

  return (
    <header className='navbar'>
      <nav className='inner'>
        <div className='left'>
          <div className='brand'>
            <Box className='logo' />

            <span className='name'>
              Roomify
            </span>
          </div>

          <ul className='links'>
            <li><a href="#">Product</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Enterprise</a></li>
          </ul>
        </div>

        <div className='actions'>
          {isSignedIn ? (
            <>
              <span className='greeting'>
                {username ? `Hi, ${username}` : 'Signed in'}
              </span>

              <Button
                className='btn' 
                size='sm' 
                onClick={handleAuthClick}
              >
                Log Out
              </Button>
            </>
          ): (
            <>
              <Button 
                className='login'
                size='sm'
                variant='ghost'
                onClick={handleAuthClick}
              >
                Log In
              </Button>

              <a 
                className='cta' 
                href="#upload"
              >
                  Get Started
              </a>
            </>
          )}
            
        </div>
      </nav>
    </header>
  )
}

export default Navbar