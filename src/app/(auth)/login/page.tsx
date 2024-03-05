import { FormSchema } from "@/lib/types";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Form, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");

  const form = useForm<Zod.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData
  ) => {
    const { error } = await actionLoginUser(formData);
    if (error) {
      form.reset();
      setSubmitError(error.message);
    }
    router.replace('/dashboard');
  };

  return <Form {...form}></Form>;
};

export default LoginPage;
