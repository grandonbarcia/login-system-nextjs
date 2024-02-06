import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { Form } from './Form';

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
    </main>
  );
}
