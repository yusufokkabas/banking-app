import React from 'react'
import HeaderBox from '@/components/HeaderBox'

const Home = () => {
  const loggedIn = { firstName: 'Yusuf' }
  return (
    <section className="home">
      <div className="home-content"> 
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title= "Welcome"
          user= {loggedIn?.firstName || 'Guest' } 
          subtext="Access and manage your account and transactions efficiently."
          ></HeaderBox>
        </header>
      </div>
    </section>
  )
}

export default Home