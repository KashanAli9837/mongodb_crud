"use client";
import useWebsiteUrl from "@/hooks/useWebsiteUrl";
import AddTopic from "@/components/AddTopic";
import Loader from "@/components/Loader";

const Page = () => {
  const websiteUrl = useWebsiteUrl();

  if (websiteUrl) {
    return <AddTopic url={`${websiteUrl}/api/topics/`} />;
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

export default Page;
