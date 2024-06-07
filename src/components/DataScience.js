import data from "./Data";
import Card from "./Card";

function DataScience() {
  return (
    <>
      <div className="container">
        <div className="row">
          {data[1].datascience.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Card src={item.src} alt={item.alt} cardTitle={item.cardTitle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DataScience;
