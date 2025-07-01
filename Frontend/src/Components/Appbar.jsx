

export function Appbar() {
    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4 text-xl text-white font-medium drop-shadow-sm">
            Easy-Pay
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4 text-white font-medium drop-shadow-sm">
                Hello
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    U
                </div>
            </div>
        </div>
    </div>
}

// User Component inside same file
function User ({ firstName, lastName }) {
  return (
    <div className="flex items-center justify-between border rounded-md p-3 mb-2 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-sm">
          {firstName[0]}
        </div>
        <div className="text-sm font-medium">
          {firstName} {lastName}
        </div>
      </div>
      <button className="bg-gray-700 text-white text-sm px-4 py-1 rounded-md hover:bg-gray-800">
        Send Money
      </button>
    </div>
  );
};




