import { EventModel } from "@/models";
import Title from "../../components/Title";
import { EventCard } from "../../components/EventCard";

export async function getEvents(): Promise<EventModel[]> {
  const response = await fetch("http://localhost:3000/events", {
    cache: "no-store",
    // next: {
    //   tags: ["events"],
    // }
  });

  console.log(response.json())
  console.log('=============')
  return (await response.json()).events;
}

export default async function Pagina1Page() {
  return (
    <main>
      <Title>Eventos disponíveis</Title>
      <div className="mt-8 sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4">
 
      </div>
    </main>
  );
}
