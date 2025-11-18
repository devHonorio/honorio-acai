interface KeyValueProps {
  keyName: string;
  value: string | number;
}

export const KeyValue = ({ keyName, value }: KeyValueProps) => {
  return (
    <div className="flex py-4 justify-between gap-5 px-2">
      <div className="font-bold">{keyName}</div>
      <div>{value}</div>
    </div>
  );
};
