import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = ({ topics }) => {
  return (
    <div className="my-6 space-y-3">
      {topics.map(({ _id, title, description }) => (
        <div
          key={_id} // Add a key prop for each item in the list
          className="p-4 border border-gray-300 bg-white rounded-lg shadow-sm transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md flex justify-between items-center gap-2 cursor-default"
        >
          <div className="flex-1">
            <h2 className="font-bold text-2xl text-blue-600">{title}</h2>
            <p className="text-gray-700 text-sm mt-1">{description}</p>
          </div>
          <div className="flex gap-2 items-center">
            <RemoveBtn id={_id} />
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