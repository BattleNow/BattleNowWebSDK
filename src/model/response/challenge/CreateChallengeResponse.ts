export interface Payload {
  id: number;
  time: Date;
  live_url: string;
  title: string;
  content: string;
  type: number;
}

export interface CreateChallengeResponse {
  result: string;
  payload: Payload;
}
