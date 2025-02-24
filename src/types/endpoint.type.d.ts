type EndpointGroup = {
  prefix: string;
  endpoints: { [key: string]: string };
};

type FlattenEndpoints<T extends { [key: string]: EndpointGroup }> = {
  [Group in keyof T]: {
    [Endpoint in keyof T[Group]['endpoints']]: string;
  };
}[keyof T];
