

function Header(){

    return(
        <header className='p-[20px] bg-gradient-to-r from-violet-500 to-fuchsia-500  flex items-center mb-[50px]'>
      <img src='images/TrollFace.svg' alt='trollface' className='mr-[10px]'/> <span className='text-[30px] text-white font-bold'>Meme Generator</span>
      <p className='ml-auto text-white'>React Course - Project 3</p>
      </header>
    )
    
}

export default Header