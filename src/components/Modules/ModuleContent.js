import QuizModules from '../Quiz/QuizModules'
import './ModuleContent.css'
import { useState } from 'react'
function ModuleContent() {
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [theme1, setTheme1] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const toggle = () => {
    setShow(show => !show)
    setShowContent(showContent => showContent = true)
    }
    const toggle1 = () => {
      setShow1(show1 => !show1)
      setShowContent(showContent => showContent = true)
      }
      const toggle2 = () => {
        setShow2(show2 => !show2)
        setShowContent(showContent => showContent = true)
        }
  return (
    <div className="bg-black">
      <div className="wrapper h-screen">
        <div className="sidebar">
          <div className="title">Modules</div>
          <ul className="nav">
            <li>
              <a onClick={toggle} className="cursor-pointer" >Module 1</a>
              {show == true 
              ? <div className="text-white mt-4 text-lg">
              <span className='ml-6 text-xl'>Themes:</span>
              <p onClick={(theme1) => setTheme1(theme1 = true)} className='hover:bg-[#444] pl-6 py-2'>Econiomy1</p>
              <p onClick={(theme1) => setTheme1(theme1 = false)} className='hover:bg-[#444] pl-6 py-2'>Econiomy2</p>
            </div>
            : ''}
            </li>
            <li>
            <a onClick={toggle1} className="cursor-pointer" >Module 2</a>
              {show1 == true 
              ? <div className="text-white mt-4 text-lg">
              <span className='ml-6 text-xl'>Themes:</span>
              <p className='hover:bg-[#444] pl-6 py-2'>Econiomy3</p>
              <p className='hover:bg-[#444] pl-6 py-2'>Econiomy4</p>
            </div>
            : ''}
            </li>
            <li>
            <a onClick={toggle2} className="cursor-pointer" >Module 3</a>
              {show2 == true 
              ? <div className="text-white mt-4 text-lg">
              <span className='ml-6 text-xl'>Themes:</span>
              <p className='hover:bg-[#444] pl-6 py-2'>Econiomy5</p>
              <p className='hover:bg-[#444] pl-6 py-2'>Econiomy6</p>
            </div>
            : ''}
            </li>
          </ul>
        </div>
        {showContent == true ?
        <div className="content content-is-open">
        {theme1 == true ?<h1 className='text-green-500 font-semibold text-4xl'>Тема: Как сделать деньги</h1> : <h1 className='text-green-500 font-semibold text-4xl'>Тема: Как сделать деньги2</h1>}
        <div className="well well-sm text-white text-xl">
          <p>Banh mi street art organic, bicycle rights synth YOLO Neutra. Try-hard cliche vegan mlkshk actually. Godard pour-over locavore tousled synth, try-hard Portland single-origin coffee church-key gluten-free 90's blog. Cliche blog tote bag, literally Banksy viral biodiesel Portland High Life. Marfa Neutra selvage, photo booth tilde whatever 8-bit pork belly irony post-ironic forage slow-carb. Pickled chia wayfarers, gentrify letterpress gastropub food truck seitan meditation trust fund cliche biodiesel sartorial. Tousled skateboard Thundercats, mumblecore jean shorts 90's flexitarian deep v gentrify.</p>
          <p>Banh mi street art organic, bicycle rights synth YOLO Neutra. Try-hard cliche vegan mlkshk actually. Godard pour-over locavore tousled synth, try-hard Portland single-origin coffee church-key gluten-free 90's blog. Cliche blog tote bag, literally Banksy viral biodiesel Portland High Life. Marfa Neutra selvage, photo booth tilde whatever 8-bit pork belly irony post-ironic forage slow-carb. Pickled chia wayfarers, gentrify letterpress gastropub food truck seitan meditation trust fund cliche biodiesel sartorial. Tousled skateboard Thundercats, mumblecore jean shorts 90's flexitarian deep v gentrify.</p>
        </div>
        <div className='mt-16 flex gap-x-24 items-center'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KYa6SDtJvJI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen"></iframe>
          <div className='w-2/3 h-[600px]'>
            <QuizModules />
          </div>
        </div>
      </div> : <div className='text-white text-3xl block mx-auto pt-14'>Чтобы вышел контент нажмите на модуль и темы</div>}
      </div>
    </div>
  )
}

export default ModuleContent
