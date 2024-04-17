export interface IAboutResponse {
  data: Array<{
    head_text: string;
    content: string;
    title: string;
    image: string;
    id: string;
  }>;
}
