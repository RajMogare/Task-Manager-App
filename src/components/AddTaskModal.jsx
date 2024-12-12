import React from "react";

const AddTaskModal = ({ addTask, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-[500px]">
        <h2 className="text-2xl mb-4">Add New Task</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            const title = form.title.value;
            const description = form.description.value;
            const status = form.status.value;
            addTask({ title, description, status });
            form.reset();
            onClose();
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="border rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Task Description"
            className="border rounded px-4 py-2"
            required
          />
          <select
            name="status"
            className="border rounded px-4 py-2"
            defaultValue="To Do"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 rounded-lg text-white"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
