import { Navbar as NavbarBs, Container, Nav, Button} from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { MDBFooter } from 'mdb-react-ui-kit';

export function Footer(){
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                ©2022 Desenvolvido e mantido por:
                <a className='text-reset fw-bold' href='https://github.com/geovanesv' >
                Geovane Araujo
                </a>
            </div>
        </MDBFooter>

    )
}
//Desenvolvido por Geovane Araujo