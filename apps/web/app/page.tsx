import Clientside from "./Clientside";
import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.test.query({
    name: "Hello World! from Serverside",
  });
  return (
    <div>
      <p>Serverside: {response}</p>
      <Clientside />
    </div>
  );
}
