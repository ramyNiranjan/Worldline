import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function PaginationComponent({ currentPage, totalPages, onPageChange }: Props) {
  const startPage = 1;

  return (
    <Pagination className="">
      <PaginationContent className="flex flex-wrap justify-center space-x-2 md:space-x-4 my-4">
        <PaginationItem>
          <PaginationPrevious
            className={`cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={(e) => {
              if (currentPage === 1) {
                e.preventDefault();
                return;
              }
              onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = startPage + index;
          return (
            <PaginationItem key={pageNum} className="mx-1">
              <PaginationLink isActive={currentPage === pageNum} onClick={() => onPageChange(pageNum)} className="">
                {pageNum}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationNext
            className={`cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={(e) => {
              if (currentPage === totalPages) {
                e.preventDefault();
                return;
              }
              onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationComponent;
