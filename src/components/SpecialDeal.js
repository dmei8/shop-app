import deal_shoe from '../img/deal-shoe.png'

const SpecialDeal = () => {
  return (
    <div className='special-deal'>
        <h1 className='headings'>SPECIAL DEAL</h1>
        <img className='special-deal-img' src={deal_shoe}></img>
        <div className='special-deal-text'>
            <h3>Air Power II</h3>
            <p>Feel as if you're flying</p>
            <p className='old-price'>$115</p>
            <h2>$90</h2>
            <button className='btn btn-deal'>Shop</button>
        </div>
    </div>
  )
}

export default SpecialDeal