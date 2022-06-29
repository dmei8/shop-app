import featured from '../img/featured.png'

const Featured = () => {
  return (
    <div className='featured'>
        <h1 className='headings'>Featured</h1>
        <img src={featured}></img>
        <button className='btn'>Shop</button>
    </div>
  )
}

export default Featured