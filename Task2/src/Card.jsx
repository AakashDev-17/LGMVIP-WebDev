const Card = ({email, firstName, lastName, pic}) => {
   return (
      <div className="cards">
         <img src={ pic } alt="profile pic" />
         <h2><i className="fas fa-user"></i>{firstName} <span>{lastName}</span></h2>
         <p><i className="fas fa-envelope"></i><a href="!#" target="_blank">{email}</a></p>
      </div>
   )
}

export default Card
