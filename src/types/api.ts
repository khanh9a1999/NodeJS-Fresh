export type ApiSuccess<T> = {
  success: true;
  message: string;
  data?: T;
};

export type ApiValidationError = {
  path: string;
  message: string;
};

export type ApiError = {
  success: false;
  message: string;
  errors?: ApiValidationError[];
};
