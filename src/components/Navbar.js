import React from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
       
            <nav className = {styles.page}>
                
                        
                    <ul>   
                            <li>
                                <Link to ="/">Home</Link>
                            </li> 
                            <li>
                                <Link to ="/works/">Works</Link>
                            </li>
                            <li>
                                <Link to ="/blog/">Blog</Link>
                            </li>
                            <li>
                                <Link to ="/contact/">Contact</Link>
                            </li>
                    </ul>
                
            </nav>

            
       
    )
}

export default Navbar
