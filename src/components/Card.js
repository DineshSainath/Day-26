function Card({ src, alt, cardTitle }) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={src} alt={alt} />
        <div className="card-body">
          <h2 className="card-text">{cardTitle}</h2>
        </div>
      </div>
    </>
  );
}

export default Card;
