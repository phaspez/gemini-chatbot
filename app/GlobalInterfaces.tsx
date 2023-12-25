export interface ChatBot {
  responses: ResponseData[];
  addNewResponse(response: string): void;
}

export interface ResponseData {
  dialogue: string;
  timestamp: string;
}
