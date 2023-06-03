import React from 'react';
import "./footer.scss"

function Footer() {
    return (
        <footer>
            <p>&copy; Pera Trusnik {new Date().getFullYear()}</p>
        </footer>
    );
}
export default Footer;