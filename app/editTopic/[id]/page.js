"use client";

import useWebsiteUrl from "@/hooks/useWebsiteUrl";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import EditTopic from "@/components/EditTopic";

const id = 5;
const page = ({ params }) => {
  const [id, setId] = useState(null);
  const websiteUrl = useWebsiteUrl();

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const resolvedParams = await params;
        if (resolvedParams && resolvedParams.id) {
          setId(() => resolvedParams.id);
        }
      } catch (err) {
        console.error("Error resolving params:", err);
      }
    };

    fetchParams();
  }, [params]);

  if (id && websiteUrl) {
    return <EditTopic url={`${websiteUrl}/api/topics/${id}`} />
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

export default page;
