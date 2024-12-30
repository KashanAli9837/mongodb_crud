"use client";

import EditTopicForm from "./EditTopicForm"
import useFetch from "@/hooks/useFetch";
import Loader from "./Loader";
import Error from "./Error";

const EditTopic = ({ url }) => {
  const { topics, error, loading } = useFetch({
    url,
  });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="text-lg font-semibold text-gray-700 mb-4">
          Getting Topic...
        </div>
        <Loader styles={"flex-none"} />
      </div>
    );
  }

  if (error) {
    return <Error error={error} />;
  }

  return <EditTopicForm url={url} topic={topics[0]} />
};

export default EditTopic;
