 
 import React from "react";
import '../css/footer.css';


 const Footer = () => {
     return ( 
          <footer id="footer">

        <ul className="icons">
          <li><a href="#" className="icon circle fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon circle fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon circle fa-google-plus"><span className="label">Google+</span></a></li>
          <li><a href="#" className="icon circle fa-github"><span className="label">Github</span></a></li>
          <li><a href="#" className="icon circle fa-dribbble"><span className="label">Dribbble</span></a></li>
        </ul>

        <ul className="copyright">
          <li>&copy; Small Town</li><li>Developed By: <a href="">Shivam Satyarthi</a></li>
        </ul>

      </footer>

     );
 };

 export default Footer;
