import './Tags.styles.scss'

interface TagsProps {
    tags: any
    filtraFotos: any
}

export function Tags({tags, filtraFotos}: TagsProps) {
    return (
        <div className='tags'>
            <p>Filtre por Tags:</p>
            <ul className='lista'>
                {tags.map((tag: any) => {
                    return (
                        <li key={tag} onClick={() => filtraFotos(tag)}>{tag}</li>
                    )
                })}
            </ul>
        </div>
    )
}