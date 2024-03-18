import React from 'react'

const Home = ({children}) => {
    return (
        <div className="h-screen bg-gradient-to-b from-blue-500 to-purple-600 flex justify-center items-center">
          {children}
        </div>
      );
    
}

export default Home