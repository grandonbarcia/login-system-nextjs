import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Link from 'next/link';
import { prisma } from '../../../prisma/client';

export function Form() {
  async function addUser(formData: FormData) {
    'use server';
    const content = {
      email: formData.get('email'),
      firstName: formData.get('fName'),
      lastName: formData.get('lName'),
      password: formData.get('password'),
    };
    await prisma.user.create({
      data: {
        email: formData.get('email') as string,
        firstName: formData.get('fName') as string,
        lastName: formData.get('lName') as string,
        password: formData.get('password') as string,
      },
    });
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Sign Up </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <form action={addUser}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">First Name</Label>
              <Input id="fName" name="fName" placeholder="Brandon Garcia" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Last Name</Label>
              <Input id="lName" name="lName" placeholder="Brandon Garcia" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="example@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="re-password">ReEnter-Password</Label>
              <Input id="re-password" name="re-password" type="password" />
            </div>
          </div>
          <Button type={'submit'}>Sign Up</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
