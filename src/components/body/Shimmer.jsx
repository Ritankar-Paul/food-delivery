import "./Shimmer.css"
const Shimmer =()=>{
    return (
        <div>
            
            {Array(8).fill("").map((e, index)=><div key={index} className="shimmer"></div>)}
            
        </div>
    )
};



export default Shimmer;