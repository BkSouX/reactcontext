import React from "react";
import { SelectCountry, Country } from "../select-country-library";
import { useFormAPI } from "../form-api";

export type { Country };

export const SelectCountryFormComponent = () => {
  const { onCountryChange } = useFormAPI();

  console.info("SelectCountryFormComponent render");

  return <SelectCountry onChange={onCountryChange} />;
};
