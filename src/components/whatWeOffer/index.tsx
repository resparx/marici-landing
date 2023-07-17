import styles from './whatWeOffer.module.css'
import OfferItem, { OfferItem2 } from './offerItem'
const WhatWeOffer = () => {
    return <div className={styles.container}>
        <p className={styles.heading}>
            Get the most from SAP
        </p>
        <OfferItem/>
        <OfferItem2 direction='REVERSE' />
        <OfferItem/>
    </div>
}

export default WhatWeOffer