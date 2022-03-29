function Box(props){
    return <>
         
         <div className="mainBox">
             <div className="card">
                <img src={props.images} alt="myPic" className="my-image"/>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <a href={props.link} target="_blank"><button>visit</button></a>
             </div>

         </div>
    
    </>
}

export default Box;