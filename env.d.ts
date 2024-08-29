declare namespace NodeJS {
    interface ProcessEnv {
      readonly PORT: string | number;
      readonly DB: string;
      readonly Node_ENV:string;
      readonly BASE_URL:string;

    }
  }