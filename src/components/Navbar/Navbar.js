import React, {useState ,useEffect} from 'react';
import {FaBars ,FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav ,
    NavbarContainer ,
    Navlogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks, 
    NavItemBtn,
    NavBtnLink
} from './Navbar.elements'



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] =useState(true);
    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };
  
useEffect(() => {
    showButton();
}, []);

window.addEventListener('resize', showButton);
    
    return (
        <>
        <IconContext.Provider value={{color : '#fff'}}>
        <Nav>
            <NavbarContainer>
                <Navlogo to="/">
                    <NavIcon />
                    FATBURN
                </Navlogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/Pricing'>Program</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/Products'>Product</NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/SignUp">
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to="/SignUp">
                                <Button fontBig primary>
                                    SIGN UP
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider> 
            
        </>
    )
}

export default Navbar
