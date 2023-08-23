import { offer } from "../assets/images"
import Button from "../components/Button"
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div className="flex-1">
    <img 
    src={offer} width={773}
    height={687} className="object-contain w-full" />

    </div>
    <div className="flex flex-1 flex-col">
    <h2 className="font-palanquin text-4xl capitalize
    font-bold lg:max-w-lg">
     We Provide You
      <br />
      <span className="text-coral-red ">Super</span>
      <span className="text-coral-red "> Quality</span> Shoes
      Shoes
    </h2>
    <p className="mt-4 lg:max-w-lg info-text">Ensuring Premium Comfort and style </p>
    <div className="mt-11">
    <Button label="View Details"
      
    />

    </div>
    
    </div>
    </section>
  )
}

export default SpecialOffers