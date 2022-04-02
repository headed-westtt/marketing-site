import Card from './components/Card/Card'
import Header from './components/Header/Header'
import cardInfo from './cardInfo'

export default function App() {
  return (
    <div>
      <Header />
      {cardInfo.map((i) => (
        <Card key={i.title} info={i} />
      ))}
    </div>
  )
}
