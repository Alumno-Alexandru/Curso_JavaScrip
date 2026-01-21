import {useState, useEffect, useMemo} from 'react'
import {db} from '../data/db'
import type {guitar, cartItem} from '../Types'
//los hooks personalizados siempre deben empezar con "use"

export const useCart = () => {

    const initialCart = () : cartItem[] => {
        const localStorageCart = localStorage.getItem('cart') //si no hay nada, devuelve false
        return localStorageCart ? JSON.parse(localStorageCart) : [] //si el localStorage tiene algo, lo devuelve
    }

    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MIN_ITEMS = 1
    const MAX_ITEMS = 5

    useEffect(()=> {
        localStorage.setItem('cart', JSON.stringify(cart))
    })

    function addToCart(item : guitar) {
        const itemExists = cart.findIndex(guitar => guitar.id === item.id)
        if(itemExists >= 0 ) {
            if(cart[itemExists].quantity >= MAX_ITEMS) return
            const updatedCart = [...cart]
            updatedCart[itemExists].quantity++
            setCart(updatedCart)
        } else {
            const newItem : cartItem = {...item, quantity: 1}
            setCart([...cart, newItem])
        }
    }

    function removeFromCart(id : guitar['id']) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
    }

    function decreaseQuantity(id : guitar['id']) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity > MIN_ITEMS) {
                return {...item, // probar quitando esta linea 
                    quantity: item.quantity - 1}
            }
            return item
        })
        setCart(updatedCart)
    }

    function increaseQuantity(id : guitar['id']) {
        const updatedCart = cart.map( item => {
            if(item.id === id && item.quantity < MAX_ITEMS) {
                return {...item, // probar quitando esta linea 
                    quantity: item.quantity + 1}
            }
            return item
        })
        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

const isEmpty = useMemo(() => cart.length === 0, [cart])
const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart])

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }


}