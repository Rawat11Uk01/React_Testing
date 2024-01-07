export const Greet = (prop: { name?: string }) => {
  const { name } = prop;
  return <div>Yo {name}</div>;
};
