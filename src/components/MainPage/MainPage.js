import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchProducts } from '../../store/actions/products';
import { Link, useNavigate } from 'react-router-dom';
import styles from './MainPage.module.css';
import Header from '../../components/header'; // Путь к Header
import Footer from '../../components/Footer'; // Путь к Footer

const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCart = (product) => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    savedCart.push({ ...product, quantity: 1 }); // Добавляем товар с количеством 1
    localStorage.setItem('cart', JSON.stringify(savedCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className={styles.mainPage}>
      {/* Header */}
      <Header />

      {/* Banner */}
      <div className={styles.banner}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <button className={styles.checkOutButton}>Check out</button>
      </div>

      {/* Categories Section */}
      <section className={styles.categoriesSection}>
        <h2>Categories</h2>
        <div className={styles.categories}>
          {categories.map(category => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <div className={styles.categoryCard}>
                <img src={`http://localhost:3333${category.image}`} alt={category.title} />
                <p>{category.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sale Section */}
      <section className={styles.saleSection}>
        <h2>Sale</h2>
        <div className={styles.saleProducts}>
          {products.slice(0, 4).map(product => (
            <div 
              key={product.id} 
              className={styles.productCard}
              onClick={() => navigate(`/product/${product.id}`)} // Переход к карточке товара
            >
              <img src={`http://localhost:3333${product.image}`} alt={product.title} />
              <h3>{product.title}</h3>
              <p className={styles.price}>{product.price}₽</p>
              {product.discont_price && <p className={styles.oldPrice}>{product.discont_price}₽</p>}
              <button 
                className={styles.addToCartButton} 
                onClick={(e) => {
                  e.stopPropagation(); // Останавливаем переход при клике на кнопку
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
