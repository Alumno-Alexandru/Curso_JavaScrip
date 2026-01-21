import {useState} from 'react'
import {useCart} from './hooks/useCart'
import Header from './components/Header'
import Guitar from './components/Guitar'


function App() {
  const {data, cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, clearCart, isEmpty, cartTotal} = useCart()
  const [auth, setAuth]=useState(false)

  // useEffect(()=>{console.log("Componente listo"),[]}) //no tiene dependencias, se ejecuta cuando el componente este listo.
  // useEffect(()=>{console.log("Escucho auth o auth modificado"),[auth]})// tiene dependencias, se ejecuta cuando el componente este listo.
  // useEffect(()=>{if(auth){console.log(auth)}},[]) //ejecuta algo de codigo.

  return (
    <>
      <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      clearCart={clearCart}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
      /> 
      <main className='container-xl mt-5'>
        <h2 className='text-center'>Nuestra Coleccion</h2>
        console.log(data);
        <div className='row mt-5'>
          {data.map((guitar) =>(
            <Guitar
              key ={guitar.id}
              guitar={guitar}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>


      <footer className='bg-dark mt-5 py-5'>
          <div className='container-xl'>
              <p className='text-white text-center fs-4 mt-4 m-md-0'>GuitarLA - Todos los derechos Reservados</p>
          </div>
      </footer>
      
    </>
    
  )
}

export default App
