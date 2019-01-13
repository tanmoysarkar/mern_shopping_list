import React, {Component} from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

class AppNavbar extends Component{
	//constructor(props){
		//super(props);
		state ={
			isOpen : false
		}
		//this.toggle =this.toggle.bind(this);
	//}

	toggle = () => {
		this.setState({
			isOpen : !this.state.isOpen
		});
	}

	render(){
		return(
			<div>
			<Navbar color ="dark" dark expand="sm" className="mb-5">
				<Container>
					<NavbarBrand href="/"> ShoppingList</NavbarBrand>
					<NavbarToggler onClick={this.toggle}/>
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="m1-auto" navbar>
							<NavItem>
								<NavLink href="https://github.com">
									Github
								</NavLink>
							</NavItem>
						</Nav>

					</Collapse>
				</Container>
			</Navbar>
		</div>
		)
	}
}
export default AppNavbar;

