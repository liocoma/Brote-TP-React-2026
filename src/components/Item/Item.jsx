import "./Item.css";
export const Item = ({ name, price, description, image, children }) => {
  return (
    <article className="card">
      <div className="card-image-wrap"><img src={image} alt={name} loading="lazy" /></div>
      <div className="card-content">
        <p className="card-label">un toque de naturaleza</p>
        <h3>{name}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">${Number(price).toLocaleString("es-AR")}</p>
        {children}
      </div>
    </article>
  );
};
