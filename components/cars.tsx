import { Brands } from "@/components/brands";
import { CarSlider } from "@/components/car-slider";

export const Cars = () => {
  return (
    <section
      className="section h-screen xl:h-[120vh] flex items-center"
      id="cars"
    >
      <div className="container mx-auto">
        <Brands />
        <CarSlider />
      </div>
    </section>
  );
};
