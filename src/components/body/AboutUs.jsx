import "./AboutUs.css"
import Logo from "../../assets/food.png"

const AboutUs =()=>{
    return (
        <>
        <div className="AboutUs-container">
        <h2 className="AboutUs-title text-center text-5xl my-6 font-semibold text-yellow-400">Superior service, personalized attention</h2>
        <h3 className="AboutUs-description text-center text-2xl text-green-800 font-medium first-letter:text-3xl">Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</h3>
        <img className="AboutUs-logo" src={Logo} alt="logo" />
        </div>
        </>
    )

}

export default AboutUs;