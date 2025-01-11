import { IoCloseOutline } from "react-icons/io5";

const RenameModal = (onModalClose) => {
  return (
    <div className="p-4 border-[2px] border-slate-600 bg-slate-100 rounded-lg flex flex-col gap-5 shadow-2xl">
      <div>
        <div className="flex items-center justify-between">
          <p className="font-semibold font-poppins font-base text-slate-800">
            Rename Task:
          </p>
          <IoCloseOutline
            className="size-6 cursor-pointer bg-none rounded-md hover:bg-slate-300 hover:border-slate-800"
            onClick={onModalClose}
          />
        </div>
        <p className="mt-1 font-semibold font-inter text-sm text-slate-500 break-words">
          Enter new name and click on submit to confirm:
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="mb-1 font-inter font-medium text-slate-600">From:</p>
          <input
            type="text"
            value="name"
            readOnly
            className="p-2 border rounded-md outline-none text-slate-600"
          />
        </div>
        <div>
          <p className="mb-1 text-slate-600 font-inter font-medium ">To:</p>
          <input
            type="text"
            value=""
            placeholder="updated name"
            className="p-2 border rounded-md outline-slate-400"
            autoFocus
          />
        </div>
      </div>
      <input
        type="submit"
        className="w-full py-2 text-white font-medium font-poppins rounded-md bg-slate-700 hover:bg-slate-800"
      />
    </div>
  );
};

export default RenameModal;
