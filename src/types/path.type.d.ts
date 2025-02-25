type PathGroupType = {
  name: string;
  path: string;
  code: string;
  children: PathGroupType[];
};

type PathItemType = Omit<PathGroupType, 'children'>;
