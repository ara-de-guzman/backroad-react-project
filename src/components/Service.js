import { services } from "../data";

const Service = () => {
  return (
    <>
      {services.map((service) => {
        const { id, icon, title, text } = service;
        return (
          <article className="service" key={id}>
            <span className="service-icon">
              <i className={icon}></i>
            </span>
            <div className="service-info">
              <h4 className={title}>{title}</h4>
              <p className={text}>{text}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Service;
