export const defineActionConstants = (names: string[]): any => {
  return names.reduce((result: any, name: string) => {
    result[name] = name;
    return result;
  }, {});
};
