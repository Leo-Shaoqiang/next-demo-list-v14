import dayjs from 'dayjs';

export default function ClientComponent() {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return (
    <div>
      <p>Client Component: {now}</p>
    </div>
  );
}