import data from "./Data";
import Card from "./Card";

function Career() {
  return (
    <>
      <div className="container">
        <div className="row">
          {data[3].career.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Card src={item.src} alt={item.alt} cardTitle={item.cardTitle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Career;
