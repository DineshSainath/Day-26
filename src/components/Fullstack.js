import data from "./Data";
import Card from "./Card";

function FullStack() {
  return (
    <>
      <div className="container">
        <div className="row">
          {data[0].fullstack.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Card src={item.src} alt={item.alt} cardTitle={item.cardTitle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FullStack;
