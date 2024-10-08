import { log } from "console"
import cssStyle from "./about.module.css"

console.log(cssStyle, "CSS-Style");


function AboutPage (){
  return <div className={cssStyle.green}>This is About Page!
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis tenetur totam ipsum neque. Cupiditate quo consequatur sapiente quisquam id omnis.</p>
  </div>
    
  
    
}

export default AboutPage
