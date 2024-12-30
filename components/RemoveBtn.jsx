"use client";
import { useRouter } from "next/navigation";
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ id }) => {
  const router = useRouter()
  const handleDelete = async () => {
    // Show a confirmation prompt
    const confirmed = confirm("Are you sure you want to delete this topic?");

    if (confirmed) {
      try {
        const response = await fetch(
          `${process.env.url}/api/topics?id=${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          // Handle successful deletion (e.g., notify user, refresh list)
          console.log("Topic deleted successfully");
          router.refresh()
        } else {
          // Handle error response
          console.error("Failed to delete topic");
        }
      } catch (error) {
        console.error("Error occurred while deleting topic:", error);
      }
    }
  };

  return (
    <button className="text-red-400" onClick={handleDelete}>
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
