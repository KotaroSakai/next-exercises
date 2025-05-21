import styles from './InfoCard.module.css';

export default function InfoCard({ image, title, description }) {
  return (
    <div className={styles.card}>
      {image && <img src={image} alt={title} />}
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}