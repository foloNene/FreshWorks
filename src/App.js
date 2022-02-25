import React from 'react'
import "./App.css"
import baby from "./Images/Baby.png"
import Logo from "./Images/logo.svg"
import SecondImage from "./Images/SecondImage.png"
import Image3 from "./Images/Image3.png"
import Image4 from "./Images/Image4.png"
import Image6 from "./Images/Image6.png"
import Image8 from "./Images/Image8.png"



function App(){

  return(
    <div className="Whole">

    <div className="Container">
      <div className="Header">
        <div className="HeaderWrapper">
        <div><img src={Logo} className="Logo"/> </div>
        <div className="Nav">

          <p>Product</p>
          <p>Platform</p>
          <p>Company</p>
          <p>Resources</p>
          <p>Customers</p>
          <p>Support</p>
        </div>
        </div>
      </div>
      <div className="HeroHolder">
        <div className="HeroWrapper">
          <div className="Left">
          <h1 className="Heads">
            Delight made <br/>easy
          </h1>
          <p className="PMan">we Make it fast and esy for your business to delight customers and employees</p>
          <div className="but">
            <button className="button1">Free Trails</button>
            <button className="button2">Contact Sales</button>
            </div>
          </div>
          <div>
            <img src ={baby} className="Baby"/>
          </div>
          
        </div>
      </div>
    </div>

    <div className="Second">
      <div>
        <img src ={SecondImage} className="SecondImage"/>
      </div>
      <div >

        <div className="Whole">
          <div className="TopHeader">
            <h4>Try the business software used by
         over 50,000 companies across the
         <br/>
         globe to exceed customer 
        and employee expectations.</h4>
          </div>

          <div className="Container2">
            <div className="Container2-Box">
            <button className="button3">Customer Service</button>
            </div>
            <div className="Container2-Box">
            <button className="button3">IT Service Management</button>
            </div>
          </div>
          <br/>

          <div className="Container3">
            <div className="Container3-Box">
            <button className="button3">HR Management</button>
            </div>
            <div className="Container3-Box">
            <button className="button3">Sale Automation</button>
            </div>
          </div>
          <br/>

          <div className="Container4">
            <div className="Container4-Box"> 
            <button className="button3">Marketing Automation</button>
            </div>
            <div className="Container4-Box">
            <button className="button3">All Product&Trails</button>
            </div>
          </div>


        </div>

       
        
      </div>
      <div>

      </div>

    </div>

    <div className="Third">
      <div className="TopDisplay">
        <h2>Frictionless, simple, easy</h2>
        <p>FreshWorks makes it fast and easy for business to delight their customers and employee.
          <br/>
          We take fresh approach to how business discover, engage with and realize value from software through their journey.
        </p>
      </div>

      <div className='ThirdFrist'>
      <div className='ThirdFirstContainer'>
        <div>
            <img src ={Image3} className="Image3"/>
        </div>
        <h3>GetUp and running with no barriers</h3>
        <p>Try or push our software directly from our <br/> website, and on board in a matter of days, not <br/> months</p>

      </div>
      <div className="ThirdFirstContainer1">
        <div>
        <img src ={Image4} className="Image4"/>
        </div>
        <h4>
          Choose your pricing plan
        </h4>
        <p>Our pricing plans are designed for modern <br/>
        business use cases and affordable for <br/>
        organisation of all sizes</p>
      </div>
      </div>

      <div className='ThirdFrist'>
      <div className='ThirdFirstContainer'>
        <div>
            <img src ={Image6} className="Image6"/>
        </div>
        <h3>Build and Customize as you go</h3>
        <p>Extend and tailor experiences to meet your <br/> unique business needs, with low-code <br/> development and over 1100 custom apps made <br/>
        avaliable on our marketPlace
        </p>

      </div>
      <div className="ThirdFirstContainer1">
        <div>
        <img src ={Image8} className="Image8"/>
        </div>
        <h4>
          Create value, fast
        </h4>
        <p>Accelerate your team's productivity and efficienty<br/>
        with morden Automation and collaboration tools<br/>
        to get tangible result in no time</p>
      </div>
      </div>
      


      
    </div>
   






    </div>

    



  )
}

export default App;
