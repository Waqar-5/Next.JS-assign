import Image from "next/image";
import styles from "./page.module.css";


export default function Homepage() {
  return (
    <div className="Name" >
       <p>Hello, This is Home page!</p>
      <div>
        <ul>
          <li><a href="/" target="_blank"> Home </a></li>
          <li><a href="/about">About </a></li>
          <li><a href="/contact">Contact </a></li>
          <li><a href="/service">Service</a></li>
        </ul>
      </div>
     
    </div>
  );
}
