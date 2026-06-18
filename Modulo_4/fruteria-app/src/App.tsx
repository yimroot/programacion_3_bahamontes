import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'
import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
//import ProductCard         from './components/ProductCard'
//import ProductCatalogList  from './components/ProductCatalogList'
//import UserProfileCard     from './components/UserProfileCard'

const PASO = 6

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52 },
  { name: 'Banana',  emoji: '🍌', calories: 89 },
  { name: 'Naranja', emoji: '🍊', calories: 47 },
  { name: 'Fresa',   emoji: '🍓', calories: 32 },
  { name: 'Uva',     emoji: '🍇', calories: 67 },
  { name: 'Kiwi',    emoji: '🥝', calories: 61, inSeason: true },
]

const catalog = [
  { id: 1, name: 'Teclado mecánico',  price: 89.99 },
  { id: 2, name: 'Monitor 27 pulgadas', price: 349.99 },
  { id: 3, name: 'Mouse inalámbrico', price: 29.99, outOfStock: true },
  { id: 4, name: 'Webcam HD',         price: 59.99 },
]

export default function App() {
  const content =
    PASO === 1 ? <WelcomeBanner subtitle="programacion 3" /> : 
    PASO === 2 ? <UserGreeting name="Ana García" occupation="Desarrolladora Frontend" /> :
    PASO === 3 ? <CurrentDateDisplay /> :
    PASO === 4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox color="#f59e0b" width={120} height={40} borderRadius={8} onClick={() => alert('#f59e0b')} label="Primary" />
        <ColoredBox color="#8b5cf6" borderRadius={50} onClick={() => alert('#8b5cf6')} label="Secondary" />
        <ColoredBox color="#ec4899" borderRadius={50} onClick={() => alert('#ec4899')} />
      </div>
    ) :
    PASO === 5 ? <ConditionalGreeting isLoggedIn={true} userName="Ana" timeOfDay="afternoon" /> :
    PASO === 6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO === 7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="USD" />
        <PriceTag amount={99.99} currency="USD" discountPercent={20} />
      </div>
    ) :
    PASO === 8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="active" />
        <StatusBadge status="pending" />
        <StatusBadge status="error" />
        <StatusBadge status="inactive" />
      </div>
    ) :
    PASO === 9 ? (
      <MiniProfileCard
        fullName="Ana García"
        role="Senior Developer"
        department="Ingeniería"
        status="active"
        joinedYear={2019}
      />
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Resumen del pedido"
        rows={[
          { label: 'Subtotal', value: '$89.99' },
          { label: 'Envío', value: '$5.00' },
          { label: 'Total', value: '$94.99', highlight: true },
        ]}
      />
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}