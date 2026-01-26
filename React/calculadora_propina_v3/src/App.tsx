import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotal"
import TipPorcentageFrom from "./components/TipPorcentageFrom"
import { menuItem } from "./data/db.ts"
import useOrder from "./hooks/useOrder"



function App() {
      const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder()

  return (
    <>
    <header className=' bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Calculadora de Propinas y Consumo</h1>
    </header>
    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className=" p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className=" mt-10 space-y-3">
            { menuItem.map( item => (
              <MenuItem 
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

       <div className="border border-dashed border-purple-300 p-5 rounded-lg space-y-10">
          {order.length ? (
            <>
              <OrderContents order={order} removeItem={removeItem} />
              <TipPorcentageFrom setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;