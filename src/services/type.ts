export interface IAboutResponse {
  data: Array<{
    head_text: string;
    content: string;
    title: string;
    image: string;
    id: string;
  }>;
}

export interface ICategoryResponse {
  data: Array<{
    title: string;
    icon: string;
    id: string;
  }>;
}
