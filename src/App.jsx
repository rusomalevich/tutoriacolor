import './App.css'
import { ColorCard, Button, Navbar, Calculator, RegisterProducts} from './components'

const App = () => {

  const cartasColores = [
  {
    likes: 60,
    hours: 3,
    colors: ['D6A2E8', '7B48B9', '501B73', '330D4A'],
    id: 1
  },
  {
    likes: 80,
    hours: 7,
    colors: ['FFCF6F', 'FFAB2E', 'D37C00', '804D00'],
    id: 2
  },
  {
    likes: 70,
    hours: 5,
    colors: ['2AE8B9', '00C3A3', '008F7A', '00584E'],
    id: 3
  },
  {
    likes: 90,
    hours: 2,
    colors: ['D6D6D6', 'A3A3A3', '6F6F6F', '4A4A4A'],
    id: 4
  }
];

  return (
    <>
      <RegisterProducts />
      <Calculator />
      <Navbar />
      <div className='cardContainer'>
        {
          cartasColores.map(carta => (
            <ColorCard {...carta} key={carta.id} />
          )
          )
        }
      </div>
    </>
  )
}

export default App



/*
const cartasColores = [
    {
        likes: 60,
        hours: 3,
        colors: ['001C30', '176B87', '64CCC5', 'DAFFFB'],
        id: 1
    },
    {
        likes: 40,
        hours: 1,
        colors: ['331B30', '296B37', '04C3C5', 'DAFBFB'],
        id: 2
    },
    {
        likes: 600,
        hours: 22,
        colors: ['334F30', '796A37', '24C9C5', 'DA4BFB'],
        id: 3
    },
    {
        likes: 630,
        hours: 22,
        colors: ['334F30', '796A37', '24C9C5', 'DA4BFB'],
        id: 4
    },
    {
        likes: 580,
        hours: 21,
        colors: ['534F40', '296B37', '54B9F5', 'FA4BFB'],
        id: 5
    },
]

{
cartasColores.map(carta => (
   <ColorCard {...carta} key={carta.id}/>
  )
)
}

*/