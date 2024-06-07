import data from "./Data";
import Card from "./Card";

function CyberSecurity() {
  return (
    <>
      <div className="container">
        <div className="row">
          {data[2].cybersecurity.map((item, index) => (
            <div className="col-md-4" key={index}>
              <Card src={item.src} alt={item.alt} cardTitle={item.cardTitle} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CyberSecurity;
