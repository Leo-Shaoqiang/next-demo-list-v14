// ServerComponent.js
import dayjs from 'dayjs';

export default function ServerPage() {
  const now = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return (
    <div>
      <p>Server Component: {now}</p>
      
    </div>
  );
}