import Card from './components/Card/Card'
import Header from './components/Header/Header'
import cardInfo from './cardInfo'

export default function App() {
  return (
    <main className='app'>
      <Header />
      {cardInfo.map((i, idx) => (
        <Card key={i.title} info={{ ...i, index: idx }} />
      ))}
    </main>
  )
}
