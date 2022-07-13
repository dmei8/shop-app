import menu from '../img/menu.png'
import shopping_bag from '../img/shopping-bag.png'
import search from '../img/search.png'

const TopBar = () => {
  return (
    <div className='top-bar'>
        <ul>
            <li className='menu-bar'>
              <img src={menu}></img>
            </li>
            <li className='title'><h1>SHOOS</h1></li>
            <li className='shopping-bag'>
              <img src={shopping_bag}></img>
            </li>
            <li className='search-bar'>
              <img src={search}></img>
            </li>
        </ul>
    </div>
  )
}

export default TopBar