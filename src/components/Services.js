import Title from "./Title";
import Service from "./Service";

const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our " subTitle="services" />
        <div className="section-center services-center">
          <Service />
        </div>
      </section>
    </div>
  );
};

export default Services;
