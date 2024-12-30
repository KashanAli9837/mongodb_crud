import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import useFetch from "@/hooks/useFetch";
import Error from "./Error";
import Loader from "./Loader";

const TopicsList = ({ url }) => {
  const { topics, setTopics, error, loading } = useFetch({
    url,
  });

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="text-lg font-semibold text-gray-700 mb-4">
          Getting Topics...
        </div>
        <Loader styles={"flex-none"} />
      </div>
    );
  }

  if (error) {
    return <Error error={error} />;
  }

  const handleDelete = (id) => {
    setTopics((prevTopics) => prevTopics.filter((topic) => topic._id !== id));
  };

  return (
    <div className="my-6 space-y-3">
      {topics.map(({ _id, title, description }) => (
        <div
          key={_id}
          className="p-4 border border-gray-300 bg-white rounded-lg shadow-sm transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md flex justify-between items-center gap-2 cursor-default"
        >
          <div className="flex-1">
            <h2 className="font-bold text-2xl text-blue-600">{title}</h2>
            <p className="text-gray-700 text-sm mt-1">{description}</p>
          </div>
          <div className="flex gap-2 items-center">
            <RemoveBtn
              url={`${url.slice(0, -1)}?id=${_id}`}
              onDelete={() => handleDelete(_id)}
            />
            <Link href={`/editTopic/${_id}`}>
              <HiPencilAlt
                size={24}
                className="text-blue-600 hover:text-blue-800 transition duration-300"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopicsList;