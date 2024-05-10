"use client"

import { FormContainer, PrimaryInput, Button } from "./styles";
import { SearchIcon } from "../_icons/search-icon";
import { useForm } from "react-hook-form";
import { useFilter } from "@/hooks/useFilter";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchSchema } from "@/validators/search-validator";

type FormProps = z.infer<typeof SearchSchema>;

export function FormSearch(){
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormProps>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(SearchSchema),
      });
    const { setSearch, fetchData, search } = useFilter();

    async function handleGet (data: FormProps) {
      console.log('>>>>', data);
        setSearch(data.search);

        console.log('>>>>', search)

        await fetchData();

        reset();
    };

    return (
      <>
        {errors.search && console.log('>>>>>', errors.search.message)}
        <FormContainer onSubmit={handleSubmit(handleGet)}>
          <PrimaryInput {...register("search")} placeholder="Pesquise um Pokémon"/>
          <SearchIcon/>
          <Button type="submit">SEARCH</Button>
        </FormContainer>
      </>
    )
}