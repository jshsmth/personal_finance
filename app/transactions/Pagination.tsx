import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  return (
    <nav className="flex items-center justify-between px-4 py-8 sm:px-0 bg-white rounded-b-md shadow-sm">
      <div className="flex w-0 flex-1 ml-4">
        <button
          onClick={() => {}}
          className="inline-flex items-center justify-center px-4 py-2 border border-beige-500 hover:border-beige-500 hover:bg-grey-900 rounded-md hover:text-white text-grey-500 font-normal text-preset-4"
        >
          <div className="flex items-center justify-center gap-4">
            <CaretLeft weight="fill" size={16} />
            <span className="hidden md:block">Prev</span>
          </div>
        </button>
      </div>
      <div className="hidden md:flex gap-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => {}}
              aria-current={pageNumber === currentPage ? "page" : undefined}
              className={`inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-md ${
                pageNumber === currentPage
                  ? "text-white border bg-grey-900"
                  : "text-gray-900 border border-beige-500 hover:border-gray-900 hover:text-white hover:bg-grey-900"
              }`}
            >
              {pageNumber}
            </button>
          ),
        )}
      </div>
      <div className="flex w-0 flex-1 justify-end mr-4">
        <button
          onClick={() => {}}
          className="inline-flex items-center justify-center px-4 py-2 border border-beige-500 hover:border-beige-500 hover:bg-grey-900 rounded-md hover:text-white text-grey-500 font-normal text-preset-4"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="hidden md:block">Next</span>
            <CaretRight weight="fill" size={16} />
          </div>
        </button>
      </div>
    </nav>
  );
}
