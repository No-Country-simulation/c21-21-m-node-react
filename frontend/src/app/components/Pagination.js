import { Pagination } from '@mui/material';

const PaginationComponent = ({ count, page, onPageChange }) => {
    return (
        <Pagination
            count={count}
            page={page}
            onChange={onPageChange}
            variant="outlined"
            shape="rounded"
            className="flex justify-center mt-4"
        />
    );
};

export default PaginationComponent;
