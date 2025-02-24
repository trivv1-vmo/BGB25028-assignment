interface LooseObject {
  [key: string]: any;
}

interface LooseStringObject {
  [key: string]: string;
}

interface Meta {
  currentPage: number;
  totalPages: number;
  totalRecords: number;
}
