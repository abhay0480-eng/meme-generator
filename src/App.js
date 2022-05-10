
import './App.css';

function App() {
  return (
    <section >


      <header className='p-[20px] bg-gradient-to-r from-violet-500 to-fuchsia-500  flex items-center mb-[50px]'>
      <img src='images/TrollFace.svg' alt='trollface' className='mr-[10px]'/> <span className='text-[30px] text-white font-bold'>Meme Generator</span>
      <p className='ml-auto text-white'>React Course - Project 3</p>
      </header>

      <div className='px-[400px]'>
        <form className='mx-auto'>
          <div className='flex justify-between mb-[30px]'>
            <input className='py-[10px] px-[10px] border-[1px] border-[#D5D4D8] rounded w-[480px]' text='text' placeholder='Top-text'/>
            <input className='py-[10px] px-[10px] border-[1px] border-[#D5D4D8] rounded w-[480px]' text='text' placeholder='Bottom-text'/>
          </div>
            <button className='py-[15px] px-[10px] border-[1px] border-[#D5D4D8] rounded w-[100%] text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>Get a new meme image  🖼</button>
        </form>
      </div>
    </section>
  );
}

export default App;
