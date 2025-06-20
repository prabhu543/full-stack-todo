"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createTodo } from "@/serverActions/create";
import { useRef } from "react";

export default function DialogDemo() {
  const formRef = useRef<HTMLFormElement>(null);

  // Optional: Reset form on submit
  async function handleSubmit(formData: FormData) {
    await createTodo(formData);
    formRef.current?.reset();
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-3">
      <form
        ref={formRef}
        action={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6"
      >
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Create New Todo</h2>
          <p className="text-gray-500 mb-4">Add a task you want to accomplish.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="e.g. Do Homework"
            required
            className="focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="outline"
            type="button"
            onClick={() => formRef.current?.reset()}
          >
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </div>
  );
}
