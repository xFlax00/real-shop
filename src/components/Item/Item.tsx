import styles from "./Item.module.css"

import { Card, CardBody, CardFooter, Image, Heading, Divider } from "@chakra-ui/react"

import cart from "../../assets/cart-add.png"

interface ItemProps {
  imageSrc: string;
  imageAlt: string;
  price: number;
  description: string;
  isActive: boolean;
  onshow: React.MouseEventHandler<HTMLDivElement>;
  unshow: React.MouseEventHandler<HTMLDivElement>;
  addCart: React.MouseEventHandler<HTMLButtonElement>;
}

const Item = ({ imageSrc, imageAlt, price, description, isActive, onshow, unshow, addCart }: ItemProps) => {

  return (
    <Card className={styles.Item} onMouseOver={onshow} onMouseOut={unshow}>
          <CardBody>
            <div className={styles.img_container}>
              <Image src={imageSrc} alt={imageAlt} borderRadius="lg"/>
            </div>
          </CardBody>
          <Divider />
          <CardFooter display="flex" flexDirection="column">
            <Heading className={styles.price} fontSize="1.5rem" fontWeight={500}>
              R${price} <span>x10 sem juros</span>
            </Heading>
            
            {isActive && <p className={styles.Item_description}>{description}</p>}
            {isActive && <button className={styles.buy_item} onClick={addCart}><img src={cart} alt="cart" /></button>}
          </CardFooter>
        </Card>
  )
}

export default Item