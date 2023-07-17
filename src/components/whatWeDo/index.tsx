import Item from './item'
import styles from './whatWeDo.module.css'

import Rocket from '@/icons/Rocket'
import Team from '@/icons/Team'
import Graph from '@/icons/Graph'
import Gears from '@/icons/Gears'

const WhatWeDo = () => {
    return <div className={styles.container}>
        <div className={styles.imageWrapper}>
            <img className={styles.image} src="https://i.imgur.com/ysctOvt.png" />
        </div>
        <div className={styles.contentWrapper}>
            <p className={styles.heading}>
            Transforming Possibilities into Reality
            </p>
            <p className={styles.subHeading}>
            Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra risus sodales non volutpat. At dui bibendum feugiat faucibus at at. Lorem ipsum dolor sit amet consectetur. 
            </p>
            <div className={styles.itemsWrapper}>
                <Item icon={<Rocket fill="#febd00" height={32}/>} heading="Lorem ipsum" content="Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra risus sodales non volutpat." />
                <Item icon={<Team fill="#febd00" height={32}/>} heading="Lorem ipsum" content="Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra risus sodales non volutpat." />
                <Item icon={<Graph fill="#febd00" height={32}/>} heading="Lorem ipsum" content="Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra risus sodales non volutpat." />
                <Item icon={<Gears fill="#febd00" height={32}/>} heading="Lorem ipsum" content="Lorem ipsum dolor sit amet consectetur. Aenean diam felis viverra risus sodales non volutpat." />
            </div>
                {/* <button>
                    Connect with us
                </button> */}
        </div>
    </div>
}

export default WhatWeDo