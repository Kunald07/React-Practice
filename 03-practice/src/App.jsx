import { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar';

function App() {

  const raw = [
    { name: "Abhay", friends: false, profession: "Artist", image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtZW58ZW58MHx8MHx8fDA%3D" },
    { name: "David", friends: false, profession: "Painter", image: "https://plus.unsplash.com/premium_photo-1733971878319-c607817a911f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0JTIwbWVufGVufDB8fDB8fHww" },
    { name: "Lakshya", friends: false, profession: "Athlete", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww" },
    { name: "Ranbir", friends: false, profession: "Actor", image: "https://images.unsplash.com/photo-1698681940124-699e53abcac2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0JTIwbWVufGVufDB8fDB8fHww" },
    { name: "Vihaan", friends: false, profession: "Coder", image: "https://images.unsplash.com/photo-1619950498711-c2d22c4c3cb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBvcnRyYWl0JTIwbWVufGVufDB8fDB8fHww" },
    { name: "Virat", friends: false, profession: "model", image: "https://plus.unsplash.com/premium_photo-1733971878361-2aca0f861872?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHBvcnRyYWl0JTIwbWVufGVufDB8fDB8fHww" }
  ];

  const [data, setData] = useState(raw);
  const handleClick = (changingIndex) => {
    setData((prev) => {
      return prev.map((item, index) => {
        if (index === changingIndex) return { ...item, friends: !item.friends }
        return item;
      })
    })
  }


  return (
    <div>
      <Navbar />
      <div className='w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center'>
        {data.map((item, index) => (
          <Card key={index} index={index} handleClick={handleClick} values={item} />
        ))}
      </div>
    </div>
  )
}

export default App
