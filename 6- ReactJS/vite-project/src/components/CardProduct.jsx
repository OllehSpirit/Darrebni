import styles from '../styles/cardProduct.module.css'

export default function CardProduct({ product }) {
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} style={{ width: '300px', height: '350px', borderTopLeftRadius: '20px',borderBottomLeftRadius: '20px' }} />
      <div>
        <div>{product.title}</div>
        <div className={styles.description}>{product.description}</div>

        <div style={{display:'flex',alignItems:'center'}}>
          <div>{product.price} $</div>
          <div className={styles.addToCart}>Add To Cart</div>
        </div>
      </div>
    </div>
  )
}

