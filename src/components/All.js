import data from "./Data";
import Card from "./Card";

function All() {
  return (
    <>
      <div className="container">
        {data.map((category, index) => (
          <div key={index} className="row my-4">
            {Object.values(category).map((cards, idx) =>
              cards.map((item, cardIndex) => (
                <div className="col-md-4" key={cardIndex}>
                  <Card
                    src={item.src}
                    alt={item.alt}
                    cardTitle={item.cardTitle}
                  />
                </div>
              ))
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default All;
