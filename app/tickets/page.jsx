import { Suspense } from "react";
import Loading from "../loading";
import TicketsList from "./TicketLists";

const Tickets = () => {
  return (
    <main>
      <div>
        <h1> Tickets</h1>
        <p>Currently open tickets</p>
        <Suspense fallback={<Loading/>}>
          <TicketsList />
        </Suspense>
      </div>
    </main>
  );
}
export default Tickets;