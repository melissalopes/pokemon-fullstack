"use client";

import { FormContainer, PrimaryInput, Button } from "./styles";
import { SearchIcon } from "../_icons/search-icon";
import { useForm } from "react-hook-form";
import { useFilter } from "@/hooks/useFilter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchSchema } from "@/validators/search-validator";
import "react-toastify/dist/ReactToastify.min.css";
import { Toast, showToast } from "./../../ui-lib/toast";

type FormProps = z.infer<typeof SearchSchema>;

export function FormSearch() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(SearchSchema),
  });
  const { setSearch } = useFilter();

  function handleError(message: string | undefined) {
    showToast({ type: "error", message });
  }

  async function handleGet(data: FormProps) {
    setSearch(data.search.toLowerCase());

    reset();
  }

  return (
    <>
      <Toast />
      {errors.search && handleError(errors.search.message)}
      <FormContainer onSubmit={handleSubmit(handleGet)}>
        <PrimaryInput
          {...register("search")}
          placeholder="Pesquise um Pokémon"
        />
        <SearchIcon />
        <Button type="submit">SEARCH</Button>
      </FormContainer>
    </>
  );
}
