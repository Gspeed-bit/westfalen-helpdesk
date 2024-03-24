async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });


  return res.json();
}

export default async function TicketsList() {
  const tickets = await getTickets();

  return (
  <>
    {tickets.map((ticket)=>{
      const { id, title, body, priority, user } = ticket;
           return (
             <>
               <div key={id} className="card">
                 <h3>{title}</h3>
                 <p className="">{body.slice(0, 200)}...</p>
                 <div className={`pill ${priority}`}>{priority}</div>

                 <p>
                   {" "}
                   Assigned To: <span className="font-bold text-black"> {user.name} </span>{" "}
                 </p>
               </div>
               {tickets.length === 0 && <p> There are no open tickets</p>}
             </>
           );
    })
    }</>
  );
  
}
