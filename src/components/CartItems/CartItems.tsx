import styles from './CartItems.module.css'

import ItemCart from '../ItemCart/ItemCart'

const CartItems = () => {
  return (
      <section className={styles.cart}>
        <ItemCart src="https://imgnike-a.akamaihd.net/1920x1920/02362651.jpg" alt="airforce1" title="Dunk Low Light Bone" size="36EU - 28BR" price={140}></ItemCart>
        <ItemCart src="https://static.dafiti.com.br/p/Nike-T%C3%AAnis-Nike-Air-Force-1-'07-Masculino-6736-31652411-1-zoom.jpg" alt="airforce2" title="Air Jordan 1 Low SE Light Smoke Grey Gym" size="36EU - 28BR" price={250}></ItemCart>

        <div className={styles.cart_prices}>
          <p>Subtotal <span>$390,00</span></p>
          <p>Frete <span>$50,00</span></p>
        </div>

        <div className={styles.total_price}>
          <p>Total</p>
          <p><span>BRL</span> $440</p>
        </div>

        <button></button>
      </section>
  )
}

export default CartItems
