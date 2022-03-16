import light_green_shoe from '../img/light-green-shoe.png'
import rainbow_shoe from '../img/green-rainbow-shoe.png'

const TrendingStyles = () => {
  return (
    <div className='trending'>
        <h1 className='headings'>Trending Styles</h1>
        <ul className='shoe'>
            <li><img className='shoe-img' src={rainbow_shoe}></img></li>
            <li><h3 className='shoe-name'>Spacewalk 2.0</h3></li>
            <li><p className='shoe-for'>Women's</p></li>
            <li><h3 className='shoe-price'>$105</h3></li>
            <ul>
                <li><div style={{backgroundColor: '#4D72DA'}}></div></li>
                <li><div style={{backgroundColor: '#FAAC73'}}></div></li>
                <li><div style={{backgroundColor: '#BEEF6D'}}></div></li>
            </ul>
        </ul>
        <ul className='shoe'>
            <li><img img className='shoe-img' src={light_green_shoe}></img></li>
            <li><h3 className='shoe-name'>Biome Runner</h3></li>
            <li><p className='shoe-for'>Men's</p></li>
            <li><h3 className='shoe-price'>$105</h3></li>
            <ul>
                <li><div style={{backgroundColor: '#E1FFB9'}}></div></li>
                <li><div style={{backgroundColor: '#747474'}}></div></li>
            </ul>
        </ul>
    </div>
  )
}

export default TrendingStyles