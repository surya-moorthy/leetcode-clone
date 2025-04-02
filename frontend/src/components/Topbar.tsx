

export const Topbar = () => {
  return (
    <div className='flex flex-row justify-center items-center bg-black w-5/6 rounded-full h-20 font-serif text-3xl '> 
          <div className='flex px-6 text-amber-50'>
               <h2>Do it</h2>
          </div>
         <Navbar/>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className="flex flex-row justify-around w-3/4">
         {NavbaritemList.map((item) => { return (
           <NavbarItem title={item.title} route={item.route}/>
         ) })}
    </div>
  )
}


const NavbaritemList = [
 {
    title : "About",
    route : "/about",
  },
  {
    title : "Activity",
    route : "/activity",
  },
  {
    title : "Problems",
    route : "/problems",
  },
   {
    title : "Leaderboard",
    route : "/leaderboard",
  },
]

const NavbarItem = ({title , route} : {title : string,route : string} ) =>{
  return (
      <div className="mr-10 text-slate-500 text-lg cursor-pointer hover:text-white  font-light">
            {title}
      </div>
  )
}

/*
    <div className='flex flex-row justify-center items-center bg-black w-5/6 rounded-full h-20 text-amber-50 font-serif text-3xl'> 
          <div className='flex px-6'>
               <h2>Do it</h2>
          </div>
          <div className='flex flex-row justify-around font-light text-blue-50 w-3/4 text-lg'>
                <div onClick={()=>{}}>About</div> 
                <div>Activity</div> 
                <div>Problems</div> 
                <div>leaderboard</div>
          </div>
    </div>

*/