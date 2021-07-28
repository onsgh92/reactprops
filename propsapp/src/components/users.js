import React from 'react'
import User from './user'
import './user.css';




export default function users() {
{/*function alert  applicable pour tout les user avec bouton */}
    const affiche= (n) =>{
        alert(`hello ${n}`)
    }
    return (
        <div>
             {/*appel de fonction  avec fn={affiche} */}
             <div className="hello"  style={{boxShadow:" 2px 2px 2px 2px  pink "}}>
            <User name={1992} ident="tunisia" bio="student!" fn={affiche}   image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTfCM-xHWADJpXF0x5yMJIbbWySdKq4Yp8GdzdDCJSIlZo3GSBT7pLv6zBkixrofqvHA&usqp=CAU"
            
            />
            </div>
            <div className="hello"  style={{boxShadow:" 2px 2px 2px 2px  pink "}}>
            <User name="jihene ben ouhiba" bio="infogra" ident="dubai" fn={affiche}  image="https://img.pikbest.com/png-images/qianku/ponytailed-sunshine-girl-vector-avatar_2223128.png!bw700"/>
            </div>

            <div className="hello"  style={{boxShadow:" 2px 2px 2px 2px  pink "}}>

            <User name="ghassen bettaieb" ident="france" bio="software developper" fn={affiche}  />
            </div>

        </div>
    )
}
