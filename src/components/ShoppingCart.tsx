import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
    isOpen:boolean;
}
function checkout(t:number){
    alert("Você saiu da loja seu total é: " + t);
}
export function ShoppingCart({ isOpen }: ShoppingCartProps){
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Carrinho</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap ={3}>
                    {cartItems.map(item => <CartItem key={item.id} {...item}/>)}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItems) => {
                            const item = storeItems.find(i=> i.id === cartItems.id)
                            return total + (item?.price || 0) * cartItems.quantity;
                        }, 0))}
                    </div>
                </Stack>
                <Button onClick={() => checkout(cartItems.reduce((total, cartItems) => {
                            const item = storeItems.find(i=> i.id === cartItems.id)
                            return total + (item?.price || 0) * cartItems.quantity;
                        }, 0))}>
                    Confirmar compra
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
//Desenvolvido por Geovane Araujo