import React from "react";
import Login from './login';
import PodMic from '../assets/blue_mic.jpg'



  const styles = ({
     
      backgroundContainer: {
        backgroundImage: `url(${PodMic})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        // width: `calc(100vw + 48px)`,
        margin: -24,
        height: 900
      }
     
    }
  );



const Landing = ()  =>{
  return(
   
    <div style={styles.backgroundContainer}>
      <div>
      <Login/>
      </div>
    </div>
       
  )
  }

  // export default withStyles(styles)(Landing)
  export default Landing