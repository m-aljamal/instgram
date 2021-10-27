import type { NextPage } from 'next'
import Feed from 'src/components/Feed'
import Header from 'src/components/Header'
 

const Home: NextPage = () => {
  return (
    <div  >   
      <Header/>
      <Feed/>
    </div>
  )
}

export default Home
