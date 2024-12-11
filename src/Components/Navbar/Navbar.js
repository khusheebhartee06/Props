import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../../Menu_json_API/Menu.json';
import './Navbar.css';


function MainMenu({ data }) {
    return (
        <>
            <Link to={data.link} className='nav-link' > {data.lable}</Link>
        </>
    )
}

function SubMenu({ para }) {
    return (
        <>
            <NavDropdown title={para.lable} >
                {
                    para.dropdownMenu.map((data, index) => {
                        return <Link to={data.link} className='dropdown-item'key={index}>{ data.lable}</Link>
                    })
                }
            </NavDropdown>
        </>
    )
}
function Navbar_Page({props }) {
    return (
        <Navbar expand="lg" className="">
            <Container fluid="md">
                <Link to="/" className='navbar-brand'>
                    <img src={props.logo} width="45px" height="45px" />&nbsp;  <span>{ props.name}</span>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" className='bg-light' />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0">
                        {
                            Menu.map((item, index) => {
                                if (item.isDropdown == true) {
                                    return <SubMenu para={item} key={index} />
                                }
                                return <MainMenu data={item} key={index} />
                            })
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar_Page;