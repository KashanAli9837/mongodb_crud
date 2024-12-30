import TopicsList from "@/components/TopicsList";

const Home = async () => {
  const data = await fetch(`${process.env.url}/api/topics`, {
    cache: "no-store",
  });

  // Check if the response is okay
  if (!data.ok) {
    return (
      <div className="flex justify-center items-center flex-1">
        <p className="text-lg font-semibold text-red-600">
          Error fetching topics!
        </p>
      </div>
    );
  }

  const { topics } = await data.json();
  return <TopicsList topics={topics} />;
};

export default Home;
