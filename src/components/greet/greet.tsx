export const Greet = (prop: { name?: string }) => {
  const { name } = prop;
  return <div>Yoo {name}</div>;
};
