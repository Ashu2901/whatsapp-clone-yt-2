import {Circle} from "better-react-spinkit";
import Image from "next/image";

function Loading(){


    return(
        <center style={{display:'grid',placeItems:'center' , height:'100vh'}}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
               alt="" height={200} style={
                   {
                       marginBottom:10
                   }
               } />

               <Circle size={60} color="#3CBC28"   />
        </center>
    )

}



export default Loading;