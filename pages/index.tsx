import { CompCard, Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <span className="text-2xl font-semibold">Latest Comparisons</span>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <CompCard />
          <CompCard />
          <CompCard />
          <CompCard />
          <CompCard />
          <CompCard />
        </div>
      </div>
    </Layout>
  );
}
