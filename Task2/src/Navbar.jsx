const Navbar = ({fetchUsers}) => {
   return (
      <nav>
         <div className="brand">ZIPPY</div>
         <button onClick={()=>fetchUsers()}>GET USERS</button>
      </nav>
   )
}

export default Navbar
