import EditTopicForm from "@/components/EditTopicForm";

const EditTopic = async ({ params }) => {
  const id = (await params).id;
  const data = await fetch(`http://localhost:3000/api/topics/${id}`, {
    cache: "no-store",
  });

  // Check if the response is okay
  if (!data.ok) {
    return (
      <div className="flex justify-center items-center flex-1">
        <p className="text-lg font-semibold text-red-600">
          Error fetching topic!
        </p>
      </div>
    );
  }

  const topic = await data.json();
  return <EditTopicForm topic={topic} />;
};

export default EditTopic;
