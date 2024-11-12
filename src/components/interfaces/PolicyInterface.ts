export interface PolicyData {
  userId: string;
  title: string;

  category: string;
  demand: string;
  associatedPolicy: string;
  description: string;
  imageUrl: string;
  startTime?: Date;
  endTime?: Date;
}

export interface Comment {}

export interface GetPolicyData {
  _id: string;
  userId: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  startTime: string;
  endTime: string;
  comments: Comment[]; // Type this as needed for your comments structure
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PaginationInfo {
  total: number;
  page: number | null;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
}

export interface GetPolicyResponse {
  success: boolean;
  data: GetPolicyData[];
  pagination: PaginationInfo;
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
  category?: string;
}
