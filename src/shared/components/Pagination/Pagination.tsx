import classNames from 'classnames';
import { Button } from '@/shared/components/Button';
import s from './Pagination.module.scss';

interface IPaginationProps {
  pages: (number | null)[];
  activePage: number;
  onChangePage: (page: number) => VoidFunction;
}

export const Pagination = ({ pages, activePage, onChangePage }: IPaginationProps) => {
  return (
    <div className={s.pagination}>
      {pages.map((page, idx) => {
        return page !== null ? (
          <Button
            className={classNames(s.pageBtn, { [s.active]: activePage === page + 1 })}
            key={idx}
            onClick={onChangePage(page + 1)}
          >
            {page + 1}
          </Button>
        ) : (
          <span key={idx}>...</span>
        );
      })}
    </div>
  );
};
