"use client";
import Loader from "@/components/Loader";
import TopicsList from "@/components/TopicsList";
import useWebsiteUrl from "@/hooks/useWebsiteUrl";

const Home = () => {
  const websiteUrl = useWebsiteUrl();

  if (websiteUrl) {
    return <TopicsList url={`${websiteUrl}/api/topics/`} />;
  }

  return (
    <div className="flex flex-col justify-center items-center flex-1">
      <div className="text-lg font-semibold text-gray-700 mb-4">
        Getting URL...
      </div>
      <Loader styles={"flex-none"} />
    </div>
  );
};

export default Home;
