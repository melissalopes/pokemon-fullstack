import { Provider } from "@/client-provider";
import { Table } from "@/components/table/table";

export default function Home() {
  return (
    <Provider>
      <main>
        <Table/>
      </main>
    </Provider>
  );
}
