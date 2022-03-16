import orange_shoe from '../img/orange-shoe.png'
import blue_shoe from '../img/blue-shoe.png'

const NewArrivals = () => {
  return (
    <div className='new-arrivals'>
        <h1 className='headings'>New Arrivals</h1>
        <ul className='shoe'>
            <li><img img className='shoe-img' src={orange_shoe}></img></li>
            <li><h3 className='shoe-name'>Neon Trek</h3></li>
            <li><p className='shoe-for'>Women's</p></li>
            <li><h3 className='shoe-price'>$110</h3></li>
            <ul>
                <li><div style={{backgroundColor: '#FF7505'}}></div></li>
                <li><div style={{backgroundColor: '#151515'}}></div></li>
                <li><div style={{backgroundColor: '#C5C5C5'}}></div></li>
            </ul>
        </ul>
        <ul className='shoe'>
            <li><img img className='shoe-img' src={blue_shoe}></img></li>
            <li><h3 className='shoe-name'>Bouncec</h3></li>
            <li><p className='shoe-for'>Men's</p></li>
            <li><h3 className='shoe-price'>$120</h3></li>
            <ul>
                <li><div style={{backgroundColor: '#5548BF'}}></div></li>
                <li><div style={{backgroundColor: '#52D800'}}></div></li>
                <li><div style={{backgroundColor: '#CE2023'}}></div></li>
                <li><div style={{backgroundColor: '#000000'}}></div></li>
            </ul>
        </ul>
    </div>
  )
}

export default NewArrivals