type PaginationState = {
  current: number;
  total: number;
};

export interface ApiResponse<T> {
  pagination?: PaginationState;
  success: boolean;
  data?: T;
  message?: string;
  next_cursor?: string | null;
  prev_cursor?: string | null;
}

interface IMetadata {
  totalItems: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

interface IPaginationResponse<T = any> {
  data: T[];
  metadata: IMetadata;
}
