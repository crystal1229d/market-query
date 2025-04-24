import styles from './TagsList.module.css'

interface Props {
  tags: string[] | []
}

export default function TagsList({ tags }: Props) {
  if (!tags || tags.length === 0) return null

  return (
    <div className={styles.section}>
      <h3>Tags</h3>
      {tags?.map((tag: string, idx: number) => (
        <p key={idx} className={styles.tag}>
          {tag}
        </p>
      ))}
    </div>
  )
}
