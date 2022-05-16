
import React, {useState} from 'react'

      function InputData(){

        const [meme,setMeme] = useState({
            topText : '',
            bottomText : '',
            randomImage: 'http://i.imgflip.com/1bij.jpg'
        })
            const [allMeme,setAllMeme] = useState([])
            React.useEffect(() => {
              fetch("https://api.imgflip.com/get_memes")
              .then(res => res.json())
              .then(data => setAllMeme(data.data.memes))
            },[])
        // let [randomUrl , setRandomUrl] = useState(allMemeImages.data.memes[0].url) 
          function HandleClick(){
              let random = Math.floor(Math.random()*allMeme.length)   
              let url = allMeme[random].url
              setMeme(prevMeme =>({...prevMeme,randomImage:url}))
          }

          function handleChange(event){
            const {name,value} = event.target
            setMeme(prevMeme => ({
              ...prevMeme,
              [name]: value
            }))
          }

          
          return(
            <div className='px-[400px]'>
        <div className='mx-auto'>
          <div className='md:flex md:justify-between mb-[30px] block '>
            <input 
            
            className='py-[10px] px-[10px] border-[1px] border-[#D5D4D8] rounded min-w-[480px]' 
            text='text' 
            placeholder='Top-text'
            onChange={handleChange}
            value={meme.topText}
            name="topText"
            />
            <input 
            
            className='py-[10px] px-[10px] border-[1px] border-[#D5D4D8] rounded min-w-[480px]' 
            text='text' 
            placeholder='Bottom-text'
            onChange={handleChange}
            value={meme.bottomText}
            name="bottomText"
            />
          </div>
            <button onClick={HandleClick} className='py-[15px] px-[10px] border-[1px] border-[#D5D4D8] rounded w-[100%] text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>Get a new meme image  🖼</button>
           
           <div className='relative'>
           <img 
           className='py-[15px] px-[10px] border-[1px] border-[#D5D4D8] rounded w-[100%] h-[600px] object-contain  mt-[40px]' 
           src={meme.randomImage} 
           alt='meme'
           />
           <h2 className='absolute top-[20px] left-[150px] text-[50px] text-white'>{meme.topText}</h2>
           <h2 className='absolute bottom-[20px] left-[150px] text-[50px] text-white'>{meme.bottomText}</h2>
           </div>
            
        </div>
      </div>
          )
      }

      export default InputData