import Navbar from "./Navbar";
import Card from "./Card";
import axios from 'axios';
import { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const App = () => {

   const [users, setUsers] = useState(null);
   const [msg, setMsg] = useState("Click on get users");
   const [loading, setLoading] = useState(false);

   const fetchUsers = async () => {
      setLoading(true);
      try {
         const res = await axios.get("https://reqres.in/api/users?page=1");
         console.log(res);
         setTimeout(() => setLoading(false), 4000);
         if (res.data.data.length > 0) {
            setUsers(res.data.data);
         } else {
            setMsg("No user found");
         }
      } catch (err) {
         console.log(err);
      }
   }

   const override = `
  display: block;
  position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;

   return (
      <>
         <Navbar fetchUsers={fetchUsers} />
         <div className="circle"></div>
         <div className="triangle"></div>
         <div className="circle2"></div>
         <div className="triangle2"></div>
         <div className="container">
            {!loading && users && users.map((user, index) => (
               <Card key={index} email={user.email} firstName={user.first_name} lastName={user.last_name} pic={user.avatar} />
            ))}
            {!loading && !users && <h1>{msg} <i className="fas fa-smile-wink"></i></h1>}
            {loading && <ScaleLoader color={"grey"} loading={loading} css={override} size={150} />}
         </div>
      </>
   )
}

export default App
