import React, { Component } from 'react';
import '../App.css';
// import './Custom.css';


class Home extends Component {
  handleScroll = event => {
    event.preventDefault();
    console.log("scroll");
  };
  render() {
    // return <p>Home</p>
    return(
      
      
    
      <div class = "container">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        
   <div class="logo">
   
</div>
        
        
      <h1 class = "burner-pages">Burner Pages</h1>
      
      <div class = "row">
        <div class = "col-md-2"></div>
        <div class = "col-md-8 create">Create your free, fully responsive site here for just about anything.</div>
        <div class = "col-md-2"></div>
        </div>
      <br></br>
      <br></br>
      <br></br>
      
    
     
     
        <div class = "row">
        <div class = "col-md-4"></div>
        <div class = "col-md-4">
        
      <a href="/about" class="btn btn-primary home-button">Why Us?</a>
      </div>
      <div class = "col-md-4"></div>
    
     
      <br></br>
      <br></br>
      <br></br>
      
      
      <div class = "col-md-4"></div>
      <div class = "col-md-4">
      <a href="/create" class="btn btn-primary home-button">Start Creating</a>
      </div>
      <div class = "col-md-4"></div>
     </div>
     
      
     
     

      
       {/* <div class="container">
       <br />
       <br />
       <br />
       <br />
       <br />
       <br />
       <br /> */}

       {/* <div class="logo" />

       <h1>Why Us?</h1>
      
       <div class="row">
       <div class="col-md-4"></div>
         <div class="col-md-4 description" >Lorem Ipsum is simply dummy text of the printing and typesetting
         industry. Lorem Ipsum has been the industry's standard dummy text ever
         since the 1500s, when an unknown printer took a galley of type and
         scrambled it to make a type specimen book. It has survived not only
         five centuries, but also the leap into electronic typesetting,
         remaining essentially unchanged. It was popularised in the 1960s with
         the release of Letraset sheets containing Lorem Ipsum passages, and
         more recently with desktop publishing software like Aldus PageMaker
         including versions of Lorem Ipsum. </div>
         <div class="col-md-4"></div>
         </div>


       
       <br />
       <br />
       <br /> */}

       {/* <div class="row">
         <div class="col-md-4" />
         <div class="col-md-4">
           
         </div>
         <div class="col-md-4" />

         <br />
         <br />
         <br />
         <br />
         <div class="col-md-4" />
         <div class="col-md-4">
           <a href="/create" class="btn btn-primary">
             Start Creating
           </a>
         </div>
         <div class="col-md-4" />
       </div>
     </div>
     <div id = "app"></div> */}
     
     </div>

     
   
    );
   
    
 
    
    
   
  }
}

export default Home;
