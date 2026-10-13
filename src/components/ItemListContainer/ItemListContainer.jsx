import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("No pudimos cargar los productos. Probá de nuevo en un ratito.");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="status-message">Preparando tu rincón verde… 🌱</p>;
  if (errors) return <p className="status-message">{errors}</p>;

  const filteredProducts = category ? products.filter((product) => product.category === category) : products;
  return (
    <section>
      <div className="hero-banner">
        <p className="hero-kicker">Tu casa, un poco más viva</p>
        <h1>Hacé espacio para<br />algo que crece.</h1>
        <p>Plantas, macetas y pequeños detalles verdes para que tu casa se sienta cada vez más tuya.</p>
      </div>
      <h2 className="section-heading">Encontrá tu próxima compañera verde</h2>
      <p className="page-intro">Elegidas para sumar vida a tus espacios, sin complicarte.</p>
      <div className="category-links">
        <Link to="/">Ver todo</Link><Link to="/category/interior">Plantas de interior</Link><Link to="/category/macetas">Macetas</Link><Link to="/category/kits">Kits verdes</Link>
      </div>
      <ItemList products={filteredProducts} />
    </section>
  );
};
