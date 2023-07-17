import StarFill from '@/icons/StarFill'
import styles from './item.module.css'

const Item = ({heading, content, name}: any) => {
    return <div className={`${styles.container} panel`}>
         <p className={styles.content}>
            {content}
        </p>
        <div>
            <img />
            <div>
                <div>
                <p>{name}</p>
            <p className={styles.heading}>
            {heading}
        </p>
                </div>
                <div>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                    <StarFill/>
                </div>
            </div>
        </div>
    </div>
}

export default Item