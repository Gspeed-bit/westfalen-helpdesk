import Link from "next/link";

async function getTickets() {

  await new Promise(resolve => setTimeout(resolve,3000))

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
      {tickets.map((ticket) => {
        const { id, title, body, priority } = ticket;
        return (
          <>
            <div key={id} className="card">
              <Link href={`/tickets/${ticket.id}`}>
                <h3>{title}</h3>
                <p>{body.slice(0, 200)}...</p>
                <div className={`pill ${priority}`}>{priority} priority</div>
              </Link>
            </div>
            {tickets.length === 0 && <p> There are no open tickets</p>}
          </>
        );
      })}
    </>
  );
}
