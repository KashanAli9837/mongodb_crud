import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = ({ url, onDelete }) => {

  const handleDelete = async () => {
    // Show a confirmation prompt
    const confirmed = confirm("Are you sure you want to delete this topic?");

    if (confirmed) {
      try {
        const response = await fetch(url, {
          method: "DELETE",
        });

        if (response.ok) {
          // Call the onDelete callback to update the parent state
          onDelete();
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
