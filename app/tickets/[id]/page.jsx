import { notFound } from "next/navigation";

export async function generateStaticParams(){
  const res = await fetch(`http://localhost:4000/tickets`);

  const tickets = await res.json();
  return tickets.map((ticket)=>{
    id:ticket.id
  })
}

async function getTicket(id) {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate a delay for loading data

  const res = await fetch(`http://localhost:4000/tickets/${id}`,{
    next:{
      revalidate:60
    }
   });

  if (!res.ok) {
       notFound()
    }

  return res.json();
}

export default async function TicketDetails({ params }) {

    const ticket = await getTicket(params.id);
          const { title, body, priority, user } = ticket;
    return (
      <main>
        <nav>
          <h2>Ticket Details</h2>
        </nav>
        <div className="card">
          <h3>{title}</h3>
          <small>Created by {user.name}</small>
          <p>{body}</p>
          <div className={`pill ${priority}`}>{priority} priority</div>
        </div>
      </main>
    );

}
