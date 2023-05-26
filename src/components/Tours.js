import Title from "./Title";
import Tour from "./Tour";

function Tours() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured " subTitle="tours" />
        <div className="section-center featured-center">
          <Tour />
        </div>
      </section>
    </div>
  );
}

export default Tours;
