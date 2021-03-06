import './styles.scss'

export const RoverItem = (props) => {
  const { images, name, owner, handleClick } = props
  const image = images && images.find(img => img.type === "small")
  return (
    <div className='w100 landscape item' onClick={()=>handleClick(props)}>
      <div><img style={{width: "200px"}} src={image.url} alt={name} /></div>
      <div className='name'>{name}</div>
      <div> <a href={owner.url}>{owner.name}</a> </div>
    </div>
  )
}

