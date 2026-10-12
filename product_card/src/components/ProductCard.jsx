function ProductCard({product,addToCart}) {
    return (
        <div className="product-card">
            <img 
            src={product.image}
            alt={product.name}
            className="product-image"
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <h4>₹{product.price.toLocaleString('en-IN')}</h4>
            <button 
            type="button"
            onClick={() => addToCart(product)}
            > Add to cart</button>
        </div>
    );
}
export default ProductCard;