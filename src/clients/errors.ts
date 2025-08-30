export interface RiotApiErrorData {
  status: {
    message: string;
    status_code: number;
  };
}

export class RiotApiError extends Error {
  constructor(
    public status: number,
    public data: RiotApiErrorData,
    message?: string,
  ) {
    super(message || data.status.message);
    this.name = 'RiotApiError';
  }
}
