import Brands from "./Brands";
import CarSlider from "./CarSlider";

const Cars = () => {
  return (
    <section id="cars" className="h-fit flex bg-white ">
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
};

export default Cars;
