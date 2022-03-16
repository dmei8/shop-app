import slogan from '../img/slogan.png'

const Intro = () => {
  return (
    <div className='intro'>
        <img className='slogan-img' src={slogan}></img>
        <h2 className='headings'>RUN, WALK, JOG, HOP. IT'S UP TO YOU.</h2>
        <p>No matter what you plan to do, let your shoes be your ally.</p>
        <button className='btn'>Shop</button>
    </div>
  )
}

export default Intro