import { useState } from "react" 
import type { Menuitem, OrderItem } from "../types"
export default function useOrder(){
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
    
    const addItem = (item : Menuitem) =>{
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        const updateOrder = order.map(orderItem => orderItem.id === item.id 
            ? {...orderItem, quantity: orderItem.quantity +1}: orderItem)
        if(itemExist){
            setOrder(updateOrder)
        }else{
            const newItem = {...item , quantity : 1}
            setOrder([...order, newItem])
        }

        
    }

    const removeItem = (id: Menuitem['id']) =>{
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = () =>{
        setOrder([])
        setTip(0)
    }
    return{
        addItem,
        tip,
        setTip,
        order,
        removeItem,
        placeOrder
    }

}