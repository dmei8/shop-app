import menu from '../img/menu.png'
import shopping_bag from '../img/shopping-bag.png'
import search from '../img/search.png'

const TopBar = () => {
  return (
    <div className='top-bar'>
        <ul>
            <li>
              <img className='menu-bar' src={menu}></img>
            </li>
            <li className='title'><h1>SHOOS</h1></li>
            <li>
              <img className='shopping-bag' src={shopping_bag}></img>
            </li>
            <li>
              <img className='search-bar' src={search}></img>
            </li>
        </ul>
    </div>
  )
}

export default TopBar