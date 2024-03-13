import avater from '../img/profile.png'

function Header() {
   
    
    
      
    return(
        <div > 
           
            <header className="max-w-[1170px] mx-auto flex items-center justify-between py-5 mb-5 border-b-[1px] border-[#111]">
            <h2 className="text-3xl  min-h-20 font-bold flex  items-center " > knowledge cafe </h2>
            <img src={avater} alt="" />
            </header>

        </div>
    
    )
}

export default Header