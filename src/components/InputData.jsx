import MemeData from '../memeData'
import React, {useState} from 'react'

      function InputData(){

        const [meme,setMeme] = useState({
            topText : '',
            bottomText : '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        })
            const [allMemeImages,setAllMemeImages] = useState(MemeData)
        // let [randomUrl , setRandomUrl] = useState(allMemeImages.data.memes[0].url) 
          function HandleClick(){
              let random = Math.floor(Math.random()*MemeData.data.memes.length)   
              let url = allMemeImages.data.memes[random].url
              setMeme(prevMeme =>({...prevMeme,randomImage:url}))
          }

          return(
            <div className='px-[400px]'>
        <div className='mx-auto'>
          <div className='md:flex md:justify-between mb-[30px] block '>
            <input className='py-[10px] px-[10px] border-[1px] border-[#D5D4D8] rounded min-w-[480px]' text='text' placeholder='Top-text'/>
            <input className='py-[10px] px-[10px] border-[1px] border-[#D5D4D8] rounded min-w-[480px]' text='text' placeholder='Bottom-text'/>
          </div>
            <button onClick={HandleClick} className='py-[15px] px-[10px] border-[1px] border-[#D5D4D8] rounded w-[100%] text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>Get a new meme image  🖼</button>
           <img className='py-[15px] px-[10px] border-[1px] border-[#D5D4D8] rounded w-[100%] h-[600px] object-contain  mt-[40px]' src={meme.randomImage} alt='meme'/>
        </div>
      </div>
          )
      }

      export default InputData